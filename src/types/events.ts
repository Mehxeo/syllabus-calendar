import { z } from 'zod';

export const eventTypeEnum = z.enum(['ASSIGNMENT','READING','EXAM','OTHER']);

export const structuredEventSchema = z.object({
  title: z.string().min(1),
  type: eventTypeEnum,
  startDate: z.string().describe('ISO 8601 date or datetime'),
  endDate: z.string().optional(),
  description: z.string().optional(),
  rawLine: z.string().optional(),
  confidence: z.number().min(0).max(1).optional()
});

export const structuredEventsResponseSchema = z.object({
  events: z.array(structuredEventSchema),
  warnings: z.array(z.string()).optional()
});

export type StructuredEvent = z.infer<typeof structuredEventSchema>;
