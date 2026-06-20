"use client";
import { useState } from "react";

const FAQS = [
  {
    q: "Does LinkedIn support bold and italic text?",
    a: "LinkedIn doesn't have a native bold/italic button. However, you can use Unicode mathematical characters that visually appear as bold or italic — and they render perfectly in LinkedIn's feed on every device. This tool does exactly that.",
  },
  {
    q: "Is this formatter free to use?",
    a: "Yes, 100% free. The web formatter at /formatter works in any browser without an account. The browser extensions (Chrome, Firefox, Edge, Brave) are also free forever from their respective stores.",
  },
  {
    q: "Will formatted text show up correctly for everyone?",
    a: "Yes. The bold, italic, and bullet characters are standard Unicode symbols — they display correctly for all LinkedIn users on desktop and mobile, regardless of their device or browser.",
  },
  {
    q: "How do I use the browser extension?",
    a: "Install from your browser's store (links in the Download section above), then navigate to LinkedIn and open the post composer. A formatting toolbar appears automatically below the editor — no extra steps needed.",
  },
  {
    q: "Which browsers are supported?",
    a: "Chrome, Firefox, Edge, and Brave are fully supported right now. Safari support is in progress. The web formatter at linkedinformatter.com/formatter works on every browser including Safari and mobile browsers.",
  },
  {
    q: "Can I save my posts and reuse content?",
    a: "Yes — the extension has Drafts and Snippets features. Save full post drafts to return to, and save reusable text blocks (CTAs, hooks, closings) as one-click snippets.",
  },
  {
    q: "Does it work on mobile?",
    a: "The web formatter at /formatter is fully mobile-responsive and works on any mobile browser. The browser extension requires a desktop browser since mobile browsers don't support extensions.",
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-16 md:py-24 px-5 md:px-[5vw]" style={{ background: "var(--paper)" }}>
      <div className="max-w-[700px] mx-auto">
        <div className="text-center mb-10 md:mb-12 reveal">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "var(--accent)" }}>
            Got questions?
          </p>
          <h2
            id="faq-heading"
            className="text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight"
            style={{ fontFamily: "'Instrument Serif', serif", color: "var(--ink)" }}
          >
            Frequently asked{" "}
            <em className="italic" style={{ color: "var(--accent)" }}>questions</em>
          </h2>
        </div>

        <div className="reveal">
          {FAQS.map((faq, i) => (
            <div key={i} className="border-b" style={{ borderColor: "var(--border)" }}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-start justify-between gap-4 py-4 md:py-5 text-left font-semibold text-sm md:text-base"
                style={{ color: "var(--ink)", background: "transparent" }}
              >
                <span>{faq.q}</span>
                <span
                  className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-lg"
                  style={{
                    color: "var(--ink-soft)",
                    transform: open === i ? "rotate(45deg)" : "none",
                    transition: "transform 0.2s ease",
                  }}
                >
                  +
                </span>
              </button>
              <div
                className="overflow-hidden"
                style={{
                  maxHeight: open === i ? "400px" : "0",
                  transition: "max-height 0.3s ease",
                }}
              >
                <p className="pb-4 md:pb-5 text-sm leading-relaxed" style={{ color: "var(--ink-mid)" }}>
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
