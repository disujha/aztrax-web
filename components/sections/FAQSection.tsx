'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  q: string;
  a: string;
}

const faqs: FAQItem[] = [
  {
    q: 'Is AZTRAX GPS tracking?',
    a: 'No. The core system is designed around detecting movement or removal within a defined protected area rather than providing continuous GPS location coordinates. Removing the GPS requirement allows smaller, much lower-cost tags with multi-month/multi-year battery life suitable for physical asset protection.',
  },
  {
    q: 'Does AZTRAX replace CCTV or guards?',
    a: 'No. AZTRAX is designed to complement existing security layers. CCTV is invaluable for post-incident investigation, and guards control gate access. AZTRAX adds the critical real-time alert layer that lets you know something moved when it shouldn’t—before the next scheduled shift or inspection.',
  },
  {
    q: 'Can I use one gateway for multiple assets?',
    a: 'Yes, that is the intended architecture. A single AZTRAX gateway monitors the protected zone and listens continuously for signals from multiple registered asset tags, subject to physical site layout, RF obstructions, and antenna positioning.',
  },
  {
    q: 'What assets can I attach the tag to?',
    a: 'Our current development focus includes welding machines, portable generators, air compressors, telecom radio units (RRUs), EV charging guns and cables, specialized testing instruments, equipment cages, and parked motorcycles. Suitability depends on attachment geometry and environmental conditions.',
  },
  {
    q: 'How much does it cost?',
    a: 'We do not publish fixed production pricing at this stage. Commercial pricing will depend on the asset type, tag volume, site topology, and software integration requirements. Request a free pilot to evaluate the system on your assets first.',
  },
  {
    q: 'Is the pilot really free?',
    a: 'Yes. Selected industrial pilots are currently offered at no charge during this product validation phase, subject to site suitability, asset type, and hardware availability. There is no upfront payment and no purchase commitment required.',
  },
  {
    q: 'Can AZTRAX be deployed in hazardous / explosive areas?',
    a: 'Current pilots are strictly intended for approved non-hazardous areas. Deployments in classified hazardous environments (such as refinery zones requiring ATEX, IECEx, or PESO approval) require specialized certification that is part of our future roadmap.',
  },
  {
    q: 'How are alerts delivered?',
    a: 'During the pilot phase, alerts can be dispatched via SMS, email, webhook, or integrated into site monitoring dashboards to notify designated site heads, project engineers, or security supervisors within seconds of unexpected movement.',
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="az-section" style={{ background: '#F5F7F8' }}>
      <div className="az-container">
        <div className="mb-4">
          <span className="az-badge az-badge-light">Common Questions</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12 items-end">
          <div>
            <h2
              style={{
                color: '#101820',
                fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
                fontWeight: 700,
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
              }}
            >
              Frequently asked{' '}
              <span style={{ color: '#16B9E8' }}>questions.</span>
            </h2>
          </div>
          <p style={{ color: '#5A6E88', fontSize: '1.05rem', lineHeight: 1.7 }}>
            Straight answers regarding AZTRAX technology, hardware capabilities, pilot terms, and operational boundaries.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.q}
                style={{
                  background: '#FFFFFF',
                  border: '1px solid rgba(16, 24, 32, 0.08)',
                  borderRadius: '6px',
                  overflow: 'hidden',
                  transition: 'border-color 0.2s',
                }}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                  style={{
                    background: 'transparent',
                    border: 'none',
                  }}
                  aria-expanded={isOpen}
                >
                  <span
                    style={{
                      color: isOpen ? '#16B9E8' : '#101820',
                      fontSize: '1rem',
                      fontWeight: 600,
                      lineHeight: 1.4,
                    }}
                  >
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={18}
                    style={{
                      color: isOpen ? '#16B9E8' : '#8A9AB0',
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.2s, color 0.2s',
                      flexShrink: 0,
                    }}
                  />
                </button>

                {isOpen && (
                  <div
                    className="px-5 pb-5 pt-1"
                    style={{
                      borderTop: '1px solid rgba(16, 24, 32, 0.04)',
                    }}
                  >
                    <p
                      style={{
                        color: '#5A6E88',
                        fontSize: '0.925rem',
                        lineHeight: 1.7,
                      }}
                    >
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support callout */}
        <div className="mt-8 text-center">
          <p style={{ color: '#8A9AB0', fontSize: '0.85rem' }}>
            Have a specific site layout or custom asset geometry to discuss?{' '}
            <a href="mailto:pilots@aztrax.in" className="text-[#16B9E8] font-medium hover:underline">
              Contact our engineering team directly
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
