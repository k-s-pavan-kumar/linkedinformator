import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LinkedIn Headline Tips: Write a Headline That Gets You Noticed (2026)",
  description:
    "How to write a LinkedIn headline that attracts recruiters, clients, and opportunities — with formulas, examples, and formatting tips for bold text in your headline.",
  keywords: [
    "linkedin headline tips",
    "best linkedin headline",
    "linkedin headline examples",
    "how to write linkedin headline",
    "linkedin profile headline",
    "linkedin headline formula",
    "bold text linkedin headline",
  ],
  openGraph: {
    title: "LinkedIn Headline Tips: Write a Headline That Gets You Noticed",
    description: "Proven headline formulas, examples, and bold text tips to make your LinkedIn profile stand out in search.",
    type: "article",
    publishedTime: "2026-02-10T00:00:00Z",
  },
  alternates: { canonical: "https://linkedinformator.com/blog/linkedin-headline-tips" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "LinkedIn Headline Tips: Write a Headline That Gets You Noticed (2026)",
  description: "How to write a compelling LinkedIn headline using proven formulas, with formatting tips and bold text examples.",
  author: { "@type": "Organization", name: "LinkedIn Formatter" },
  publisher: { "@type": "Organization", name: "LinkedIn Formatter", url: "https://linkedinformator.com" },
  datePublished: "2026-02-10",
  mainEntityOfPage: "https://linkedinformator.com/blog/linkedin-headline-tips",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What should my LinkedIn headline say?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your LinkedIn headline should answer three questions: Who you help, what you help them achieve, and how you do it differently. The most effective formula is: [Role/Identity] helping [audience] achieve [outcome] via [method or differentiator]. Avoid vague titles like 'Passionate Professional' — be specific about what you do and for whom.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use bold text in my LinkedIn headline?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Unicode bold characters render correctly in the LinkedIn headline field. You can use the LinkedIn Text Formatter Chrome extension to apply bold formatting to specific words in your headline, making key terms stand out in search results and on your profile card.",
      },
    },
    {
      "@type": "Question",
      name: "How long should a LinkedIn headline be?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "LinkedIn allows up to 220 characters in your headline. In search results, roughly 120 characters are visible before truncation. Aim for your most important information in the first 100–120 characters, with supporting detail after.",
      },
    },
    {
      "@type": "Question",
      name: "Should I use my job title as my LinkedIn headline?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Only if your job title is immediately clear and compelling to your target audience. Most job titles (e.g., 'Senior Manager') are vague. A better approach: describe who you help and what outcome you create, with your title as supporting context rather than the headline itself.",
      },
    },
  ],
};

const formulas = [
  {
    name: "The Outcome Formula",
    structure: "[Role] helping [audience] achieve [specific outcome]",
    example: "Product Designer helping SaaS founders reduce churn through better onboarding",
    works: "Recruiters and clients immediately understand your value. Outcome-focused language beats title-focused language.",
  },
  {
    name: "The Niche Expert Formula",
    structure: "[Specific niche] [role] | [credential or proof]",
    example: "B2B SaaS Copywriter | $40M+ in pipeline generated for 60+ clients",
    works: "Numbers add instant credibility. The niche qualifier makes you memorable over generalists.",
  },
  {
    name: "The Problem-Solver Formula",
    structure: "I help [audience] [solve problem] without [common frustration]",
    example: "I help startup founders hire senior engineers without paying agency fees",
    works: "The 'without [pain point]' structure is conversational and memorable. It sounds human, not corporate.",
  },
  {
    name: "The Authority + CTA Formula",
    structure: "[Credential] | [What you do] | [What to do next]",
    example: "Former Google PM | Building ProductHQ | DM me if you're scaling a B2B product",
    works: "The call-to-action turns your headline into a lead generation tool, not just a label.",
  },
  {
    name: "The Transformation Formula",
    structure: "Helping [audience] go from [before state] to [after state]",
    example: "Helping mid-career professionals go from overlooked to promoted in 90 days",
    works: "Before/after framing is immediately relatable. Readers self-identify and want to know more.",
  },
  {
    name: "The Bold Personal Brand Formula",
    structure: "[Bold claim] | [Supporting evidence] | [Who it's for]",
    example: "𝗟𝗶𝗻𝗸𝗲𝗱𝗜𝗻'𝘀 𝗧𝗼𝗽 𝗩𝗼𝗶𝗰𝗲 𝗶𝗻 𝗠𝗮𝗿𝗸𝗲𝘁𝗶𝗻𝗴 | 200K followers | Writing about growth every week",
    works: "Bold Unicode in the headline makes you visually distinct in search results and the feed.",
  },
];

const mistakes = [
  { mistake: "Using your job title only", fix: "Add who you help and what outcome you create" },
  { mistake: "'Passionate about...' or 'Experienced in...'", fix: "Show proof, not adjectives. Numbers beat adjectives." },
  { mistake: "Listing every skill with pipes (|)", fix: "Tell a story of who you help, not a keyword dump" },
  { mistake: "Not using your 220 characters", fix: "Your headline is free real estate — use all of it" },
  { mistake: "Generic titles like 'Entrepreneur' or 'Consultant'", fix: "Niche it: 'E-commerce Consultant for DTC brands under $10M'" },
  { mistake: "No differentiation from everyone else in your role", fix: "Add your unique angle: methodology, audience, credential, or contrarian take" },
];

export default function LinkedInHeadlineTips() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <article className="blog-article">
        <header className="blog-header">
          <div className="blog-meta">
            <span className="blog-tag">Profile Optimisation</span>
            <time dateTime="2026-02-10">February 10, 2026</time>
            <span>·</span>
            <span>9 min read</span>
          </div>
          <h1>LinkedIn Headline Tips: Write a Headline That Gets You Noticed in 2026</h1>
          <p className="blog-lead">
            Your LinkedIn headline appears in search results, connection requests, comment
            threads, and the feed. It is often the first — and only — thing someone reads
            about you. Here is how to make it impossible to ignore.
          </p>
          <div className="blog-quick-answer">
            <strong>⚡ Quick Answer:</strong> The best LinkedIn headlines answer: who you
            help, what outcome you create, and what makes you different. Use bold Unicode
            text (via{" "}
            <a href="https://linkedinformator.com">LinkedIn Text Formatter</a>) to make
            key words stand out in search results.
          </div>
        </header>

        <nav className="blog-toc" aria-label="Table of contents">
          <p className="toc-title">In this guide</p>
          <ol>
            <li><a href="#why-headline-matters">Why your headline is your most important LinkedIn field</a></li>
            <li><a href="#formulas">6 proven LinkedIn headline formulas</a></li>
            <li><a href="#bold-headline">How to use bold text in your LinkedIn headline</a></li>
            <li><a href="#mistakes">6 headline mistakes to stop making</a></li>
            <li><a href="#by-profession">Headline examples by profession</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ol>
        </nav>

        <div className="blog-body">
          <section id="why-headline-matters">
            <h2>Why Your Headline Is Your Most Important LinkedIn Field</h2>
            <p>
              Your LinkedIn headline appears in more places than any other profile field:
            </p>
            <ul>
              <li>Search results — when someone searches for a skill or role</li>
              <li>The feed — below your name on every post you publish</li>
              <li>Connection requests — the first thing people see when you connect</li>
              <li>Comments — next to your name on every comment you leave</li>
              <li>LinkedIn notifications — when someone is alerted you engaged with their content</li>
            </ul>
            <p>
              Every post you write, every comment you leave, every connection request you
              send — your headline travels with it. It is your 24/7 personal pitch.
            </p>
            <p>
              LinkedIn allows <strong>220 characters</strong> in your headline. Most people
              use fewer than 60. The remaining 160 characters are free real estate most
              professionals leave empty.
            </p>
          </section>

          <section id="formulas">
            <h2>6 Proven LinkedIn Headline Formulas</h2>
            {formulas.map((f, i) => (
              <div key={i} className="idea-card">
                <div className="idea-number">{i + 1}</div>
                <div className="idea-content">
                  <h3>{f.name}</h3>
                  <div className="idea-hook">
                    <span className="idea-hook-label">Formula →</span>
                    <span className="idea-hook-text">{f.structure}</span>
                  </div>
                  <div className="idea-hook" style={{ marginTop: "8px" }}>
                    <span className="idea-hook-label">Example →</span>
                    <span className="idea-hook-text">{f.example}</span>
                  </div>
                  <div className="idea-tip">
                    <strong>💡 Why it works:</strong> {f.works}
                  </div>
                </div>
              </div>
            ))}
          </section>

          <section id="bold-headline">
            <h2>How to Use Bold Text in Your LinkedIn Headline</h2>
            <p>
              Unicode bold characters render correctly in the LinkedIn headline field — just
              like they do in posts. Bolding 1–3 key words in your headline makes them
              visually stand out in search results and on your profile card.
            </p>
            <h3>What to bold in your headline</h3>
            <ul>
              <li>Your primary credential or title (<strong>𝗣𝗿𝗼𝗱𝘂𝗰𝘁 𝗗𝗶𝗿𝗲𝗰𝘁𝗼𝗿</strong>)</li>
              <li>Your niche or specialisation (<strong>𝗕𝟮𝗕 𝗦𝗮𝗮𝗦</strong>)</li>
              <li>A key outcome or proof point (<strong>$𝟰𝟬𝗠+ 𝗽𝗶𝗽𝗲𝗹𝗶𝗻𝗲</strong>)</li>
            </ul>
            <h3>How to apply bold to your headline</h3>
            <ol className="blog-steps">
              <li>Install the free <a href="https://linkedinformator.com">LinkedIn Text Formatter</a> Chrome extension</li>
              <li>Go to your LinkedIn profile and click the pencil icon to edit your headline</li>
              <li>Type your headline in the field</li>
              <li>Select the words you want to bold</li>
              <li>Click the 𝗕 button in the formatter toolbar</li>
              <li>Save your profile — bold text is now live in your headline</li>
            </ol>
            <div className="blog-callout">
              <strong>Pro tip:</strong> Do not bold your entire headline. Bold 2–4 words
              maximum. The contrast between bold and regular text is what makes the bold
              words pop. If everything is bold, nothing is.
            </div>
          </section>

          <section id="mistakes">
            <h2>6 LinkedIn Headline Mistakes to Stop Making</h2>
            <div className="blog-table-wrap">
              <table>
                <thead>
                  <tr><th>❌ Mistake</th><th>✅ Fix</th></tr>
                </thead>
                <tbody>
                  {mistakes.map((m, i) => (
                    <tr key={i}>
                      <td>{m.mistake}</td>
                      <td>{m.fix}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section id="by-profession">
            <h2>LinkedIn Headline Examples by Profession</h2>

            <h3>Marketers</h3>
            <ul>
              <li>Content Marketer helping B2B SaaS companies reach $1M ARR through organic LinkedIn · 12K followers</li>
              <li><strong>𝗛𝗲𝗮𝗱 𝗼𝗳 𝗚𝗿𝗼𝘄𝘁𝗵</strong> at [Company] | Former HubSpot | Writing about SEO + content every week</li>
            </ul>

            <h3>Founders</h3>
            <ul>
              <li>Building [Product] — helping [audience] solve [problem] | $[X]K MRR | Previously [credential]</li>
              <li>Founder @ [Company] | Turned $5K into $2M in 18 months | Now teaching what worked</li>
            </ul>

            <h3>Job Seekers</h3>
            <ul>
              <li>Software Engineer (React + Node) | Open to senior roles at mission-driven startups | Previously Netflix</li>
              <li>Product Manager with 6 years in fintech | Seeking Head of Product roles | DM me</li>
            </ul>

            <h3>Consultants & Freelancers</h3>
            <ul>
              <li>LinkedIn Ghostwriter for B2B Founders | 50M+ impressions written | Booking clients for Q3</li>
              <li>UX Designer for healthcare startups | Reducing drop-off by 40% on average | Portfolio → Link</li>
            </ul>

            <h3>Career Coaches</h3>
            <ul>
              <li>I help mid-level professionals get promoted in 90 days without changing companies | 8K+ clients</li>
              <li><strong>𝗖𝗮𝗿𝗲𝗲𝗿 𝗖𝗼𝗮𝗰𝗵</strong> | Ex-McKinsey | Helping you negotiate your next offer | Free guide below</li>
            </ul>
          </section>

          <section id="faq">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-item">
              <h3>What should my LinkedIn headline say?</h3>
              <p>Answer three questions: Who you help, what outcome you create, and what makes you different. Avoid vague titles — be specific about your audience and value.</p>
            </div>
            <div className="faq-item">
              <h3>Can I use bold text in my LinkedIn headline?</h3>
              <p>Yes. Unicode bold characters render in the LinkedIn headline field. Use <a href="https://linkedinformator.com">LinkedIn Text Formatter</a> to apply bold to 2–4 key words in your headline.</p>
            </div>
            <div className="faq-item">
              <h3>How long should a LinkedIn headline be?</h3>
              <p>LinkedIn allows 220 characters. In search results, roughly 120 characters show before truncation. Front-load your most important information and use all 220 characters.</p>
            </div>
            <div className="faq-item">
              <h3>Should I use my job title as my LinkedIn headline?</h3>
              <p>Only if it's immediately clear and compelling to your target audience. Most job titles are too vague. Better to describe who you help and what you achieve, with your title as supporting context.</p>
            </div>
          </section>

          <div className="blog-cta">
            <h2>Make your headline impossible to ignore</h2>
            <p>LinkedIn Text Formatter lets you add bold text to your headline, About section, and posts — all in one free Chrome extension.</p>
            <a href="https://chrome.google.com/webstore" className="blog-cta-btn" target="_blank" rel="noopener noreferrer">Add to Chrome — Free →</a>
          </div>
        </div>
      </article>
    </>
  );
}