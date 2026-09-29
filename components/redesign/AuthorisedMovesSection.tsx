'use client';

import React from 'react';
import { CheckCircle2, ShieldCheck, ArrowRight, Clock, Smartphone } from 'lucide-react';

export function AuthorisedMovesSection() {
  return (
    <section className="py-20 md:py-24 bg-[#f7f6f2] border-b border-[#e4e2db]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Index Marker */}
        <div className="flex items-center gap-3 text-xs sm:text-[13px] font-mono uppercase text-[#4a505b] mb-4">
          <span className="text-[#121417] font-bold">03</span>
          <span>/</span>
          <span className="font-semibold">WORKFLOW LOGIC</span>
        </div>

        {/* Headline */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#121417] leading-tight mb-4">
            Only alerts that matter.
          </h2>
          <p className="text-lg sm:text-xl text-[#4a505b] leading-relaxed">
            Legitimate equipment moves happen daily on active sites. A security system that sounds the alarm on every authorized work order quickly gets ignored or disabled.
          </p>
        </div>

        {/* 3-Step Simple Flow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          
          {/* Step 1: Supervisor Marks "Moving Today" */}
          <div className="bg-[#ffffff] border border-[#c8c5bc] p-6 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-[#737a87] mb-4 pb-2 border-b border-[#e4e2db]">
                <span className="font-bold text-[#121417]">STEP 01</span>
                <span>DISPATCH LOG</span>
              </div>
              <div className="w-10 h-10 rounded-sm bg-[#f0eee8] flex items-center justify-center text-[#121417] mb-4">
                <Smartphone size={20} />
              </div>
              <h3 className="text-lg font-bold text-[#121417] mb-2">
                Supervisor marks &ldquo;Moving today&rdquo;
              </h3>
              <p className="text-sm text-[#4a505b] leading-relaxed">
                Before shifting a welding inverter to Fabrication Bay 3 or moving a generator for scheduled maintenance, the area supervisor selects the asset from phone or WhatsApp.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#e4e2db] text-xs font-mono text-[#737a87]">
              INPUT: 2 TAPS OR WHATSAPP REPLY
            </div>
          </div>

          {/* Step 2: Muted Window */}
          <div className="bg-[#ffffff] border border-[#c8c5bc] p-6 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-[#737a87] mb-4 pb-2 border-b border-[#e4e2db]">
                <span className="font-bold text-[#121417]">STEP 02</span>
                <span>MUTED WINDOW</span>
              </div>
              <div className="w-10 h-10 rounded-sm bg-[#f0eee8] flex items-center justify-center text-[#0ea5e9] mb-4">
                <Clock size={20} />
              </div>
              <h3 className="text-lg font-bold text-[#121417] mb-2">
                Asset is silent for that window
              </h3>
              <p className="text-sm text-[#4a505b] leading-relaxed">
                The asset enters an approved moving state for the requested shift duration (e.g. 2 hours). Motion events are logged to the audit trail but zero sirens or emergency alerts fire.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#e4e2db] text-xs font-mono text-[#0ea5e9] font-medium">
              STATUS: LOGGED SILENTLY · NO FALSE ALARMS
            </div>
          </div>

          {/* Step 3: Re-arms Automatically */}
          <div className="bg-[#ffffff] border-2 border-[#121417] p-6 flex flex-col justify-between shadow-md">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-[#121417] mb-4 pb-2 border-b border-[#e4e2db]">
                <span className="font-bold text-[#121417]">STEP 03</span>
                <span>AUTOMATIC RE-ARM</span>
              </div>
              <div className="w-10 h-10 rounded-sm bg-[#121417] flex items-center justify-center text-[#f7f6f2] mb-4">
                <ShieldCheck size={20} />
              </div>
              <h3 className="text-lg font-bold text-[#121417] mb-2">
                Re-arms automatically
              </h3>
              <p className="text-sm text-[#121417] font-medium leading-relaxed">
                Once the authorized window expires or the asset settles into its new position, Aztrax re-arms detection automatically. No manual remember-to-lock step required.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#e4e2db] text-xs font-mono text-[#10b981] font-semibold">
              OUTCOME: PERIMETER RESTORED WITHOUT FRICTION
            </div>
          </div>

        </div>

        {/* Summary Statement */}
        <div className="p-4 bg-[#ffffff] border border-[#c8c5bc] text-xs sm:text-[13px] font-mono text-[#32363e] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <span>DESIGN PHILOSOPHY: ZERO FATIGUE FOR NIGHT SECURITY AND STORE MANAGERS.</span>
          <span className="text-[#0ea5e9] font-semibold">AUDIT-COMPLIANT GATE RECORDS</span>
        </div>

      </div>
    </section>
  );
}
