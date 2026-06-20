import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "LinkedIn Formatter Blog — LinkedIn Tips, Tools & Formatting Guides",
  description:
    "Guides, tutorials, and tips for LinkedIn creators: how to format posts, increase engagement, choose the best tools, and grow your audience on LinkedIn.",
  alternates: { canonical: "https://linkedinformator.com/blog" },
};

// ─── ALL 15 BLOGS (batch 1 + batch 2) ────────────────────────────────────────
const posts = [
  // Batch 1
  { slug: "how-to-bold-text-on-linkedin", tag: "Formatting", date: "Jan 15, 2026", readTime: "6 min", title: "How to Bold Text on LinkedIn in 2026", description: "LinkedIn has no native bold button. Learn every method to bold text in posts, comments, and your profile." },
  { slug: "linkedin-post-formatting-guide", tag: "Guide", date: "Feb 1, 2026", readTime: "10 min", title: "The Complete LinkedIn Post Formatting Guide (2026)", description: "Bold, italic, bullets, emojis, whitespace, and post templates — everything you need to format posts that stop the scroll." },
  { slug: "best-linkedin-chrome-extensions", tag: "Tools", date: "Mar 1, 2026", readTime: "12 min", title: "7 Best LinkedIn Chrome Extensions in 2026 (Ranked)", description: "From formatting tools to analytics and AI — the 7 Chrome extensions every LinkedIn creator should have installed." },
  { slug: "linkedin-engagement-tips", tag: "Growth", date: "Apr 1, 2026", readTime: "14 min", title: "15 LinkedIn Engagement Tips That Actually Work in 2026", description: "Hooks, bullets, posting times, CTAs, and algorithm signals — 15 specific tips to increase LinkedIn post engagement." },
  { slug: "linkedin-text-formatter-review", tag: "Review", date: "May 1, 2026", readTime: "8 min", title: "LinkedIn Text Formatter Review (2026) — Is It Worth Installing?", description: "Honest review: features, pros, cons, alternatives, and verdict for the top LinkedIn formatting Chrome extension." },
  // Batch 2
  { slug: "linkedin-post-ideas", tag: "Content Ideas", date: "Jan 20, 2026", readTime: "15 min", title: "50 LinkedIn Post Ideas for 2026 (That Actually Get Engagement)", description: "50 proven post ideas grouped by category — each with a ready-to-use bold hook and formatting tips." },
  { slug: "linkedin-headline-tips", tag: "Profile", date: "Feb 10, 2026", readTime: "9 min", title: "LinkedIn Headline Tips: Write a Headline That Gets You Noticed", description: "6 proven headline formulas, bold text tips, and examples by profession to make your profile impossible to ignore." },
  { slug: "linkedin-italic-text", tag: "Formatting", date: "Feb 20, 2026", readTime: "5 min", title: "How to Italicise Text on LinkedIn (2026) — Complete Guide", description: "No italic button on LinkedIn? Every method to add italic formatting — plus the Chrome extension that does it instantly." },
  { slug: "linkedin-bullet-points-guide", tag: "Formatting", date: "Mar 10, 2026", readTime: "7 min", title: "LinkedIn Bullet Points Guide 2026 — Add Bullets to Any Post", description: "10+ bullet styles, best practices, and one-click formatting — the complete guide to bullet points on LinkedIn." },
  { slug: "linkedin-algorithm-2026", tag: "Strategy", date: "Mar 20, 2026", readTime: "11 min", title: "How the LinkedIn Algorithm Works in 2026 — Complete Breakdown", description: "The 4 distribution stages, 7 ranking signals, how formatting affects reach, and what LinkedIn penalises in 2026." },
  { slug: "linkedin-personal-branding", tag: "Personal Brand", date: "Apr 10, 2026", readTime: "12 min", title: "LinkedIn Personal Branding Guide 2026 — Build a Brand That Opens Doors", description: "The 5 pillars, profile optimisation, content strategy, and formatting tips to build a LinkedIn brand that attracts opportunities." },
  { slug: "linkedin-comment-strategy", tag: "Strategy", date: "Apr 20, 2026", readTime: "8 min", title: "LinkedIn Comment Strategy 2026 — Grow Through Comments", description: "How top LinkedIn creators use strategic commenting to grow audiences, build relationships, and boost their own posts." },
  { slug: "linkedin-post-templates", tag: "Templates", date: "May 10, 2026", readTime: "13 min", title: "10 LinkedIn Post Templates That Get Results (Copy & Use)", description: "10 proven copy-ready LinkedIn post templates — hook, list, story, contrarian, before/after, and more." },
  { slug: "linkedin-profile-formatting", tag: "Profile", date: "May 20, 2026", readTime: "10 min", title: "LinkedIn Profile Formatting Guide 2026 — Bold, Bullets & More", description: "How to format every section of your LinkedIn profile — headline, About, Experience — with bold text and bullets." },
  { slug: "linkedin-vs-twitter-formatting", tag: "Comparison", date: "Jun 1, 2026", readTime: "9 min", title: "LinkedIn vs Twitter Formatting: Key Differences & How to Adapt", description: "Post length, bold text, hashtags, links, tone — how LinkedIn and Twitter formatting differ and how to repurpose content." },
];

export default function BlogIndex() {
  return (
    <div className="blog-index">
      <header className="blog-index-header">
        <p style={{ textAlign: "center", fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--ink-soft)", marginBottom: "12px" }}>
          Resources for LinkedIn creators
        </p>
        <h1>LinkedIn Formatter Blog</h1>
        <p>Formatting guides, engagement tips, tool reviews, and growth strategies — everything you need to get more from LinkedIn.</p>
      </header>

      <div className="blog-grid">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-card">
            <div className="blog-card-meta">
              <span className="blog-card-tag">{post.tag}</span>
              <span className="blog-card-date">{post.date} · {post.readTime} read</span>
            </div>
            <h2>{post.title}</h2>
            <p>{post.description}</p>
            <div className="blog-card-read" style={{ marginTop: "14px" }}>Read article →</div>
          </Link>
        ))}
      </div>
    </div>
  );
}