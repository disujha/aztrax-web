'use client';

import React, { useState } from 'react';
import { CheckCircle2, ShieldCheck, ArrowRight, Loader2 } from 'lucide-react';

export function PilotSection() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionId, setSubmissionId] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const [formData, setFormData] = useState({
    fullName: '',
    jobTitle: '',
    companyName: '',
    workEmail: '',
    phone: '',
    industry: 'EPC / Construction' as const,
    assetDescription: 'Diesel Generators & Portable Equipment',
    assetCount: '10 assets (Standard Pilot Scope)',
    assetLocation: '',
    currentProcess: 'Periodic physical inspections and security guard registers.',
    pilotAreaAccess: 'Yes' as const,
    notes: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const res = await fetch('/api/pilot-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit pilot inquiry');
      }

      setSubmissionId(data.id || 'AZT-PILOT-REC');
      setFormSubmitted(true);
    } catch (err: unknown) {
      setErrorMessage(err instanceof Error ? err.message : 'An error occurred during submission.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="pilot" className="py-20 md:py-28 bg-[#ffffff] border-b border-[#e4e2db]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Index Marker */}
        <div className="flex items-center gap-3 text-xs font-mono uppercase text-[#737a87] mb-4">
          <span className="text-[#121417] font-semibold">06</span>
          <span>/</span>
          <span>COMMERCIAL CHARTER</span>
        </div>

        {/* Section Headline */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#121417] leading-tight mb-4">
            Start with one area. Prove it.
          </h2>
          <p className="text-lg text-[#4a505b] leading-relaxed">
            We’ll monitor movement, coverage, false alerts and operational value before you decide whether to scale.
          </p>
        </div>

        {/* The 4-Pillar Concrete Scope Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          <div className="bg-[#f7f6f2] border border-[#c8c5bc] p-6 text-center">
            <span className="text-3xl sm:text-4xl font-bold text-[#121417] font-mono block mb-1">
              10
            </span>
            <span className="text-xs font-mono uppercase text-[#737a87] tracking-wider block">
              Assets Tagged
            </span>
            <span className="text-xs text-[#646a76] mt-2 block">
              Generators, welders, or reels
            </span>
          </div>

          <div className="bg-[#f7f6f2] border border-[#c8c5bc] p-6 text-center">
            <span className="text-3xl sm:text-4xl font-bold text-[#121417] font-mono block mb-1">
              1
            </span>
            <span className="text-xs font-mono uppercase text-[#737a87] tracking-wider block">
              Site Gateway
            </span>
            <span className="text-xs text-[#646a76] mt-2 block">
              Covers plant or yard perimeter
            </span>
          </div>

          <div className="bg-[#f7f6f2] border border-[#c8c5bc] p-6 text-center">
            <span className="text-3xl sm:text-4xl font-bold text-[#121417] font-mono block mb-1">
              1
            </span>
            <span className="text-xs font-mono uppercase text-[#737a87] tracking-wider block">
              Defined Area
            </span>
            <span className="text-xs text-[#646a76] mt-2 block">
              Laydown yard or fabrication bay
            </span>
          </div>

          <div className="bg-[#121417] text-[#f7f6f2] p-6 text-center shadow-md">
            <span className="text-3xl sm:text-4xl font-bold text-[#0ea5e9] font-mono block mb-1">
              30
            </span>
            <span className="text-xs font-mono uppercase text-[#a0a5af] tracking-wider block">
              Days Duration
            </span>
            <span className="text-xs text-[#c2c7d0] mt-2 block">
              Measurable operational report
            </span>
          </div>
        </div>

        {/* Editorial Layout: Commercial Terms on Left, Actionable Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: What We Measure (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#f7f6f2] border border-[#e4e2db] p-6">
              <h3 className="text-lg font-bold text-[#121417] mb-3 font-sans">
                What the 30-Day Pilot Proves
              </h3>
              <p className="text-sm text-[#4a505b] leading-relaxed mb-4">
                This is not a marketing trial or free giveaway. It is an engineering validation protocol designed for Site Directors, Maintenance Heads, and Plant Managers.
              </p>

              <ul className="space-y-3 text-xs font-mono text-[#32363e]">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#0ea5e9] font-bold">01</span>
                  <span><strong>RF Signal Propagation:</strong> Confirms sub-GHz packet delivery through your exact layout of steel structures and containers.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#0ea5e9] font-bold">02</span>
                  <span><strong>False Alert Filtering:</strong> Verifies that routine nearby wind, engine vibration, or shift noise does not trigger false movement alarms.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#0ea5e9] font-bold">03</span>
                  <span><strong>Event Latency:</strong> Proves that unexpected physical movement triggers notifications to responsible personnel in under 5 seconds.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#0ea5e9] font-bold">04</span>
                  <span><strong>Site Team Workflow:</strong> Tests whether security desk and shift leads can act on alerts without technical friction.</span>
                </li>
              </ul>
            </div>

            <div className="p-4 border border-[#c8c5bc] text-xs font-mono text-[#737a87]">
              COMMERCIAL CHARTER: NO ONGOING CONTRACT REQUIRED. AT DAY 30, YOU DECIDE WHETHER TO SCALE BASED ON MEASURED DATA.
            </div>
          </div>

          {/* Right Column: Pilot Application Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#f7f6f2] border-2 border-[#121417] p-7 sm:p-9 shadow-md">
            
            {formSubmitted ? (
              <div className="py-8 text-center space-y-4">
                <CheckCircle2 size={44} className="text-[#10b981] mx-auto" />
                <h3 className="text-2xl font-bold text-[#121417]">
                  Pilot Application Recorded
                </h3>
                <p className="text-sm text-[#4a505b] max-w-md mx-auto leading-relaxed">
                  Thank you. Your reference ID is <span className="font-mono font-bold text-[#121417]">{submissionId}</span>. Our technical deployment lead will review your site parameters and contact you within 24 hours to schedule gateway placement.
                </p>
                <div className="pt-4 border-t border-[#e4e2db] text-xs font-mono text-[#737a87]">
                  INSPECTION SCOPE: 10 ASSETS · 1 SITE GATEWAY · 30 DAYS
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-[#e4e2db]">
                  <h3 className="text-lg font-bold text-[#121417] font-sans">
                    Request 30-Day Deployment
                  </h3>
                  <span className="text-xs font-mono text-[#0ea5e9] font-semibold">
                    10 ASSETS / 1 GATEWAY
                  </span>
                </div>

                {errorMessage && (
                  <div className="p-3 bg-[#fee2e2] border border-[#ef4444] text-[#991b1b] text-xs font-mono">
                    {errorMessage}
                  </div>
                )}

                {/* Grid: Name & Title */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-[#4a505b] uppercase mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Rajesh Sharma"
                      className="w-full px-3 py-2 text-sm bg-white border border-[#c8c5bc] focus:border-[#121417] focus:outline-none font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#4a505b] uppercase mb-1">
                      Job Title *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.jobTitle}
                      onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                      placeholder="e.g. Site Maintenance Head / Plant Manager"
                      className="w-full px-3 py-2 text-sm bg-white border border-[#c8c5bc] focus:border-[#121417] focus:outline-none font-sans"
                    />
                  </div>
                </div>

                {/* Grid: Company & Work Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-[#4a505b] uppercase mb-1">
                      Company / Contractor Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      placeholder="e.g. Larsen &amp; Toubro / Reliance EPC"
                      className="w-full px-3 py-2 text-sm bg-white border border-[#c8c5bc] focus:border-[#121417] focus:outline-none font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#4a505b] uppercase mb-1">
                      Official Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.workEmail}
                      onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full px-3 py-2 text-sm bg-white border border-[#c8c5bc] focus:border-[#121417] focus:outline-none font-sans"
                    />
                  </div>
                </div>

                {/* Grid: Phone & Industry */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-[#4a505b] uppercase mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-3 py-2 text-sm bg-white border border-[#c8c5bc] focus:border-[#121417] focus:outline-none font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#4a505b] uppercase mb-1">
                      Facility / Industry Type *
                    </label>
                    <select
                      value={formData.industry}
                      onChange={(e) => setFormData({ ...formData, industry: e.target.value as typeof formData.industry })}
                      className="w-full px-3 py-2 text-sm bg-white border border-[#c8c5bc] focus:border-[#121417] focus:outline-none font-sans"
                    >
                      <option value="EPC / Construction">EPC / Construction Project Yard</option>
                      <option value="Manufacturing & Plant Operations">Petrochemical / Refinery / Plant</option>
                      <option value="Industrial Equipment Rental">Industrial Equipment Rental</option>
                      <option value="Facility & Equipment Management">Maintenance Contractor</option>
                      <option value="Warehouse / CFA Operations">Material / Laydown Yard</option>
                      <option value="Other Industrial Operation">Other Industrial Site</option>
                    </select>
                  </div>
                </div>

                {/* Asset Description & Location */}
                <div>
                  <label className="block text-xs font-mono text-[#4a505b] uppercase mb-1">
                    Describe the 10 Assets to Protect *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.assetDescription}
                    onChange={(e) => setFormData({ ...formData, assetDescription: e.target.value })}
                    placeholder="e.g. 4 DG Sets, 4 Welding Inverters, 2 Cable Drums"
                    className="w-full px-3 py-2 text-sm bg-white border border-[#c8c5bc] focus:border-[#121417] focus:outline-none font-sans"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#4a505b] uppercase mb-1">
                    Site Location &amp; Yard Details *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.assetLocation}
                    onChange={(e) => setFormData({ ...formData, assetLocation: e.target.value })}
                    placeholder="e.g. Dahej EPC expansion yard (approx 200m x 150m open yard)"
                    className="w-full px-3 py-2 text-sm bg-white border border-[#c8c5bc] focus:border-[#121417] focus:outline-none font-sans"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-[#121417] text-[#f7f6f2] font-semibold text-sm tracking-wide rounded-xs hover:bg-[#232730] transition-colors flex items-center justify-center gap-2 cursor-pointer border border-[#121417]"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Registering Pilot...
                    </>
                  ) : (
                    <>
                      Start a 30-day pilot →
                    </>
                  )}
                </button>

                <p className="text-[11px] text-[#737a87] font-mono text-center">
                  DIRECT TECHNICAL EVALUATION · NO CREDIT CARD REQUIRED · SHIPS TO VERIFIED OPERATORS
                </p>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
