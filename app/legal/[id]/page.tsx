import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import {
  getPolicyById,
  policyNavLinks,
  type Policy,
  type PolicySection,
} from "./data";
import Footer from "@/components/Footer";

// ─── Next.js route helpers ───────────────────────────────────────────────────

type Props = { params: Promise<{ id: string }> };

export async function generateStaticParams() {
  return policyNavLinks.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const policy = getPolicyById(id);
  if (!policy) return { title: "Not Found" };
  return {
    title: `${policy.title} — LinkedIn Text Formatter`,
    description: policy.description,
  };
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default async function PolicyPage({ params }: Props) {
  const { id } = await params;
  const policy = getPolicyById(id);
  if (!policy) notFound();

  return (
    <div className="min-h-screen bg-[var(--paper)] text-[var(--ink)] flex flex-col">
      <div className="flex-1">
        <Hero policy={policy} />
        <Content policy={policy} />
      </div>
      <Footer />
    </div>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero({ policy }: { policy: Policy }) {
  const tagColors: Record<
    string,
    { color: string; bg: string; border: string }
  > = {
    green: {
      color: "var(--green)",
      bg: "var(--green-light)",
      border: "rgba(26,138,80,0.2)",
    },
    amber: {
      color: "#b45309",
      bg: "rgba(180,83,9,0.08)",
      border: "rgba(180,83,9,0.15)",
    },
    rose: {
      color: "#be123c",
      bg: "rgba(190,18,60,0.08)",
      border: "rgba(190,18,60,0.15)",
    },
  };
  const tag = tagColors[policy.tagVariant];

  return (
    <div className="border-b border-[var(--border)] px-5 md:px-[5vw] py-16 md:py-20 max-w-[760px] mx-auto">
      <div
        className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.1em] px-2.5 py-1 rounded-full mb-6"
        style={{
          color: tag.color,
          background: tag.bg,
          border: `1px solid ${tag.border}`,
        }}
      >
        <span
          className="w-1.5 h-1.5 rounded-full"
          style={{ background: tag.color }}
        />
        {policy.tagLabel}
      </div>
      <h1 className="font-['Instrument_Serif',serif] text-4xl md:text-5xl font-bold text-[var(--ink)] leading-[1.2] mb-4 tracking-[-0.02em]">
        {policy.title}
      </h1>
      <p className="text-[17px] text-[var(--ink-mid)] max-w-[580px]">
        {policy.description}
      </p>
      <div className="mt-7 text-sm text-[var(--ink-soft)] flex gap-6 flex-wrap">
        <span>📅 Effective: {policy.effectiveDate}</span>
        <span>📋 Last updated: {policy.lastUpdated}</span>
        <span>🌍 Applies globally</span>
      </div>
    </div>
  );
}

// ─── Content ─────────────────────────────────────────────────────────────────

function Content({ policy }: { policy: Policy }) {
  return (
    <main className="max-w-[760px] mx-auto px-5 md:px-[5vw] py-14 md:py-20">
      {policy.sections.map((section, i) => (
        <div key={i}>
          <PolicySectionBlock section={section} />
          {i < policy.sections.length - 1 && (
            <hr className="border-[var(--border)] my-12" />
          )}
        </div>
      ))}
      <hr className="border-[var(--border)] my-12" />
      <ContactCard />
    </main>
  );
}

// ─── PolicySection ────────────────────────────────────────────────────────────

function PolicySectionBlock({ section }: { section: PolicySection }) {
  return (
    <section className="mb-12">
      <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#0a66c2] mb-3.5">
        {section.label}
      </p>
      <h2 className="font-['Instrument_Serif',serif] text-2xl font-semibold text-[var(--ink)] mb-3.5 tracking-[-0.01em]">
        {section.heading}
      </h2>

      {section.body.map((para, i) => (
        <p key={i} className="text-[var(--ink-mid)] mb-3.5 leading-relaxed">
          {para}
        </p>
      ))}

      {section.highlight && <HighlightBox {...section.highlight} />}

      {section.list && <ItemList {...section.list} />}

      {section.cards && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
          {section.cards.map((card, i) => (
            <div
              key={i}
              className="bg-[var(--paper-card)] border border-[var(--border)] rounded-xl p-5"
            >
              <div className="text-2xl mb-2.5">{card.icon}</div>
              <h3 className="text-[15px] font-semibold text-[var(--ink)] mb-1.5">
                {card.title}
              </h3>
              <p className="text-sm text-[var(--ink-mid)] leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

// ─── HighlightBox ─────────────────────────────────────────────────────────────

function HighlightBox({
  variant,
  content,
}: {
  variant: "info" | "warn" | "rose" | "purple";
  content: string;
}) {
  const map = {
    info: {
      bg: "var(--accent-light)",
      border: "rgba(10,102,194,0.15)",
      accent: "var(--accent)",
      color: "var(--ink)",
    },
    warn: {
      bg: "rgba(245,158,11,0.08)",
      border: "rgba(245,158,11,0.15)",
      accent: "#b45309",
      color: "var(--ink)",
    },
    rose: {
      bg: "rgba(244,63,94,0.08)",
      border: "rgba(244,63,94,0.15)",
      accent: "#be123c",
      color: "var(--ink)",
    },
    purple: {
      bg: "rgba(168,85,247,0.08)",
      border: "rgba(168,85,247,0.15)",
      accent: "#7c3aed",
      color: "var(--ink)",
    },
  };
  const c = map[variant];
  return (
    <div
      className="rounded-lg p-[18px_20px] my-5 text-[15px] leading-relaxed"
      style={{
        background: c.bg,
        border: `1px solid ${c.border}`,
        borderLeft: `3px solid ${c.accent}`,
        color: c.color,
      }}
    >
      {content}
    </div>
  );
}

// ─── ItemList ─────────────────────────────────────────────────────────────────

function ItemList({
  variant,
  items,
}: {
  variant: "check" | "cross" | "numbered";
  items: string[];
}) {
  const checkColor = variant === "cross" ? "#be123c" : "var(--green)";
  return (
    <ul className="list-none my-4">
      {items.map((item, i) => (
        <li
          key={i}
          className="flex items-start gap-2.5 py-2.5 border-b border-[var(--border)]"
        >
          {variant === "numbered" ? (
            <span className="min-w-[24px] h-6 bg-[var(--border)] rounded-full flex items-center justify-center text-[11px] font-bold text-[var(--ink-mid)] shrink-0 mt-0.5">
              {i + 1}
            </span>
          ) : (
            <span
              className="font-bold shrink-0 mt-0.5"
              style={{ color: checkColor }}
            >
              {variant === "cross" ? "✗" : "✓"}
            </span>
          )}
          <span className="text-[15px] text-[var(--ink-mid)]">{item}</span>
        </li>
      ))}
    </ul>
  );
}

// ─── ContactCard ─────────────────────────────────────────────────────────────

function ContactCard() {
  return (
    <div className="bg-[var(--paper-card)] border border-[var(--border)] rounded-xl p-7 md:p-8 flex items-center justify-between gap-6 flex-wrap">
      <div>
        <h3 className="text-[17px] font-semibold text-[var(--ink)] mb-1">
          Have a question?
        </h3>
        <p className="text-sm text-[var(--ink-mid)]">
          Reach out and we&apos;ll respond in plain language.
        </p>
      </div>
      <a
        href="mailto:kallurisubrahmanyam24@gmail.com"
        className="inline-block bg-[var(--accent)] text-white no-underline text-sm font-semibold px-5 py-2.5 rounded-lg whitespace-nowrap hover:opacity-90 transition-opacity"
      >
        Contact Us
      </a>
    </div>
  );
}