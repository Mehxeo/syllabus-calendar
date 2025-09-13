import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head />
      <body>
        <div
          style={{
            position: "fixed",
            inset: 0,
            opacity: 0.035,
            pointerEvents: "none",
            background:
              "radial-gradient(circle at 80% 20%, #ffd400 0%, transparent 22%), radial-gradient(circle at 20% 80%, #ffb800 0%, transparent 22%)",
          }}
        />
        <header
          className="header container"
          style={{ borderBottom: "1px solid rgba(255,212,0,0.06)" }}
        >
          <div className="logo">
            <div className="logo-mark" />
            <div>
              <div className="brand">Syllabus → Calendar</div>
              <div
                className="text-muted"
                style={{ fontSize: 12 }}
              >
                Lawbandit Challenge
              </div>
            </div>
          </div>
          <nav style={{ display: "flex", gap: 16, alignItems: "center" }}>
            <Link href="#" className="text-muted">
              Docs
            </Link>
            <Link href="#" className="text-muted">
              Support
            </Link>
            <button
              className="btn-primary"
              style={{ padding: "8px 12px" }}
            >
              Sign in
            </button>
          </nav>
        </header>

        <main style={{ paddingTop: 36, paddingBottom: 48 }} className="container">
          {children}
        </main>

        <footer
          style={{ borderTop: "1px solid rgba(255,212,0,0.06)" }}
          className="container"
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "18px 0",
              alignItems: "center",
            }}
          >
            <div style={{ color: "var(--text)" }}>
              © {new Date().getFullYear()} Lawbandit Demo
            </div>
            <div
              style={{ color: "var(--muted)", fontSize: 12 }}
            >
              Built with Next.js • Prisma • OpenAI
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
