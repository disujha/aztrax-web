'use client';

import React from 'react';
import Image from 'next/image';

const primaryLinks = [
  { label: 'Problem & Discovery Gap', href: '#problem' },
  { label: 'First Principles (No GPS)', href: '#concept' },
  { label: 'Authorised Moves Workflow', href: '#problem' },
  { label: 'Three Real Situations', href: '#situations' },
  { label: 'How It Works & Hardware', href: '#architecture' },
  { label: '30-Day Pilot Protocol', href: '#pilot' },
];

const targetIndustries = [
  'EPC Project Sites & Compounds',
  'Petrochemical & Refinery Plants',
  'Industrial Equipment Rental Yards',
  'Mechanical & Electrical Contractors',
  'Material Laydown & Cable Yards',
];

export function Footer() {
  return (
    <footer className="bg-[#121417] text-[#f7f6f2] border-t border-[#232730]">
      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* Brand & Proposition (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5 select-none">
              <Image
                src="/main_icon.png"
                alt="AZTRAX"
                width={28}
                height={28}
                className="object-contain"
              />
              <span
                style={{
                  color: '#ffffff',
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  letterSpacing: '0.04em',
                  fontFamily: "'Akira', var(--font-sans), sans-serif",
                  lineHeight: 1,
                }}
              >
                aztrax
              </span>
            </div>

            <p className="text-xs sm:text-[13px] font-mono uppercase text-[#0ea5e9] tracking-wider font-semibold">
              Industrial Asset Movement Detection · 865–867 MHz (India)
            </p>

            <p className="text-sm sm:text-base text-[#c2c7d0] leading-relaxed max-w-sm font-normal">
              Aztrax detects unexpected movement of industrial equipment inside defined sites, yards and project areas — without putting GPS and a SIM on everything.
            </p>

            <div className="pt-2 text-xs sm:text-[13px] font-mono text-[#9aa0ac]">
              <span>TARGET ASSETS: </span>
              <span className="text-[#f7f6f2] font-semibold">GENERATORS · WELDING PLANT · CABLE REELS</span>
            </div>
          </div>

          {/* Navigation Links (3 cols) */}
          <div className="md:col-span-3">
            <h4 className="text-xs sm:text-[13px] font-mono uppercase text-[#9aa0ac] tracking-wider mb-4 font-bold">
              Site Sections
            </h4>
            <ul className="space-y-2.5 text-sm sm:text-[15px] font-normal">
              {primaryLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#c2c7d0] hover:text-[#ffffff] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Target Facilities & Contact (4 cols) */}
          <div className="md:col-span-4">
            <h4 className="text-xs sm:text-[13px] font-mono uppercase text-[#9aa0ac] tracking-wider mb-4 font-bold">
              Target Facilities
            </h4>
            <ul className="space-y-2 text-xs sm:text-[13px] font-mono text-[#c2c7d0] mb-6">
              {targetIndustries.map((ind) => (
                <li key={ind} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0ea5e9] shrink-0" />
                  <span>{ind}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t border-[#232730] flex flex-col gap-1 text-xs sm:text-[13px] font-mono">
              <span className="text-[#9aa0ac]">PILOT INQUIRIES &amp; FIELD OPS:</span>
              <a
                href="mailto:pilot@aztrax.in"
                className="text-[#f7f6f2] hover:text-[#0ea5e9] transition-colors font-semibold"
              >
                pilot@aztrax.in
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#232730] py-6 bg-[#0e1013]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-[13px] font-mono text-[#9aa0ac]">
          <div>
            &copy; {new Date().getFullYear()} AZTRAX. ALL RIGHTS RESERVED.
          </div>
          <div>
            865–867 MHZ SUB-GHZ INDUSTRIAL HARDWARE · NO FABRICATED METRICS
          </div>
        </div>
      </div>
    </footer>
  );
}
