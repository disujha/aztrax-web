import { HeroSection } from '@/components/redesign/HeroSection';
import { ProblemSection } from '@/components/redesign/ProblemSection';
import { CoreIdeaSection } from '@/components/redesign/CoreIdeaSection';
import { SituationsSection } from '@/components/redesign/SituationsSection';
import { HowItWorksSection } from '@/components/redesign/HowItWorksSection';
import { ArchitectureSection } from '@/components/redesign/ArchitectureSection';
import { PilotSection } from '@/components/redesign/PilotSection';
import { EngineeringProofSection } from '@/components/redesign/EngineeringProofSection';
import { FinalCTASection } from '@/components/redesign/FinalCTASection';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f7f6f2] text-[#121417]">
      {/* SECTION 1 — HERO */}
      <HeroSection />

      {/* SECTION 2 — THE PROBLEM */}
      <ProblemSection />

      {/* SECTION 3 — THE CORE IDEA ("Not every asset needs GPS") */}
      <CoreIdeaSection />

      {/* SECTION 4 — THREE REAL SITUATIONS (Generators, Welding, Cable Reels) */}
      <SituationsSection />

      {/* SECTION 5 — HOW AZTRAX WORKS (Physical flow: Asset -> Tag -> Radio -> Gateway -> Cloud -> Alert) */}
      <HowItWorksSection />

      {/* SECTION 6 — WHY THE ARCHITECTURE IS DIFFERENT ("Why put GPS on everything?") */}
      <ArchitectureSection />

      {/* SECTION 7 — THE PILOT ("Start with one area. Prove it." 10 assets / 1 gateway / 1 area / 30 days) */}
      <PilotSection />

      {/* SECTION 8 — ENGINEERING PROOF ("Built for real industrial conditions") */}
      <EngineeringProofSection />

      {/* SECTION 9 — FINAL CTA ("Have something valuable that shouldn’t move unnoticed?") */}
      <FinalCTASection />
    </div>
  );
}
