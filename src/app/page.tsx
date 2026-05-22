import { CleanupSection } from "@/components/site/cleanup-section";
import { CtaSection } from "@/components/site/cta-section";
import { FaqSection } from "@/components/site/faq-section";
import { FixScopeSection } from "@/components/site/fix-scope-section";
import { HeroSection } from "@/components/site/hero-section";
import { OfferSection } from "@/components/site/offer-section";
import { PricingSection } from "@/components/site/pricing-section";
import { ProcessSection } from "@/components/site/process-section";
import { ProofSection } from "@/components/site/proof-section";
import { SiteHeader } from "@/components/site/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <OfferSection />
        <FixScopeSection />
        <CleanupSection />
        <ProofSection />
        <ProcessSection />
        <PricingSection />
        <FaqSection />
        <CtaSection />
      </main>
    </>
  );
}
