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
        <div className="flex flex-wrap items-center gap-3 text-xs tracking-wider uppercase mb-6 font-mono text-[#646a76]">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-[#f0eee8] border border-[#c8c5bc] text-[#121417] font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0ea5e9]"></span>
            Industrial Movement Detection
          </span>
          <span className="hidden sm:inline text-[#a0a5af]">/</span>
          <span className="hidden sm:inline">Sub-GHz Wireless</span>
          <span className="hidden sm:inline text-[#a0a5af]">/</span>
          <span className="hidden sm:inline">Defined Plant &amp; Yard Boundary</span>
        </div>

        {/* Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Headlines & Copy (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.6rem] font-bold tracking-tight text-[#121417] leading-[1.08] mb-6 font-sans">
                Know when something moves that shouldn’t.
              </h1>

              <p className="text-lg sm:text-xl text-[#4a505b] leading-relaxed max-w-2xl mb-8 font-normal">
                Aztrax detects unexpected movement of industrial equipment and assets inside defined sites, yards and project areas — without putting GPS and a SIM on everything.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
                <button
                  onClick={() => scrollTo('pilot')}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#121417] text-[#f7f6f2] font-semibold text-sm tracking-wide rounded-xs hover:bg-[#232730] transition-colors cursor-pointer border border-[#121417]"
                >
                  Start a 30-day pilot
                  <ArrowRight size={16} />
                </button>

                <button
                  onClick={() => scrollTo('how-it-works')}
                  className="inline-flex items-center justify-center px-6 py-3.5 bg-transparent text-[#121417] font-medium text-sm tracking-wide rounded-xs border border-[#c8c5bc] hover:border-[#121417] hover:bg-[#f0eee8] transition-colors cursor-pointer"
                >
                  See how it works
                </button>
              </div>
            </div>

            {/* Editorial Technical Annotation */}
            <div className="pt-6 border-t border-[#e4e2db] grid grid-cols-3 gap-4 text-xs font-mono text-[#646a76]">
              <div>
                <span className="block text-[#a0a5af] uppercase text-[10px]">Target Assets</span>
                <span className="text-[#121417] font-medium">Generators · Welders · Reels</span>
              </div>
              <div>
                <span className="block text-[#a0a5af] uppercase text-[10px]">Architecture</span>
                <span className="text-[#121417] font-medium">Low-Power Radio → Gateway</span>
              </div>
              <div>
                <span className="block text-[#a0a5af] uppercase text-[10px]">Primary Output</span>
                <span className="text-[#121417] font-medium">Instant Movement Event</span>
              </div>
            </div>
          </div>

          {/* Right Column: Industrial Photograph + Real-Time Telemetry Overlay (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative bg-[#1a1d22] border border-[#2a2f38] overflow-hidden shadow-lg">
              
              {/* Actual Equipment Photograph */}
              <div className="relative w-full h-[360px] sm:h-[420px] bg-[#121417]">
                <Image
                  src="/hero.jpg"
                  alt="Industrial equipment yard with generator and welding plant"
                  fill
                  className="object-cover opacity-85 grayscale-[20%]"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121417] via-transparent to-transparent opacity-80" />
              </div>

              {/* Asset Tag Marker on Equipment */}
              <div className="absolute top-[38%] left-[32%] -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
                <div className="relative flex items-center justify-center">
                  {/* Subtle RF pulse animation */}
                  {rfPulsing && (
                    <span className="absolute w-12 h-12 rounded-full border border-[#0ea5e9] opacity-40 animate-ping" />
                  )}
                  <span className={`w-3.5 h-3.5 rounded-full border-2 border-[#ffffff] shadow-md transition-colors duration-500 ${
                    isMoved ? 'bg-[#d97706]' : 'bg-[#0ea5e9]'
                  }`} />
                  
                  {/* Pin label */}
                  <span className="absolute left-5 top-1/2 -translate-y-1/2 whitespace-nowrap bg-[#121417]/90 text-[#f7f6f2] font-mono text-[11px] px-1.5 py-0.5 border border-[#303642] rounded-xs backdrop-blur-xs">
                    TAG_018
                  </span>
                </div>
              </div>

              {/* Gateway Receptor Marker on Perimeter */}
              <div className="absolute top-[18%] right-[14%] z-20 pointer-events-none">
                <div className="flex items-center gap-1.5 bg-[#121417]/90 text-[#c2c7d0] font-mono text-[10px] px-2 py-1 border border-[#303642] rounded-xs">
                  <Radio size={11} className="text-[#0ea5e9]" />
                  <span>GATEWAY G-03 [LISTENING]</span>
                </div>
              </div>

              {/* HTML/CSS Status Overlay Panel (Bottom) */}
              <div className="absolute bottom-0 inset-x-0 bg-[#121417]/95 border-t border-[#2a2f38] p-4 font-mono backdrop-blur-sm z-30">
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#232730] text-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-[#737a87]">ASSET ID:</span>
                    <span className="text-[#f7f6f2] font-medium">ASSET 018 (DG SET 125kVA)</span>
                  </div>
                  <span className="text-[10px] text-[#737a87]">ZONE 04 — WEST YARD</span>
                </div>

                {/* State Transition Indicator */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
                      isMoved ? 'bg-[#d97706] shadow-[0_0_8px_#d97706]' : 'bg-[#10b981]'
                    }`} />
                    <span className={`text-xs tracking-wider uppercase font-semibold transition-colors duration-300 ${
                      isMoved ? 'text-[#f59e0b]' : 'text-[#f7f6f2]'
                    }`}>
                      {isMoved ? '02:17 AM · MOVEMENT DETECTED' : 'STATIONARY · MONITORING'}
                    </span>
                  </div>

                  <span className="text-[11px] text-[#8e95a3]">
                    {isMoved ? 'ALERT DISPATCHED' : 'RADIO LINK OK'}
                  </span>
                </div>
              </div>
            </div>

            {/* Technical Caption */}
            <p className="mt-2.5 text-[11px] font-mono text-[#737a87] text-right">
              FIG 1.0 — FIELD SIMULATION · ASSET 018 RESTING IN CONTRACTOR YARD
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
