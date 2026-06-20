"use client";
import Link from "next/link";

const BROWSERS = [
  {
    name: "Chrome",
    icon: (
      <svg viewBox="0 0 40 40" className="w-10 h-10 shrink-0">
        <circle cx="20" cy="20" r="20" fill="#4285F4"/>
        <circle cx="20" cy="20" r="8" fill="white"/>
        <circle cx="20" cy="20" r="5" fill="#4285F4"/>
        <path d="M20 12h18A20 20 0 0 0 2 12z" fill="#EA4335"/>
        <path d="M38 12L29 27A20 20 0 0 1 2 12z" fill="#FBBC04"/>
        <path d="M11 27L2 12A20 20 0 0 0 29 27z" fill="#34A853"/>
      </svg>
    ),
    color: "#4285F4",
    store: "Chrome Web Store",
    url: "https://chrome.google.com/webstore",
    available: true,
    badge: "4.9 ★  Most popular",
    note: "Also works in Brave & Opera",
  },
  {
    name: "Firefox",
    icon: (
      <svg viewBox="0 0 40 40" className="w-10 h-10 shrink-0">
        <circle cx="20" cy="20" r="20" fill="#FF6611"/>
        <circle cx="20" cy="20" r="10" fill="#FFD900"/>
        <circle cx="20" cy="20" r="5"  fill="#FF6611"/>
        <circle cx="20" cy="20" r="2.5" fill="#FFD900"/>
      </svg>
    ),
    color: "#FF6611",
    store: "Firefox Add-ons",
    url: "https://addons.mozilla.org",
    available: true,
    badge: "New",
    note: "Mozilla Add-ons store",
  },
  {
    name: "Edge",
    icon: (
      <svg viewBox="0 0 40 40" className="w-10 h-10 shrink-0">
        <circle cx="20" cy="20" r="20" fill="#0078D4"/>
        <path d="M12 28c2-7 9-12 16-9-2 5-7 9-13 7 4 3 10 3 14 0C27 32 21 36 16 34c-3-1-5-4-4-6z" fill="white"/>
      </svg>
    ),
    color: "#0078D4",
    store: "Edge Add-ons",
    url: "https://microsoftedge.microsoft.com/addons",
    available: true,
    badge: "New",
    note: "Microsoft Edge Add-ons store",
  },
  {
    name: "Brave",
    icon: (
      <svg viewBox="0 0 40 40" className="w-10 h-10 shrink-0">
        <circle cx="20" cy="20" r="20" fill="#FB542B"/>
        <path d="M20 7l4 8h6l-5 6 2 8-7-4-7 4 2-8-5-6h6z" fill="white"/>
      </svg>
    ),
    color: "#FB542B",
    store: "Chrome Web Store",
    url: "https://chrome.google.com/webstore",
    available: true,
    badge: "Use Chrome store",
    note: "Brave is Chromium-based",
  },
  {
    name: "Safari",
    icon: (
      <svg viewBox="0 0 40 40" className="w-10 h-10 shrink-0">
        <circle cx="20" cy="20" r="20" fill="#1C9BE0"/>
        <circle cx="20" cy="20" r="14" fill="white" stroke="#e8e8e8" strokeWidth="0.5"/>
        <line x1="20" y1="6"  x2="20" y2="12" stroke="#1C9BE0" strokeWidth="2" strokeLinecap="round"/>
        <line x1="20" y1="28" x2="20" y2="34" stroke="#1C9BE0" strokeWidth="2" strokeLinecap="round"/>
        <line x1="6"  y1="20" x2="12" y2="20" stroke="#1C9BE0" strokeWidth="2" strokeLinecap="round"/>
        <line x1="28" y1="20" x2="34" y2="20" stroke="#1C9BE0" strokeWidth="2" strokeLinecap="round"/>
        <polygon points="20,13 23,25 20,22 17,25" fill="#FF3B30"/>
      </svg>
    ),
    color: "#1C9BE0",
    store: "Safari Extensions",
    url: "#",
    available: false,
    badge: "Coming soon",
    note: "Safari Web Extension in progress",
  },
];

export default function DownloadSection() {
  return (
    <section
      id="downloads"
      className="py-16 md:py-24 px-5 md:px-[5vw] border-t border-b"
      style={{ background: "var(--paper-warm)", borderColor: "var(--border)" }}
    >
      <div className="max-w-[1100px] mx-auto">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14 reveal">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "var(--accent)" }}>
            All browsers supported
          </p>
          <h2
            id="downloads-heading"
            className="text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight mb-4"
            style={{ fontFamily: "'Instrument Serif', serif", color: "var(--ink)" }}
          >
            Install on your{" "}
            <em className="italic" style={{ color: "var(--accent)" }}>favourite browser</em>
          </h2>
          <p className="text-base max-w-lg mx-auto leading-relaxed" style={{ color: "var(--ink-mid)" }}>
            One extension, every browser. Format LinkedIn posts from Chrome, Firefox, Edge, Brave, and Safari.
          </p>
        </div>

        {/* Browser cards — 2-col on mobile, 3-col on lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {BROWSERS.map((b) => (
            <div
              key={b.name}
              className="reveal rounded-2xl p-5 md:p-6 flex flex-col gap-4 transition-all hover:-translate-y-1"
              style={{
                background: "var(--paper-card)",
                border: "1px solid var(--border)",
                boxShadow: "0 2px 16px rgba(10,10,15,0.07)",
                opacity: b.available ? 1 : 0.65,
              }}
            >
              {/* Icon + badge row */}
              <div className="flex items-start justify-between gap-3">
                {b.icon}
                <span
                  className="text-xs font-bold px-2.5 py-1 rounded-full shrink-0 mt-0.5"
                  style={{
                    background: b.available ? "var(--green-light)" : "var(--paper-warm)",
                    color: b.available ? "var(--green)" : "var(--ink-soft)",
                    border: `1px solid ${b.available ? "rgba(26,138,80,0.2)" : "var(--border)"}`,
                    whiteSpace: "nowrap",
                  }}
                >
                  {b.badge}
                </span>
              </div>

              {/* Name + store */}
              <div>
                <div className="font-bold text-base md:text-lg mb-0.5" style={{ color: "var(--ink)" }}>{b.name}</div>
                <div className="text-xs" style={{ color: "var(--ink-soft)" }}>{b.note}</div>
              </div>

              {/* Install button */}
              {b.available ? (
                <a
                  href={b.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold text-white no-underline transition-all hover:opacity-85 active:scale-95"
                  style={{ background: b.color }}
                >
                  <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                  Install Free
                </a>
              ) : (
                <button
                  className="mt-auto flex items-center justify-center py-2.5 rounded-xl text-sm font-semibold border cursor-default"
                  style={{ color: "var(--ink-soft)", borderColor: "var(--border)", background: "var(--paper-warm)" }}
                >
                  Notify me when ready
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-xs mt-8" style={{ color: "var(--ink-soft)" }}>
          All extensions are free forever · No account required ·{" "}
          <Link href="/formatter" className="no-underline hover:underline" style={{ color: "var(--accent)" }}>
            Or use the web tool →
          </Link>
        </p>
      </div>
    </section>
  );
}
