'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { AlertCircle, Clock, ShieldAlert, Check, CheckCheck } from 'lucide-react';

export function ProblemSection() {
  const [activeIncident, setActiveIncident] = useState<'traditional' | 'aztrax'>('aztrax');
  const [quickReplyStatus, setQuickReplyStatus] = useState<string | null>(null);

  return (
    <section id="problem" className="py-20 md:py-28 bg-[#f7f6f2] border-b border-[#e4e2db]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Index Marker */}
        <div className="flex items-center gap-3 text-xs sm:text-[13px] font-mono uppercase text-[#4a505b] mb-4">
          <span className="text-[#121417] font-bold">01</span>
          <span>/</span>
          <span className="font-semibold">THE OPERATIONAL REALITY</span>
        </div>

        {/* Section Headline */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#121417] leading-tight mb-4">
            The problem isn’t always knowing where an asset is.
          </h2>
          <p className="text-2xl sm:text-3xl font-medium text-[#4a505b] tracking-tight">
            It’s knowing when it moves.
          </p>
        </div>

        {/* Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Industrial Night Scene Photograph */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative border border-[#c8c5bc] bg-[#121417] shadow-sm">
              <div className="relative w-full h-[360px] sm:h-[420px]">
                <Image
                  src="/second.jpg"
                  alt="Industrial contractor equipment yard at night"
                  fill
                  className="object-cover opacity-90 grayscale-[15%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121417] via-transparent to-transparent opacity-65" />
              </div>

              {/* Timestamp Watermark Overlay */}
              <div className="absolute top-4 left-4 bg-[#121417]/95 px-3 py-1.5 border border-[#2a2f38] text-xs sm:text-[13px] font-mono text-[#f7f6f2]">
                <span className="text-[#d97706] font-bold">02:17:44 AM</span> · FABRICATION YARD WEST
              </div>

              {/* 02:17 Event Card */}
              <div className="absolute bottom-4 inset-x-4 p-3 bg-[#121417]/95 border border-[#2a2f38] text-xs sm:text-[13px] font-mono text-[#c2c7d0] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <span>ASSET: DIESEL GENERATOR #04</span>
                <span className="text-[#f59e0b] font-bold">UNAUTHORIZED MOVEMENT DETECTED</span>
              </div>
            </div>

            <p className="text-xs font-mono text-[#737a87] font-medium">
              PHOTO 02 — UNATTENDED ASSETS ACROSS PERIMETERS AT NIGHT
            </p>
          </div>

          {/* Right Column: Narrative & Alert Example with WhatsApp Mockup */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            
            {/* The Concrete Narrative */}
            <div className="space-y-4 text-lg text-[#32363e] leading-relaxed">
              <p className="font-semibold text-[#121417]">
                A generator sits in a contractor yard.<br />
                A welding machine stays inside a fabrication area.<br />
                A cable reel remains in the material yard.
              </p>
              <p className="text-[#4a505b]">
                Nobody expects them to move tonight.
              </p>
              <p className="text-xl font-bold text-[#121417] py-2 border-y border-[#e4e2db]">
                But at 02:17, one of them does.
              </p>
              <p className="text-xl font-bold text-[#d97706] font-mono">
                Who knows?
              </p>
            </div>

            {/* Alert Example: WhatsApp Message Mockup */}
            <div className="border border-[#c8c5bc] bg-[#ffffff] p-5 shadow-xs">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#e4e2db]">
                <span className="text-xs sm:text-[13px] font-mono font-bold text-[#121417] uppercase tracking-wider">
                  Example Alert (WhatsApp / SMS)
                </span>
                <span className="text-xs font-mono text-[#737a87] font-medium">
                  SIMULATED DISPATCH
                </span>
              </div>

              {/* WhatsApp Message Bubble */}
              <div className="bg-[#f0f2f5] p-3.5 sm:p-4 rounded-md border border-[#e4e2db] max-w-md space-y-2 font-sans">
                <div className="flex items-center justify-between text-xs text-[#54656f]">
                  <span className="font-semibold text-[#121417] flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#25D366]"></span>
                    AZTRAX Site Bot
                  </span>
                  <span className="font-mono">02:17 AM</span>
                </div>

                <div className="bg-[#d9fdd3] p-3 rounded-md border border-[#c1f2b6] text-xs sm:text-[13px] text-[#111b21] space-y-1.5 shadow-2xs">
                  <div className="font-bold text-[#b91c1c] flex items-center gap-1.5">
                    <ShieldAlert size={15} />
                    <span>⚠️ UNEXPECTED MOVEMENT DETECTED</span>
                  </div>
                  <div className="font-mono text-xs text-[#3b4a54] space-y-0.5 pt-1">
                    <div><strong>Asset:</strong> DG Set 125 kVA (TAG-018)</div>
                    <div><strong>Zone:</strong> Laydown Yard West · Gateway G-03</div>
                    <div><strong>Time:</strong> 02:17:44 AM (Now)</div>
                    <div><strong>Status:</strong> Asset displaced &gt; 15 meters</div>
                  </div>
                  <div className="text-[11px] text-[#667781] text-right flex items-center justify-end gap-1 pt-1 font-mono">
                    <span>02:17 AM</span>
                    <CheckCheck size={14} className="text-[#53bdeb]" />
                  </div>
                </div>

                {/* Quick-Reply Action Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row gap-2">
                  <button
                    onClick={() => setQuickReplyStatus('Checking initiated')}
                    className="flex-1 py-2 px-3 bg-[#ffffff] border border-[#25D366] text-[#128C7E] font-semibold text-xs sm:text-[13px] rounded hover:bg-[#25D366] hover:text-white transition-colors cursor-pointer text-center"
                  >
                    Check now 🚨
                  </button>

                  <button
                    onClick={() => setQuickReplyStatus('Marked as authorised')}
                    className="flex-1 py-2 px-3 bg-[#ffffff] border border-[#c8c5bc] text-[#32363e] font-semibold text-xs sm:text-[13px] rounded hover:bg-[#f0eee8] transition-colors cursor-pointer text-center"
                  >
                    Authorised ✓
                  </button>
                </div>

                {quickReplyStatus && (
                  <p className="text-xs font-mono text-[#0ea5e9] text-center pt-1 font-semibold">
                    RESPONSE LOGGED: {quickReplyStatus.toUpperCase()}
                  </p>
                )}
              </div>

              {/* The Detection Gap Comparison Tabs */}
              <div className="mt-5 pt-4 border-t border-[#e4e2db]">
                <div className="flex items-center justify-between pb-2 mb-3 text-xs sm:text-[13px] font-mono">
                  <span className="text-[#4a505b] font-semibold uppercase">Compare Detection Speed</span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setActiveIncident('traditional')}
                      className={`px-2.5 py-1 text-xs font-mono transition-colors cursor-pointer ${
                        activeIncident === 'traditional'
                          ? 'bg-[#121417] text-[#f7f6f2] font-semibold'
                          : 'bg-[#f0eee8] text-[#4a505b]'
                      }`}
                    >
                      CCTV / Guard
                    </button>
                    <button
                      onClick={() => setActiveIncident('aztrax')}
                      className={`px-2.5 py-1 text-xs font-mono transition-colors cursor-pointer ${
                        activeIncident === 'aztrax'
                          ? 'bg-[#121417] text-[#f7f6f2] font-semibold'
                          : 'bg-[#f0eee8] text-[#4a505b]'
                      }`}
                    >
                      Aztrax Alert
                    </button>
                  </div>
                </div>

                {activeIncident === 'traditional' ? (
                  <div className="space-y-2 text-xs sm:text-sm text-[#4a505b]">
                    <div className="flex items-start gap-2.5">
                      <Clock size={16} className="text-[#737a87] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-mono font-semibold text-[#121417]">02:17 AM:</span> Asset moved. CCTV silently writes to hard drive.
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <AlertCircle size={16} className="text-[#737a87] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-mono font-semibold text-[#121417]">07:30 AM:</span> Morning supervisor discovers loss 5 hours later.
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-2 text-xs sm:text-sm text-[#121417]">
                    <div className="flex items-start gap-2.5">
                      <ShieldAlert size={16} className="text-[#d97706] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-mono font-bold text-[#d97706]">02:17 AM:</span> Sub-GHz motion packet hits gateway in &lt;1 second.
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Check size={16} className="text-[#10b981] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-mono font-bold text-[#10b981]">02:18 AM:</span> Security guard and area engineer verify while asset is still on site.
                      </div>
                    </div>
                  </div>
                )}
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
