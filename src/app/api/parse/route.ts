import { NextRequest, NextResponse } from 'next/server';
import { segmentRawText } from '@/lib/parsing/segment';
import { structuredEventsResponseSchema, eventTypeEnum } from '@/types/events';
import { OpenAI } from 'openai';
import type { StructuredEvent } from '@/types/events';

const systemPrompt = `You convert syllabus lines into JSON events.
Return ONLY valid JSON matching this TypeScript type:
{ events: { title: string; type: 'ASSIGNMENT'|'READING'|'EXAM'|'OTHER'; startDate: string; endDate?: string; description?: string; rawLine?: string; confidence?: number; }[], warnings?: string[] }
Rules:
- Do not hallucinate dates.
- If no date present, either infer from clear context ("Midterm Exam – Oct 14") or skip.
- ISO date format: YYYY-MM-DD (no time unless explicitly provided).
- confidence: 0.0–1.0 (lower if uncertain about date or classification).
- Keep titles concise.
`;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { text } = body as { text?: string };
    if (!text || text.length < 10) {
      return NextResponse.json({ error: 'Text too short' }, { status: 400 });
    }

    const segments = segmentRawText(text).filter((s) => s.hasDate);
    if (segments.length === 0) {
      return NextResponse.json({ events: [], warnings: ['No dated lines detected'] });
    }

    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    const userPrompt = segments.map((s) => `LINE ${s.index}: ${s.text}`).join('\n');

    const completion = await openai.responses.create({
      model: 'gpt-4.1-mini',
      input: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userPrompt }
      ],
      temperature: 0.2,
    });

    // Extract text segments from completion.output
    let raw = '';
    for (const item of completion.output ?? []) {
      if ('content' in item) {
        const contentField = (item as unknown as Record<string, unknown>).content;
        if (Array.isArray(contentField)) {
          for (const p of contentField) {
            if (p && typeof p === 'object' && 'text' in p && typeof (p as Record<string, unknown>).text === 'string') {
              raw += (p as { text: string }).text;
            }
          }
        }
      }
    }
    if (!raw && typeof (completion as unknown as { output_text?: string }).output_text === 'string') {
      raw = (completion as unknown as { output_text: string }).output_text;
    }

    // Attempt to find JSON substring
    const jsonMatch = raw.match(/\{[\s\S]*\}$/);
    if (!jsonMatch) {
      return NextResponse.json({ error: 'Model did not return JSON', raw }, { status: 502 });
    }

    const parsed = JSON.parse(jsonMatch[0]);
    const validated = structuredEventsResponseSchema.parse(parsed);

    // Post validation: clamp confidence
    validated.events = validated.events.map((e: StructuredEvent): StructuredEvent => ({
      ...e,
      confidence: typeof e.confidence === 'number' ? Math.min(1, Math.max(0, e.confidence)) : undefined,
      type: eventTypeEnum.options.includes(e.type) ? e.type : 'OTHER'
    }));

    return NextResponse.json(validated);
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
