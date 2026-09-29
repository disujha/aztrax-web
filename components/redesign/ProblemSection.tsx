'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { AlertCircle, Clock, ShieldAlert } from 'lucide-react';

export function ProblemSection() {
  const [activeIncident, setActiveIncident] = useState<'traditional' | 'aztrax'>('aztrax');

  return (
    <section id="problem" className="py-20 md:py-28 bg-[#f7f6f2] border-b border-[#e4e2db]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Index Marker */}
        <div className="flex items-center gap-3 text-xs font-mono uppercase text-[#737a87] mb-4">
          <span className="text-[#121417] font-semibold">01</span>
          <span>/</span>
          <span>THE OPERATIONAL REALITY</span>
        </div>

        {/* Section Headline */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#121417] leading-tight mb-4">
            The problem isn’t always knowing where an asset is.
          </h2>
          <p className="text-2xl sm:text-3xl font-medium text-[#737a87] tracking-tight">
            It’s knowing when it moves.
          </p>
        </div>

        {/* Editorial 2-Column Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Industrial Night Scene Photograph */}
          <div className="lg:col-span-6">
            <div className="relative border border-[#c8c5bc] bg-[#121417] shadow-sm">
              <div className="relative w-full h-[380px] sm:h-[460px]">
                <Image
                  src="/second.jpg"
                  alt="Industrial plant yard at night with stationary equipment"
                  fill
                  className="object-cover opacity-90 grayscale-[15%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121417] via-transparent to-transparent opacity-60" />
              </div>

              {/* Timestamp Watermark Overlay */}
              <div className="absolute top-4 left-4 bg-[#121417]/90 px-3 py-1.5 border border-[#2a2f38] text-xs font-mono text-[#f7f6f2]">
                <span className="text-[#d97706] font-semibold">02:17:44 AM</span> · FABRICATION YARD WEST
              </div>

              <div className="absolute bottom-4 inset-x-4 p-3 bg-[#121417]/95 border border-[#2a2f38] text-xs font-mono text-[#a0a5af] flex items-center justify-between">
                <span>EQUIPMENT: DIESEL GENERATOR #04</span>
                <span className="text-[#d97706]">UNAUTHORIZED DISPLACEMENT</span>
              </div>
            </div>
            <p className="mt-2 text-[11px] font-mono text-[#737a87]">
              PHOTO 02 — NIGHT OPERATIONS · UNATTENDED ASSETS ACROSS PERIMETERS
            </p>
          </div>

          {/* Right Column: Editorial Narrative & Concrete Timeline Comparison */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            {/* The Concrete Narrative */}
            <div className="space-y-4 text-lg text-[#32363e] leading-relaxed mb-8">
              <p className="font-medium text-[#121417]">
                A generator sits in a contractor yard.<br />
                A welding machine stays inside a fabrication area.<br />
                A cable reel remains in the material yard.
              </p>
              <p>
                Nobody expects them to move tonight.
              </p>
              <p className="text-xl font-semibold text-[#121417] py-2 border-y border-[#e4e2db]">
                But at 02:17, one of them does.
              </p>
              <p className="text-xl font-bold text-[#d97706] font-mono">
                Who knows?
              </p>
            </div>

            {/* Contrast: The Detection Gap */}
            <div className="border border-[#c8c5bc] bg-[#ffffff] p-5 shadow-xs">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#e4e2db] text-xs font-mono">
                <span className="text-[#737a87] uppercase">The Discovery Gap</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => setActiveIncident('traditional')}
                    className={`px-2 py-0.5 text-[11px] font-mono transition-colors cursor-pointer ${
                      activeIncident === 'traditional'
                        ? 'bg-[#121417] text-[#f7f6f2]'
                        : 'bg-[#f0eee8] text-[#646a76]'
                    }`}
                  >
                    Current Methods
                  </button>
                  <button
                    onClick={() => setActiveIncident('aztrax')}
                    className={`px-2 py-0.5 text-[11px] font-mono transition-colors cursor-pointer ${
                      activeIncident === 'aztrax'
                        ? 'bg-[#121417] text-[#f7f6f2]'
                        : 'bg-[#f0eee8] text-[#646a76]'
                    }`}
                  >
                    Aztrax Event
                  </button>
                </div>
              </div>

              {activeIncident === 'traditional' ? (
                <div className="space-y-3 text-sm text-[#4a505b]">
                  <div className="flex items-start gap-3">
                    <Clock size={16} className="text-[#737a87] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-mono text-xs font-semibold text-[#121417] block">02:17 AM</span>
                      <span>Asset is unhooked or moved. CCTV records quietly onto hard drive.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertCircle size={16} className="text-[#737a87] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-mono text-xs font-semibold text-[#121417] block">07:30 AM (Next Day Shift)</span>
                      <span>Supervisor arrives on site. Discovers equipment missing when the crew needs it.</span>
                    </div>
                  </div>
                  <div className="text-xs text-[#737a87] font-mono pt-2 border-t border-[#f0eee8]">
                    RESULT: 5+ hour blind window. Asset is already off-site. Investigation is forensic.
                  </div>
                </div>
              ) : (
                <div className="space-y-3 text-sm text-[#121417]">
                  <div className="flex items-start gap-3">
                    <ShieldAlert size={16} className="text-[#d97706] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-mono text-xs font-semibold text-[#d97706] block">02:17 AM (Immediate)</span>
                      <span>Vibration and displacement detected. Sub-GHz packet reaches site gateway in &lt;1 second.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-4 h-4 rounded-full bg-[#10b981] text-white flex items-center justify-center text-[10px] shrink-0 mt-0.5">✓</span>
                    <div>
                      <span className="font-mono text-xs font-semibold text-[#121417] block">02:18 AM (1 Minute Later)</span>
                      <span>Alert delivered to Security Guard cabin and Maintenance Lead phone. Physical verification begins while asset is still at perimeter.</span>
                    </div>
                  </div>
                  <div className="text-xs text-[#0ea5e9] font-mono pt-2 border-t border-[#f0eee8]">
                    RESULT: Real-time action before the asset leaves the boundary.
                  </div>
                </div>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
