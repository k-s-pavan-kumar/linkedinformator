import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="py-20 md:py-28 px-5 md:px-[5vw]" style={{ background: "var(--ink)" }}>
      <div className="max-w-[640px] mx-auto text-center reveal">
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-6 border"
          style={{ background: "rgba(255,255,255,.08)", borderColor: "rgba(255,255,255,.15)", color: "rgba(255,255,255,.7)" }}
        >
          🌐 Chrome · Firefox · Edge · Brave · Safari
        </div>

        <h2
          className="text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight text-white mb-4"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Start writing posts that{" "}
          <em className="italic" style={{ color: "#7ab8f5" }}>demand</em>{" "}
          attention
        </h2>

        <p className="text-sm md:text-base mb-8 leading-relaxed" style={{ color: "rgba(255,255,255,.65)" }}>
          Free forever. No account. No credit card. Just better LinkedIn posts — starting today.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
          <Link
            href="/#downloads"
            className="flex items-center justify-center px-7 py-3.5 rounded-full text-sm md:text-base font-semibold text-white no-underline transition-all hover:opacity-90 hover:-translate-y-0.5"
            style={{ background: "var(--accent)", boxShadow: "0 4px 24px rgba(10,102,194,.4)" }}
          >
            Install Extension — Free
          </Link>
          <Link
            href="/formatter"
            className="flex items-center justify-center px-7 py-3.5 rounded-full text-sm md:text-base font-semibold no-underline transition-all hover:opacity-85 border"
            style={{ background: "rgba(255,255,255,.1)", color: "white", borderColor: "rgba(255,255,255,.2)" }}
          >
            Use Web Formatter →
          </Link>
        </div>

        <p className="mt-5 text-xs" style={{ color: "rgba(255,255,255,.35)" }}>
          Chrome · Firefox · Edge · Brave (now) &nbsp;·&nbsp; Safari (coming soon) · 2,400+ installs
        </p>
      </div>
    </section>
  );
}
