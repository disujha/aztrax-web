'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Bell, Cloud, Cpu, HardHat, Radio, Wifi, Check } from 'lucide-react';

const pipeline = [
  {
    step: '01',
    name: 'Asset Tag',
    label: 'SEALED MOTION SENSOR',
    desc: 'Bolted or magnetic-mounted on equipment. 3-axis accelerometer wakes on movement.',
    icon: Cpu,
  },
  {
    step: '02',
    name: 'Local Radio',
    label: '865–867 MHZ (INDIA)',
    desc: 'Sub-GHz signal penetrates steel containers, pipe racks, and heavy fabrication sheds.',
    icon: Wifi,
  },
  {
    step: '03',
    name: 'Site Gateway',
    label: 'PERIMETER RECEPTOR',
    desc: 'One shared gateway mounted on yard pole or office roof listens across the defined site.',
    icon: Radio,
  },
  {
    step: '04',
    name: 'Instant Alert',
    label: 'WHATSAPP / SMS',
    desc: 'Event delivered to security desk and store manager in < 5 seconds with quick-reply buttons.',
    icon: Bell,
  },
];

export function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="architecture" className="py-20 md:py-28 bg-[#ffffff] border-b border-[#e4e2db]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Index Marker */}
        <div className="flex items-center gap-3 text-xs sm:text-[13px] font-mono uppercase text-[#4a505b] mb-4">
          <span className="text-[#121417] font-bold">05</span>
          <span>/</span>
          <span className="font-semibold">HOW IT WORKS &amp; ARCHITECTURE</span>
        </div>

        {/* Section Headline */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#121417] leading-tight mb-4">
            A small device. A site gateway. One clear event.
          </h2>
          <p className="text-xl sm:text-2xl font-semibold text-[#0ea5e9] tracking-tight mb-3">
            Bolted to the machine. Listened to by the site.
          </p>
          <p className="text-base sm:text-lg text-[#4a505b] leading-relaxed">
            One gateway can serve many assets. The system does not stream heavy coordinates across satellites. An asset moves; the tag transmits; the site gateway reports; the responsible person acts.
          </p>
        </div>

        {/* Tight 4-Stage Visual Pipeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {pipeline.map((item, idx) => {
            const Icon = item.icon;
            const isSelected = activeStep === idx;

            return (
              <div
                key={item.name}
                onClick={() => setActiveStep(idx)}
                className={`p-5 border transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#121417] border-[#121417] text-[#f7f6f2] shadow-md'
                    : 'bg-[#f7f6f2] border-[#c8c5bc] text-[#32363e] hover:border-[#121417]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between text-xs sm:text-[13px] font-mono mb-3">
                    <span className={`font-bold ${isSelected ? 'text-[#0ea5e9]' : 'text-[#737a87]'}`}>
                      {item.step}
                    </span>
                    {isSelected && (
                      <span className="w-2 h-2 rounded-full bg-[#0ea5e9] animate-ping" />
                    )}
                  </div>
                  <Icon size={22} className={`mb-3 ${isSelected ? 'text-[#0ea5e9]' : 'text-[#121417]'}`} />
                  <h3 className={`text-base font-bold mb-1 font-sans ${isSelected ? 'text-[#f7f6f2]' : 'text-[#121417]'}`}>
                    {item.name}
                  </h3>
                  <div className={`text-xs font-mono uppercase tracking-wider mb-2 font-semibold ${
                    isSelected ? 'text-[#c2c7d0]' : 'text-[#737a87]'
                  }`}>
                    {item.label}
                  </div>
                </div>

                <p className={`text-xs sm:text-[13px] leading-relaxed pt-3 border-t ${
                  isSelected ? 'border-[#262a32] text-[#c2c7d0]' : 'border-[#e4e2db] text-[#4a505b]'
                }`}>
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Real Hardware Anchor: Editorial Layout with /device2.jpg */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-[#f7f6f2] border border-[#c8c5bc] p-6 sm:p-10 shadow-xs">
          
          {/* Hardware Photograph */}
          <div className="lg:col-span-6 relative">
            <div className="relative w-full h-[320px] sm:h-[380px] bg-[#121417] border border-[#c8c5bc]">
              <Image
                src="/device2.jpg"
                alt="Aztrax prototype industrial movement tag installed on steel equipment frame"
                fill
                className="object-cover opacity-90 grayscale-[10%]"
              />
              <div className="absolute bottom-3 left-3 bg-[#121417]/95 px-3 py-1 text-xs font-mono text-[#f7f6f2] border border-[#2a2f38] font-semibold">
                HARDWARE TAG · INDUSTRIAL ENCLOSURE
              </div>
            </div>
            <p className="mt-2 text-xs font-mono text-[#737a87] font-medium">
              PHOTO 03 — CLOSE-UP FIELD MOUNTING ON HEAVY EQUIPMENT STEELWORK
            </p>
          </div>

          {/* Measured Specifications & Pilot Target Disclaimers */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
            <div>
              <span className="text-xs sm:text-[13px] font-mono uppercase text-[#0ea5e9] tracking-wider block mb-2 font-bold">
                MEASURED ENGINEERING SPECIFICATIONS
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#121417] mb-3">
                No SIM per asset. Multi-year sleep architecture.
              </h3>
              <p className="text-sm sm:text-base text-[#4a505b] leading-relaxed mb-6 font-normal">
                Unlike consumer tags (requiring nearby smartphones) or wired vehicle trackers (requiring alternator wiring and telco SIMs), Aztrax is self-powered. It rests asleep, wakes only when acceleration exceeds threshold, and transmits directly to the site gateway.
              </p>
            </div>

            <div className="space-y-2.5 pt-4 border-t border-[#e4e2db] text-xs sm:text-[13px] font-mono text-[#32363e]">
              <div className="flex justify-between py-1.5 border-b border-[#eceae3]">
                <span className="text-[#737a87] font-medium">RADIO FREQUENCY:</span>
                <span className="font-bold text-[#121417]">865–867 MHz (India De-licensed Band)</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-[#eceae3]">
                <span className="text-[#737a87] font-medium">MOTION SENSING:</span>
                <span className="font-bold text-[#121417]">3-Axis Digital MEMS Accelerometer</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-[#eceae3]">
                <span className="text-[#737a87] font-medium">GATEWAY COVERAGE:</span>
                <span className="font-bold text-[#121417]">Defined Yard / Plant Zone (target, validated in pilot)</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="text-[#737a87] font-medium">OPERATIONAL LIFE:</span>
                <span className="font-bold text-[#121417]">Multi-year internal cell (target, validated in pilot)</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
