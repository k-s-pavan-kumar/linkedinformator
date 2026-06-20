import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LinkedIn Profile Formatting Guide 2026 — Bold, Bullets & More",
  description:
    "How to format your LinkedIn profile with bold text, bullet points, and Unicode symbols — in your headline, About section, and Experience to stand out from every other profile.",
  keywords: [
    "linkedin profile formatting",
    "how to format linkedin profile",
    "linkedin about section formatting",
    "bold text linkedin profile",
    "linkedin profile tips",
    "linkedin profile optimization 2026",
    "linkedin profile bullets",
  ],
  openGraph: {
    title: "LinkedIn Profile Formatting Guide 2026",
    description: "Bold text, bullets, and structure for every section of your LinkedIn profile — step-by-step.",
    type: "article",
    publishedTime: "2026-05-20T00:00:00Z",
  },
  alternates: { canonical: "https://linkedinformator.com/blog/linkedin-profile-formatting" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Format Your LinkedIn Profile",
  description: "Step-by-step guide to adding bold text, bullets, and Unicode formatting to your LinkedIn headline, About section, and Experience.",
  step: [
    { "@type": "HowToStep", name: "Install LinkedIn Text Formatter", text: "Add the free Chrome extension — it works in profile fields as well as the post composer." },
    { "@type": "HowToStep", name: "Format your headline", text: "Edit your headline and bold 2–3 key words using Unicode for visual contrast in search results." },
    { "@type": "HowToStep", name: "Format your About section", text: "Open your About section, add a bold hook line, bullet your key achievements, and italicise your closing CTA." },
    { "@type": "HowToStep", name: "Format your Experience", text: "Lead each role with a bolded outcome. Use bullet points for responsibilities and achievements." },
    { "@type": "HowToStep", name: "Save and review on mobile", text: "Save your profile and check how it looks on the LinkedIn mobile app — formatting renders identically." },
  ],
  totalTime: "PT20M",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can you format text on a LinkedIn profile?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. LinkedIn profile fields — including the headline, About section, and Experience — accept Unicode characters including bold, italic, and bullet symbols. You can apply formatting using the LinkedIn Text Formatter Chrome extension, which works in profile editing fields as well as the post composer.",
      },
    },
    {
      "@type": "Question",
      name: "Does bold text work in the LinkedIn About section?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Unicode bold characters render correctly in the LinkedIn About section on both desktop and mobile. Bolding your opening line and key achievements makes your About section scannable and professional-looking compared to plain-text profiles.",
      },
    },
    {
      "@type": "Question",
      name: "How do I add bullet points to my LinkedIn profile?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Use Unicode bullet characters (◆, →, ✓, •) in your LinkedIn About section and Experience descriptions. The LinkedIn Text Formatter Chrome extension lets you insert any bullet style with one click — directly inside LinkedIn's profile editor.",
      },
    },
  ],
};

const sections = [
  {
    section: "Headline (220 characters)",
    why: "Appears everywhere on LinkedIn — posts, comments, search results, connection requests.",
    formatting: ["Bold 2–3 key words (role, niche, or proof point)", "Use | as a separator between clauses", "Do not bold your entire headline — use contrast"],
    before: "Senior Product Manager | SaaS | B2B | Growth | Agile | Leadership",
    after: "𝗦𝗿 𝗣𝗿𝗼𝗱𝘂𝗰𝘁 𝗠𝗮𝗻𝗮𝗴𝗲𝗿 helping B2B SaaS companies reduce churn through better onboarding | 𝟭𝟮 years in product | Previously Salesforce",
  },
  {
    section: "About Section (2,600 characters)",
    why: "Your longest free-text field. Most profiles use it as a CV summary — a missed opportunity.",
    formatting: [
      "Open with a bold hook line — one sentence that captures your value",
      "Use bullet points for your 3–5 key achievements or credentials",
      "Italicise your closing call-to-action",
      "Add line breaks between paragraphs for whitespace",
    ],
    before: "I am an experienced product manager with 12 years in B2B SaaS. I have worked at companies including Salesforce and HubSpot. I am passionate about building products that users love and driving business growth through data-driven decisions.",
    after: `𝗜 𝗵𝗲𝗹𝗽 𝗕𝟮𝗕 𝗦𝗮𝗮𝗦 𝗰𝗼𝗺𝗽𝗮𝗻𝗶𝗲𝘀 𝗿𝗲𝗱𝘂𝗰𝗲 𝗰𝗵𝘂𝗿𝗻 𝗯𝘆 𝗯𝘂𝗶𝗹𝗱𝗶𝗻𝗴 𝗼𝗻𝗯𝗼𝗮𝗿𝗱𝗶𝗻𝗴 𝗽𝗲𝗼𝗽𝗹𝗲 𝗮𝗰𝘁𝘂𝗮𝗹𝗹𝘆 𝗳𝗶𝗻𝗶𝘀𝗵.

12 years in product. Here's what I've shipped:

◆ Cut onboarding drop-off by 40% at Salesforce (2019–2022)
◆ Led the team that took HubSpot's NPS from 34 to 61 in 18 months
◆ Built and launched 3 products from 0 to $1M ARR

𝘐 𝘸𝘳𝘪𝘵𝘦 𝘢𝘣𝘰𝘶𝘵 𝘱𝘳𝘰𝘥𝘶𝘤𝘵 𝘢𝘯𝘥 𝘰𝘯𝘣𝘰𝘢𝘳𝘥𝘪𝘯𝘨 𝘩𝘦𝘳𝘦 𝟯× 𝘢 𝘸𝘦𝘦𝘬. 𝘍𝘰𝘭𝘭𝘰𝘸 𝘧𝘰𝘳 𝘱𝘳𝘢𝘤𝘵𝘪𝘤𝘢𝘭 𝘱𝘳𝘰𝘥𝘶𝘤𝘵 𝘵𝘢𝘬𝘦𝘴.`,
  },
  {
    section: "Experience Descriptions",
    why: "Most people write job descriptions. Top profiles write outcome stories.",
    formatting: [
      "Lead each role with a bold outcome sentence",
      "Use bullet points for responsibilities and achievements",
      "Bold your most impressive numbers",
      "Keep bullets to one idea each — no multi-line walls of text",
    ],
    before: "Responsible for product roadmap, stakeholder management, and leading a team of 5 engineers and 2 designers. Managed the entire product lifecycle from discovery to launch.",
    after: `𝗟𝗲𝗱 𝗮 𝘁𝗲𝗮𝗺 𝗼𝗳 𝟳 𝘁𝗼 𝗱𝗲𝗹𝗶𝘃𝗲𝗿 𝗮 𝟰𝟬% 𝗿𝗲𝗱𝘂𝗰𝘁𝗶𝗼𝗻 𝗶𝗻 𝗰𝗵𝘂𝗿𝗻 𝗶𝗻 𝟭𝟮 𝗺𝗼𝗻𝘁𝗵𝘀.

◆ Owned product roadmap for onboarding suite (3 products, 50K+ users)
◆ Reduced time-to-first-value from 14 days to 3 days
◆ Partnered with CS and Sales to align roadmap to revenue priorities
◆ Shipped 6 major releases with zero critical post-launch issues`,
  },
  {
    section: "Skills Section",
    why: "Skills appear in LinkedIn search — recruiter search filters use them.",
    formatting: [
      "No direct Unicode formatting available in skills field",
      "Strategy: order your top 3 skills to match the roles you want (these appear first)",
      "Get endorsements on your top 3 — LinkedIn surfaces endorsed skills in search",
    ],
    before: "Skills listed randomly with no strategic ordering",
    after: "Top 3 skills = exact match to target role keywords. Remaining skills ordered by relevance, not recency.",
  },
  {
    section: "Featured Section",
    why: "Appears above the fold on your profile — first thing visitors see after your header.",
    formatting: [
      "Pin 3 items maximum — quality over quantity",
      "First item should be your best post or most valuable external link",
      "Use the custom thumbnail feature to make featured items visually distinct",
    ],
    before: "No featured section, or featuring random old posts",
    after: "3 curated items: your highest-performing post, a media mention or article, and a link to your newsletter or website.",
  },
];

export default function LinkedInProfileFormatting() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <article className="blog-article">
        <header className="blog-header">
          <div className="blog-meta">
            <span className="blog-tag">Profile Optimisation</span>
            <time dateTime="2026-05-20">May 20, 2026</time>
            <span>·</span>
            <span>10 min read</span>
          </div>
          <h1>LinkedIn Profile Formatting Guide 2026 — Bold, Bullets & More</h1>
          <p className="blog-lead">
            Most LinkedIn profiles are plain text walls. The same Unicode formatting that
            makes your posts stand out works in every section of your profile too — your
            headline, About section, and Experience. Here is how to use it.
          </p>
          <div className="blog-quick-answer">
            <strong>⚡ Quick Answer:</strong> Unicode bold, italic, and bullet characters
            work in all LinkedIn profile fields. Use the free{" "}
            <a href="https://linkedinformator.com">LinkedIn Text Formatter</a> Chrome
            extension — it works in profile editing fields, not just the post composer.
          </div>
        </header>

        <nav className="blog-toc" aria-label="Table of contents">
          <p className="toc-title">Profile sections covered</p>
          <ol>
            {sections.map((s, i) => (
              <li key={i}><a href={`#sec-${i}`}>{s.section}</a></li>
            ))}
            <li><a href="#how-to-apply">How to apply formatting to your profile</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ol>
        </nav>

        <div className="blog-body">
          {sections.map((s, i) => (
            <section key={i} id={`sec-${i}`}>
              <h2>{s.section}</h2>
              <p className="blog-callout" style={{ background: "var(--accent-light)", borderColor: "rgba(10,102,194,0.2)" }}>
                <strong>Why it matters:</strong> {s.why}
              </p>

              <h3>Formatting tips</h3>
              <ul>
                {s.formatting.map((f, j) => <li key={j}>{f}</li>)}
              </ul>

              <h3>Before & After</h3>
              <div className="tip-example">
                <div className="example-bad">
                  <span className="example-label">❌ Typical profile</span>
                  <p style={{ whiteSpace: "pre-line", fontSize: "0.85rem" }}>{s.before}</p>
                </div>
                <div className="example-good">
                  <span className="example-label">✅ Formatted profile</span>
                  <p style={{ whiteSpace: "pre-line", fontSize: "0.85rem" }}>{s.after}</p>
                </div>
              </div>
            </section>
          ))}

          <section id="how-to-apply">
            <h2>How to Apply Formatting to Your LinkedIn Profile</h2>
            <ol className="blog-steps">
              <li>Install <a href="https://linkedinformator.com">LinkedIn Text Formatter</a> from the Chrome Web Store — free, no account</li>
              <li>Go to your LinkedIn profile and click the pencil (✏️) icon on any section</li>
              <li>Type or paste your content into the field</li>
              <li>Select the text you want to bold or italicise</li>
              <li>Click the 𝗕 or 𝘐 button in the toolbar — the formatter works in profile fields too</li>
              <li>For bullets, position your cursor and click your preferred bullet style</li>
              <li>Click Save — your formatted profile is live immediately</li>
            </ol>
            <div className="blog-callout">
              <strong>Mobile check:</strong> After saving, open your LinkedIn profile on
              your phone. All Unicode formatting renders identically on mobile — but the
              visual hierarchy may look different on a smaller screen. Adjust if needed.
            </div>
          </section>

          <section id="faq">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-item">
              <h3>Can you format text on a LinkedIn profile?</h3>
              <p>Yes. LinkedIn profile fields accept Unicode characters including bold, italic, and bullet symbols. <a href="https://linkedinformator.com">LinkedIn Text Formatter</a> works in profile editing fields as well as the post composer.</p>
            </div>
            <div className="faq-item">
              <h3>Does bold text work in the LinkedIn About section?</h3>
              <p>Yes. Unicode bold renders correctly in the About section on desktop and mobile. Bolding your opening line and key achievements makes your About section scannable and professional.</p>
            </div>
            <div className="faq-item">
              <h3>How do I add bullet points to my LinkedIn profile?</h3>
              <p>Use Unicode bullet characters (◆, →, ✓, •) in your About section and Experience descriptions. LinkedIn Text Formatter inserts any bullet style with one click — directly inside LinkedIn&apos;s profile editor.</p>
            </div>
            <div className="faq-item">
              <h3>Will profile formatting hurt my LinkedIn SEO?</h3>
              <p>No. Unicode characters are read by LinkedIn&apos;s search index as their plain-text equivalents. A bolded word 𝗣𝗿𝗼𝗱𝘂𝗰𝘁 𝗠𝗮𝗻𝗮𝗴𝗲𝗿 is still indexed as "Product Manager" for search purposes.</p>
            </div>
          </section>

          <div className="blog-cta">
            <h2>Format your entire LinkedIn profile today</h2>
            <p>LinkedIn Text Formatter works in posts, comments, and profile fields. Bold, italic, bullets — everywhere on LinkedIn. Free forever.</p>
            <a href="https://chrome.google.com/webstore" className="blog-cta-btn" target="_blank" rel="noopener noreferrer">Add to Chrome — Free →</a>
          </div>
        </div>
      </article>
    </>
  );
}