export default function Home() {
  return (
    <div style={{ display: 'grid', gap: 48 }}>
      <section style={{ textAlign: 'center', maxWidth: 880, margin: '0 auto' }}>
        <div aria-hidden style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 10px', borderRadius: 9999, background: 'rgba(255,212,0,0.06)', border: '1px solid rgba(255,212,0,0.06)' }}>
          <div style={{ width: 8, height: 8, borderRadius: 9999, background: '#ffd400', boxShadow: '0 6px 20px rgba(255,212,0,0.06)' }} />
          MVP In Progress
        </div>
        <h1 style={{ marginTop: 18, marginBottom: 12 }}>Turn Any Syllabus Into A Living Calendar</h1>
        <p className="lead" style={{ margin: '0 auto', maxWidth: 720, color: 'var(--muted)' }}>Upload a PDF, DOCX, or raw text. We parse dates, classify readings, assignments & exams, then let you review and sync. Built for law students who want structure without manual data entry.</p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 20 }}>
          <button aria-label="Upload syllabus" tabIndex={0} className="button-base btn-primary" disabled style={{ outline: 'none' }}>Upload (Soon)</button>
          <button aria-label="View calendar" tabIndex={0} className="button-base btn-outline" disabled style={{ outline: 'none' }}>View Calendar</button>
        </div>
      </section>

      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 18 }}>
        {[{ title: 'Smart Extraction', desc: 'Regex + LLM hybrid parsing to reduce hallucinations and catch edge-case date formats.' }, { title: 'Confidence Layer', desc: 'Flag uncertain rows for manual review so you stay in control.' }, { title: 'Calendars & Export', desc: 'Month + agenda views plus ICS export (Google sync planned).' }].map(f => (
          <div className="card-surface" style={{ padding: 18 }} key={f.title}>
            <div style={{ width: 48, height: 48, borderRadius: 10, background: 'linear-gradient(135deg,#ffd400,#ffb800)', boxShadow: '0 8px 30px rgba(255,212,0,0.06)' }} />
            <div style={{ height: 8 }} />
            <div className="title">{f.title}</div>
            <p style={{ marginTop: 8, color: '#e9e5cf' }}>{f.desc}</p>
          </div>
        ))}
      </section>

      <section style={{ maxWidth: 900, margin: '0 auto' }}>
        <h2>Roadmap</h2>
        <ol style={{ marginTop: 14, display: 'grid', gap: 10 }}>
          {['Parser Core', 'LLM Structuring', 'Review UI', 'Calendar Views', 'Export & Sync'].map((s, i) => (
            <li key={s} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 12, background: 'linear-gradient(180deg,rgba(255,212,0,0.02),transparent 6%),var(--panel)', borderRadius: 10, border: '1px solid var(--border)' }}>
              <div>
                <div style={{ fontWeight: 700 }}>{i + 1}. {s}</div>
                <div style={{ color: 'var(--muted)', fontSize: 13, marginTop: 4 }}>Brief description of the milestone</div>
              </div>
              <div style={{ fontSize: 12, color: 'var(--muted)', fontWeight: 700 }}>{i < 2 ? 'In Progress' : 'Queued'}</div>
            </li>
          ))}
        </ol>
      </section>

      <section style={{ textAlign: 'center' }}>
        <h2>Focused on Accuracy & Usability</h2>
        <p style={{ color: 'var(--muted)', maxWidth: 720, margin: '0 auto' }}>Designed to minimize cleanup time and surface uncertainty instead of hiding it.</p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 18 }}>
          <button aria-label="Upload syllabus" className="button-base btn-primary" disabled>Upload Syllabus</button>
          <button aria-label="Join waitlist" className="button-base btn-outline" disabled>Join Waitlist</button>
        </div>
      </section>
    </div>
  );
}
