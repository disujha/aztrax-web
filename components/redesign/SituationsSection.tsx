'use client';

import React from 'react';

const situations = [
  {
    id: 'generator',
    index: '01',
    category: 'POWER & HEAVY PLANT',
    title: 'Diesel Generator Sets',
    scenario: 'A DG set leaves the yard after hours.',
    description:
      'High-capacity generators are routinely parked in laydown areas, contractor compounds, and remote corners of refinery expansion sites. They are heavy, high-value, and assumed to be immobile without cranes or towing trailers. At night, unauthorized hitching happens fast.',
    telemetry: {
      time: '02:17 AM',
      status: 'MOVEMENT DETECTED',
      location: 'GATEWAY G-03 · CONTRACTOR PERIMETER WEST',
      sensor: '3-AXIS ACCELERATION TRIGGER (>0.15G)',
    },
    action: 'Night security desk notified before the vehicle reaches the main perimeter boom barrier.',
  },
  {
    id: 'welding',
    index: '02',
    category: 'FABRICATION & TOOLS',
    title: 'Welding & Portable Inverters',
    scenario: 'A contractor’s welding machine leaves its assigned area.',
    description:
      'Industrial welding machines, pipe-bevelling tools, and mobile compressors migrate constantly between contractors and sub-contractors on large EPC projects. They frequently “disappear” during shift handovers or get loaded into unauthorized pickup beds.',
    telemetry: {
      time: '18:42',
      status: 'MOVEMENT DETECTED',
      location: 'FABRICATION ZONE · GATEWAY G-01',
      sensor: 'DISPLACEMENT ALERT · BOUNDARY CROSSING',
    },
    action: 'Area supervisor receives notification to verify whether the movement was authorized on the shift log.',
  },
  {
    id: 'cable-reel',
    index: '03',
    category: 'ELECTRICAL & MATERIALS',
    title: 'High-Tension Cable Reels',
    scenario: 'A cable reel moves out of the designated material yard.',
    description:
      'Heavy wooden and steel reels containing expensive copper and high-voltage power cables sit in open material storage yards. Because they are heavy, they are left unprotected by indoor warehousing. Rolling or lifting a drum onto a flatbed takes less than ten minutes.',
    telemetry: {
      time: '11:24',
      status: 'MOVEMENT RECORDED',
      location: 'MATERIAL YARD → DISPATCH · GATEWAY G-02',
      sensor: 'ROTATION & TILT SENSOR TRIGGERED',
    },
    action: 'Yard inventory manager verifies whether an approved dispatch work order matches the timestamped movement.',
  },
];

export function SituationsSection() {
  return (
    <section id="situations" className="py-20 md:py-28 bg-[#f7f6f2] border-b border-[#e4e2db]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Index Marker */}
        <div className="flex items-center gap-3 text-xs font-mono uppercase text-[#737a87] mb-4">
          <span className="text-[#121417] font-semibold">03</span>
          <span>/</span>
          <span>FIELD APPLICATIONS</span>
        </div>

        {/* Section Headline */}
        <div className="max-w-3xl mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#121417] leading-tight mb-4">
            Three things that shouldn’t move unnoticed.
          </h2>
          <p className="text-lg text-[#646a76] leading-relaxed">
            Aztrax is intentionally not a universal tracking platform for consumer items. We focus on stationary and semi-stationary capital equipment where unexpected displacement creates serious disruption.
          </p>
        </div>

        {/* Three Editorial Situations Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {situations.map((item) => (
            <div
              key={item.id}
              className="bg-[#ffffff] border border-[#c8c5bc] flex flex-col justify-between p-6 sm:p-7 shadow-xs hover:border-[#121417] transition-colors"
            >
              <div>
                {/* Header Tag */}
                <div className="flex items-center justify-between text-xs font-mono text-[#737a87] mb-4 pb-3 border-b border-[#e4e2db]">
                  <span className="font-semibold text-[#121417]">{item.index}</span>
                  <span className="uppercase tracking-wider">{item.category}</span>
                </div>

                {/* Title & Core Scenario */}
                <h3 className="text-xl font-bold text-[#121417] mb-2 font-sans">
                  {item.title}
                </h3>
                <p className="text-sm font-semibold text-[#0ea5e9] mb-4 font-mono">
                  “{item.scenario}”
                </p>

                {/* Practical Operational Context */}
                <p className="text-sm text-[#4a505b] leading-relaxed mb-6 font-normal">
                  {item.description}
                </p>
              </div>

              {/* Concrete Telemetry Display Box */}
              <div>
                <div className="bg-[#121417] text-[#f7f6f2] p-4 font-mono text-xs border border-[#2a2f38] mb-4">
                  <div className="flex items-center justify-between mb-2 pb-2 border-b border-[#232730]">
                    <span className="text-[#a0a5af]">EVENT TIMESTAMP</span>
                    <span className="text-[#d97706] font-semibold">{item.telemetry.time}</span>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[#a0a5af]">STATE</span>
                    <span className="text-[#f59e0b] font-medium tracking-wide">
                      {item.telemetry.status}
                    </span>
                  </div>
                  <div className="text-[11px] text-[#c2c7d0] pt-1">
                    {item.telemetry.location}
                  </div>
                  <div className="text-[10px] text-[#737a87] mt-1">
                    {item.telemetry.sensor}
                  </div>
                </div>

                {/* Resulting Human Action */}
                <div className="text-xs text-[#32363e] pt-2 border-t border-[#e4e2db]">
                  <span className="font-semibold text-[#121417] block font-mono text-[11px] mb-0.5 uppercase">
                    Operational Action
                  </span>
                  <span>{item.action}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Editorial Subnote */}
        <div className="mt-12 text-center text-xs font-mono text-[#737a87]">
          SCOPE RESTRICTION: ASSETS REQUIRING HIGHWAY/REGIONAL TRACKING OUTSIDE PLANTS ARE BETTER SUITED TO STANDARD FLEET GPS.
        </div>

      </div>
    </section>
  );
}
