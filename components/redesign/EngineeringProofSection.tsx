'use client';

import React from 'react';
import Image from 'next/image';

const proofItems = [
  {
    id: 'prototype',
    index: 'RECORD 01',
    caption: 'Prototype field test',
    image: '/device2.jpg',
    sub: 'Mounting & accelerometer calibration',
    description:
      'Rigid mechanical attachment tested directly onto welded structural equipment frames. Vibration dampening algorithms isolate continuous engine oscillation from unauthorized physical towing or lifting displacement.',
    specs: ['Enclosure: Rugged IP67 prototype housing', 'Fastening: Direct M8 bolt / magnetic mount', 'Trigger: Vector sum delta threshold'],
  },
  {
    id: 'gateway',
    index: 'RECORD 02',
    caption: 'Gateway receiving asset events',
    image: '/second.jpg',
    sub: 'Sub-GHz propagation across heavy steel',
    description:
      'Site gateway tested in high-interference industrial environments containing shipping containers, stacked pipe racks, and structural steel bays. Transmits over sub-GHz frequencies without requiring line-of-sight optical paths.',
    specs: ['Frequencies: 865-868 MHz / 915 MHz ISM band', 'Sensitivity: -130 dBm receiver sensitivity', 'Power: 12V DC with solar/battery buffer'],
  },
  {
    id: 'interface',
    index: 'RECORD 03',
    caption: 'Movement event recorded',
    image: '/hero.jpg',
    sub: 'Clean telemetry log without coordinate noise',
    description:
      'Real movement telemetry captured in the Aztrax event log. Rather than dumping continuous raw GPS coordinates, the system records the exact moment of displacement, duration of vibration, and gateway packet strength.',
    specs: ['Latency: < 2.4 seconds to alert relay', 'Payload: Tag ID, timestamp, peak acceleration', 'Integrations: Webhook, SMS, Telegram, SCADA'],
  },
];

export function EngineeringProofSection() {
  return (
    <section className="py-20 md:py-28 bg-[#f7f6f2] border-b border-[#e4e2db]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Index Marker */}
        <div className="flex items-center gap-3 text-xs font-mono uppercase text-[#737a87] mb-4">
          <span className="text-[#121417] font-semibold">07</span>
          <span>/</span>
          <span>FIELD VALIDATION</span>
        </div>

        {/* Section Headline */}
        <div className="max-w-3xl mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#121417] leading-tight mb-4">
            Built for real industrial conditions.
          </h2>
          <p className="text-lg text-[#646a76] leading-relaxed">
            We do not manufacture glossy consumer gadgets or claim enterprise scale before testing in dust, vibration, and monsoon rains. These are genuine field records from active prototype evaluations.
          </p>
        </div>

        {/* Three Honest Proof Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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
                  <div className="absolute top-3 left-3 bg-[#121417]/90 px-2.5 py-1 text-[10px] font-mono text-[#f7f6f2] border border-[#2a2f38]">
                    {item.index}
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 bg-[#121417]/95 px-3 py-1.5 text-xs font-mono text-[#0ea5e9] border border-[#2a2f38] flex items-center justify-between">
                    <span className="font-semibold">“{item.caption}”</span>
                    <span className="text-[10px] text-[#a0a5af]">RAW LOG</span>
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
                  <div className="space-y-1.5 pt-4 border-t border-[#e4e2db] text-[11px] font-mono text-[#646a76]">
                    {item.specs.map((spec, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-[#0ea5e9]" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Verification Note */}
              <div className="px-6 py-3 bg-[#f7f6f2] border-t border-[#e4e2db] text-[11px] font-mono text-[#737a87]">
                STATUS: ACTIVE PROTOTYPE RUN · ZERO SIMULATED METRICS
              </div>
            </div>
          ))}
        </div>

        {/* Credibility Statement */}
        <div className="mt-12 p-6 bg-[#f0eee8] border border-[#c8c5bc] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-[#4a505b]">
          <div>
            <span className="font-bold text-[#121417] uppercase block mb-1">NO FAKE METRICS OR IMAGINED LOGOS</span>
            <span>Aztrax is in active pilot validation. We publish verified engineering data, not speculative enterprise claims.</span>
          </div>
          <span className="text-[#121417] font-semibold whitespace-nowrap">
            HARDWARE REV 0.3
          </span>
        </div>

      </div>
    </section>
  );
}
