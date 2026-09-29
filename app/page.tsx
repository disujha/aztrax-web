import { Hero } from '@/components/sections/Hero';
import { ProblemSection } from '@/components/sections/ProblemSection';
import { ProductConcept } from '@/components/sections/ProductConcept';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { IndustrialScenarios } from '@/components/sections/IndustrialScenarios';
import { UseCases } from '@/components/sections/UseCases';
import { RealWorldEvidence } from '@/components/sections/RealWorldEvidence';
import { WhyAztrax } from '@/components/sections/WhyAztrax';
import { TechnologySection } from '@/components/sections/TechnologySection';
import { SafetySection } from '@/components/sections/SafetySection';
import { SuccessCriteria } from '@/components/sections/SuccessCriteria';
import { PilotSection } from '@/components/sections/PilotSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { FooterCTA } from '@/components/sections/FooterCTA';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section with Interactive System Diagram */}
      <Hero />

      {/* 2. Problem Section: CCTV/Guards (After the fact) vs AZTRAX (Real-time detection) */}
      <ProblemSection />

      {/* 3. Core Product Concept: Protect the asset, not the entire inventory */}
      <ProductConcept />

      {/* 4. How It Works: 01 TAG, 02 DEFINE, 03 DETECT, 04 ALERT */}
      <HowItWorks />

      {/* 5. Industrial Scenario Visuals: Welding Yard, Telecom, EV Charging, Motorcycle Parking */}
      <IndustrialScenarios />

      {/* 6. Use Cases: EPC, Telecom, EV Charging, Warehousing, Industrial Facilities */}
      <UseCases />

      {/* 7. Real-World Evidence: Sourced public incidents showing problem severity */}
      <RealWorldEvidence />

      {/* 8. Why AZTRAX: Low-cost, No GPS required, Complements CCTV, Pilot first */}
      <WhyAztrax />

      {/* 9. Technology Architecture: AZTRAX Tag, Gateway, Detection Platform */}
      <TechnologySection />

      {/* 10. Safety / Non-Hazardous Area Deployment Guidelines */}
      <SafetySection />

      {/* 11. Success Criteria: Measurable validation metrics */}
      <SuccessCriteria />

      {/* 12. Primary Conversion Section: Try AZTRAX Before You Buy It & B2B Pilot Form */}
      <PilotSection />

      {/* 13. About AZTRAX: Built from a simple observation */}
      <AboutSection />

      {/* 14. Frequently Asked Questions */}
      <FAQSection />

      {/* 15. Final High-Contrast Footer Call to Action */}
      <FooterCTA />
    </div>
  );
}
