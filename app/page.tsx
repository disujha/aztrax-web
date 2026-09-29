import { HeroSection } from '@/components/redesign/HeroSection';
import { ProblemSection } from '@/components/redesign/ProblemSection';
import { CoreIdeaSection } from '@/components/redesign/CoreIdeaSection';
import { AuthorisedMovesSection } from '@/components/redesign/AuthorisedMovesSection';
import { SituationsSection } from '@/components/redesign/SituationsSection';
import { HowItWorksSection } from '@/components/redesign/HowItWorksSection';
import { PilotSection } from '@/components/redesign/PilotSection';
import { EngineeringProofSection } from '@/components/redesign/EngineeringProofSection';
import { FinalCTASection } from '@/components/redesign/FinalCTASection';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f7f6f2] text-[#121417]">
      {/* 1. HERO — Headline + Buyer Line + CTAs + Hardware Photo & Overlay */}
      <HeroSection />

      {/* 2. THE PROBLEM — 02:17 Card + WhatsApp Alert Example Mockup */}
      <ProblemSection />

      {/* 3. THE CORE IDEA — Structural GPS Limits + Objection Handled + What Aztrax Does Not Do */}
      <CoreIdeaSection />

      {/* 4. AUTHORISED MOVES — 'Only alerts that matter' (Legitimate movement workflow) */}
      <AuthorisedMovesSection />

      {/* 5. THREE REAL SITUATIONS — Generators, Welding Equipment, Cable Reels */}
      <SituationsSection />

      {/* 6. HOW AZTRAX WORKS & HARDWARE — Merged Section (Pipeline + Measured Specs + 865-867 MHz) */}
      <HowItWorksSection />

      {/* 7. THE PILOT PROTOCOL — 10 Assets / 1 Gateway / 30 Days + Timeline + 5-Field Form */}
      <PilotSection />

      {/* 8. ENGINEERING PROOF & FOUNDER CREDIBILITY — Real Test Records + Haldia/Mumbai Track Record */}
      <EngineeringProofSection />

      {/* 9. FINAL CTA — Clear Direct Conversion + 10 Assets · 1 Gateway · 30 Days */}
      <FinalCTASection />
    </div>
  );
}
