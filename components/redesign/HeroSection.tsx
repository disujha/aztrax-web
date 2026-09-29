'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowRight, Radio } from 'lucide-react';

export function HeroSection() {
  const [isMoved, setIsMoved] = useState(false);
  const [rfPulsing, setRfPulsing] = useState(true);

  useEffect(() => {
    // Subtle periodic state switch to demonstrate movement event
    const interval = setInterval(() => {
      setIsMoved((prev) => !prev);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 64;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-24 pb-16 md:pt-28 md:pb-24 overflow-hidden border-b border-[#e4e2db]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Technical Classification Tag */}
        <div className="flex flex-wrap items-center gap-3 text-xs sm:text-[13px] tracking-wider uppercase mb-6 font-mono text-[#32363e]">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#f0eee8] border border-[#c8c5bc] text-[#121417] font-semibold">
            <span className="w-2 h-2 rounded-full bg-[#0ea5e9]"></span>
            Industrial Movement Detection
          </span>
          <span className="hidden sm:inline text-[#737a87]">/</span>
          <span className="hidden sm:inline font-medium">865–867 MHz Sub-GHz (India)</span>
          <span className="hidden sm:inline text-[#737a87]">/</span>
          <span className="hidden sm:inline font-medium">Defined Site Boundary</span>
        </div>

        {/* Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Headlines & Copy (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.6rem] font-bold tracking-tight text-[#121417] leading-[1.08] mb-4 font-sans">
                Know when something moves that shouldn’t.
              </h1>

              {/* Specific Buyer Line */}
              <p className="text-base sm:text-lg font-mono font-medium text-[#0ea5e9] mb-6 tracking-tight">
                For EPC contractors&apos; yards, stores and fabrication areas.
              </p>

              <p className="text-lg sm:text-xl text-[#32363e] leading-relaxed max-w-2xl mb-8 font-normal">
                Aztrax detects unexpected movement of industrial equipment and assets inside defined sites, yards and project areas — without putting GPS and a SIM on everything.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
                <button
                  onClick={() => scrollTo('pilot')}
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-[#121417] text-[#f7f6f2] font-semibold text-sm tracking-wide rounded-xs hover:bg-[#232730] transition-colors cursor-pointer border border-[#121417] shadow-sm min-h-[48px]"
                >
                  Start a 30-day pilot
                  <ArrowRight size={16} />
                </button>

                <button
                  onClick={() => scrollTo('how-it-works')}
                  className="inline-flex items-center justify-center px-7 py-4 bg-transparent text-[#121417] font-medium text-sm tracking-wide rounded-xs border border-[#c8c5bc] hover:border-[#121417] hover:bg-[#f0eee8] transition-colors cursor-pointer min-h-[48px]"
                >
                  See how it works
                </button>
              </div>
            </div>

            {/* Editorial Technical Annotation */}
            <div className="pt-6 border-t border-[#e4e2db] grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-[13px] font-mono text-[#32363e]">
              <div>
                <span className="block text-[#737a87] uppercase text-xs mb-0.5">Target Assets</span>
                <span className="text-[#121417] font-semibold">Generators · Welders · Cable Reels</span>
              </div>
              <div>
                <span className="block text-[#737a87] uppercase text-xs mb-0.5">Site Architecture</span>
                <span className="text-[#121417] font-semibold">Sub-GHz Radio → Shared Gateway</span>
              </div>
              <div>
                <span className="block text-[#737a87] uppercase text-xs mb-0.5">Primary Event</span>
                <span className="text-[#121417] font-semibold">Instant Alert via WhatsApp / SMS</span>
              </div>
            </div>
          </div>

          {/* Right Column: Industrial Photograph + Real-Time Telemetry Overlay (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative bg-[#121417] border border-[#2a2f38] overflow-hidden shadow-lg">
              
              {/* Actual Equipment Photograph */}
              <div className="relative w-full h-[360px] sm:h-[420px] bg-[#121417]">
                <Image
                  src="/hero.jpg"
                  alt="Industrial equipment yard with generator and fabrication gear"
                  fill
                  className="object-cover opacity-85 grayscale-[20%]"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121417] via-transparent to-transparent opacity-85" />
              </div>

              {/* Asset Tag Marker on Equipment */}
              <div className="absolute top-[38%] left-[32%] -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
                <div className="relative flex items-center justify-center">
                  {rfPulsing && (
                    <span className="absolute w-12 h-12 rounded-full border border-[#0ea5e9] opacity-40 animate-ping" />
                  )}
                  <span className={`w-3.5 h-3.5 rounded-full border-2 border-[#ffffff] shadow-md transition-colors duration-500 ${
                    isMoved ? 'bg-[#d97706]' : 'bg-[#0ea5e9]'
                  }`} />
                  
                  <span className="absolute left-5 top-1/2 -translate-y-1/2 whitespace-nowrap bg-[#121417]/95 text-[#f7f6f2] font-mono text-xs px-2 py-0.5 border border-[#3a4252] rounded-xs font-semibold">
                    TAG_018
                  </span>
                </div>
              </div>

              {/* Gateway Receptor Marker on Perimeter */}
              <div className="absolute top-[16%] right-[10%] z-20 pointer-events-none">
                <div className="flex items-center gap-2 bg-[#121417]/95 text-[#e4e2db] font-mono text-xs px-2.5 py-1 border border-[#3a4252] rounded-xs font-medium">
                  <Radio size={13} className="text-[#0ea5e9]" />
                  <span>GATEWAY G-03 [LISTENING]</span>
                </div>
              </div>

              {/* HTML/CSS Status Overlay Panel (Bottom) */}
              <div className="absolute bottom-0 inset-x-0 bg-[#121417]/95 border-t border-[#2a2f38] p-4 font-mono z-30">
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#262c37] text-xs sm:text-[13px]">
                  <div className="flex items-center gap-2">
                    <span className="text-[#9aa0ac]">ASSET:</span>
                    <span className="text-[#f7f6f2] font-semibold">DG SET 125 kVA (ASSET 018)</span>
                  </div>
                  <span className="text-xs text-[#9aa0ac]">YARD WEST</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
                      isMoved ? 'bg-[#d97706] shadow-[0_0_8px_#d97706]' : 'bg-[#10b981]'
                    }`} />
                    <span className={`text-xs sm:text-[13px] tracking-wider uppercase font-bold transition-colors duration-300 ${
                      isMoved ? 'text-[#f59e0b]' : 'text-[#f7f6f2]'
                    }`}>
                      {isMoved ? '02:17 AM · MOVEMENT DETECTED' : 'STATIONARY · MONITORING'}
                    </span>
                  </div>

                  <span className="text-xs text-[#9aa0ac] font-medium">
                    {isMoved ? 'ALERT SENT' : '865 MHz LINK OK'}
                  </span>
                </div>
              </div>
            </div>

            {/* Clear Simulation Caption */}
            <p className="mt-2.5 text-xs font-mono text-[#737a87] text-right font-medium">
              FIG 1.0 — SIMULATED EVENT OVERLAY · ASSET 018 IN CONTRACTOR YARD
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
