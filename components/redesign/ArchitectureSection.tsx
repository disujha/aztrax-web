'use client';

import React from 'react';
import { Check, X } from 'lucide-react';

export function ArchitectureSection() {
  return (
    <section className="py-20 md:py-28 bg-[#f7f6f2] border-b border-[#e4e2db]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Index Marker */}
        <div className="flex items-center gap-3 text-xs font-mono uppercase text-[#737a87] mb-4">
          <span className="text-[#121417] font-semibold">05</span>
          <span>/</span>
          <span>SYSTEM ARCHITECTURE</span>
        </div>

        {/* Section Headline */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#121417] leading-tight mb-4">
            Why put GPS on everything?
          </h2>
          <p className="text-xl sm:text-2xl font-semibold text-[#0ea5e9] tracking-tight">
            One gateway can serve many assets.
          </p>
        </div>

        {/* Comparison Cards: Traditional GPS Tracker vs Aztrax Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* Card 1: Traditional GPS Tracker */}
          <div className="bg-[#ffffff] border border-[#c8c5bc] p-7 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-[#737a87] mb-4 pb-3 border-b border-[#e4e2db]">
                <span>CONVENTIONAL TELEMATICS</span>
                <span>INDIVIDUAL VEHICLE MODEL</span>
              </div>

              <h3 className="text-2xl font-bold text-[#121417] mb-3">
                GPS Tracker on Every Asset
              </h3>
              <p className="text-sm text-[#4a505b] leading-relaxed mb-6">
                Designed for highway trucks and delivery fleets. Duplicates costly RF subsystems and recurring cellular telecom infrastructure onto every single physical tool.
              </p>

              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3 text-[#4a505b]">
                  <X size={16} className="text-[#737a87] shrink-0 mt-0.5" />
                  <span><strong>Dedicated GPS Receiver:</strong> Needs open sky view; struggles inside steel warehouses and covered fabrication bays.</span>
                </div>
                <div className="flex items-start gap-3 text-[#4a505b]">
                  <X size={16} className="text-[#737a87] shrink-0 mt-0.5" />
                  <span><strong>Cellular Modem &amp; SIM Card:</strong> Every piece of equipment requires its own active telco SIM card and data subscription.</span>
                </div>
                <div className="flex items-start gap-3 text-[#4a505b]">
                  <X size={16} className="text-[#737a87] shrink-0 mt-0.5" />
                  <span><strong>Large Power Draw:</strong> Continuous satellite polling exhausts batteries rapidly unless hardwired to vehicle engines.</span>
                </div>
                <div className="flex items-start gap-3 text-[#4a505b]">
                  <X size={16} className="text-[#737a87] shrink-0 mt-0.5" />
                  <span><strong>Excess Telemetry:</strong> Generates millions of stationary coordinate pings when the machine hasn’t moved an inch.</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#e4e2db] text-xs font-mono text-[#737a87]">
              OPERATIONAL OUTCOME: High recurring overhead; excessive complexity for stationary equipment.
            </div>
          </div>

          {/* Card 2: Aztrax Movement Architecture */}
          <div className="bg-[#ffffff] border-2 border-[#121417] p-7 sm:p-8 flex flex-col justify-between relative shadow-md">
            <div className="absolute -top-3 right-6 px-2.5 py-0.5 bg-[#121417] text-[#f7f6f2] text-[10px] font-mono uppercase tracking-widest">
              DISTRIBUTED INDUSTRIAL DESIGN
            </div>

            <div>
              <div className="flex items-center justify-between text-xs font-mono text-[#0ea5e9] mb-4 pb-3 border-b border-[#e4e2db]">
                <span>AZTRAX SITE ARCHITECTURE</span>
                <span>SHARED GATEWAY MODEL</span>
              </div>

              <h3 className="text-2xl font-bold text-[#121417] mb-3">
                Aztrax Movement Architecture
              </h3>
              <p className="text-sm text-[#121417] font-medium leading-relaxed mb-6">
                Separates motion detection from external communication. Deploy light, robust sensors on assets, and let one shared gateway handle site connectivity.
              </p>

              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3 text-[#121417]">
                  <Check size={16} className="text-[#0ea5e9] shrink-0 mt-0.5" />
                  <span><strong>Vibration &amp; Motion Sensor:</strong> Wakes instantly upon mechanical movement, lifting, or perimeter exit.</span>
                </div>
                <div className="flex items-start gap-3 text-[#121417]">
                  <Check size={16} className="text-[#0ea5e9] shrink-0 mt-0.5" />
                  <span><strong>Low-Power Sub-GHz Radio:</strong> Long propagation range without cellular SIM cards on individual tags.</span>
                </div>
                <div className="flex items-start gap-3 text-[#121417]">
                  <Check size={16} className="text-[#0ea5e9] shrink-0 mt-0.5" />
                  <span><strong>Shared Site Gateway:</strong> A single gateway on the perimeter pole or office roof covers dozens of tagged assets.</span>
                </div>
                <div className="flex items-start gap-3 text-[#121417]">
                  <Check size={16} className="text-[#0ea5e9] shrink-0 mt-0.5" />
                  <span><strong>Event-Driven Cloud Relay:</strong> Transmits actionable movement events when displacement occurs, zero background clutter.</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#e4e2db] text-xs font-mono text-[#0ea5e9] font-medium">
              OPERATIONAL OUTCOME: Clean, manageable deployment; sensor hardware stays economical and rugged.
            </div>
          </div>

        </div>

        {/* Editorial Footnote: Responsible Positioning */}
        <div className="bg-[#f0eee8] border border-[#c8c5bc] p-6 text-sm text-[#4a505b] leading-relaxed">
          <span className="font-bold text-[#121417] block font-mono text-xs uppercase mb-1">
            Responsible Commercial Note
          </span>
          Aztrax is currently conducting field validation of its pilot hardware BOM. We do not publish speculative percentage savings until multi-month pilot metrics confirm operational durability in heavy industrial environments.
        </div>

      </div>
    </section>
  );
}
