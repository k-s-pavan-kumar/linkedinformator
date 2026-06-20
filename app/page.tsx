import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import FormatterPreviewCta from "@/components/FormatterPreviewCta";
import DownloadSection from "@/components/DownloadSection";
import LiveDownloads from "@/components/LiveDownloads";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqSection from "@/components/FaqSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

const BASE_URL = "https://linkedinformatter.com";

export const metadata: Metadata = {
  alternates: { canonical: BASE_URL },
};

export default function Home() {
  return (
    <>
      {/* Skip to content — accessibility + crawlability */}
      {/* <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-semibold focus:text-white"
        style={{ background: "var(--accent)" }}
      >
        Skip to main content
      </a> */}

      <main id="main-content">
        <HeroSection />
      </main>

      <section aria-labelledby="features-heading">
        <FeaturesSection />
      </section>

      <section aria-labelledby="formatter-heading">
        <FormatterPreviewCta />
      </section>

      {/* <section aria-labelledby="downloads-heading">
        <DownloadSection />
        <LiveDownloads />
      </section>

      <section aria-labelledby="testimonials-heading">
        <TestimonialsSection />
      </section> */}

      <section aria-labelledby="faq-heading">
        <FaqSection />
      </section>

      <CtaSection />
      <Footer />
    </>
  );
}
