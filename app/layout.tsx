import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ScrollReveal from "@/components/ScrollReveal";

const BASE_URL = "https://linkedinformatter.com";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0a66c2" },
    { media: "(prefers-color-scheme: dark)",  color: "#0a66c2" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "LinkedIn Text Formatter — Bold, Italic & Bullet Formatting for LinkedIn Posts",
    template: "%s | LinkedIn Formatter",
  },
  description:
    "Free LinkedIn post formatter. Add bold, italic, bullets, strikethrough and more using Unicode. Works in Chrome, Firefox, Edge, Safari & Brave — 2,400+ creators use it daily.",
  keywords: [
    "linkedin text formatter",
    "linkedin bold text",
    "linkedin italic text",
    "linkedin post formatting",
    "unicode text formatter",
    "linkedin bullet points",
    "linkedin post tool",
    "linkedin text generator",
    "bold text for linkedin",
    "format linkedin posts",
  ],

  alternates: {
    canonical: BASE_URL,
    languages: { "en-US": BASE_URL, "en-GB": BASE_URL },
  },

  authors: [{ name: "LinkedIn Formatter", url: BASE_URL }],
  creator: "LinkedIn Formatter",
  publisher: "LinkedIn Formatter",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    title: "LinkedIn Text Formatter — Format Posts That Get Noticed",
    description:
      "Bold, italic, bullets and more for LinkedIn — free tool, works in every browser.",
    url: BASE_URL,
    siteName: "LinkedIn Formatter",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "LinkedIn Text Formatter — Format Posts That Get Noticed",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "LinkedIn Text Formatter — Format Posts That Get Noticed",
    description:
      "Bold, italic, bullets and more for LinkedIn — free tool, works in every browser.",
    images: ["/opengraph-image"],
    creator: "@linkedinformatter",
    site: "@linkedinformatter",
  },

  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "LF Formatter",
  },

  // ✅ ADD FAVICON METADATA HERE
  icons: {
    icon: [
      { url: "/icons/favicon.ico", sizes: "any" },
      { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/icons/favicon.ico"],
    other: [
      {
        rel: "mask-icon",
        url: "/icons/icon.svg",
        color: "#0a66c2",
      },
      {
        rel: "manifest",
        url: "/manifest.webmanifest",
      },
    ],
  },

  verification: {
    google: "YOUR_GOOGLE_SITE_VERIFICATION_TOKEN",
  },

  appLinks: {
    web: { url: BASE_URL, should_fallback: true },
  },

  category: "technology",
};

// ── JSON-LD schemas ────────────────────────────────────────────────────────────

const softwareAppSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": `${BASE_URL}/#software`,
  name: "LinkedIn Text Formatter",
  alternateName: ["LF Formatter", "LinkedIn Formatter"],
  applicationCategory: "ProductivityApplication",
  applicationSubCategory: "Text Editor",
  operatingSystem: "Chrome, Firefox, Edge, Safari, Brave, Any Browser",
  url: BASE_URL,
  downloadUrl: "https://chrome.google.com/webstore",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    priceValidUntil: "2026-12-31",
  },
  description:
    "Format LinkedIn posts with bold, italic, strikethrough, bullets, and more using Unicode characters. Free browser extension and web tool.",
  featureList: [
    "Bold and italic Unicode text",
    "Bullet points and numbered lists",
    "Post templates",
    "Readability scoring",
    "Hook preview",
    "Draft saving",
    "Emoji picker",
  ],
  screenshot: `${BASE_URL}/opengraph-image`,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    ratingCount: "214",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      author: { "@type": "Person", name: "Anika K." },
      reviewBody:
        "The only LinkedIn formatter that works directly in the composer. Zero friction.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      author: { "@type": "Person", name: "Marcus R." },
      reviewBody:
        "Templates alone are worth it. Went from blank page to publishing in 10 minutes.",
    },
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  url: BASE_URL,
  name: "LinkedIn Text Formatter",
  description: "Free LinkedIn post formatting tool — bold, italic, bullets and more.",
  publisher: { "@id": `${BASE_URL}/#organization` },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${BASE_URL}/formatter?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${BASE_URL}/#organization`,
  name: "LinkedIn Formatter",
  url: BASE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${BASE_URL}/icons/android-chrome-512x512.png`,
    width: 512,
    height: 512,
  },
  sameAs: [
    "https://chrome.google.com/webstore",
    "https://addons.mozilla.org",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does LinkedIn support bold and italic text?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "LinkedIn doesn't have a native bold/italic button. However, you can use Unicode mathematical characters that visually appear as bold or italic and render perfectly in LinkedIn's feed on every device. LinkedIn Formatter does exactly that for free.",
      },
    },
    {
      "@type": "Question",
      name: "Is the LinkedIn formatter free to use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, 100% free. The web formatter works in any browser without an account. The browser extensions for Chrome, Firefox, Edge, and Brave are also free forever.",
      },
    },
    {
      "@type": "Question",
      name: "Will formatted text display correctly for all LinkedIn users?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The bold, italic, and bullet characters are standard Unicode symbols and display correctly for all LinkedIn users on desktop and mobile regardless of device or browser.",
      },
    },
    {
      "@type": "Question",
      name: "Which browsers does LinkedIn Formatter support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The browser extension works on Chrome, Firefox, Edge, and Brave. Safari extension is coming soon. The web formatter at linkedinformatter.com/formatter works on every browser including Safari and mobile browsers.",
      },
    },
    {
      "@type": "Question",
      name: "How do I use bold text on LinkedIn?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Type your text in LinkedIn Formatter, select the words you want to bold, and click the Bold (𝗕) button. The tool converts your text to Unicode bold characters that appear bold in LinkedIn posts. Then copy and paste into LinkedIn.",
      },
    },
    {
      "@type": "Question",
      name: "Does LinkedIn Formatter work on mobile?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The web formatter at linkedinformatter.com/formatter is fully mobile-responsive. Browser extensions require desktop browsers as mobile browsers don't support extensions.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: BASE_URL,
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <head>
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* ✅ Favicon and icons - these are now handled by metadata, but kept for completeness */}
        {/* The metadata icons configuration above handles these, but you can keep these for redundancy */}
        <link rel="icon" href="/icons/favicon.ico" sizes="any" />
        <link rel="icon" href="/icons/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        
        {/* ✅ Android Chrome icons */}
        <link rel="icon" type="image/png" sizes="192x192" href="/icons/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/icons/android-chrome-512x512.png" />

        {/* ✅ Additional favicon sizes */}
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />

        {/* JSON-LD — all schemas */}
        {[softwareAppSchema, websiteSchema, organizationSchema, faqSchema, breadcrumbSchema].map(
          (schema, i) => (
            <script
              key={i}
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
          )
        )}
      </head>
      <body>
        <ScrollReveal />
        <Navbar />
        {children}
      </body>
    </html>
  );
}