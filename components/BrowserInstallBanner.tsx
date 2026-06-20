"use client";

import { useEffect, useState } from "react";

type BrowserKey =
  | "chrome"
  | "firefox"
  | "firefox_android"
  | "edge"
  | "edge_android"
  | "brave"
  | "opera"
  | "unknown";

interface BrowserInfo {
  key: BrowserKey;
  name: string;
  storeUrl: string;
  icon: React.ReactNode;
}

const BROWSERS: Record<BrowserKey, BrowserInfo> = {
  chrome: {
    key: "chrome",
    name: "Chrome",
    storeUrl: "https://chrome.google.com/webstore/detail/YOUR_EXTENSION_ID",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <circle cx="24" cy="24" r="22" fill="#fff" />
        <circle cx="24" cy="24" r="10" fill="#4285F4" />
        <circle cx="24" cy="24" r="6" fill="white" />
        <path d="M24 14h18.39A24 24 0 0 0 5.61 14z" fill="#EA4335" />
        <path d="M5.61 14A24 24 0 0 0 14.1 41.2L23.1 25a10 10 0 0 1-7.48-4.96z" fill="#FBBC05" />
        <path d="M42.39 14A24 24 0 0 1 33.9 41.2L24.9 25a10 10 0 0 0 7.48-4.96z" fill="#34A853" />
      </svg>
    ),
  },
  firefox: {
    key: "firefox",
    name: "Firefox",
    storeUrl: "https://addons.mozilla.org/en-US/firefox/addon/YOUR_ADDON_ID/",
    icon: (
      <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <circle cx="24" cy="24" r="22" fill="#FF9500" />
        <circle cx="24" cy="24" r="14" fill="#FF6000" />
        <circle cx="24" cy="24" r="8" fill="#FF9500" />
        <path d="M24 10 Q32 16 30 26 Q28 34 20 36 Q12 34 12 24 Q12 14 24 10Z" fill="#FF4500" opacity="0.5" />
      </svg>
    ),
  },
  firefox_android: {
    key: "firefox_android",
    name: "Firefox for Android",
    storeUrl: "https://addons.mozilla.org/en-US/android/addon/YOUR_ADDON_ID/",
    icon: (
      <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <circle cx="24" cy="22" r="22" fill="#FF9500" />
        <circle cx="24" cy="22" r="12" fill="#FF6000" />
        <rect x="18" y="37" width="12" height="7" rx="3" fill="#3DDC84" />
        <path d="M19 43h10" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  edge: {
    key: "edge",
    name: "Edge",
    storeUrl: "https://microsoftedge.microsoft.com/addons/detail/YOUR_EXTENSION_ID",
    icon: (
      <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <circle cx="24" cy="24" r="22" fill="#0078D4" />
        <path d="M36 22c0 8-6 14-14 14a14 14 0 0 1-10-4c2 1 5 2 7 2 6 0 10-4 10-10 0-4-3-7-7-7-3 0-6 2-8 5 1-7 7-13 15-13a7 7 0 0 1 7 7v6z" fill="white" />
        <path d="M12 32a14 14 0 0 0 14 4c-4 0-8-2-10-6h18c1-2 2-4 2-6a14 14 0 0 1-24 8z" fill="#50E6FF" />
      </svg>
    ),
  },
  edge_android: {
    key: "edge_android",
    name: "Edge for Android",
    storeUrl: "https://play.google.com/store/apps/details?id=com.microsoft.emmx",
    icon: (
      <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <circle cx="24" cy="22" r="22" fill="#0078D4" />
        <path d="M32 20c0 6-4 10-10 10a10 10 0 0 1-7-3c1 1 3 1 5 1 4 0 7-3 7-7 0-3-2-5-5-5-2 0-4 1-6 4 1-5 5-9 11-9a5 5 0 0 1 5 5v4z" fill="white" />
        <rect x="18" y="37" width="12" height="7" rx="3" fill="#3DDC84" />
      </svg>
    ),
  },
  brave: {
    key: "brave",
    name: "Brave",
    storeUrl: "https://chrome.google.com/webstore/detail/YOUR_EXTENSION_ID",
    icon: (
      <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <circle cx="24" cy="24" r="22" fill="#FB542B" />
        <path d="M24 8l3 2 4-1 2 4 4 1-1 4 3 3-3 3 1 4-4 1-2 4-4-1-3 2-3-2-4 1-2-4-4-1 1-4-3-3 3-3-1-4 4-1 2-4 4 1z" fill="white" />
        <circle cx="24" cy="24" r="5" fill="#FB542B" />
      </svg>
    ),
  },
  opera: {
    key: "opera",
    name: "Opera",
    storeUrl: "https://addons.opera.com/en/extensions/details/YOUR_EXTENSION_ID/",
    icon: (
      <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <circle cx="24" cy="24" r="22" fill="#FF1B2D" />
        <ellipse cx="24" cy="24" rx="10" ry="14" fill="white" />
        <ellipse cx="24" cy="24" rx="6" ry="14" fill="#FF1B2D" />
      </svg>
    ),
  },
  unknown: {
    key: "unknown",
    name: "your browser",
    storeUrl: "#",
    icon: (
      <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <circle cx="24" cy="24" r="22" fill="#94A3B8" />
        <circle cx="24" cy="24" r="12" fill="white" opacity="0.35" />
        <circle cx="24" cy="24" r="6" fill="white" />
      </svg>
    ),
  },
};

function detectBrowser(): BrowserKey {
  if (typeof window === "undefined") return "unknown";
  const ua = navigator.userAgent;
  const isAndroid = /Android/.test(ua);
  if (/Brave/.test(ua) || (navigator as any).brave) return "brave";
  if (/OPR|Opera/.test(ua)) return "opera";
  if (/Edg\//.test(ua)) return isAndroid ? "edge_android" : "edge";
  if (/Firefox/.test(ua)) return isAndroid ? "firefox_android" : "firefox";
  if (/Chrome/.test(ua)) return "chrome";
  return "unknown";
}

// ─── Arrow icon ───────────────────────────────────────────────────────────────
function ArrowUpRight({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ─── Primary CTA button ───────────────────────────────────────────────────────
function PrimaryButton({ browser }: { browser: BrowserInfo }) {
  return (
    <a
      href={browser.storeUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="
        group inline-flex items-center gap-3
        px-7 py-4 rounded-2xl
        bg-gray-950 text-white
        text-base font-semibold tracking-tight
        transition-all duration-200
        hover:bg-gray-800 hover:scale-[1.02]
        active:scale-[0.98]
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2
        sm:px-8 sm:py-4 sm:text-lg
      "
    >
      <span className="w-6 h-6 flex-shrink-0">{browser.icon}</span>
      <span>Add to {browser.name}</span>
      <span className="opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-150">
        <ArrowUpRight size={16} />
      </span>
    </a>
  );
}

// ─── Secondary browser pill ───────────────────────────────────────────────────
function BrowserPill({ browser }: { browser: BrowserInfo }) {
  return (
    <a
      href={browser.storeUrl}
      target="_blank"
      rel="noopener noreferrer"
      title={`Add to ${browser.name}`}
      className="
        group flex flex-col items-center gap-2
        w-[5.5rem] py-4 px-2 rounded-2xl
        border border-gray-100
        hover:border-gray-200 hover:bg-gray-50
        transition-all duration-150 hover:scale-105
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300
        sm:w-24
      "
    >
      <span className="w-9 h-9 sm:w-10 sm:h-10">{browser.icon}</span>
      <span className="text-[11px] sm:text-xs text-gray-400 font-medium text-center leading-snug group-hover:text-gray-600 transition-colors">
        {browser.name}
      </span>
    </a>
  );
}

// ─── Skeleton ─────────────────────────────────────────────────────────────────
function Skeleton() {
  return (
    <section className="w-full max-w-3xl mx-auto px-4 py-16 sm:px-6 lg:px-8 animate-pulse">
      <div className="flex flex-col items-center gap-6">
        <div className="w-20 h-20 rounded-full bg-gray-100" />
        <div className="h-9 w-56 rounded-xl bg-gray-100" />
        <div className="h-5 w-40 rounded-lg bg-gray-100" />
        <div className="h-14 w-52 rounded-2xl bg-gray-100" />
        <div className="flex gap-3 mt-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="w-20 h-24 rounded-2xl bg-gray-100" />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Main export ──────────────────────────────────────────────────────────────
export default function BrowserInstallBanner() {
  const [detected, setDetected] = useState<BrowserKey>("unknown");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setDetected(detectBrowser());
    setMounted(true);
  }, []);

  if (!mounted) return <Skeleton />;

  const primary = BROWSERS[detected];
  const others = (Object.keys(BROWSERS) as BrowserKey[]).filter(
    (k) => k !== detected && k !== "unknown"
  );

  return (
    <section className="w-full max-w-3xl mx-auto px-4 py-16 sm:px-8 sm:py-20 lg:py-24">
      {/* Hero */}
      <div className="flex flex-col items-center text-center gap-5 sm:gap-6">
        {/* Large browser icon */}
        <div className="w-20 h-20 sm:w-24 sm:h-24 drop-shadow-sm">
          {primary.icon}
        </div>

        {/* Headline */}
        <div className="space-y-2">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-950">
            Add to {primary.name}
          </h2>
          <p className="text-base sm:text-lg text-gray-400 font-normal">
            Free forever. Install in seconds.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-1">
          <PrimaryButton browser={primary} />
        </div>
      </div>

      {/* Divider */}
      <div className="flex items-center gap-4 mt-14 sm:mt-16 mb-8">
        <div className="flex-1 h-px bg-gray-100" />
        <span className="text-xs text-gray-300 uppercase tracking-[0.15em] font-medium">
          Also available on
        </span>
        <div className="flex-1 h-px bg-gray-100" />
      </div>

      {/* Other browsers grid */}
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
        {others.map((key) => (
          <BrowserPill key={key} browser={BROWSERS[key]} />
        ))}
      </div>
    </section>
  );
}
