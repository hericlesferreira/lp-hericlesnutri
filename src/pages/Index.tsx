import { HeroSection } from "@/components/landing/HeroSection";
import { PainSection } from "@/components/landing/PainSection";
import { BeliefBreaker } from "@/components/landing/BeliefBreaker";
import { MethodSection } from "@/components/landing/MethodSection";
import { ResultsSection } from "@/components/landing/ResultsSection";
import { AuthoritySection } from "@/components/landing/AuthoritySection";
import { IncludedSection } from "@/components/landing/IncludedSection";
import { TestimonialSection } from "@/components/landing/TestimonialSection";
import { PricingSection } from "@/components/landing/PricingSection";
import { GuaranteeSection } from "@/components/landing/GuaranteeSection";
import { ScarcitySection } from "@/components/landing/ScarcitySection";
import { FooterSection } from "@/components/landing/FooterSection";
import { Analytics } from "@vercel/analytics/next"

const Index = () => (
  <main className="min-h-screen bg-background overflow-x-hidden">
    <HeroSection />
    <PainSection />
    <BeliefBreaker />
    <MethodSection />
    <ResultsSection />
    <AuthoritySection />
    <IncludedSection />
    <TestimonialSection />
    <PricingSection />
    <GuaranteeSection />
    <ScarcitySection />
    <FooterSection />
    <Analytics/>
  </main>
);

export default Index;
