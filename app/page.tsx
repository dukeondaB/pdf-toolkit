import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { ToolGrid } from "@/components/landing/tool-grid";
import { FeatureSection } from "@/components/landing/feature-section";
import { PreviewSection } from "@/components/landing/preview-section";
import { CTA } from "@/components/landing/cta";
import { Footer } from "@/components/landing/footer";

export default function HomePage() {
  return (
    <main className="bg-zinc-950 text-white overflow-hidden">
      <Navbar />
      <Hero />
      <ToolGrid />
      <FeatureSection />
      <PreviewSection />
      <CTA />
      <Footer />
    </main>
  );
}