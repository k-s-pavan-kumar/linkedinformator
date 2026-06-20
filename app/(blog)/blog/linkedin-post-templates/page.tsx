import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "10 LinkedIn Post Templates That Get Results (Copy & Use)",
  description:
    "10 proven LinkedIn post templates — hook, list, story, contrarian, and more. Copy the structure, fill in your details, and post formatted content in minutes.",
  keywords: [
    "linkedin post templates",
    "linkedin post format templates",
    "linkedin content templates",
    "linkedin post structure",
    "copy linkedin post template",
    "linkedin writing templates",
    "linkedin post examples 2026",
  ],
  openGraph: {
    title: "10 LinkedIn Post Templates That Get Results",
    description: "Copy-ready LinkedIn post templates for hooks, lists, stories, contrarian takes, and more.",
    type: "article",
    publishedTime: "2026-05-10T00:00:00Z",
  },
  alternates: { canonical: "https://linkedinformator.com/blog/linkedin-post-templates" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "10 LinkedIn Post Templates That Get Results (Copy & Use)",
  description: "10 proven, copy-ready LinkedIn post templates with formatting guidance for maximum engagement.",
  author: { "@type": "Organization", name: "LinkedIn Formatter" },
  publisher: { "@type": "Organization", name: "LinkedIn Formatter", url: "https://linkedinformator.com" },
  datePublished: "2026-05-10",
  mainEntityOfPage: "https://linkedinformator.com/blog/linkedin-post-templates",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the best LinkedIn post template?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Hook + List + CTA template consistently performs best across industries. It starts with a bold, curiosity-triggering hook, delivers value via bullet points, and ends with a specific question or call to action. This format is scannable, easy to engage with, and signals organised thinking to both the reader and LinkedIn's algorithm.",
      },
    },
    {
      "@type": "Question",
      name: "How do I format a LinkedIn post template?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Use bold Unicode text for your opening hook line, bullet points for any list content, and clear whitespace between sections. The LinkedIn Text Formatter Chrome extension applies all formatting directly inside the LinkedIn composer — no copy-pasting to another tool required.",
      },
    },
  ],
};

const templates = [
  {
    name: "The Hook + List + CTA",
    best: "Evergreen tips, frameworks, lessons",
    engagement: "⭐⭐⭐⭐⭐",
    structure: `𝗛𝗼𝗼𝗸: [Bold, curiosity-triggering opening statement].

One sentence that earns the 'see more' click.

Here's what I've learned:

◆ [Point 1 — your strongest insight]
◆ [Point 2 — supporting evidence or example]
◆ [Point 3 — the unexpected angle]
◆ [Point 4 — actionable takeaway]
◆ [Point 5 — the memorable closer]

𝗪𝗵𝗶𝗰𝗵 𝗼𝗳 𝘁𝗵𝗲𝘀𝗲 𝗿𝗲𝘀𝗼𝗻𝗮𝘁𝗲𝘀 𝗺𝗼𝘀𝘁 𝘄𝗶𝘁𝗵 𝘆𝗼𝘂?`,
    tips: ["Bold the hook with Unicode — it stops the scroll", "Keep bullets to 1 idea each, max 2 lines", "End with a specific question, not a vague 'thoughts?'"],
  },
  {
    name: "The Story + Lesson",
    best: "Personal experiences, career moments, failures",
    engagement: "⭐⭐⭐⭐⭐",
    structure: `𝗜 [did something unexpected / made a mistake / had a realisation].

Here's what happened:

[2–3 sentences of setup — who, what, when]

[2–3 sentences of conflict or turning point]

[1–2 sentences of resolution]

The lesson I took:

𝘛𝘩𝘦 [key insight in one italic sentence that hits hard].

Have you experienced something similar? Drop it below. 👇`,
    tips: ["Be specific — a specific story is more relatable than a general one", "Italicise your lesson line for emphasis", "The more vulnerable, the higher the engagement"],
  },
  {
    name: "The Contrarian Take",
    best: "Challenging common advice, generating debate",
    engagement: "⭐⭐⭐⭐⭐",
    structure: `𝗘𝘃𝗲𝗿𝘆𝗼𝗻𝗲 𝗮𝗴𝗿𝗲𝗲𝘀 [common belief]. I don't.

Here's why I think [common belief] is wrong — and what I do instead:

𝗣𝗿𝗼𝗯𝗹𝗲𝗺 𝘄𝗶𝘁𝗵 [common belief]:
[2–3 sentences explaining the flaw]

𝗪𝗵𝗮𝘁 𝗜 𝗱𝗼 𝗶𝗻𝘀𝘁𝗲𝗮𝗱:
[2–3 sentences of your alternative approach]

𝗥𝗲𝘀𝘂𝗹𝘁:
[1–2 sentences of your outcome or evidence]

Agree or disagree? Tell me why. 👇`,
    tips: ["Pick a belief you genuinely disagree with — fake contrarianism reads as clickbait", "Bold the 'Problem' and 'What I do instead' headers to create clear structure", "Invite disagreement — the pushback comments boost reach"],
  },
  {
    name: "The Number List",
    best: "Resources, tips, tools, lessons",
    engagement: "⭐⭐⭐⭐",
    structure: `𝟭𝟬 [topic] that changed how I [work/think/lead/sell]:

→ [Item 1]
→ [Item 2]
→ [Item 3]
→ [Item 4]
→ [Item 5]
→ [Item 6]
→ [Item 7]
→ [Item 8]
→ [Item 9]
→ [Item 10]

𝗦𝗮𝘃𝗲 𝘁𝗵𝗶𝘀 𝗳𝗼𝗿 𝗹𝗮𝘁𝗲𝗿.
Which one do you already use?`,
    tips: ["The number in the hook ('10 tools') sets an expectation that makes readers stay", "Arrow bullets work best for list posts — directional and clean", "'Save this for later' in bold before your CTA increases saves — a strong algorithm signal"],
  },
  {
    name: "The Before / After",
    best: "Transformations, results, process improvements",
    engagement: "⭐⭐⭐⭐",
    structure: `𝗕𝗲𝗳𝗼𝗿𝗲: [The painful state — be specific]
𝗔𝗳𝘁𝗲𝗿: [The transformed state — equally specific]

Here's the exact shift that made the difference:

[3–5 sentences explaining the change, method, or decision]

The key insight: 𝘪𝘵 𝘸𝘢𝘴𝘯'𝘵 [what most people assume]. It was [the real reason].

What's one before/after shift you've made in your career?`,
    tips: ["Make the 'Before' as painful as possible — readers need to feel the contrast", "Bold 'Before' and 'After' so the structure is scannable at a glance", "The 'key insight' line in italic carries maximum emotional weight"],
  },
  {
    name: "The Myth Buster",
    best: "Correcting misconceptions, education",
    engagement: "⭐⭐⭐⭐",
    structure: `𝗠𝘆𝘁𝗵: [Common misconception]
𝗥𝗲𝗮𝗹𝗶𝘁𝘆: [The truth]

Most people believe [myth] because [reason it persists].

But here's what the data actually shows:

◆ [Fact 1 that contradicts the myth]
◆ [Fact 2 — supporting evidence]
◆ [Fact 3 — the implication]

The uncomfortable truth: [one-sentence summary]

What myth in your industry do you wish more people questioned?`,
    tips: ["Bold 'Myth' and 'Reality' — the contrast is the hook", "Back every claim with specifics — the more precise, the more credible", "The closing question should be broad enough that anyone in your field can answer it"],
  },
  {
    name: "The Mistake + Fix",
    best: "Lessons from failure, advice posts",
    engagement: "⭐⭐⭐⭐",
    structure: `𝗜 𝗺𝗮𝗱𝗲 𝗮 𝗺𝗶𝘀𝘁𝗮𝗸𝗲 𝘁𝗵𝗮𝘁 𝗰𝗼𝘀𝘁 𝗺𝗲 [specific cost — money, time, relationship].

Here's what I did, what went wrong, and what I'd do differently:

𝗪𝗵𝗮𝘁 𝗜 𝗱𝗶𝗱:
[2 sentences]

𝗪𝗵𝗮𝘁 𝘄𝗲𝗻𝘁 𝘄𝗿𝗼𝗻𝗴:
[2–3 sentences — be honest]

𝗪𝗵𝗮𝘁 𝗜'𝗱 𝗱𝗼 𝗱𝗶𝗳𝗳𝗲𝗿𝗲𝗻𝘁𝗹𝘆:
[2–3 sentences]

The lesson: 𝘺𝘰𝘶 𝘥𝘰𝘯'𝘵 𝘭𝘦𝘢𝘳𝘯 𝘧𝘳𝘰𝘮 𝘮𝘪𝘴𝘵𝘢𝘬𝘦𝘴 𝘢𝘶𝘵𝘰𝘮𝘢𝘵𝘪𝘤𝘢𝘭𝘭𝘺. You learn from reflecting on them.

What's a mistake you've made that taught you the most?`,
    tips: ["The specific cost in the hook ('cost me $12k') creates immediate curiosity", "Use bold headers (What I did / What went wrong) to create a clear 3-act structure", "Vulnerability drives comments — people share their own mistakes in response"],
  },
  {
    name: "The Industry Prediction",
    best: "Thought leadership, trend commentary",
    engagement: "⭐⭐⭐⭐",
    structure: `𝗠𝘆 𝗽𝗿𝗲𝗱𝗶𝗰𝘁𝗶𝗼𝗻 𝗳𝗼𝗿 [industry] in [year]: [bold, specific prediction].

Here's the reasoning:

◆ Signal 1: [evidence or trend you're observing]
◆ Signal 2: [supporting data point or anecdote]
◆ Signal 3: [third indicator that points the same direction]

𝗪𝗵𝗮𝘁 𝘁𝗵𝗶𝘀 𝗺𝗲𝗮𝗻𝘀 𝗳𝗼𝗿 𝗽𝗿𝗼𝗳𝗲𝘀𝘀𝗶𝗼𝗻𝗮𝗹𝘀 𝗶𝗻 𝘁𝗵𝗶𝘀 𝘀𝗽𝗮𝗰𝗲:
[2–3 sentences of practical implication]

Do you agree? What would you change about this prediction?`,
    tips: ["Be specific enough to be disagreeable — vague predictions get no engagement", "Bold each signal bullet's key term", "Prediction posts age well when you follow up later with 'I said this 6 months ago...'"],
  },
  {
    name: "The Gratitude + Lesson",
    best: "Career milestones, anniversaries, launches",
    engagement: "⭐⭐⭐",
    structure: `[Milestone]. I'm [emotion about it].

[1–2 sentences of what this milestone represents]

The [number] people/things/moments that made this possible:

✓ [Person or thing 1] — [one sentence why]
✓ [Person or thing 2] — [one sentence why]
✓ [Person or thing 3] — [one sentence why]

The biggest lesson from this journey:

𝘛𝘩𝘦 [insight] matters more than [what everyone focuses on].

Thank you to everyone who [supported / followed / read / shared].`,
    tips: ["Milestone posts perform best when the milestone is specific ($1M, 10K followers, 5 years)", "Checkmark bullets for gratitude lists feel warm and affirming", "Keep the gratitude authentic — readers detect formulaic thank-you posts immediately"],
  },
  {
    name: "The Quick Win",
    best: "Actionable tips, productivity, skills",
    engagement: "⭐⭐⭐",
    structure: `𝗔 [time] tip that will [specific outcome]:

[Tip in 1–2 sentences. Specific, actionable, no fluff.]

How to do it:

① [Step 1]
② [Step 2]
③ [Step 3]

𝗪𝗵𝘆 𝗶𝘁 𝘄𝗼𝗿𝗸𝘀: [1 sentence of the underlying principle]

Try it this week and tell me what happens. 👇`,
    tips: ["'[X-minute] tip' in the hook sets expectation of brevity — low-friction to read", "Numbered circle bullets (① ② ③) work perfectly for sequential steps", "The 'tell me what happens' CTA invites follow-up comments even days later"],
  },
];

export default function LinkedInPostTemplates() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <article className="blog-article">
        <header className="blog-header">
          <div className="blog-meta">
            <span className="blog-tag">Templates</span>
            <time dateTime="2026-05-10">May 10, 2026</time>
            <span>·</span>
            <span>13 min read</span>
          </div>
          <h1>10 LinkedIn Post Templates That Get Results (Copy & Use Today)</h1>
          <p className="blog-lead">
            Every high-performing LinkedIn post follows a structure. Once you know the
            structures, you never stare at a blank page again. Here are 10 proven templates
            — each with a copy-ready format, formatting tips, and engagement rating.
          </p>
          <div className="blog-quick-answer">
            <strong>⚡ How to use:</strong> Pick the template that fits your content. Fill
            in the brackets. Apply bold and bullets using{" "}
            <a href="https://linkedinformator.com">LinkedIn Text Formatter</a> — which
            includes all 10 templates built-in, ready to load into your composer.
          </div>
        </header>

        <nav className="blog-toc" aria-label="Table of contents">
          <p className="toc-title">10 templates</p>
          <ol>
            {templates.map((t, i) => (
              <li key={i}><a href={`#tpl-${i}`}>{t.name} — {t.best}</a></li>
            ))}
            <li><a href="#faq">FAQ</a></li>
          </ol>
        </nav>

        <div className="blog-body">
          {templates.map((t, i) => (
            <section key={i} id={`tpl-${i}`}>
              <div className="ext-header">
                <div className="idea-number" style={{ fontSize: "1.4rem", minWidth: 40, height: 40 }}>{i + 1}</div>
                <div>
                  <h2>{t.name}</h2>
                  <div className="ext-meta-row" style={{ marginTop: 6 }}>
                    <span className="ext-pill">{t.best}</span>
                    <span className="ext-pill">{t.engagement}</span>
                  </div>
                </div>
              </div>

              <div className="blog-template-preview" style={{ whiteSpace: "pre-line" }}>
                {t.structure}
              </div>

              <div className="blog-callout">
                <strong>Formatting tips:</strong>
                <ul style={{ marginTop: 8, paddingLeft: 20 }}>
                  {t.tips.map((tip, j) => <li key={j} style={{ marginBottom: 4, fontSize: "0.875rem" }}>{tip}</li>)}
                </ul>
              </div>
            </section>
          ))}

          <section id="faq">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-item">
              <h3>What is the best LinkedIn post template?</h3>
              <p>The Hook + List + CTA template consistently performs best across industries. It starts with a bold hook, delivers value via bullets, and ends with a specific question. It is scannable, easy to engage with, and algorithm-friendly.</p>
            </div>
            <div className="faq-item">
              <h3>How do I format a LinkedIn post template?</h3>
              <p>Use bold Unicode text for your hook, bullet points for list content, and whitespace between sections. <a href="https://linkedinformator.com">LinkedIn Text Formatter</a> applies all formatting directly inside the LinkedIn composer — and includes all 10 templates built-in.</p>
            </div>
          </section>

          <div className="blog-cta">
            <h2>All 10 templates built into your LinkedIn composer</h2>
            <p>LinkedIn Text Formatter includes every template above. Load any format into your composer in one click — then format with bold, bullets, and italic instantly. Free.</p>
            <a href="https://chrome.google.com/webstore" className="blog-cta-btn" target="_blank" rel="noopener noreferrer">Add to Chrome — Free →</a>
          </div>
        </div>
      </article>
    </>
  );
}