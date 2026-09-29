'use client';

import React from 'react';
import Image from 'next/image';

const primaryLinks = [
  { label: 'Problem & Discovery Gap', href: '#problem' },
  { label: 'First Principles (No GPS)', href: '#concept' },
  { label: 'Three Real Situations', href: '#situations' },
  { label: 'System Architecture', href: '#architecture' },
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

            <p className="text-xs font-mono uppercase text-[#0ea5e9] tracking-wider">
              Industrial Asset Movement Detection
            </p>

            <p className="text-sm text-[#9aa0ac] leading-relaxed max-w-sm font-normal">
              Aztrax detects unexpected movement of industrial equipment inside defined sites, yards and project areas — without putting GPS and a SIM on everything.
            </p>

            <div className="pt-2 text-xs font-mono text-[#737a87]">
              <span>CORE ASSETS: </span>
              <span className="text-[#f7f6f2]">GENERATORS · WELDING PLANT · CABLE REELS</span>
            </div>
          </div>

          {/* Navigation Links (3 cols) */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono uppercase text-[#737a87] tracking-wider mb-4">
              Documentation
            </h4>
            <ul className="space-y-2.5 text-sm font-normal">
              {primaryLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#9aa0ac] hover:text-[#ffffff] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Target Facilities & Contact (4 cols) */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-mono uppercase text-[#737a87] tracking-wider mb-4">
              Validated Environments
            </h4>
            <ul className="space-y-2 text-xs font-mono text-[#9aa0ac] mb-6">
              {targetIndustries.map((ind) => (
                <li key={ind} className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#0ea5e9]" />
                  <span>{ind}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t border-[#232730] flex flex-col gap-1 text-xs font-mono">
              <span className="text-[#737a87]">PILOT INQUIRIES &amp; FIELD OPS:</span>
              <a
                href="mailto:pilot@aztrax.in"
                className="text-[#f7f6f2] hover:text-[#0ea5e9] transition-colors font-medium"
              >
                pilot@aztrax.in
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#232730] py-6 bg-[#0e1013]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#737a87]">
          <div>
            &copy; {new Date().getFullYear()} AZTRAX. ALL RIGHTS RESERVED.
          </div>
          <div>
            PILOT-STAGE INDUSTRIAL HARDWARE · NOT A GENERIC GPS TELEMATICS PLATFORM
          </div>
        </div>
      </div>
    </footer>
  );
}
