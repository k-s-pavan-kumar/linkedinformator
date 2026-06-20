import type { Metadata } from "next";

// ─── SEO METADATA ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "How to Bold Text on LinkedIn (2026) — The Complete Guide",
  description:
    "LinkedIn doesn't have a native bold button. Learn how to bold text on LinkedIn posts, comments, and headlines using Unicode — and the fastest Chrome extension to do it automatically.",
  keywords: [
    "how to bold text on linkedin",
    "linkedin bold text",
    "bold on linkedin post",
    "linkedin text formatting",
    "linkedin unicode bold",
    "linkedin formatter chrome extension",
  ],
  openGraph: {
    title: "How to Bold Text on LinkedIn (2026)",
    description:
      "No native bold button? No problem. Here's every method to bold text on LinkedIn — plus the Chrome extension that does it in one click.",
    type: "article",
    publishedTime: "2026-01-15T00:00:00Z",
    authors: ["LinkedIn Formatter Team"],
  },
  alternates: {
    canonical: "https://linkedinformator.com/blog/how-to-bold-text-on-linkedin",
  },
};

// ─── JSON-LD STRUCTURED DATA ──────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Bold Text on LinkedIn",
  description:
    "Step-by-step instructions to add bold formatting to LinkedIn posts and comments using Unicode characters or the LinkedIn Formatter Chrome extension.",
  step: [
    {
      "@type": "HowToStep",
      name: "Install LinkedIn Text Formatter",
      text: "Add the free LinkedIn Text Formatter extension from the Chrome Web Store.",
    },
    {
      "@type": "HowToStep",
      name: "Open LinkedIn and start a post",
      text: "Click 'Start a post' on your LinkedIn feed. The formatting toolbar appears automatically.",
    },
    {
      "@type": "HowToStep",
      name: "Type your text and select it",
      text: "Write your content in the composer, then highlight the words you want to bold.",
    },
    {
      "@type": "HowToStep",
      name: "Click the Bold button",
      text: "Click the 𝗕 button in the toolbar. Your selected text is instantly converted to Unicode bold.",
    },
    {
      "@type": "HowToStep",
      name: "Post your content",
      text: "Click Post. Readers see beautifully bolded text directly in the LinkedIn feed.",
    },
  ],
  tool: [
    {
      "@type": "HowToTool",
      name: "LinkedIn Text Formatter Chrome Extension",
      url: "https://linkedinformator.com",
    },
  ],
  totalTime: "PT2M",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does LinkedIn have native bold formatting?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. LinkedIn does not offer native bold, italic, or underline buttons in its post composer. To get bold text in LinkedIn posts, you must use Unicode mathematical bold characters — either via a third-party tool or by copy-pasting from a Unicode converter.",
      },
    },
    {
      "@type": "Question",
      name: "How do I bold text in a LinkedIn post?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Use a LinkedIn formatter tool like the LinkedIn Text Formatter Chrome extension. It adds a formatting toolbar directly inside LinkedIn's composer. Select your text, click 𝗕, and the extension converts it to Unicode bold characters that display as bold in the feed.",
      },
    },
    {
      "@type": "Question",
      name: "Will bold text show on mobile LinkedIn?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Unicode bold characters render correctly on both the LinkedIn iOS and Android apps, as well as on desktop browsers. The formatting is embedded in the text itself, not dependent on any platform feature.",
      },
    },
    {
      "@type": "Question",
      name: "Is it safe to use Unicode bold on LinkedIn?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Unicode bold characters are standard text characters — the same type used by LinkedIn itself in certain UI elements. They are not against LinkedIn's Terms of Service and have been widely used by creators for years.",
      },
    },
    {
      "@type": "Question",
      name: "What is the best free tool to bold text on LinkedIn?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "LinkedIn Text Formatter is the top-rated free Chrome extension for bolding and formatting LinkedIn posts. It works directly inside the LinkedIn composer with zero copy-paste friction.",
      },
    },
  ],
};

// ─── COMPONENT ────────────────────────────────────────────────────────────────
export default function HowToBoldOnLinkedIn() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <article className="blog-article">
        {/* ── HERO ── */}
        <header className="blog-header">
          <div className="blog-meta">
            <span className="blog-tag">LinkedIn Formatting</span>
            <time dateTime="2026-01-15">January 15, 2026</time>
            <span>·</span>
            <span>6 min read</span>
          </div>
          <h1>
            How to Bold Text on LinkedIn in 2026 — Every Method Explained
          </h1>
          <p className="blog-lead">
            LinkedIn has no native bold button. But your posts can still have
            beautiful bold headings, highlighted keywords, and structured
            formatting — if you know the trick. Here&apos;s everything you need
            to know.
          </p>
          <div className="blog-quick-answer">
            <strong>⚡ Quick Answer:</strong> Bold text on LinkedIn uses Unicode
            mathematical bold characters (e.g. <strong>𝗛𝗲𝗹𝗹𝗼</strong>). Use
            the free{" "}
            <a href="https://linkedinformator.com">
              LinkedIn Text Formatter Chrome extension
            </a>{" "}
            to apply bold in one click — directly inside the LinkedIn composer.
          </div>
        </header>

        {/* ── TOC ── */}
        <nav className="blog-toc" aria-label="Table of contents">
          <p className="toc-title">In this guide</p>
          <ol>
            <li>
              <a href="#why-no-bold">Why LinkedIn has no native bold button</a>
            </li>
            <li>
              <a href="#method-1">Method 1: LinkedIn Formatter Extension</a>
            </li>
            <li>
              <a href="#method-2">Method 2: Unicode copy-paste websites</a>
            </li>
            <li>
              <a href="#method-3">Method 3: Manual Unicode characters</a>
            </li>
            <li>
              <a href="#where-bold-works">
                Where bold text works (and doesn&apos;t) on LinkedIn
              </a>
            </li>
            <li>
              <a href="#tips">Pro tips for using bold effectively</a>
            </li>
            <li>
              <a href="#faq">Frequently asked questions</a>
            </li>
          </ol>
        </nav>

        {/* ── BODY ── */}
        <div className="blog-body">
          <section id="why-no-bold">
            <h2>Why LinkedIn Has No Native Bold Button</h2>
            <p>
              LinkedIn&apos;s post composer is intentionally plain. Unlike
              Medium, Notion, or even Twitter, LinkedIn strips most rich text
              from its posts to keep a uniform feed look. This was a deliberate
              product decision — but it left creators with no native way to
              emphasise text.
            </p>
            <p>
              The workaround the community discovered: <strong>Unicode</strong>.
              The Unicode standard includes entire alphabets of{" "}
              <em>mathematical bold</em>, <em>mathematical italic</em>, and
              other styled characters that look like formatted text — because
              they&apos;re technically different characters, not styled versions
              of regular letters. LinkedIn accepts and displays them normally.
            </p>
            <p>
              So{" "}
              <code>
                𝗛𝗲𝗹𝗹𝗼 (Unicode Mathematical Bold) ≠ Hello (regular ASCII)
              </code>
              — they just look the same on screen.
            </p>
          </section>

          <section id="method-1">
            <h2>Method 1: LinkedIn Text Formatter Extension (Recommended)</h2>
            <p>
              The fastest and most reliable way to bold text on LinkedIn is the{" "}
              <a href="https://linkedinformator.com">
                LinkedIn Text Formatter Chrome extension
              </a>
              . It installs in one click, requires no account, and adds a
              formatting toolbar directly inside your LinkedIn post composer.
            </p>

            <h3>Step-by-step: Bolding text with LinkedIn Text Formatter</h3>
            <ol className="blog-steps">
              <li>
                <strong>Install the extension</strong> from the Chrome Web
                Store — it&apos;s free, no sign-up required.
              </li>
              <li>
                <strong>Open LinkedIn</strong> and click{" "}
                <em>&quot;Start a post&quot;</em>. A new formatting toolbar
                appears at the top of the composer automatically.
              </li>
              <li>
                <strong>Write your post</strong> as normal. Type or paste your
                content into the composer.
              </li>
              <li>
                <strong>Select the text</strong> you want to bold — a headline,
                a keyword, a call to action.
              </li>
              <li>
                <strong>Click 𝗕</strong> in the toolbar. Your selected text
                instantly converts to Unicode bold characters.
              </li>
              <li>
                <strong>Post.</strong> Your followers see bold text directly in
                the feed — on desktop and mobile.
              </li>
            </ol>

            <div className="blog-callout">
              <strong>Why creators prefer this method:</strong> No tab
              switching. No copy-paste juggling. The toolbar lives inside
              LinkedIn, so formatting feels as natural as using Google Docs.
              You can apply bold, italic, bullets, and post templates without
              ever leaving the composer.
            </div>
          </section>

          <section id="method-2">
            <h2>Method 2: Unicode Converter Websites</h2>
            <p>
              Before browser extensions existed, creators used standalone
              Unicode converter websites. The workflow:
            </p>
            <ol className="blog-steps">
              <li>Open a site like yaytext.com or lingojam.com/BoldTextGenerator</li>
              <li>Type your text into their converter</li>
              <li>Copy the bold Unicode output</li>
              <li>Switch to LinkedIn and paste it into your composer</li>
            </ol>
            <p>
              <strong>Drawback:</strong> You break your writing flow every time
              you want to format. Tab switching and copy-pasting becomes tedious
              on longer posts. It also doesn&apos;t support live preview inside
              LinkedIn, so you can&apos;t see how your post looks until you
              paste it.
            </p>
          </section>

          <section id="method-3">
            <h2>Method 3: Manual Unicode Characters</h2>
            <p>
              Technically, you can copy and paste individual Unicode bold
              characters by hand. The Unicode block for Mathematical Bold starts
              at U+1D400. But this is impractical for any real post — you would
              need to replace every letter individually.
            </p>
            <p>
              This method is only mentioned for completeness. Nobody actually
              writes LinkedIn posts this way.
            </p>
          </section>

          <section id="where-bold-works">
            <h2>Where Bold Text Works (and Doesn&apos;t) on LinkedIn</h2>
            <div className="blog-table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Location</th>
                    <th>Unicode Bold Works?</th>
                    <th>Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>LinkedIn Posts (feed)</td>
                    <td className="green">✅ Yes</td>
                    <td>Full support. Bold renders on desktop + mobile.</td>
                  </tr>
                  <tr>
                    <td>LinkedIn Comments</td>
                    <td className="green">✅ Yes</td>
                    <td>Works perfectly in comment replies.</td>
                  </tr>
                  <tr>
                    <td>LinkedIn About section</td>
                    <td className="green">✅ Yes</td>
                    <td>Great for emphasising your value proposition.</td>
                  </tr>
                  <tr>
                    <td>LinkedIn Headline</td>
                    <td className="green">✅ Yes</td>
                    <td>Adds visual contrast on your profile card.</td>
                  </tr>
                  <tr>
                    <td>LinkedIn Messages (DMs)</td>
                    <td className="yellow">⚠️ Partially</td>
                    <td>Renders, but LinkedIn is testing native formatting here.</td>
                  </tr>
                  <tr>
                    <td>LinkedIn Articles</td>
                    <td className="red">❌ Not needed</td>
                    <td>Articles have native bold/italic in their editor.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="tips">
            <h2>Pro Tips for Using Bold Effectively on LinkedIn</h2>

            <h3>1. Bold your opening hook — nothing else in the first line</h3>
            <p>
              LinkedIn truncates posts after 3 lines with a &quot;…see more&quot; link.
              Your first line is prime real estate. A bold opening hook stops
              the scroll. Everything after can be plain text or selectively
              bolded.
            </p>

            <h3>2. Use bold for key facts and numbers</h3>
            <p>
              Readers skim. Bolding statistics (<strong>𝟯× more comments</strong>
              ), timeframes (<strong>𝗶𝗻 𝟯𝟬 𝗱𝗮𝘆𝘀</strong>), or outcomes makes
              your most important claims scannable without reading every word.
            </p>

            <h3>3. Don&apos;t bold entire paragraphs</h3>
            <p>
              Bold works because it creates contrast. If everything is bold,
              nothing is bold. Treat it like a highlighter: use it on 10–20% of
              your text, max.
            </p>

            <h3>4. Combine bold with bullet points</h3>
            <p>
              Bold headings paired with bullet-point lists are the highest-engagement
              format on LinkedIn. The structure is easy to scan, the bold adds
              visual hierarchy, and bullets signal &quot;organised thinker&quot; to
              readers.
            </p>

            <h3>5. Test how your post looks before publishing</h3>
            <p>
              The LinkedIn Text Formatter extension shows a live preview of your
              formatted post inside the composer — so you see exactly what
              followers will see before you hit Post.
            </p>
          </section>

          {/* ── FAQ ── */}
          <section id="faq">
            <h2>Frequently Asked Questions</h2>

            <div className="faq-item">
              <h3>Does LinkedIn have native bold formatting?</h3>
              <p>
                No. LinkedIn does not have a native bold button in its post
                composer. To get bold text in posts, you use Unicode mathematical
                bold characters via a third-party tool like LinkedIn Text
                Formatter, or by copy-pasting from a Unicode converter website.
              </p>
            </div>

            <div className="faq-item">
              <h3>How do I bold text in a LinkedIn post?</h3>
              <p>
                The easiest method is the{" "}
                <a href="https://linkedinformator.com">
                  LinkedIn Text Formatter Chrome extension
                </a>
                . Install it, open LinkedIn, start a post, select your text, and
                click the 𝗕 button. Your text is instantly converted to Unicode
                bold.
              </p>
            </div>

            <div className="faq-item">
              <h3>Will bold text show on mobile LinkedIn?</h3>
              <p>
                Yes. Unicode bold characters render correctly on both the
                LinkedIn iOS app and Android app, as well as on all desktop
                browsers. The formatting is embedded in the text itself — it
                doesn&apos;t depend on any platform feature.
              </p>
            </div>

            <div className="faq-item">
              <h3>Is it against LinkedIn&apos;s rules to use bold text?</h3>
              <p>
                No. Unicode bold characters are standard text — the same type
                used by LinkedIn itself in some UI elements. They are not against
                LinkedIn&apos;s Terms of Service and have been widely used by
                creators for years without issue.
              </p>
            </div>

            <div className="faq-item">
              <h3>What is the best free tool to bold text on LinkedIn?</h3>
              <p>
                LinkedIn Text Formatter is the top-rated free Chrome extension
                for formatting LinkedIn posts. It adds bold, italic, bullets,
                and post templates directly inside the LinkedIn composer — no
                copy-paste, no switching tabs.
              </p>
            </div>

            <div className="faq-item">
              <h3>
                Can I use bold text in LinkedIn comments and profile sections?
              </h3>
              <p>
                Yes. Unicode bold works in LinkedIn posts, comments, your About
                section, your Headline, and most other text fields on LinkedIn.
                It does not work in LinkedIn Articles, which have their own
                native rich-text editor.
              </p>
            </div>
          </section>

          {/* ── CTA ── */}
          <div className="blog-cta">
            <h2>Ready to format LinkedIn posts like a pro?</h2>
            <p>
              LinkedIn Text Formatter is free, installs in seconds, and works
              directly inside LinkedIn. No account. No credit card. 2,400+
              creators already use it.
            </p>
            <a
              href="https://chrome.google.com/webstore"
              className="blog-cta-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Add to Chrome — It&apos;s Free →
            </a>
          </div>
        </div>
      </article>
    </>
  );
}