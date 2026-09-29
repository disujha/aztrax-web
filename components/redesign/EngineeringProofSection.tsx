'use client';

import React from 'react';
import Image from 'next/image';
import { UserCheck } from 'lucide-react';

const proofItems = [
  {
    id: 'prototype',
    index: 'RECORD 01',
    caption: 'Prototype field test',
    image: '/device2.jpg',
    sub: 'Mounting & accelerometer calibration',
    description:
      'Rigid mechanical attachment tested directly onto welded structural equipment frames. Vibration dampening algorithms isolate continuous engine oscillation from unauthorized physical towing or lifting displacement.',
    specs: [
      'Enclosure: Rugged IP67 prototype housing',
      'Fastening: Direct M8 bolt / magnetic mount',
      'Trigger: Acceleration threshold (>0.15G delta)',
    ],
  },
  {
    id: 'gateway',
    index: 'RECORD 02',
    caption: 'Gateway receiving asset events',
    image: '/second.jpg',
    sub: 'Sub-GHz propagation across heavy steel',
    description:
      'Site gateway tested in high-interference industrial environments containing shipping containers, stacked pipe racks, and structural steel bays. Transmits over sub-GHz frequencies without requiring line-of-sight optical paths.',
    specs: [
      'Frequency: 865–867 MHz de-licensed band (India)',
      'Sensitivity: -130 dBm receiver sensitivity (bench test)',
      'Range: Yard/plant boundary (target, to be validated in pilot)',
    ],
  },
  {
    id: 'interface',
    index: 'RECORD 03',
    caption: 'Movement event recorded',
    image: '/hero.jpg',
    sub: 'Clean telemetry log without coordinate noise',
    description:
      'Real movement telemetry captured in the Aztrax event log. Rather than dumping continuous raw GPS coordinates, the system records the exact moment of displacement, duration of vibration, and gateway packet strength.',
    specs: [
      'Latency: < 2.4 seconds to alert relay',
      'Payload: Tag ID, timestamp, peak acceleration',
      'Integrations: WhatsApp webhook, SMS, SCADA',
    ],
  },
];

export function EngineeringProofSection() {
  return (
    <section className="py-20 md:py-28 bg-[#f7f6f2] border-b border-[#e4e2db]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Index Marker */}
        <div className="flex items-center gap-3 text-xs sm:text-[13px] font-mono uppercase text-[#4a505b] mb-4">
          <span className="text-[#121417] font-bold">07</span>
          <span>/</span>
          <span className="font-semibold">FIELD CONDITIONS &amp; PROOF</span>
        </div>

        {/* Section Headline */}
        <div className="max-w-3xl mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#121417] leading-tight mb-4">
            Built for real industrial conditions.
          </h2>
          <p className="text-lg text-[#4a505b] leading-relaxed">
            We do not manufacture consumer gadgets or claim enterprise scale before testing in dust, vibration, and monsoon conditions. These are genuine field records from active prototype evaluations.
          </p>
        </div>

        {/* Three Honest Proof Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {proofItems.map((item) => (
            <div
              key={item.id}
              className="bg-[#ffffff] border border-[#c8c5bc] flex flex-col justify-between overflow-hidden shadow-xs hover:border-[#121417] transition-colors"
            >
              {/* Image with Honest Caption */}
              <div>
                <div className="relative w-full h-[240px] bg-[#121417]">
                  <Image
                    src={item.image}
                    alt={item.caption}
                    fill
                    className="object-cover opacity-85 grayscale-[20%]"
                  />
                  <div className="absolute top-3 left-3 bg-[#121417]/95 px-2.5 py-1 text-xs font-mono text-[#f7f6f2] border border-[#2a2f38] font-semibold">
                    {item.index}
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 bg-[#121417]/95 px-3 py-1.5 text-xs sm:text-[13px] font-mono text-[#0ea5e9] border border-[#2a2f38] flex items-center justify-between">
                    <span className="font-bold">“{item.caption}”</span>
                    <span className="text-xs text-[#c2c7d0]">SIMULATED OVERLAY</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#121417] mb-1 font-sans">
                    {item.sub}
                  </h3>
                  <p className="text-sm text-[#4a505b] leading-relaxed mb-6 font-normal">
                    {item.description}
                  </p>

                  {/* Technical Specifications */}
                  <div className="space-y-2 pt-4 border-t border-[#e4e2db] text-xs sm:text-[13px] font-mono text-[#4a505b]">
                    {item.specs.map((spec, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0ea5e9] shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Verification Note */}
              <div className="px-6 py-3 bg-[#f7f6f2] border-t border-[#e4e2db] text-xs font-mono text-[#737a87] font-semibold">
                HARDWARE STATUS: ACTIVE TEST BENCH · ZERO FABRICATED BENCHMARKS
              </div>
            </div>
          ))}
        </div>

        {/* Founder Credibility Block (New, exactly two sentences + photo placeholder) */}
        <div className="bg-[#ffffff] border-2 border-[#121417] p-7 sm:p-9 shadow-md flex flex-col md:flex-row items-start md:items-center gap-8">
          
          {/* Photo Placeholder */}
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-xs bg-[#f0eee8] border-2 border-dashed border-[#c8c5bc] flex flex-col items-center justify-center text-center p-2 shrink-0">
            <UserCheck size={28} className="text-[#737a87] mb-1" />
            <span className="text-[10px] font-mono uppercase text-[#737a87] font-semibold">
              Founder Photo
            </span>
          </div>

          {/* Two-Sentence Credibility Copy */}
          <div className="space-y-2">
            <div className="text-xs sm:text-[13px] font-mono uppercase text-[#0ea5e9] font-bold tracking-wider">
              FOUNDER BACKGROUND &amp; FIELD TRACK RECORD
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#121417] font-sans">
              Built by industrial project engineers.
            </h3>
            <p className="text-base sm:text-lg text-[#32363e] leading-relaxed font-normal">
              Aztrax is founded by an engineer with hands-on EPC and petrochemical project execution experience across industrial facilities in Haldia and Mumbai, and an active industrial monitoring deployment running at a Haldia plant.
            </p>
            <div className="pt-2 text-xs sm:text-[13px] font-mono text-[#737a87] font-medium">
              VERIFIED PROJECT SITE EXPERIENCE · ZERO FABRICATED CUSTOMER CLAIMS
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
