const TESTIMONIALS = [
  { stars: 5, quote: "I've tried 4 LinkedIn formatting tools. This is the only one that works directly inside the composer. Zero friction — I love it.", name: "Anika K.", role: "Content Strategist · 12K followers", initials: "AK" },
  { stars: 5, quote: "The templates alone are worth it. I went from staring at a blank page to publishing in 10 minutes. My engagement doubled in a month.", name: "Marcus R.", role: "Startup Founder · Speaker", initials: "MR" },
  { stars: 5, quote: "Finally something that makes bold + bullets easy on LinkedIn. My posts look polished and my profile views are up 40%.", name: "Sunita J.", role: "Career Coach · Top Voice", initials: "SJ" },
];

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="py-16 md:py-24 px-5 md:px-[5vw] border-t"
      style={{ background: "var(--paper-warm)", borderColor: "var(--border)" }}
    >
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-10 md:mb-12 reveal">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "var(--accent)" }}>
            Loved by creators
          </p>
          <h2
            id="testimonials-heading"
            className="text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight"
            style={{ fontFamily: "'Instrument Serif', serif", color: "var(--ink)" }}
          >
            What <em className="italic" style={{ color: "var(--accent)" }}>real users</em> are saying
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="reveal rounded-2xl p-5 md:p-7"
              style={{ background: "var(--paper-card)", border: "1px solid var(--border)", boxShadow: "0 2px 16px rgba(10,10,15,0.07)" }}
            >
              <div className="text-yellow-400 text-sm mb-3">{"★".repeat(t.stars)}</div>
              <p className="text-sm leading-relaxed italic mb-5" style={{ color: "var(--ink-mid)" }}>
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold shrink-0 border"
                  style={{ background: "var(--accent-light)", color: "var(--accent)", borderColor: "var(--border)" }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="font-bold text-sm" style={{ color: "var(--ink)" }}>{t.name}</div>
                  <div className="text-xs" style={{ color: "var(--ink-soft)" }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
