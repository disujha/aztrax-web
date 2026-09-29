'use client';

import React from 'react';
import { Check, X, AlertTriangle } from 'lucide-react';

export function CoreIdeaSection() {
  return (
    <section id="concept" className="py-20 md:py-28 bg-[#ffffff] border-b border-[#e4e2db]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Index Marker */}
        <div className="flex items-center gap-3 text-xs sm:text-[13px] font-mono uppercase text-[#4a505b] mb-4">
          <span className="text-[#121417] font-bold">02</span>
          <span>/</span>
          <span className="font-semibold">FIRST PRINCIPLES</span>
        </div>

        {/* Headline & Central Statement */}
        <div className="max-w-4xl mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#121417] leading-tight mb-6">
            Not every asset needs GPS.
          </h2>

          <div className="p-6 sm:p-8 bg-[#f7f6f2] border-l-4 border-[#121417] border-y border-r border-[#e4e2db]">
            <p className="text-xl sm:text-2xl text-[#121417] font-semibold leading-snug mb-3 font-sans">
              If an asset normally stays inside a plant, yard or project site, you may not need continuous coordinates.
            </p>
            <p className="text-xl sm:text-2xl text-[#0ea5e9] font-bold leading-snug font-mono">
              You need to know when it moves.
            </p>
          </div>
        </div>

        {/* GPS Structural Limitations vs AZTRAX Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* Column 1: Where GPS Structurally Struggles */}
          <div className="border border-[#c8c5bc] p-6 sm:p-8 bg-[#f7f6f2] flex flex-col justify-between">
            <div>
              <div className="text-xs sm:text-[13px] font-mono text-[#737a87] uppercase tracking-wider mb-2 font-semibold">
                CONVENTIONAL GPS TRACKERS
              </div>
              <h3 className="text-2xl font-bold text-[#121417] mb-3">
                Where GPS Structurally Struggles on Industrial Sites
              </h3>
              <p className="text-sm text-[#4a505b] leading-relaxed mb-6 font-normal">
                GPS was engineered for open highway transport. When applied to stationary physical inventory across contractor compounds and industrial plants, it hits physical and commercial limits:
              </p>

              <div className="space-y-3.5 text-sm text-[#32363e]">
                <div className="flex items-start gap-3">
                  <X size={17} className="text-[#dc2626] shrink-0 mt-0.5" />
                  <span><strong>Weak under roofs, sheds &amp; steel structures:</strong> Satellite signals degrade inside fabrication shops, covered stores, and dense pipe racks.</span>
                </div>
                <div className="flex items-start gap-3">
                  <X size={17} className="text-[#dc2626] shrink-0 mt-0.5" />
                  <span><strong>Recurring SIM and renewal cost per asset:</strong> Paying telco monthly data plans on 50 or 100 stationary items creates pointless recurring expense.</span>
                </div>
                <div className="flex items-start gap-3">
                  <X size={17} className="text-[#dc2626] shrink-0 mt-0.5" />
                  <span><strong>Battery charging and maintenance:</strong> Continuous GPS + 4G modem polling drains battery in weeks unless continually recharged or hardwired.</span>
                </div>
                <div className="flex items-start gap-3">
                  <X size={17} className="text-[#dc2626] shrink-0 mt-0.5" />
                  <span><strong>Data stored on third-party public clouds:</strong> Enterprise telemetry and sensitive plant layouts get exported to external commercial tracking apps.</span>
                </div>
                <div className="flex items-start gap-3">
                  <X size={17} className="text-[#dc2626] shrink-0 mt-0.5" />
                  <span><strong>No zone-level boundary alerts:</strong> Inability to trigger immediate alarms like <em>“Asset left Fabrication Zone B without a signed gate pass”</em>.</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#e4e2db] text-xs sm:text-[13px] font-mono text-[#737a87] font-semibold">
              PRIMARY ROLE: Interstate transit &amp; fleet logistics
            </div>
          </div>

          {/* Column 2: The Aztrax Model */}
          <div className="border-2 border-[#121417] p-6 sm:p-8 bg-[#ffffff] shadow-md flex flex-col justify-between relative">
            <div className="absolute -top-3 right-6 px-3 py-0.5 bg-[#121417] text-[#f7f6f2] text-xs font-mono uppercase tracking-widest font-semibold">
              SITE MOVEMENT MODEL
            </div>

            <div>
              <div className="text-xs sm:text-[13px] font-mono text-[#0ea5e9] uppercase tracking-wider mb-2 font-semibold">
                THE AZTRAX APPROACH
              </div>
              <h3 className="text-2xl font-bold text-[#121417] mb-3">
                Movement Detection Across Defined Sites
              </h3>
              <p className="text-sm text-[#121417] font-medium leading-relaxed mb-6">
                Separates the sensor from the network. Assets carry light, sealed motion sensors. One site gateway listens continuously across the plant perimeter:
              </p>

              <div className="space-y-3.5 text-sm text-[#121417]">
                <div className="flex items-start gap-3">
                  <Check size={17} className="text-[#0ea5e9] shrink-0 mt-0.5" />
                  <span><strong>Penetrates heavy steelwork:</strong> 865–867 MHz sub-GHz industrial radio passes through metal containers and concrete bays.</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={17} className="text-[#0ea5e9] shrink-0 mt-0.5" />
                  <span><strong>Zero SIM cards on assets:</strong> Only the central site gateway connects to the network. No recurring SIM cards per equipment tag.</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={17} className="text-[#0ea5e9] shrink-0 mt-0.5" />
                  <span><strong>Multi-year operational life:</strong> Device sleeps when stationary, drawing negligible micro-amperes, waking only on mechanical motion.</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={17} className="text-[#0ea5e9] shrink-0 mt-0.5" />
                  <span><strong>Site-local event architecture:</strong> Events stay within your site perimeter gateway with direct webhook/WhatsApp delivery.</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={17} className="text-[#0ea5e9] shrink-0 mt-0.5" />
                  <span><strong>Instant boundary &amp; gate-pass logic:</strong> Immediate alerts when equipment crosses zone boundaries during unauthorized hours.</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#e4e2db] text-xs sm:text-[13px] font-mono text-[#0ea5e9] font-bold">
              PRIMARY ROLE: Stationary &amp; semi-stationary yard inventory
            </div>
          </div>

        </div>

        {/* Addressing the Objection: "My generator is powered, I can wire a GPS to it" */}
        <div className="p-6 bg-[#f7f6f2] border border-[#c8c5bc] mb-10 text-sm text-[#32363e] leading-relaxed">
          <div className="text-xs sm:text-[13px] font-mono font-bold text-[#121417] uppercase mb-1.5 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#121417]"></span>
            Addressing Wired GPS on Powered Machines
          </div>
          <p className="font-normal text-[#4a505b]">
            Powered machines can certainly use wired GPS. Aztrax is for assets that stay in place, are unpowered or semi-stationary, or sit inside sites where a SIM tracker is impractical — tool kits, cable drums, gas cylinders, portable welding sets, and machines resting in contractor yards between shifts.
          </p>
        </div>

        {/* What Aztrax Does NOT Do (Plain Statement Box) */}
        <div className="p-6 bg-[#121417] text-[#f7f6f2] border border-[#2a2f38] shadow-sm">
          <div className="flex items-center gap-2.5 text-xs sm:text-[13px] font-mono text-[#f59e0b] font-bold uppercase mb-2">
            <AlertTriangle size={16} />
            <span>What Aztrax Does Not Do</span>
          </div>
          <p className="text-sm sm:text-base text-[#e4e2db] leading-relaxed">
            No location tracking outside site coverage. No route tracking. No off-site recovery. If your assets travel between cities on highways, use GPS. Aztrax is specifically for assets that live inside a site.
          </p>
        </div>

      </div>
    </section>
  );
}
