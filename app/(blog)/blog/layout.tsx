import type { Metadata } from "next";
import Link from "next/link";
import "./blog.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: {
    template: "%s | LinkedIn Formatter Blog",
    default: "LinkedIn Formatter Blog — Formatting Tips, Tools & LinkedIn Growth",
  },
  description:
    "The LinkedIn Formatter blog: guides on formatting LinkedIn posts, growing your audience, and using the best tools for LinkedIn creators.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="blog-layout">
      {/* Blog nav */}
      {/* <Navbar/>  */}

      <main className="blog-main">{children}</main>

      {/* Footer */}
      <footer className="blog-footer">
        <div className="blog-footer-inner">
          <div className="blog-footer-brand">
            <Link href="/" className="blog-nav-logo">
              <div className="blog-nav-icon">Lf</div>
              LinkedIn Formatter
            </Link>
            <p>Bold, italic, bullets, and templates — directly inside LinkedIn.</p>
          </div>
          <div className="blog-footer-links">
            <div>
              <strong>Product</strong>
              <Link href="/#features">Features</Link>
              <Link href="/#how">How it works</Link>
              <a href="https://chrome.google.com/webstore" target="_blank" rel="noopener noreferrer">
                Chrome Web Store
              </a>
            </div>
            <div>
              <strong>Blog</strong>
              <Link href="/blog/how-to-bold-text-on-linkedin">How to Bold on LinkedIn</Link>
              <Link href="/blog/linkedin-post-formatting-guide">Formatting Guide</Link>
              <Link href="/blog/linkedin-engagement-tips">Engagement Tips</Link>
              <Link href="/blog/best-linkedin-chrome-extensions">Best Extensions</Link>
              <Link href="/blog/linkedin-text-formatter-review">Review</Link>
            </div>
            <div>
              <strong>Legal</strong>
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms</Link>
              <Link href="/support">Support</Link>
            </div>
          </div>
        </div>
        <div className="blog-footer-copy">
          © 2026 LinkedIn Text Formatter · Built for LinkedIn creators
        </div>
      </footer>
    </div>
  );
}

