"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "/#features",     label: "Features" },
  { href: "/formatter",     label: "Try it Free" },
  { href: "/#downloads",    label: "Downloads" },
  { href: "/#faq",          label: "FAQ" },
  { href: "/blog",          label: "Blog" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <>
      <nav
        className={`sticky top-0 z-50 transition-all ${scrolled ? "shadow-sm" : ""}`}
        style={{ background: "rgba(250,249,246,0.96)", backdropFilter: "blur(12px)", borderBottom: "1px solid var(--border)" }}
      >
        <div className="flex items-center justify-between px-5 md:px-[5vw] h-16">
          {/* Logo */}
          <a
  href="/"
  className="flex items-center gap-2.5 font-bold text-base no-underline shrink-0"
  style={{ color: "var(--ink)" }}
>
  <img
    src="/lflogo.png"
    alt="LinkedIn Formatter"
    className="w-8 h-8 rounded-lg shrink-0"
  />

  <span>LinkedIn Formatter</span>
</a>

          {/* Desktop links */}
          <ul className="hidden md:flex gap-6 list-none items-center">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-sm font-medium transition-colors no-underline"
                  style={{ color: pathname === "/formatter" && href === "/formatter" ? "var(--accent)" : "var(--ink-mid)" }}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <Link
            href="/#download"
            className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white no-underline transition-all hover:opacity-85 hover:-translate-y-px shrink-0"
            style={{ background: "var(--accent)", boxShadow: "0 4px 14px rgba(10,102,194,0.3)" }}
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Install Free
          </Link>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl transition-all"
            style={{ color: "var(--ink-mid)", background: menuOpen ? "var(--paper-warm)" : "transparent" }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t px-5 pb-5 pt-3 flex flex-col gap-1"
            style={{ borderColor: "var(--border)", background: "rgba(250,249,246,0.98)" }}>
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="px-3 py-3 rounded-xl text-sm font-semibold no-underline transition-all"
                style={{ color: "var(--ink)", background: "transparent" }}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/#download"
              className="mt-2 flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white no-underline"
              style={{ background: "var(--accent)" }}
              onClick={() => setMenuOpen(false)}
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Install Extension — Free
            </Link>
          </div>
        )}
      </nav>
    </>
  );
}
