import Link from "next/link";

const FEATURES = [
  { icon: "𝗕",  bg: "#e8f0fa", name: "Unicode Rich Text",      desc: "Bold, italic, bold-italic, strikethrough, underline, small caps, wide text — renders perfectly in every LinkedIn feed." },
  { icon: "◆",  bg: "#e6f4ee", name: "Smart Bullet Points",     desc: "5+ bullet styles — diamonds, arrows, checkmarks, numbered lists — to make posts instantly scannable." },
  { icon: "⊞",  bg: "#fdf5e4", name: "Post Templates",          desc: "6 proven frameworks — hooks, storytelling, hot takes — pre-formatted and ready to fill in." },
  { icon: "💾", bg: "#fce8f3", name: "Save Drafts & Snippets",  desc: "Save CTAs, closings, hooks as reusable snippets. Drafts auto-recover if you close the tab." },
  { icon: "📊", bg: "#eef0fc", name: "Readability Score",       desc: "Real-time grade on word density, reading level, emoji density and estimated read time." },
  { icon: "👁",  bg: "#fef0e6", name: "Hook Preview",           desc: "See exactly what readers see before 'see more' — the first 150 chars with LinkedIn's cutoff marker." },
];

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="py-16 md:py-24 px-5 md:px-[5vw] border-t border-b"
      style={{ background: "var(--paper-warm)", borderColor: "var(--border)" }}
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="reveal mb-10 md:mb-14">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "var(--accent)" }}>
            Everything you need
          </p>
          <h2
            id="features-heading"
            className="text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight mb-4"
            style={{ fontFamily: "'Instrument Serif', serif", color: "var(--ink)" }}
          >
            Powerful formatting,{" "}
            <em className="italic" style={{ color: "var(--accent)" }}>zero friction</em>
          </h2>
          <p className="text-base max-w-lg leading-relaxed" style={{ color: "var(--ink-mid)" }}>
            Every tool you need to make your posts stand out — right in your browser, no account required.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {FEATURES.map((f) => (
            <div
              key={f.name}
              className="reveal rounded-2xl p-5 md:p-7 transition-all hover:-translate-y-1 hover:shadow-xl"
              style={{ background: "var(--paper-card)", border: "1px solid var(--border)", boxShadow: "0 2px 16px rgba(10,10,15,0.07)" }}
            >
              <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl flex items-center justify-center text-lg md:text-xl mb-4" style={{ background: f.bg }}>
                {f.icon}
              </div>
              <div className="font-bold text-sm md:text-base mb-2" style={{ color: "var(--ink)" }}>{f.name}</div>
              <div className="text-sm leading-relaxed" style={{ color: "var(--ink-mid)" }}>{f.desc}</div>
            </div>
          ))}
        </div>

        {/* Mobile CTA — visible only on small screens */}
        <div className="mt-8 sm:hidden">
          <Link
            href="/formatter"
            className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl text-sm font-semibold text-white no-underline"
            style={{ background: "var(--accent)" }}
          >
            Try all features free →
          </Link>
        </div>
      </div>
    </section>
  );
}
