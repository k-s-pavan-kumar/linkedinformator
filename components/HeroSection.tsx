"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const PHRASES = [
  "𝗜 𝗷𝘂𝘀𝘁 𝗹𝗮𝘂𝗻𝗰𝗵𝗲𝗱 𝗺𝘆 𝘀𝘁𝗮𝗿𝘁𝘂𝗽 🚀\n\nHere are 5 things I wish I knew...",
  "◆ Build in public\n◆ Talk to users daily\n◆ Ship before you're ready\n◆ Charge early",
  "The best investment you'll ever make?\n\n𝘠𝘰𝘶𝘳𝘴𝘦𝘭𝘧. Every. Single. Time.",
];

function TypedText() {
  const [html, setHtml] = useState("");
  const state = useRef({ phrase: 0, char: 0, deleting: false, pause: 0 });
  useEffect(() => {
    let t: ReturnType<typeof setTimeout>;
    function tick() {
      const s = state.current;
      const cur = PHRASES[s.phrase];
      if (s.pause > 0) { s.pause--; t = setTimeout(tick, 60); return; }
      if (!s.deleting) {
        s.char++;
        setHtml(cur.slice(0, s.char).replace(/\n/g, "<br/>"));
        if (s.char === cur.length) { s.deleting = true; s.pause = 45; }
        t = setTimeout(tick, 38);
      } else {
        s.char--;
        setHtml(cur.slice(0, s.char).replace(/\n/g, "<br/>"));
        if (s.char === 0) { s.deleting = false; s.phrase = (s.phrase + 1) % PHRASES.length; s.pause = 12; }
        t = setTimeout(tick, 18);
      }
    }
    t = setTimeout(tick, 400);
    return () => clearTimeout(t);
  }, []);
  return (
    <span className="text-sm leading-relaxed" style={{ color: "var(--ink)", fontFamily: "'DM Sans', sans-serif" }}
      dangerouslySetInnerHTML={{ __html: html }} />
  );
}

const BROWSER_ICONS = [
  { label: "Chrome",  color: "#4285F4" },
  { label: "Firefox", color: "#FF6611" },
  { label: "Edge",    color: "#0078D4" },
  { label: "Brave",   color: "#FB542B" },
  { label: "Safari",  color: "#1C9BE0" },
];

export default function HeroSection() {
  return (
    <section style={{ background: "var(--paper)" }}>
      <div className="grid md:grid-cols-2 gap-10 items-center px-5 md:px-[5vw] py-16 md:py-24 max-w-[1280px] mx-auto">

        {/* ── LEFT ── */}
        <div className="flex flex-col items-start">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-6 border"
            style={{ background: "var(--green-light)", color: "var(--green)", borderColor: "rgba(26,138,80,0.2)" }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "var(--green)" }} />
            Now available on all major browsers
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl leading-[1.08] tracking-[-0.02em] mb-5"
            style={{ fontFamily: "'Instrument Serif', serif", color: "var(--ink)" }}>
            Format LinkedIn posts that{" "}
            <em className="italic" style={{ color: "var(--accent)" }}>actually</em>{" "}
            get noticed
          </h1>

          <p className="text-base md:text-lg mb-8 leading-relaxed max-w-[480px]" style={{ color: "var(--ink-mid)" }}>
            Bold, italic, bullets, templates — format your LinkedIn posts in <strong>any browser</strong> without switching tools.
          </p>

          {/* Browser pills */}
          <div className="flex flex-wrap gap-2 mb-8">
            {BROWSER_ICONS.map((b) => (
              <span key={b.label} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border"
                style={{ background: "var(--paper-warm)", borderColor: "var(--border)", color: "var(--ink-mid)" }}>
                <span className="w-2 h-2 rounded-full" style={{ background: b.color }} />
                {b.label}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto mb-10">
            <Link href="/formatter"
              className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full text-base font-semibold text-white no-underline transition-all hover:-translate-y-0.5 text-center"
              style={{ background: "var(--accent)", boxShadow: "0 4px 24px rgba(10,102,194,0.3)" }}>
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
              </svg>
              Try the Formatter Free
            </Link>
            <Link href="/#download"
              className="flex items-center justify-center px-6 py-3.5 rounded-full text-sm font-semibold no-underline border transition-all hover:border-blue-400 text-center"
              style={{ color: "var(--ink-mid)", borderColor: "var(--border)", background: "var(--paper-card)" }}>
              Install extension →
            </Link>
          </div>

          {/* <div className="flex items-center gap-3">
            <div className="flex">
              {["AK","MR","SJ","PD"].map((i, idx) => (
                <span key={i} className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border-2 border-white"
                  style={{ background: "var(--paper-warm)", color: "var(--ink-mid)", marginLeft: idx === 0 ? 0 : -8 }}>
                  {i}
                </span>
              ))}
            </div>
            <p className="text-sm" style={{ color: "var(--ink-soft)" }}>
              <strong style={{ color: "var(--ink-mid)" }}>2,400+ creators</strong> already formatting smarter
            </p>
          </div> */}
        </div>

        {/* ── RIGHT — plugin mockup ── */}
        <div className="flex justify-center items-center relative mt-8 md:mt-0" style={{ isolation: "isolate" }}>
          <div className="absolute top-[8%] right-0 hidden lg:block float-pill-1" style={{ zIndex: 1 }}>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold border whitespace-nowrap"
              style={{ background: "var(--paper-card)", borderColor: "var(--border)", boxShadow: "0 2px 12px rgba(0,0,0,.08)", color: "var(--ink-mid)" }}>
              <span className="w-2 h-2 rounded-full" style={{ background: "var(--green)" }} /> Bold applied ✓
            </div>
          </div>
          <div className="absolute bottom-[12%] left-0 hidden lg:block float-pill-2" style={{ zIndex: 1 }}>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold border whitespace-nowrap"
              style={{ background: "var(--paper-card)", borderColor: "var(--border)", boxShadow: "0 2px 12px rgba(0,0,0,.08)", color: "var(--ink-mid)" }}>
              <span className="w-2 h-2 rounded-full" style={{ background: "var(--accent)" }} /> 5 browsers ✓
            </div>
          </div>

          <div className="w-full max-w-[340px] rounded-2xl overflow-hidden float-card"
            style={{ background: "var(--paper-card)", border: "1px solid var(--border)", boxShadow: "0 8px 40px rgba(10,10,15,0.15)" }}>
            <div className="flex items-center gap-2 px-4 py-2.5 border-b" style={{ background: "var(--paper-warm)", borderColor: "var(--border)" }}>
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-400" />
                <span className="w-3 h-3 rounded-full bg-yellow-400" />
                <span className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <span className="text-xs ml-1" style={{ color: "var(--ink-soft)" }}>LinkedIn Formatter v2.1</span>
            </div>
            <div className="px-4 pt-4">
              <div className="flex gap-1 flex-wrap p-2 rounded-lg border" style={{ background: "var(--paper-warm)", borderColor: "var(--border-soft)" }}>
                {["𝗕","𝘐","𝗕𝘐","S̶","U̲","•","◆","▶","😊","⊞"].map((b, i) => (
                  <button key={i} className="w-7 h-6 rounded text-xs font-bold border border-transparent hover:bg-white hover:border-gray-200"
                    style={{ background: "transparent", color: "var(--ink-mid)" }}>{b}</button>
                ))}
              </div>
            </div>
            <div className="p-4">
              <div className="rounded-lg p-3 mb-3 min-h-[90px]"
                style={{ background: "var(--paper)", border: "1px solid var(--border)" }}>
                <TypedText />
                <span className="inline-block w-0.5 h-4 ml-0.5 cursor-blink"
                  style={{ background: "var(--accent)", verticalAlign: "text-bottom" }} />
              </div>
              <div className="flex gap-2">
                <button className="flex-1 py-2 rounded-md text-xs font-semibold border" style={{ color: "var(--ink-mid)", borderColor: "var(--border)", background: "var(--paper-card)" }}>Clear</button>
                <button className="flex-1 py-2 rounded-md text-xs font-semibold border" style={{ color: "var(--ink-mid)", borderColor: "var(--border)", background: "var(--paper-card)" }}>Copy</button>
                <button className="flex-1 py-2 rounded-md text-xs font-semibold text-white" style={{ background: "var(--accent)" }}>Apply Bold</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
