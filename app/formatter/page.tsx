import type { Metadata } from "next";
import FormatterPage from "@/components/FormatterPage";
import Footer from "@/components/Footer";

const BASE_URL = "https://linkedinformatter.com";

export const metadata: Metadata = {
  title: "Free LinkedIn Post Formatter — Bold, Italic, Bullets & More",
  description:
    "Format LinkedIn posts for free. Bold, italic, strikethrough, bullets, templates, emoji picker, readability score. Works in Chrome, Firefox, Edge, Safari, Brave. No install, no login.",
  keywords: [
    "free linkedin formatter",
    "linkedin post editor online",
    "linkedin bold text generator",
    "linkedin italic text",
    "linkedin bullet points tool",
    "linkedin post templates",
    "unicode text for linkedin",
    "format linkedin text online",
  ],
  alternates: {
    canonical: `${BASE_URL}/formatter`,
  },
  openGraph: {
    title: "Free LinkedIn Post Formatter — Bold, Italic, Bullets & More",
    description:
      "Bold, italic, bullets, templates, emoji picker — format LinkedIn posts right in your browser. Free, no login, works everywhere.",
    url: `${BASE_URL}/formatter`,
    type: "website",
    images: [
      {
        url: "/formatter/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Free LinkedIn Post Formatter",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free LinkedIn Post Formatter",
    description:
      "Bold, italic, bullets, templates, emoji picker — format LinkedIn posts right in your browser.",
    images: ["/formatter/opengraph-image"],
  },
};

// Formatter-page specific schemas
const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "LinkedIn Post Formatter",
  url: `${BASE_URL}/formatter`,
  applicationCategory: "ProductivityApplication",
  operatingSystem: "Any",
  browserRequirements: "Requires JavaScript. Works in Chrome, Firefox, Edge, Safari, Brave.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  description:
    "Free web-based LinkedIn post formatter. Add bold, italic, bullets, templates and more — no install required.",
  featureList: [
    "Bold, italic, bold-italic Unicode text",
    "5 bullet point styles",
    "Numbered lists",
    "6 post templates",
    "Emoji picker with search",
    "Readability grade score",
    "Hook preview (first 150 chars)",
    "Undo history",
    "Spacing cleaner",
    "Copy to clipboard",
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to add bold text to LinkedIn posts",
  description: "Step-by-step guide to formatting LinkedIn posts with bold, italic, and bullets using LinkedIn Formatter.",
  totalTime: "PT1M",
  supply: [{ "@type": "HowToSupply", name: "LinkedIn account" }],
  tool: [{ "@type": "HowToTool", name: "LinkedIn Formatter", url: `${BASE_URL}/formatter` }],
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Write your LinkedIn post",
      text: "Type or paste your LinkedIn post text into the LinkedIn Formatter editor.",
      url: `${BASE_URL}/formatter`,
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Select the text to format",
      text: "Highlight the words or lines you want to make bold, italic, or add bullets to.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Click a format button",
      text: "Click 𝗕 for bold, 𝘐 for italic, • for bullets, or choose from templates. The text transforms instantly.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Copy and paste into LinkedIn",
      text: "Click 'Copy to Clipboard', then paste directly into the LinkedIn post composer and publish.",
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Formatter", item: `${BASE_URL}/formatter` },
  ],
};

export default function Page() {
  return (
    <>
      {/* Page-specific JSON-LD */}
      {[webAppSchema, howToSchema, breadcrumbSchema].map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <main id="main-content">
        <FormatterPage />
      </main>
      <Footer />
    </>
  );
}
