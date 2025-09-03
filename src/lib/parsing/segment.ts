import { lineHasDate } from './datePatterns';

export interface SegmentedLine {
  index: number;
  text: string;
  hasDate: boolean;
}

export function segmentRawText(raw: string): SegmentedLine[] {
  return raw
    .split(/\r?\n/)
    .map(l => l.trim())
    .filter(l => l.length > 0)
    .map((text, i) => ({ index: i, text, hasDate: lineHasDate(text) }));
}

export const __segmentModule = true;
