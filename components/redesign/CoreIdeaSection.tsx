'use client';

import React from 'react';

export function CoreIdeaSection() {
  return (
    <section id="concept" className="py-20 md:py-28 bg-[#ffffff] border-b border-[#e4e2db]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Index Marker */}
        <div className="flex items-center gap-3 text-xs font-mono uppercase text-[#737a87] mb-4">
          <span className="text-[#121417] font-semibold">02</span>
          <span>/</span>
          <span>FIRST PRINCIPLES</span>
        </div>

        {/* Headline & Central Statement */}
        <div className="max-w-4xl mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#121417] leading-tight mb-6">
            Not every asset needs GPS.
          </h2>

          <div className="p-6 sm:p-8 bg-[#f7f6f2] border-l-4 border-[#121417] border-y border-r border-[#e4e2db]">
            <p className="text-xl sm:text-2xl text-[#121417] font-medium leading-snug mb-3">
              If an asset normally stays inside a plant, yard or project site, you may not need continuous coordinates.
            </p>
            <p className="text-xl sm:text-2xl text-[#0ea5e9] font-semibold leading-snug">
              You need to know when it moves.
            </p>
          </div>
        </div>

        {/* Three Simple Concepts: GPS vs RFID vs AZTRAX */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6">
          
          {/* Concept 1: GPS */}
          <div className="border border-[#e4e2db] p-6 bg-[#f7f6f2] flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono text-[#737a87] uppercase tracking-wider mb-2">
                TECHNOLOGY 01
              </div>
              <h3 className="text-2xl font-bold text-[#121417] mb-1">
                GPS
              </h3>
              <p className="text-base font-semibold text-[#4a505b] mb-4 font-mono">
                “Where is it?”
              </p>
              <div className="h-0.5 w-12 bg-[#c8c5bc] mb-4" />
              <p className="text-sm text-[#4a505b] leading-relaxed mb-6">
                Continuous global coordinates. Engineered for moving vehicles on open roads. Requires clear line of sight to satellites, dedicated cellular modem, active SIM subscription, and high power consumption.
              </p>
            </div>
            <div className="pt-4 border-t border-[#e4e2db] text-xs font-mono text-[#737a87]">
              PRIMARY STRENGTH: Long-haul highway transit
            </div>
          </div>

          {/* Concept 2: RFID / Barcode */}
          <div className="border border-[#e4e2db] p-6 bg-[#f7f6f2] flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono text-[#737a87] uppercase tracking-wider mb-2">
                TECHNOLOGY 02
              </div>
              <h3 className="text-2xl font-bold text-[#121417] mb-1">
                RFID &amp; Barcode
              </h3>
              <p className="text-base font-semibold text-[#4a505b] mb-4 font-mono">
                “Did it pass here?”
              </p>
              <div className="h-0.5 w-12 bg-[#c8c5bc] mb-4" />
              <p className="text-sm text-[#4a505b] leading-relaxed mb-6">
                Point-in-time identification. Scanned at stationary gates, portals, or during manual audits. Completely blind to displacement happening between checkpoints or within open project yards.
              </p>
            </div>
            <div className="pt-4 border-t border-[#e4e2db] text-xs font-mono text-[#737a87]">
              PRIMARY STRENGTH: Choke-point gate logs
            </div>
          </div>

          {/* Concept 3: AZTRAX */}
          <div className="border-2 border-[#121417] p-6 bg-[#ffffff] shadow-md flex flex-col justify-between relative">
            <div className="absolute -top-3 right-4 px-2 py-0.5 bg-[#121417] text-[#f7f6f2] text-[10px] font-mono uppercase tracking-widest">
              MOVEMENT INTELLIGENCE
            </div>
            <div>
              <div className="text-xs font-mono text-[#0ea5e9] uppercase tracking-wider mb-2">
                THE AZTRAX MODEL
              </div>
              <h3 className="text-2xl font-bold text-[#121417] mb-1">
                AZTRAX
              </h3>
              <p className="text-base font-semibold text-[#0ea5e9] mb-4 font-mono">
                “Did it move?”
              </p>
              <div className="h-0.5 w-12 bg-[#0ea5e9] mb-4" />
              <p className="text-sm text-[#121417] leading-relaxed mb-6 font-medium">
                Movement intelligence across a defined site. A compact low-power sensor detects vibration and displacement immediately, communicating through a shared site gateway. No SIM per asset. Multi-year battery life.
              </p>
            </div>
            <div className="pt-4 border-t border-[#e4e2db] text-xs font-mono text-[#0ea5e9] font-medium">
              PRIMARY STRENGTH: Stationary &amp; semi-stationary plant assets
            </div>
          </div>

        </div>

        {/* Technical Note */}
        <div className="mt-12 pt-6 border-t border-[#e4e2db] flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs font-mono text-[#737a87] gap-3">
          <span>CRITERIA: SUITED FOR EPC YARDS · REFINERY COMPOUNDS · FABRICATION BAYS · CONTRACTOR SITES</span>
          <span className="text-[#121417] font-medium">ZERO CELLULAR SIM OVERHEAD PER ASSET</span>
        </div>

      </div>
    </section>
  );
}
