// Basic date regex utilities and normalization helpers
export const datePatterns: RegExp[] = [
  /\b(\d{1,2})[\/](\d{1,2})(?:[\/](\d{2,4}))?\b/, // M/D or M/D/YY(YY)
  /\b(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Sept|Oct|Nov|Dec)[a-z]*\s+\d{1,2}\b/i,
  /\b\d{1,2}\s+(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Sept|Oct|Nov|Dec)[a-z]*\b/i,
];

export function lineHasDate(line: string): boolean {
  return datePatterns.some(r => r.test(line));
}

export function extractCandidateDates(line: string): string[] {
  const out: string[] = [];
  for (const r of datePatterns) {
    const m = line.match(r);
    if (m) out.push(m[0]);
  }
  return out;
}
