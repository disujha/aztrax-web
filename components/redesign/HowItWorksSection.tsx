'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowRight, Bell, Cloud, Cpu, HardHat, Radio, Wifi } from 'lucide-react';

const stages = [
  {
    step: '01',
    id: 'asset',
    name: 'Asset',
    label: 'PHYSICAL EQUIPMENT',
    desc: 'Stationary or semi-stationary equipment inside a defined yard or plant boundary.',
    icon: HardHat,
  },
  {
    step: '02',
    id: 'tag',
    name: 'Aztrax Tag',
    label: 'COMPACT SENSOR',
    desc: 'Rugged enclosure bolted or magnetic-mounted. 3-axis accelerometer and vibration filter.',
    icon: Cpu,
  },
  {
    step: '03',
    id: 'radio',
    name: 'Sub-GHz Radio',
    label: 'LOCAL TRANSMISSION',
    desc: 'Long-range sub-GHz packets penetrate steel structures, containers, and concrete bays.',
    icon: Wifi,
  },
  {
    step: '04',
    id: 'gateway',
    name: 'Site Gateway',
    label: 'LISTENING RECEPTOR',
    desc: 'Mains or solar powered. Covers the plant or yard zone. Listens continuously for registered tags.',
    icon: Radio,
  },
  {
    step: '05',
    id: 'cloud',
    name: 'Aztrax Cloud',
    label: 'EVENT CLASSIFICATION',
    desc: 'Eliminates false vibration noise. Validates whether movement violates site rules or schedules.',
    icon: Cloud,
  },
  {
    step: '06',
    id: 'alert',
    name: 'Immediate Alert',
    label: 'ACTIONABLE NOTIFICATION',
    desc: 'SMS, WhatsApp, webhook or guard-post relay delivered within seconds of physical movement.',
    icon: Bell,
  },
];

export function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % stages.length);
    }, 2400);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="architecture" className="py-20 md:py-28 bg-[#ffffff] border-b border-[#e4e2db]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Index Marker */}
        <div className="flex items-center gap-3 text-xs font-mono uppercase text-[#737a87] mb-4">
          <span className="text-[#121417] font-semibold">04</span>
          <span>/</span>
          <span>PHYSICAL ARCHITECTURE</span>
        </div>

        {/* Section Headline */}
        <div className="max-w-3xl mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#121417] leading-tight mb-4">
            A small device. A site gateway. One clear event.
          </h2>
          <p className="text-lg text-[#646a76] leading-relaxed">
            The system is intentionally simple. We do not stream heavy coordinate data across satellite constellations. An asset moves; the tag transmits; the site gateway reports; the responsible person acts.
          </p>
        </div>

        {/* Visual Flow Pipeline */}
        <div className="mb-14">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {stages.map((st, idx) => {
              const Icon = st.icon;
              const isActive = activeStep === idx;
              const isPast = activeStep > idx;

              return (
                <div
                  key={st.id}
                  onClick={() => setActiveStep(idx)}
                  className={`p-4 border transition-all cursor-pointer flex flex-col justify-between ${
                    isActive
                      ? 'bg-[#121417] border-[#121417] text-[#f7f6f2] shadow-md scale-[1.02]'
                      : isPast
                      ? 'bg-[#f7f6f2] border-[#c8c5bc] text-[#121417]'
                      : 'bg-[#ffffff] border-[#e4e2db] text-[#4a505b]'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono mb-3">
                      <span className={`${isActive ? 'text-[#0ea5e9]' : 'text-[#737a87]'}`}>
                        {st.step}
                      </span>
                      {isActive && (
                        <span className="w-2 h-2 rounded-full bg-[#0ea5e9] animate-ping" />
                      )}
                    </div>
                    <Icon size={20} className={`mb-2.5 ${isActive ? 'text-[#0ea5e9]' : 'text-[#737a87]'}`} />
                    <h3 className={`text-sm font-bold mb-1 font-sans ${isActive ? 'text-[#f7f6f2]' : 'text-[#121417]'}`}>
                      {st.name}
                    </h3>
                    <div className={`text-[10px] font-mono tracking-wider uppercase mb-2 ${
                      isActive ? 'text-[#a0a5af]' : 'text-[#737a87]'
                    }`}>
                      {st.label}
                    </div>
                  </div>

                  <p className={`text-xs leading-relaxed pt-2 border-t ${
                    isActive ? 'border-[#262a32] text-[#c2c7d0]' : 'border-[#f0eee8] text-[#646a76]'
                  }`}>
                    {st.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Interactive Step Timeline Indicator */}
          <div className="mt-4 flex items-center justify-between text-xs font-mono text-[#737a87] px-1">
            <span className="hidden sm:inline">CYCLE STAGE: {stages[activeStep].name.toUpperCase()} ACTIVE</span>
            <div className="flex items-center gap-1.5 w-full sm:w-auto justify-end">
              {stages.map((st, i) => (
                <button
                  key={st.id}
                  onClick={() => setActiveStep(i)}
                  className={`h-1.5 transition-all cursor-pointer ${
                    activeStep === i
                      ? 'w-8 bg-[#0ea5e9]'
                      : 'w-3 bg-[#e4e2db] hover:bg-[#c8c5bc]'
                  }`}
                  aria-label={`Jump to stage ${st.name}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Real Hardware Anchor: Editorial Layout with /device2.jpg */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-[#f7f6f2] border border-[#c8c5bc] p-6 sm:p-10">
          
          {/* Hardware Photograph */}
          <div className="lg:col-span-6 relative">
            <div className="relative w-full h-[320px] sm:h-[380px] bg-[#121417] border border-[#c8c5bc]">
              <Image
                src="/device2.jpg"
                alt="Aztrax prototype industrial movement tag installed on metal equipment frame"
                fill
                className="object-cover opacity-90 grayscale-[10%]"
              />
              <div className="absolute bottom-3 left-3 bg-[#121417]/90 px-3 py-1 text-[11px] font-mono text-[#f7f6f2] border border-[#2a2f38]">
                HARDWARE TAG · INDUSTRIAL ENCLOSURE
              </div>
            </div>
            <p className="mt-2 text-[11px] font-mono text-[#737a87]">
              PHOTO 03 — CLOSE-UP FIELD MOUNTING ON HEAVY EQUIPMENT STEELWORK
            </p>
          </div>

          {/* Hardware Engineering Specifications */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono uppercase text-[#0ea5e9] tracking-wider block mb-2 font-medium">
                ENGINEERING REALITY
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#121417] mb-4">
                Bolted to the machine. Listened to by the site.
              </h3>
              <p className="text-base text-[#4a505b] leading-relaxed mb-6">
                Unlike consumer AirTags (which require nearby iPhones) or vehicle GPS units (which require 12V automotive power and continuous 4G SIM plans), the Aztrax device is self-contained. It wakes up on physical motion, communicates over license-free industrial sub-GHz frequencies, and sleeps the rest of the time.
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-[#e4e2db] text-xs font-mono text-[#32363e]">
              <div className="flex justify-between py-1 border-b border-[#eceae3]">
                <span className="text-[#737a87]">RADIO TRANSMISSION:</span>
                <span className="font-semibold text-[#121417]">Sub-GHz (865-868 MHz / 915 MHz)</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#eceae3]">
                <span className="text-[#737a87]">MOTION DETECTION:</span>
                <span className="font-semibold text-[#121417]">3-Axis Digital MEMS Accelerometer</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#eceae3]">
                <span className="text-[#737a87]">SITE RECEPTION RANGE:</span>
                <span className="font-semibold text-[#121417]">Multi-Hundred Meter Industrial Radius</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-[#737a87]">POWER REQUIREMENT:</span>
                <span className="font-semibold text-[#121417]">Internal Industrial Cell (Multi-Year)</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
