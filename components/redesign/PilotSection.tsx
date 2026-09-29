'use client';

import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, Loader2, Calendar, FileText, Check } from 'lucide-react';

const availableAssetTypes = [
  'Generators',
  'Welding equipment',
  'Cable reels / drums',
  'Gas cylinders',
  'Portable tools & pumps',
  'Other yard assets',
];

export function PilotSection() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionId, setSubmissionId] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    contactInfo: '',
    siteType: 'EPC contractor yard',
    assetTypes: ['Generators', 'Welding equipment'],
    lastLostAssetCost: '',
  });

  const toggleAssetType = (asset: string) => {
    setFormData((prev) => {
      const exists = prev.assetTypes.includes(asset);
      const updated = exists
        ? prev.assetTypes.filter((a) => a !== asset)
        : [...prev.assetTypes, asset];
      return { ...prev, assetTypes: updated.length ? updated : [asset] };
    });
  };

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
        throw new Error(data.error || 'Failed to submit pilot request');
      }

      setSubmissionId(data.pilotId || 'AZT-PILOT-REC');
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
        <div className="flex items-center gap-3 text-xs sm:text-[13px] font-mono uppercase text-[#4a505b] mb-4">
          <span className="text-[#121417] font-bold">06</span>
          <span>/</span>
          <span className="font-semibold">THE 30-DAY PILOT PROTOCOL</span>
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
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <div className="bg-[#f7f6f2] border border-[#c8c5bc] p-6 text-center shadow-2xs">
            <span className="text-3xl sm:text-4xl font-bold text-[#121417] font-mono block mb-1">
              10
            </span>
            <span className="text-xs sm:text-[13px] font-mono uppercase text-[#4a505b] tracking-wider block font-semibold">
              Assets Tagged
            </span>
            <span className="text-xs text-[#737a87] mt-2 block font-medium">
              Generators, welders, or reels
            </span>
          </div>

          <div className="bg-[#f7f6f2] border border-[#c8c5bc] p-6 text-center shadow-2xs">
            <span className="text-3xl sm:text-4xl font-bold text-[#121417] font-mono block mb-1">
              1
            </span>
            <span className="text-xs sm:text-[13px] font-mono uppercase text-[#4a505b] tracking-wider block font-semibold">
              Site Gateway
            </span>
            <span className="text-xs text-[#737a87] mt-2 block font-medium">
              865–867 MHz central receiver
            </span>
          </div>

          <div className="bg-[#f7f6f2] border border-[#c8c5bc] p-6 text-center shadow-2xs">
            <span className="text-3xl sm:text-4xl font-bold text-[#121417] font-mono block mb-1">
              1
            </span>
            <span className="text-xs sm:text-[13px] font-mono uppercase text-[#4a505b] tracking-wider block font-semibold">
              Defined Area
            </span>
            <span className="text-xs text-[#737a87] mt-2 block font-medium">
              Laydown yard or fabrication bay
            </span>
          </div>

          <div className="bg-[#121417] text-[#f7f6f2] p-6 text-center shadow-md">
            <span className="text-3xl sm:text-4xl font-bold text-[#0ea5e9] font-mono block mb-1">
              30
            </span>
            <span className="text-xs sm:text-[13px] font-mono uppercase text-[#c2c7d0] tracking-wider block font-semibold">
              Days Duration
            </span>
            <span className="text-xs text-[#a0a5af] mt-2 block font-medium">
              Written pass/fail evaluation
            </span>
          </div>
        </div>

        {/* Timeline Strip */}
        <div className="mb-14 p-6 bg-[#f7f6f2] border border-[#c8c5bc]">
          <div className="text-xs sm:text-[13px] font-mono font-bold text-[#121417] uppercase mb-4 tracking-wider flex items-center gap-2">
            <Calendar size={16} className="text-[#0ea5e9]" />
            <span>Pilot Deployment Timeline</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-3.5 bg-[#ffffff] border border-[#e4e2db]">
              <span className="text-xs font-mono font-bold text-[#0ea5e9] block mb-1">DAY 0</span>
              <span className="font-bold text-sm text-[#121417] block mb-0.5">Site Visit</span>
              <span className="text-xs text-[#4a505b]">Inspect yard layout, verify 865 MHz line-of-sight, select 10 target assets.</span>
            </div>

            <div className="p-3.5 bg-[#ffffff] border border-[#e4e2db]">
              <span className="text-xs font-mono font-bold text-[#0ea5e9] block mb-1">DAY 3</span>
              <span className="font-bold text-sm text-[#121417] block mb-0.5">Hardware Install</span>
              <span className="text-xs text-[#4a505b]">Mount gateway on yard pole/shed; bolt tags to equipment. Calibration run.</span>
            </div>

            <div className="p-3.5 bg-[#ffffff] border border-[#e4e2db]">
              <span className="text-xs font-mono font-bold text-[#0ea5e9] block mb-1">DAY 7</span>
              <span className="font-bold text-sm text-[#121417] block mb-0.5">First Live Alerts</span>
              <span className="text-xs text-[#4a505b]">Shift supervisors receive live WhatsApp alerts. Authorised move workflow tested.</span>
            </div>

            <div className="p-3.5 bg-[#ffffff] border border-[#e4e2db]">
              <span className="text-xs font-mono font-bold text-[#0ea5e9] block mb-1">DAY 30</span>
              <span className="font-bold text-sm text-[#121417] block mb-0.5">Written Review</span>
              <span className="text-xs text-[#4a505b]">Review measured criteria against pass/fail benchmarks. Decide next steps.</span>
            </div>
          </div>
        </div>

        {/* Editorial Layout: Commercial Terms on Left, 5-Field Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Pass/Fail Criteria & Commercial Terms (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Written Pass/Fail Criteria Box */}
            <div className="bg-[#f7f6f2] border border-[#c8c5bc] p-6 space-y-4">
              <div className="text-xs sm:text-[13px] font-mono font-bold text-[#121417] uppercase tracking-wider flex items-center gap-2">
                <FileText size={16} className="text-[#121417]" />
                <span>Agreed Pass / Fail Criteria</span>
              </div>
              <p className="text-xs sm:text-sm text-[#4a505b] leading-relaxed">
                Before commencing, we agree on measurable engineering criteria in writing so you have objective validation data:
              </p>

              <ul className="space-y-3 text-xs sm:text-[13px] font-mono text-[#32363e]">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#0ea5e9] font-bold">01</span>
                  <span><strong>Detection Latency:</strong> Unauthorized physical movement detected within <strong>[X]</strong> seconds.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#0ea5e9] font-bold">02</span>
                  <span><strong>False Alert Ceiling:</strong> No more than <strong>[Y]</strong> false alerts per week from ambient vibration.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#0ea5e9] font-bold">03</span>
                  <span><strong>Capture Rate:</strong> Minimum <strong>[Z]%</strong> of all physical equipment shifts correctly logged.</span>
                </li>
              </ul>
            </div>

            {/* What Happens After Day 30 & Commercial Pricing State */}
            <div className="bg-[#121417] text-[#f7f6f2] p-6 border border-[#2a2f38] space-y-3">
              <span className="text-xs sm:text-[13px] font-mono uppercase text-[#0ea5e9] font-bold tracking-wider block">
                What Happens After Day 30
              </span>
              <p className="text-xs sm:text-sm text-[#e4e2db] leading-relaxed">
                At the conclusion of Day 30, you either convert to a paid commercial deployment or we remove the devices. There is zero lock-in and no obligation.
              </p>
              <div className="pt-3 border-t border-[#2a2f38] text-xs font-mono text-[#c2c7d0]">
                <span>PILOT COMMERCIAL TERMS: </span>
                <span className="text-[#f59e0b] font-bold">[FILL IN: FREE PILOT FOR QUALIFIED INDUSTRIAL CONTRACTORS / PAID VALIDATION FEE APPLICABLE]</span>
              </div>
            </div>

          </div>

          {/* Right Column: 5-Field Pilot Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#f7f6f2] border-2 border-[#121417] p-6 sm:p-9 shadow-md">
            
            {formSubmitted ? (
              <div className="py-8 text-center space-y-4">
                <CheckCircle2 size={44} className="text-[#10b981] mx-auto" />
                <h3 className="text-2xl font-bold text-[#121417]">
                  Pilot Application Logged
                </h3>
                <p className="text-sm text-[#4a505b] max-w-md mx-auto leading-relaxed">
                  Thank you. Reference ID: <span className="font-mono font-bold text-[#121417]">{submissionId}</span>. We reply within 2 working days with site questionnaire and gateway placement plan.
                </p>
                <div className="pt-4 border-t border-[#e4e2db] text-xs font-mono text-[#737a87]">
                  10 ASSETS · 1 SITE GATEWAY · 30 DAYS EVALUATION
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-[#e4e2db]">
                  <h3 className="text-lg font-bold text-[#121417] font-sans">
                    Request 30-Day Site Pilot
                  </h3>
                  <span className="text-xs font-mono text-[#0ea5e9] font-bold">
                    10 ASSETS / 30 DAYS
                  </span>
                </div>

                {errorMessage && (
                  <div className="p-3 bg-[#fee2e2] border border-[#ef4444] text-[#991b1b] text-xs font-mono">
                    {errorMessage}
                  </div>
                )}

                {/* Field 1: Full Name */}
                <div>
                  <label className="block text-xs sm:text-[13px] font-mono text-[#121417] uppercase mb-1 font-semibold">
                    1. Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Sunil Mehta (Site Lead / Store Head)"
                    className="w-full px-3.5 py-3 text-sm bg-white border border-[#c8c5bc] focus:border-[#121417] focus:outline-none font-sans min-h-[44px]"
                  />
                </div>

                {/* Field 2: Company */}
                <div>
                  <label className="block text-xs sm:text-[13px] font-mono text-[#121417] uppercase mb-1 font-semibold">
                    2. Company *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="e.g. EPC Infrastructure Ltd / Plant Maintenance Div"
                    className="w-full px-3.5 py-3 text-sm bg-white border border-[#c8c5bc] focus:border-[#121417] focus:outline-none font-sans min-h-[44px]"
                  />
                </div>

                {/* Field 3: Work Email or Phone */}
                <div>
                  <label className="block text-xs sm:text-[13px] font-mono text-[#121417] uppercase mb-1 font-semibold">
                    3. Work Email or Phone Number *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.contactInfo}
                    onChange={(e) => setFormData({ ...formData, contactInfo: e.target.value })}
                    placeholder="e.g. s.mehta@contractor.in or +91 98765 43210"
                    className="w-full px-3.5 py-3 text-sm bg-white border border-[#c8c5bc] focus:border-[#121417] focus:outline-none font-sans min-h-[44px]"
                  />
                </div>

                {/* Field 4: Site Type (Dropdown) */}
                <div>
                  <label className="block text-xs sm:text-[13px] font-mono text-[#121417] uppercase mb-1 font-semibold">
                    4. Site Type *
                  </label>
                  <select
                    value={formData.siteType}
                    onChange={(e) => setFormData({ ...formData, siteType: e.target.value })}
                    className="w-full px-3.5 py-3 text-sm bg-white border border-[#c8c5bc] focus:border-[#121417] focus:outline-none font-sans min-h-[44px]"
                  >
                    <option value="EPC contractor yard">EPC contractor yard</option>
                    <option value="Stores & warehouse">Stores &amp; warehouse</option>
                    <option value="Fabrication bay / shop">Fabrication bay / shop</option>
                    <option value="Plant / refinery area">Plant / refinery area</option>
                    <option value="Equipment rental yard">Equipment rental yard</option>
                    <option value="Construction project site">Construction project site</option>
                    <option value="Other industrial site">Other industrial site</option>
                  </select>
                </div>

                {/* Field 5: Asset Types (Multi-Select) */}
                <div>
                  <label className="block text-xs sm:text-[13px] font-mono text-[#121417] uppercase mb-2 font-semibold">
                    5. Asset Types to Protect (Select all that apply) *
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {availableAssetTypes.map((asset) => {
                      const isSelected = formData.assetTypes.includes(asset);
                      return (
                        <button
                          key={asset}
                          type="button"
                          onClick={() => toggleAssetType(asset)}
                          className={`py-2 px-3 text-xs sm:text-[13px] font-mono border text-left flex items-center justify-between cursor-pointer transition-colors min-h-[40px] ${
                            isSelected
                              ? 'bg-[#121417] text-[#f7f6f2] border-[#121417] font-semibold'
                              : 'bg-white text-[#4a505b] border-[#c8c5bc] hover:border-[#121417]'
                          }`}
                        >
                          <span>{asset}</span>
                          {isSelected && <Check size={13} className="text-[#0ea5e9] shrink-0" />}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Optional Field: Last moved/lost asset and cost */}
                <div>
                  <label className="block text-xs sm:text-[13px] font-mono text-[#4a505b] uppercase mb-1 font-medium">
                    Optional: Which asset was last moved or lost at your site, and what did it cost?
                  </label>
                  <textarea
                    rows={2}
                    value={formData.lastLostAssetCost}
                    onChange={(e) => setFormData({ ...formData, lastLostAssetCost: e.target.value })}
                    placeholder="e.g. 2 Welding sets moved off-site during handover, approx ₹1.8L replacement cost"
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#c8c5bc] focus:border-[#121417] focus:outline-none font-sans"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#121417] text-[#f7f6f2] font-semibold text-sm tracking-wide rounded-xs hover:bg-[#232730] transition-colors flex items-center justify-center gap-2 cursor-pointer border border-[#121417] shadow-sm min-h-[48px]"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Registering Pilot Request...
                    </>
                  ) : (
                    <>
                      Start a 30-day pilot →
                    </>
                  )}
                </button>

                {/* Guaranteed Reply Timeline */}
                <p className="text-xs sm:text-[13px] text-[#737a87] font-mono text-center font-medium">
                  We reply within 2 working days.
                </p>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
