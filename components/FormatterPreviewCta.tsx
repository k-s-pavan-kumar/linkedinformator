import Link from "next/link";
import { Wand2, ArrowRight } from "lucide-react";

const PREVIEW_SAMPLES = [
  { before: "I learned 5 lessons building my startup.", after: "𝗜 𝗹𝗲𝗮𝗿𝗻𝗲𝗱 𝟱 𝗹𝗲𝘀𝘀𝗼𝗻𝘀 𝗯𝘂𝗶𝗹𝗱𝗶𝗻𝗴 𝗺𝘆 𝘀𝘁𝗮𝗿𝘁𝘂𝗽.", type: "Bold" },
  { before: "The real secret? Consistency beats talent.", after: "The real secret? 𝘊𝘰𝘯𝘴𝘪𝘴𝘵𝘦𝘯𝘤𝘺 𝘣𝘦𝘢𝘵𝘴 𝘵𝘢𝘭𝘦𝘯𝘵.", type: "Italic" },
  { before: "Morning routine, exercise, read, plan.", after: "◆ Morning routine\n◆ Exercise 20 min\n◆ Read 10 pages\n◆ Plan your day", type: "Bullets" },
];

export default function FormatterPreviewCta() {
  return (
    <section className="py-20 px-5 md:px-[5vw] border-t" id="formatter" style={{ background: "var(--paper)", borderColor: "var(--border)" }}>
      <div className="max-w-[1100px] mx-auto">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left — samples */}
          <div className="reveal">
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "var(--accent)" }}>See the difference</p>
            <h2 id="formatter-heading" className="text-3xl sm:text-4xl leading-tight tracking-tight mb-4" style={{ fontFamily: "'Instrument Serif', serif", color: "var(--ink)" }}>
              Plain text is <em className="italic" style={{ color: "var(--accent)" }}>forgettable.</em><br />
              Formatted posts convert.
            </h2>
            <p className="text-base mb-8 leading-relaxed" style={{ color: "var(--ink-mid)" }}>
              Posts with bold hooks and structured bullets get 3× more comments. Formatting signals effort — and LinkedIn rewards it.
            </p>

            <div className="flex flex-col gap-3">
              {PREVIEW_SAMPLES.map(s => (
                <div key={s.type} className="rounded-2xl p-4 border" style={{ background: "var(--paper-card)", borderColor: "var(--border)" }}>
                  <span className="inline-block text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full mb-3"
                    style={{ background: "var(--accent-light)", color: "var(--accent)" }}>{s.type}</span>
                  <div className="text-sm mb-2 leading-relaxed" style={{ color: "var(--ink-mid)" }}>{s.before}</div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex-1 h-px" style={{ background: "var(--border)" }} />
                    <span className="text-xs font-bold" style={{ color: "var(--accent)" }}>↓ formatted</span>
                    <div className="flex-1 h-px" style={{ background: "var(--border)" }} />
                  </div>
                  <div className="text-sm leading-relaxed whitespace-pre-wrap" style={{ color: "var(--ink)" }}>{s.after}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — CTA card */}
          <div className="reveal">
            <div className="rounded-3xl overflow-hidden border" style={{ background: "var(--ink)", borderColor: "var(--ink)" }}>
              {/* Card header */}
              <div className="p-6 md:p-8 border-b" style={{ borderColor: "rgba(255,255,255,.1)" }}>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold italic"
                    style={{ background: "rgba(255,255,255,.15)", fontFamily: "'Instrument Serif', serif" }}>Lf</div>
                  <span className="text-sm font-semibold text-white opacity-80">LinkedIn Formatter</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight"
                  style={{ fontFamily: "'Instrument Serif', serif" }}>
                  Try the formatter <em className="italic" style={{ color: "#7ab8f5" }}>right now</em>
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,.6)" }}>
                  Full-featured LinkedIn post editor. Bold, italic, bullets, templates, emoji picker, readability score and more — free, no login.
                </p>
              </div>

              {/* Feature list */}
              <div className="p-6 md:p-8 flex flex-col gap-3">
                {[
                  "✅ Bold, italic, strikethrough, underline",
                  "✅ 5 bullet styles + numbered lists",
                  "✅ 6 post templates to start from",
                  "✅ Hook preview & readability score",
                  "✅ Emoji picker with search",
                  "✅ Undo history + spacing cleaner",
                ].map(f => (
                  <div key={f} className="text-sm" style={{ color: "rgba(255,255,255,.75)" }}>{f}</div>
                ))}

                <Link href="/formatter"
                  className="mt-4 flex items-center justify-center gap-2.5 py-4 rounded-2xl text-base font-bold text-white no-underline transition-all hover:opacity-90 hover:-translate-y-0.5"
                  style={{ background: "var(--accent)", boxShadow: "0 4px 20px rgba(10,102,194,.5)" }}>
                  <Wand2 className="w-5 h-5" />
                  Open Formatter — Free
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <p className="text-center text-xs" style={{ color: "rgba(255,255,255,.35)" }}>
                  No account · No install · Works in every browser
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
