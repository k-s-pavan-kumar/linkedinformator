"use client";
import { useEffect, useState, useRef } from "react";
import { TrendingUp, RefreshCw } from "lucide-react";

interface Counts { chrome: number; firefox: number; edge: number; safari: number; brave: number; }

const BROWSERS = [
  {
    key: "chrome"  as const, label: "Chrome",  color: "#4285F4",
    icon: <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none"><circle cx="12" cy="12" r="10" fill="#4285F4"/><circle cx="12" cy="12" r="4.5" fill="white"/><path d="M12 7.5h8.66A10 10 0 0 0 3.34 7.5z" fill="#EA4335"/><path d="M20.66 7.5L16.33 15A10 10 0 0 1 3.34 7.5z" fill="#FBBC04"/><path d="M7.67 15L3.34 7.5A10 10 0 0 0 16.33 15z" fill="#34A853"/></svg>,
  },
  {
    key: "firefox" as const, label: "Firefox", color: "#FF6611",
    icon: <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none"><circle cx="12" cy="12" r="10" fill="#FF6611"/><circle cx="12" cy="12" r="5" fill="#FFD900"/><circle cx="12" cy="12" r="2.5" fill="#FF6611"/></svg>,
  },
  {
    key: "edge"    as const, label: "Edge",    color: "#0078D4",
    icon: <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none"><circle cx="12" cy="12" r="10" fill="#0078D4"/><path d="M7 16c1-4 5-7 9-5-1 3-4 5-7 4 2 2 6 2 8 0-1 3-5 5-8 4-2-1-3-2-2-3z" fill="white"/></svg>,
  },
  {
    key: "safari"  as const, label: "Safari",  color: "#1C9BE0",
    icon: <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none"><circle cx="12" cy="12" r="10" fill="#1C9BE0"/><circle cx="12" cy="12" r="7" fill="white" stroke="#e0e0e0" strokeWidth="0.5"/><line x1="12" y1="5" x2="12" y2="7" stroke="#1C9BE0" strokeWidth="1.5"/><line x1="12" y1="17" x2="12" y2="19" stroke="#1C9BE0" strokeWidth="1.5"/><polygon points="12,9 14,15 12,13.5 10,15" fill="#FF3B30"/></svg>,
  },
  {
    key: "brave"   as const, label: "Brave",   color: "#FB542B",
    icon: <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none"><circle cx="12" cy="12" r="10" fill="#FB542B"/><path d="M12 5l2 4h3l-2.5 3 1 4L12 14l-3.5 2 1-4L7 9h3z" fill="white"/></svg>,
  },
];

function AnimatedNumber({ value }: { value: number }) {
  const [displayed, setDisplayed] = useState(value);
  const prev = useRef(value);
  useEffect(() => {
    if (value === prev.current) return;
    const diff = value - prev.current;
    let step = 0;
    const iv = setInterval(() => {
      step++;
      setDisplayed(Math.round(prev.current + (diff * step) / 20));
      if (step >= 20) { setDisplayed(value); prev.current = value; clearInterval(iv); }
    }, 30);
    return () => clearInterval(iv);
  }, [value]);
  return <span>{displayed.toLocaleString()}</span>;
}

export default function LiveDownloads() {
  const [counts, setCounts] = useState<Counts | null>(null);
  const [total, setTotal] = useState(0);
  const [updatedAt, setUpdatedAt] = useState("");
  const [loading, setLoading] = useState(true);
  const [pulse, setPulse] = useState(false);

  async function fetchCounts() {
    try {
      const res = await fetch("/api/downloads");
      const data = await res.json();
      setCounts(data.counts);
      setTotal(data.total);
      setUpdatedAt(new Date(data.updatedAt).toLocaleTimeString());
      setPulse(true);
      setTimeout(() => setPulse(false), 600);
    } catch { /* silent */ }
    finally { setLoading(false); }
  }

  useEffect(() => {
    fetchCounts();
    const iv = setInterval(fetchCounts, 30000);
    return () => clearInterval(iv);
  }, []);

  const maxCount = counts ? Math.max(...Object.values(counts)) : 1;

  return (
    <section
      id="downloads-live"
      className="py-16 md:py-20 px-5 md:px-[5vw]"
      style={{ background: "var(--paper)" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12 reveal">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "var(--accent)" }}>
            Live install tracker
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight mb-4"
            style={{ fontFamily: "'Instrument Serif', serif", color: "var(--ink)" }}
          >
            Real installs.{" "}
            <em className="italic" style={{ color: "var(--accent)" }}>Every browser.</em>
          </h2>
          <p className="text-sm md:text-base max-w-xl mx-auto leading-relaxed" style={{ color: "var(--ink-mid)" }}>
            We ship to all major browsers. See live install counts updated every 30 seconds.
          </p>
        </div>

        {/* Total pill */}
        <div className="flex justify-center mb-8 reveal">
          <div
            className="inline-flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2.5 md:py-3 rounded-full border"
            style={{ background: "var(--paper-warm)", borderColor: "var(--border)", boxShadow: "0 2px 16px rgba(10,10,15,0.07)" }}
          >
            <TrendingUp className="w-4 h-4 shrink-0" style={{ color: "var(--green)" }} />
            <span className="text-xs md:text-sm font-semibold" style={{ color: "var(--ink-mid)" }}>Total installs:</span>
            <span
              className={`font-mono text-base md:text-lg font-bold transition-transform ${pulse ? "scale-110" : "scale-100"}`}
              style={{ color: "var(--accent)" }}
            >
              {loading ? "—" : <AnimatedNumber value={total} />}
            </span>
          </div>
        </div>

        {/* Cards — 1 col mobile, 2 col sm, 3 col lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 reveal">
          {BROWSERS.map((b) => {
            const count = counts?.[b.key] ?? 0;
            const pct   = counts ? Math.round((count / maxCount) * 100) : 0;
            const share = total  ? Math.round((count / total) * 100) : 0;

            return (
              <div
                key={b.key}
                className="rounded-2xl border p-4 md:p-6 transition-all hover:-translate-y-1"
                style={{ background: "var(--paper-card)", borderColor: "var(--border)", boxShadow: "0 2px 16px rgba(10,10,15,0.07)" }}
              >
                {/* Browser name + live dot */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    {b.icon}
                    <span className="font-semibold text-sm" style={{ color: "var(--ink)" }}>{b.label}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: b.color }} />
                    <span className="text-xs font-medium" style={{ color: "var(--ink-soft)" }}>live</span>
                  </div>
                </div>

                {/* Count */}
                <div className="text-2xl md:text-3xl font-bold font-mono mb-2.5" style={{ color: "var(--ink)" }}>
                  {loading
                    ? <span className="animate-pulse" style={{ color: "var(--border)" }}>—</span>
                    : <AnimatedNumber value={count} />}
                </div>

                {/* Bar */}
                <div className="h-2 rounded-full overflow-hidden mb-2" style={{ background: "var(--border)" }}>
                  <div
                    className="h-full rounded-full transition-all duration-700"
                    style={{ width: loading ? "0%" : `${pct}%`, background: b.color }}
                  />
                </div>

                {/* Share + install link */}
                <div className="flex items-center justify-between">
                  <span className="text-xs" style={{ color: "var(--ink-soft)" }}>
                    {loading ? "—" : `${share}% of total`}
                  </span>
                  <a href="#downloads" className="text-xs font-semibold hover:opacity-70 transition-opacity" style={{ color: "var(--accent)" }}>
                    Install →
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Refresh row */}
        <div className="flex items-center justify-center gap-3 mt-5 reveal">
          <button
            onClick={fetchCounts}
            className="flex items-center gap-2 text-xs px-4 py-2 rounded-full border transition-all hover:border-blue-400 active:scale-95"
            style={{ color: "var(--ink-soft)", borderColor: "var(--border)", background: "var(--paper-card)" }}
          >
            <RefreshCw className="w-3 h-3" /> Refresh now
          </button>
          {updatedAt && (
            <span className="text-xs" style={{ color: "var(--ink-soft)" }}>Updated {updatedAt}</span>
          )}
        </div>
      </div>
    </section>
  );
}
