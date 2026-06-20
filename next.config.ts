import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Compress responses
  compress: true,

  // Generate ETags for caching
  generateEtags: true,

  // Power header off (minor security)
  poweredByHeader: false,

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Security headers (also help with Google's security signals)
          { key: "X-Content-Type-Options",    value: "nosniff" },
          { key: "X-Frame-Options",           value: "SAMEORIGIN" },
          { key: "X-XSS-Protection",          value: "1; mode=block" },
          { key: "Referrer-Policy",           value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy",        value: "camera=(), microphone=(), geolocation=()" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
      // Cache icons aggressively
      {
        source: "/icons/(.*)",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      // Don't cache the live downloads API
      {
        source: "/api/downloads",
        headers: [{ key: "Cache-Control", value: "no-store, must-revalidate" }],
      },
    ];
  },

  async redirects() {
    return [
      // Redirect www to non-www (set up in Vercel DNS too)
      // Redirect any old hash-based formatter path to the real page
      {
        source: "/#formatter",
        destination: "/formatter",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
