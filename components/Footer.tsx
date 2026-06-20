import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="px-5 md:px-[5vw] py-8 md:py-10 border-t"
      style={{ background: "var(--paper-warm)", borderColor: "var(--border)" }}
    >
      {/* Top row */}
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 mb-6">
        <Link href="/" className="flex items-center gap-2.5 font-bold text-sm no-underline" style={{ color: "var(--ink)" }}>
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold text-white italic"
            style={{ background: "var(--accent)", fontFamily: "'Instrument Serif', serif" }}
          >
            Lf
          </div>
          LinkedIn Formatter
        </Link>

        {/* Link groups */}
        <div className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-3">
          <div className="flex flex-col gap-2 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider" style={{ color: "var(--ink-soft)" }}>Product</span>
            <Link href="/formatter" className="text-sm no-underline hover:underline" style={{ color: "var(--ink-mid)" }}>Web Formatter</Link>
            <Link href="/#features"  className="text-sm no-underline hover:underline" style={{ color: "var(--ink-mid)" }}>Features</Link>
            <Link href="/#downloads" className="text-sm no-underline hover:underline" style={{ color: "var(--ink-mid)" }}>Downloads</Link>
          </div>
          <div className="flex flex-col gap-2 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider" style={{ color: "var(--ink-soft)" }}>Browsers</span>
            <a href="https://chrome.google.com/webstore"       target="_blank" rel="noopener noreferrer" className="text-sm no-underline hover:underline" style={{ color: "var(--ink-mid)" }}>Chrome</a>
            <a href="https://addons.mozilla.org"                target="_blank" rel="noopener noreferrer" className="text-sm no-underline hover:underline" style={{ color: "var(--ink-mid)" }}>Firefox</a>
            <a href="https://microsoftedge.microsoft.com/addons" target="_blank" rel="noopener noreferrer" className="text-sm no-underline hover:underline" style={{ color: "var(--ink-mid)" }}>Edge</a>
          </div>
          <div className="flex flex-col gap-2 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider" style={{ color: "var(--ink-soft)" }}>Company</span>
            <a href="legal/privacy-policy" className="text-sm no-underline hover:underline" style={{ color: "var(--ink-mid)" }}>Privacy Policy</a>
            <a href="/legal/terms-of-service" className="text-sm no-underline hover:underline" style={{ color: "var(--ink-mid)" }}>Terms of Service</a>
            <a href="/legal/disclaimer" className="text-sm no-underline hover:underline" style={{ color: "var(--ink-mid)" }}>Disclaimer</a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px mb-5" style={{ background: "var(--border)" }} />

      {/* Bottom row */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs" style={{ color: "var(--ink-soft)" }}>
          © 2026 LinkedIn Text Formatter. Not affiliated with LinkedIn Corporation.
        </p>
        <div className="flex items-center gap-2">
          {["Chrome","Firefox","Edge","Brave","Safari"].map((b) => (
            <span key={b} className="text-xs px-2 py-0.5 rounded" style={{ background: "var(--border)", color: "var(--ink-soft)" }}>{b}</span>
          ))}
        </div>
      </div>
    </footer>
  );
}
