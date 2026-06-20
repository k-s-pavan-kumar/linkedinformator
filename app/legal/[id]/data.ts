export type PolicySection = {
  label: string;
  heading: string;
  body: string[];
  highlight?: {
    variant: "info" | "warn" | "rose" | "purple";
    content: string;
  };
  list?: {
    variant: "check" | "cross" | "numbered";
    items: string[];
  };
  cards?: {
    icon: string;
    title: string;
    description: string;
  }[];
};

export type Policy = {
  id: string;
  title: string;
  tagLabel: string;
  tagVariant: "green" | "amber" | "rose";
  description: string;
  effectiveDate: string;
  lastUpdated: string;
  sections: PolicySection[];
};

export const policies: Policy[] = [
  {
    id: "privacy-policy",
    title: "Privacy Policy",
    tagLabel: "Privacy First",
    tagVariant: "green",
    description:
      "We built LinkedIn Text Formatter with a simple principle: your data is yours. This policy explains exactly what we collect, why, and what we never touch.",
    effectiveDate: "January 1, 2026",
    lastUpdated: "June 2026",
    sections: [
      {
        label: "Overview",
        heading: "The short version",
        body: [],
        highlight: {
          variant: "info",
          content:
            "LinkedIn Text Formatter is a 100% local extension. All text formatting happens in your browser. We do not collect, transmit, or store any of your LinkedIn content, personal data, or usage activity on any external server.",
        },
      },
      {
        label: "Data Collection",
        heading: "What we do not collect",
        body: [
          "The following data is never accessed, stored, or transmitted by LinkedIn Text Formatter:",
        ],
        list: {
          variant: "cross",
          items: [
            "Your LinkedIn profile information, posts, or messages",
            "Any text you type or format using the extension",
            "Your browsing history or activity on LinkedIn",
            "Your name, email address, or any personal identifiers",
            "IP address, location, or device fingerprint",
            "Cookies or session tokens from LinkedIn",
          ],
        },
      },
      {
        label: "Local Storage",
        heading: "What stays on your device",
        body: [
          "The extension may store the following data locally using Chrome's chrome.storage.local API — this data never leaves your browser:",
        ],
        list: {
          variant: "check",
          items: [
            "Your formatting preferences and toggle states (e.g., bold, italic enabled)",
            "Custom text templates or shortcuts you create",
            "Extension settings such as theme or toolbar position",
          ],
        },
      },
      {
        label: "Permissions",
        heading: "Why we request permissions",
        body: [
          "The extension requests only the minimum permissions necessary to function:",
        ],
        list: {
          variant: "check",
          items: [
            "activeTab — to detect when you are on a LinkedIn page and activate the toolbar",
            "scripting — to inject the formatting toolbar into the LinkedIn text editor",
            "storage — to save your formatting preferences locally on your device",
          ],
        },
      },
      {
        label: "Third Parties",
        heading: "No third-party data sharing",
        body: [
          "LinkedIn Text Formatter does not integrate any third-party analytics, advertising SDKs, tracking pixels, or telemetry libraries. There are no external services receiving data about your usage of this extension.",
          "We are not affiliated with, endorsed by, or partnered with LinkedIn or Microsoft in any capacity.",
        ],
      },
      {
        label: "Your Rights",
        heading: "You are always in control",
        body: [
          "Since we collect no personal data, there is nothing for us to delete, export, or correct on our end. However, you retain full control over locally stored preferences:",
        ],
        list: {
          variant: "check",
          items: [
            "Uninstall the extension to remove all locally stored data",
            "Clear extension data via Chrome Settings → Extensions → LinkedIn Text Formatter → Clear Data",
            "Reset preferences from within the extension's settings panel",
          ],
        },
      },
      {
        label: "Updates",
        heading: "Policy changes",
        body: [
          "If we ever change this policy in a meaningful way (for example, if a future version adds analytics), we will update the effective date at the top of this page and note the change in the Chrome Web Store release notes.",
          "Continued use of the extension after any changes constitutes acceptance of the revised policy.",
        ],
      },
    ],
  },
  {
    id: "terms-of-service",
    title: "Terms of Service",
    tagLabel: "Legal Agreement",
    tagVariant: "amber",
    description:
      "By installing or using LinkedIn Text Formatter, you agree to these terms. They're plain English and protect both you and us.",
    effectiveDate: "January 1, 2026",
    lastUpdated: "June 2026",
    sections: [
      {
        label: "Acceptance",
        heading: "Agreeing to these terms",
        body: [
          "By installing LinkedIn Text Formatter from the Chrome Web Store (or any other browser extension store), you agree to be bound by these Terms of Service. If you do not agree, please uninstall the extension.",
        ],
        highlight: {
          variant: "info",
          content:
            "These terms apply to the LinkedIn Text Formatter browser extension (\"the Extension\"), developed and maintained independently. This is not a product of LinkedIn Corporation or Microsoft.",
        },
      },
      {
        label: "The Extension",
        heading: "What LinkedIn Text Formatter does",
        body: [
          "LinkedIn Text Formatter is a browser extension that enhances the LinkedIn post and comment editor with rich text formatting options — including bold, italic, underline, strikethrough, and special Unicode character styles. All processing occurs locally within your browser.",
          "The Extension operates by injecting UI components into LinkedIn's web interface. It does not automate posting, send messages on your behalf, scrape data, or perform any actions outside of text styling.",
        ],
      },
      {
        label: "Permitted Use",
        heading: "What you may do",
        list: {
          variant: "numbered",
          items: [
            "Use the Extension for personal, professional, or commercial LinkedIn content creation",
            "Install the Extension on multiple devices you personally own or control",
            "Share feedback, bug reports, and feature requests with the development team",
            "Uninstall and reinstall the Extension at any time",
          ],
        },
        body: [],
      },
      {
        label: "Restrictions",
        heading: "What you may not do",
        body: [],
        list: {
          variant: "numbered",
          items: [
            "Reverse-engineer, decompile, or attempt to extract the source code of the Extension for redistribution",
            "Modify and redistribute the Extension under the same or a similar name",
            "Use the Extension in ways that violate LinkedIn's own Terms of Service or Community Guidelines",
            "Use the Extension to generate or distribute spam, misleading content, or content that violates applicable laws",
            "Attempt to exploit the Extension's browser permissions to access data beyond its intended scope",
          ],
        },
        highlight: {
          variant: "warn",
          content:
            "You are solely responsible for the content you publish on LinkedIn using this Extension. The Extension merely formats text — editorial decisions are yours alone.",
        },
      },
      {
        label: "LinkedIn Compatibility",
        heading: "Third-party platform dependency",
        body: [
          "LinkedIn Text Formatter injects into LinkedIn's web interface, which is a third-party platform we do not control. LinkedIn may change its platform at any time, which could cause the Extension to malfunction, display incorrectly, or stop working entirely.",
          "We make no guarantee that the Extension will remain compatible with LinkedIn's interface across all future updates. We will make reasonable efforts to release compatibility updates in a timely manner, but cannot commit to a specific timeline.",
        ],
      },
      {
        label: "Intellectual Property",
        heading: "Ownership",
        body: [
          "The Extension, including its code, design, icons, and documentation, is the intellectual property of its developer. All rights not expressly granted in these Terms are reserved.",
          "\"LinkedIn\" is a trademark of LinkedIn Corporation. We are not affiliated with, endorsed by, or sponsored by LinkedIn or Microsoft. Use of the LinkedIn name here is purely descriptive of the platform our Extension works with.",
        ],
      },
      {
        label: "Availability",
        heading: "Service continuity",
        body: [
          'The Extension is provided on an "as is" basis. We reserve the right to update, modify, discontinue, or remove the Extension at any time without prior notice. We may release new versions with different features or changed behavior.',
          "Automatic updates via the Chrome Web Store may be applied to your installation. If you wish to pin a specific version, you may disable automatic extension updates in your browser settings.",
        ],
      },
      {
        label: "Limitation of Liability",
        heading: "Our liability to you",
        body: [
          "To the fullest extent permitted by applicable law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of or inability to use the Extension — including but not limited to lost content, account issues on LinkedIn, or any interaction with LinkedIn's platform.",
          "Our total liability, if any, shall not exceed the amount you paid for the Extension. As the Extension is offered free of charge, this limit is zero.",
        ],
      },
      {
        label: "Changes",
        heading: "Updates to these terms",
        body: [
          'We may update these Terms of Service at any time. Changes will be reflected by updating the "Last updated" date above. Material changes will be noted in the Chrome Web Store update notes. Continued use of the Extension after such changes constitutes your acceptance of the revised terms.',
        ],
      },
      {
        label: "Governing Law",
        heading: "Jurisdiction",
        body: [
          "These Terms are governed by and construed in accordance with the laws of India, without regard to conflict of law principles. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts in Hyderabad, Telangana, India.",
        ],
      },
    ],
  },
  {
    id: "disclaimer",
    title: "Disclaimer",
    tagLabel: "Important Notices",
    tagVariant: "rose",
    description:
      "Key clarifications about what LinkedIn Text Formatter is, what it isn't, and where its responsibilities begin and end.",
    effectiveDate: "January 1, 2026",
    lastUpdated: "June 2026",
    sections: [
      {
        label: "No Affiliation",
        heading: "Independent extension — not made by LinkedIn",
        body: [
          "The LinkedIn name, logo, and platform are trademarks and property of LinkedIn Corporation. We reference them solely to describe the platform our Extension is designed to work with. Any resemblance to LinkedIn's own branding is purely functional and descriptive.",
        ],
        highlight: {
          variant: "rose",
          content:
            "LinkedIn Text Formatter is an independent third-party tool. It is not affiliated with, endorsed by, sponsored by, or in any way officially connected to LinkedIn Corporation, Microsoft, or any of their subsidiaries or affiliates.",
        },
      },
      {
        label: "As-Is Provision",
        heading: "No warranties",
        body: [
          'LinkedIn Text Formatter is provided "as is" and "as available" without any warranty of any kind, express or implied. We specifically disclaim the following:',
        ],
        cards: [
          {
            icon: "🔄",
            title: "Uninterrupted Use",
            description:
              "We do not guarantee the Extension will work without interruption, error, or downtime.",
          },
          {
            icon: "🔗",
            title: "LinkedIn Compatibility",
            description:
              "LinkedIn may update its interface at any time, which can break extension functionality with no prior warning.",
          },
          {
            icon: "🛡️",
            title: "Security Guarantee",
            description:
              "While we follow best practices, we cannot guarantee the Extension is free from all vulnerabilities in every environment.",
          },
          {
            icon: "📋",
            title: "Policy Compliance",
            description:
              "We make no guarantee that using formatting on LinkedIn will not affect your account standing under LinkedIn's own policies.",
          },
        ],
      },
      {
        label: "User Responsibility",
        heading: "You own your content",
        body: [
          "LinkedIn Text Formatter is a formatting utility. It converts standard text into Unicode character variants (e.g., 𝗯𝗼𝗹𝗱, 𝘪𝘵𝘢𝘭𝘪𝘤) within the LinkedIn editor. The content itself — the words, ideas, claims, and opinions — remains entirely your own.",
          "This includes but is not limited to: compliance with copyright and intellectual property law, accuracy of information you publish, appropriateness of content for your audience, and compliance with advertising or endorsement disclosure requirements in your jurisdiction.",
        ],
        highlight: {
          variant: "purple",
          content:
            "We are not responsible for how you use the Extension or what content you publish on LinkedIn. You are solely responsible for ensuring your posts comply with LinkedIn's Community Policies, applicable laws, and professional standards.",
        },
      },
      {
        label: "Unicode Formatting",
        heading: "How formatting works — and its limits",
        body: [
          "Text formatted through this Extension uses Unicode lookalike characters rather than native HTML or Markdown formatting. This approach works across LinkedIn's platform but comes with specific limitations you should be aware of.",
          "Screen reader accessibility: Bold and italic Unicode characters are not semantically meaningful to assistive technologies. For highly accessible content, use formatting sparingly. We are not liable for any reduced engagement, account restrictions, or professional consequences arising from how your formatted content is received.",
        ],
        highlight: {
          variant: "info",
          content:
            "Formatted Unicode characters may not render correctly in all environments — including screen readers, certain mobile devices, copied text in some applications, and accessibility tools. Consider your audience before applying heavy formatting.",
        },
      },
      {
        label: "External Links",
        heading: "Links and third-party resources",
        body: [
          "If the Extension or its associated website links to any external websites, resources, or tools, we do not endorse or take responsibility for the content, accuracy, or practices of those third-party sites. Accessing external links is done at your own discretion and risk.",
        ],
      },
      {
        label: "Account Risk",
        heading: "LinkedIn account standing",
        body: [
          "We believe our Extension operates within the spirit and letter of LinkedIn's platform guidelines. However, LinkedIn's Terms of Service are subject to their own interpretation and enforcement.",
          "We make no representation that using LinkedIn Text Formatter will not result in any action on your LinkedIn account. We accept no liability for account warnings, restrictions, or terminations that may arise from use of this Extension in connection with LinkedIn's platform policies.",
        ],
      },
      {
        label: "Accuracy",
        heading: "Information accuracy",
        body: [
          "All documentation, help articles, and descriptions provided by LinkedIn Text Formatter are prepared in good faith and to the best of our knowledge at the time of publication. We do not warrant that any information provided is complete, accurate, or current.",
          "We reserve the right to make corrections or changes to any information at any time without notice.",
        ],
      },
    ],
  },
];

export function getPolicyById(id: string): Policy | undefined {
  return policies.find((p) => p.id === id);
}

export const policyNavLinks = policies.map((p) => ({
  id: p.id,
  title: p.title,
  href: `/legal/${p.id}`,
}));