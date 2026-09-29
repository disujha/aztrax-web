'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';

export function FinalCTASection() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 64;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 md:py-28 bg-[#121417] text-[#f7f6f2] border-b border-[#232730]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Technical Sub-Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1a1d22] border border-[#2a2f38] text-xs font-mono text-[#0ea5e9] mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0ea5e9] animate-pulse" />
          COMMERCIAL VALIDATION CHARTER
        </div>

        {/* Core Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#ffffff] leading-tight mb-6 font-sans">
          Have something valuable that shouldn’t move unnoticed?
        </h2>

        {/* Supporting Copy */}
        <p className="text-lg sm:text-xl text-[#9aa0ac] max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
          Tell us what it is, where it normally stays and what happens when it moves.
        </p>

        {/* Direct CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <button
            onClick={() => scrollTo('pilot')}
            className="w-full sm:w-auto px-8 py-4 bg-[#f7f6f2] text-[#121417] font-semibold text-sm tracking-wide rounded-xs hover:bg-[#0ea5e9] hover:text-[#ffffff] transition-all flex items-center justify-center gap-2 cursor-pointer border border-[#ffffff]"
          >
            Start a pilot →
          </button>
        </div>

        {/* Small Line Requirement */}
        <p className="text-xs font-mono text-[#737a87] tracking-wider uppercase">
          10 assets · 1 gateway · 30 days
        </p>

      </div>
    </section>
  );
}
