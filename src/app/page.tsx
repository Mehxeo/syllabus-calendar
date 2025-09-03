export default function Home() {
  return (
    <div className="space-y-24">
      {/* Hero */}
      <section className="text-center max-w-3xl mx-auto space-y-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/50 backdrop-blur-sm text-[11px] font-medium tracking-wide uppercase shadow-sm">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          MVP In Progress
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05] gradient-text">
          Turn Any Syllabus Into A Living Calendar
        </h1>
        <p className="text-neutral-600 dark:text-neutral-300 text-sm md:text-base leading-relaxed">
          Upload a PDF, DOCX, or raw text. We parse dates, classify readings, assignments & exams, then let you review and sync.
          Built for law students who want structure without manual data entry.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button disabled className="btn-primary px-6 py-3 text-sm shadow-elegant">Upload Syllabus (Soon)</button>
          <button disabled className="btn-outline px-6 py-3 text-sm">View Calendar</button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="grid gap-6 md:gap-8 md:grid-cols-3">
        {[
          { title: 'Smart Extraction', desc: 'Regex + LLM hybrid parsing to reduce hallucinations and catch edge-case date formats.' },
          { title: 'Confidence Layer', desc: 'Flag uncertain rows for manual review so you stay in control.' },
          { title: 'Calendars & Export', desc: 'Month + agenda views plus ICS export (Google sync planned).' },
          { title: 'Document Traceability', desc: 'Every event links back to its original syllabus line.' },
          { title: 'Secure & Minimal', desc: 'Only essential data stored; events can be purged per document.' },
          { title: 'Extensible Design', desc: 'Future: multi-syllabus merge, conflict detection, workload heatmaps.' }
        ].map(f => (
          <div key={f.title} className="card-surface p-5 flex flex-col gap-3 hover:shadow-elegant transition-shadow">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 opacity-90 shadow" />
            <h3 className="font-medium text-sm tracking-tight">{f.title}</h3>
            <p className="text-xs leading-relaxed text-neutral-600 dark:text-neutral-400">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Roadmap */}
      <section className="space-y-8">
        <div className="space-y-2 text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold tracking-tight">Roadmap</h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">Planned milestones toward a polished, student-ready release.</p>
        </div>
        <ol className="relative border-s border-neutral-200 dark:border-neutral-800 max-w-2xl mx-auto">
          {[
            { label: 'Parser Core', detail: 'Upload + text extraction + segmentation' },
            { label: 'LLM Structuring', detail: 'JSON normalization & validation' },
            { label: 'Review UI', detail: 'Inline edits, confidence filters' },
            { label: 'Calendar Views', detail: 'Month & agenda plus quick edits' },
            { label: 'Export & Sync', detail: 'ICS download & Google Calendar push' },
            { label: 'Enhancements', detail: 'Week inference, workload charts' }
          ].map((step, i) => (
            <li key={step.label} className="pl-6 py-5 group">
              <div className="absolute left-0 top-5 -ml-[7px] h-3.5 w-3.5 rounded-full border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 group-first:shadow" />
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium tracking-tight">{i + 1}. {step.label}</span>
                <span className="text-[10px] px-2 py-1 rounded-full bg-neutral-900/5 dark:bg-neutral-50/10 border border-neutral-900/10 dark:border-neutral-50/10 font-medium">
                  {i < 2 ? 'In Progress' : 'Queued'}
                </span>
              </div>
              <p className="text-xs mt-1 text-neutral-600 dark:text-neutral-400 leading-relaxed">{step.detail}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Footer CTA */}
      <section className="text-center space-y-6 max-w-xl mx-auto">
        <h2 className="text-2xl font-semibold tracking-tight">Focused on Accuracy & Usability</h2>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">Designed to minimize cleanup time and surface uncertainty instead of hiding it. Built to extend into other academic planning tools.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button disabled className="btn-primary px-6 py-3 text-sm">Upload Syllabus</button>
          <button disabled className="btn-outline px-6 py-3 text-sm">Join Waitlist</button>
        </div>
      </section>
    </div>
  );
}
