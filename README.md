# Syllabus → Calendar (Lawbandit Challenge)

Transform uploaded law school syllabi (PDF/DOCX/text) into structured, editable calendar events (assignments, readings, exams) with export + ICS generation and (optional) Google Calendar sync.

## Status
MVP Scaffold in progress.

## Stack
- Next.js (App Router, TypeScript)
- Prisma + PostgreSQL (Neon or local)
- NextAuth (Email/password placeholder; can swap to magic link)
- OpenAI (LLM structuring of syllabus lines to JSON)
- TailwindCSS + (planned) shadcn/ui
- date-fns, zod, ics

## High-Level Flow
1. User uploads syllabus (PDF / DOCX / paste text)
2. Text extraction layer (pdf-parse / mammoth)
3. Pre-parse regex + heuristic date + line segmentation
4. LLM normalization -> JSON events (schema validated via zod)
5. Review UI: filter low-confidence, edit inline
6. Persist events -> calendar views (Month + List)
7. Export: ICS file (download) & future Google Calendar push

## Data Model (Prisma)
See `prisma/schema.prisma` for `User`, `SourceDocument`, `Event`.

## Local Setup
1. Clone & install deps:
   ```bash
   npm install
   ```
2. Create `.env`:
   ```bash
   DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DB?sslmode=require"
   OPENAI_API_KEY="sk-..."
   NEXTAUTH_SECRET="generate-a-long-random-string"
   ```
3. Generate client & push schema (dev only):
   ```bash
   npx prisma generate
   npx prisma migrate dev --name init
   ```
4. Run dev server:
   ```bash
   npm run dev
   ```

## Parsing Approach (Planned)
- Regex date capture patterns: MM/DD, M/D, Month D, D Month, Week X anchor mapping
- Classification w/ few-shot prompt -> event type, title, date(s)
- Confidence = proportion of fields matching deterministic regex + model logprobs (if available) + fallback heuristic

## Roadmap
- [ ] Auth scaffold
- [ ] Upload endpoint (Route Handler)
- [ ] PDF & DOCX extraction service
- [ ] Line segmentation + pre-parse
- [ ] LLM structuring endpoint
- [ ] Event review UI (editable table + calendar preview)
- [ ] Persist + calendar views
- [ ] ICS export
- [ ] Confidence scoring + filter
- [ ] Google Calendar sync (optional)
- [ ] Tests for parser (deterministic fixtures)
- [ ] Deployment (Vercel + Neon)

## Contributing
Internal challenge project. PRs welcome for clarity.

## License
MIT (tentative) – can adjust per requirements.
