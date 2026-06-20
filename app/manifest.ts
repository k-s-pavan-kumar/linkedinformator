import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "LinkedIn Text Formatter",
    short_name: "LF Formatter",
    description:
      "Format LinkedIn posts with bold, italic, bullets and more — free, works in every browser.",
    start_url: "/formatter",
    display: "standalone",
    background_color: "#faf9f6",
    theme_color: "#0a66c2",
    orientation: "portrait-primary",
    categories: ["productivity", "utilities"],
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png", purpose: "maskable" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
    ],
    shortcuts: [
      {
        name: "Open Formatter",
        short_name: "Formatter",
        description: "Go directly to the LinkedIn post formatter",
        url: "/formatter",
        icons: [{ src: "/icons/icon-96.png", sizes: "96x96" }],
      },
    ],
  };
}
