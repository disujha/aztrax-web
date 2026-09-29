'use client';

import React, { useState } from 'react';
import { industryOptions, pilotAreaAccessOptions } from '@/lib/pilot-schema';
import { CheckCircle2, AlertCircle, Loader2, ArrowRight } from 'lucide-react';

interface FormState {
  fullName: string;
  companyName: string;
  workEmail: string;
  phone: string;
  jobTitle: string;
  industry: string;
  assetDescription: string;
  assetCount: string;
  assetLocation: string;
  currentProcess: string;
  pilotAreaAccess: string;
  notes: string;
  _honeypot: string;
}

const initialFormState: FormState = {
  fullName: '',
  companyName: '',
  workEmail: '',
  phone: '',
  jobTitle: '',
  industry: industryOptions[0],
  assetDescription: '',
  assetCount: '',
  assetLocation: '',
  currentProcess: '',
  pilotAreaAccess: 'Yes',
  notes: '',
  _honeypot: '',
};

export function PilotForm() {
  const [formData, setFormData] = useState<FormState>(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string[]>>({});
  const [confirmedPilotId, setConfirmedPilotId] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg(null);
    setFieldErrors({});

    try {
      const res = await fetch('/api/pilot-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        if (data.details) {
          setFieldErrors(data.details);
          setErrorMsg('Please review the highlighted fields below.');
        } else {
          setErrorMsg(data.error || 'Failed to submit pilot request. Please try again.');
        }
        setIsSubmitting(false);
        return;
      }

      setConfirmedPilotId(data.pilotId);
      setIsSubmitting(false);
    } catch (err) {
      console.error('Submission error:', err);
      setErrorMsg('Network error. Please check your connection or contact pilots@aztrax.in directly.');
      setIsSubmitting(false);
    }
  };

  if (confirmedPilotId) {
    return (
      <div
        className="rounded-lg p-8 sm:p-10 border"
        style={{
          background: '#080C10',
          borderColor: 'rgba(22, 185, 232, 0.4)',
          boxShadow: '0 0 30px rgba(22, 185, 232, 0.08)',
        }}
      >
        <div className="flex items-center gap-3 mb-4">
          <div
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              background: 'rgba(22, 185, 232, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <CheckCircle2 size={24} style={{ color: '#16B9E8' }} />
          </div>
          <div>
            <span
              style={{
                color: '#16B9E8',
                fontSize: '0.7rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
              }}
            >
              Application Registered
            </span>
            <h3 style={{ color: '#F5F7F8', fontSize: '1.4rem', fontWeight: 700 }}>
              Pilot request received.
            </h3>
          </div>
        </div>

        <p style={{ color: '#8A9AB0', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
          We will review your specified use case and contact you via work email to assess site conditions,
          asset attachment parameters, and gateway placement.
        </p>

        {/* Reference ID card */}
        <div
          className="p-4 rounded mb-6"
          style={{
            background: '#101820',
            border: '1px solid rgba(22, 185, 232, 0.2)',
          }}
        >
          <div style={{ color: '#5A6E88', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            Pilot Reference ID
          </div>
          <div style={{ color: '#16B9E8', fontSize: '1.15rem', fontFamily: 'monospace', fontWeight: 700, marginTop: '2px' }}>
            {confirmedPilotId}
          </div>
          <div style={{ color: '#8A9AB0', fontSize: '0.8rem', marginTop: '6px' }}>
            Registered for: <strong className="text-white">{formData.companyName}</strong> ({formData.fullName})
          </div>
        </div>

        {/* Typical Pilot Structure */}
        <div
          className="p-5 rounded"
          style={{
            background: '#0C111A',
            border: '1px solid rgba(255, 255, 255, 0.06)',
          }}
        >
          <div style={{ color: '#F5F7F8', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.75rem' }}>
            Standard Pilot Deployment Structure
          </div>
          <ul className="space-y-2.5">
            {[
              '1–2 weeks dedicated evaluation period',
              'Small number of high-value prototype tags attached to agreed assets',
              'Defined protected area boundary calibrated with gateway',
              'Agreed measurable success criteria (detection rate, alert speed, false alarm suppression)',
              'Zero payment required · Formal review at pilot completion',
            ].map((item) => (
              <li key={item} className="flex items-center gap-2.5">
                <span className="az-status-dot bg-[#16B9E8]" />
                <span style={{ color: '#8A9AB0', fontSize: '0.85rem' }}>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <button
          onClick={() => {
            setFormData(initialFormState);
            setConfirmedPilotId(null);
          }}
          className="mt-6 text-sm text-[#16B9E8] hover:underline cursor-pointer flex items-center gap-1.5"
        >
          Submit another site or asset for pilot evaluation
          <ArrowRight size={14} />
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 sm:p-8 rounded-lg border"
      style={{
        background: '#080C10',
        borderColor: 'rgba(22, 185, 232, 0.2)',
      }}
    >
      {/* Honeypot field for spam prevention */}
      <input
        type="text"
        name="_honeypot"
        value={formData._honeypot}
        onChange={handleChange}
        style={{ display: 'none' }}
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="flex items-center justify-between pb-4 mb-6 border-b border-[rgba(255,255,255,0.06)]">
        <div>
          <span style={{ color: '#16B9E8', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
            B2B Pilot Application
          </span>
          <h3 style={{ color: '#F5F7F8', fontSize: '1.25rem', fontWeight: 700 }}>
            Request a Free AZTRAX Pilot
          </h3>
        </div>
        <span
          style={{
            background: 'rgba(22, 185, 232, 0.1)',
            color: '#16B9E8',
            fontSize: '0.65rem',
            padding: '3px 8px',
            borderRadius: '2px',
            fontWeight: 600,
          }}
        >
          VALIDATION COHORT
        </span>
      </div>

      {errorMsg && (
        <div
          className="p-3 mb-6 rounded flex items-center gap-2.5"
          style={{
            background: 'rgba(220, 38, 38, 0.1)',
            border: '1px solid rgba(220, 38, 38, 0.3)',
            color: '#F87171',
            fontSize: '0.85rem',
          }}
        >
          <AlertCircle size={16} className="flex-shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      {/* Row 1: Contact Details */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label style={{ display: 'block', color: '#8A9AB0', fontSize: '0.75rem', fontWeight: 600, marginBottom: '6px' }}>
            Full Name *
          </label>
          <input
            type="text"
            name="fullName"
            required
            value={formData.fullName}
            onChange={handleChange}
            placeholder="e.g. Rajesh Sharma"
            className="w-full px-3.5 py-2.5 rounded text-sm text-white focus:outline-none transition-colors"
            style={{
              background: '#101820',
              border: `1px solid ${fieldErrors.fullName ? '#F87171' : 'rgba(255, 255, 255, 0.1)'}`,
            }}
          />
          {fieldErrors.fullName && (
            <p className="text-red-400 text-xs mt-1">{fieldErrors.fullName[0]}</p>
          )}
        </div>

        <div>
          <label style={{ display: 'block', color: '#8A9AB0', fontSize: '0.75rem', fontWeight: 600, marginBottom: '6px' }}>
            Work Email *
          </label>
          <input
            type="email"
            name="workEmail"
            required
            value={formData.workEmail}
            onChange={handleChange}
            placeholder="name@company.com"
            className="w-full px-3.5 py-2.5 rounded text-sm text-white focus:outline-none transition-colors"
            style={{
              background: '#101820',
              border: `1px solid ${fieldErrors.workEmail ? '#F87171' : 'rgba(255, 255, 255, 0.1)'}`,
            }}
          />
          {fieldErrors.workEmail && (
            <p className="text-red-400 text-xs mt-1">{fieldErrors.workEmail[0]}</p>
          )}
        </div>
      </div>

      {/* Row 2: Company & Title */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label style={{ display: 'block', color: '#8A9AB0', fontSize: '0.75rem', fontWeight: 600, marginBottom: '6px' }}>
            Company / Organisation *
          </label>
          <input
            type="text"
            name="companyName"
            required
            value={formData.companyName}
            onChange={handleChange}
            placeholder="e.g. Larsen & Toubro, Tata Power"
            className="w-full px-3.5 py-2.5 rounded text-sm text-white focus:outline-none transition-colors"
            style={{
              background: '#101820',
              border: `1px solid ${fieldErrors.companyName ? '#F87171' : 'rgba(255, 255, 255, 0.1)'}`,
            }}
          />
          {fieldErrors.companyName && (
            <p className="text-red-400 text-xs mt-1">{fieldErrors.companyName[0]}</p>
          )}
        </div>

        <div>
          <label style={{ display: 'block', color: '#8A9AB0', fontSize: '0.75rem', fontWeight: 600, marginBottom: '6px' }}>
            Job Title *
          </label>
          <input
            type="text"
            name="jobTitle"
            required
            value={formData.jobTitle}
            onChange={handleChange}
            placeholder="e.g. Project Manager, Plant Head, O&M Lead"
            className="w-full px-3.5 py-2.5 rounded text-sm text-white focus:outline-none transition-colors"
            style={{
              background: '#101820',
              border: `1px solid ${fieldErrors.jobTitle ? '#F87171' : 'rgba(255, 255, 255, 0.1)'}`,
            }}
          />
          {fieldErrors.jobTitle && (
            <p className="text-red-400 text-xs mt-1">{fieldErrors.jobTitle[0]}</p>
          )}
        </div>
      </div>

      {/* Row 3: Phone & Industry */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label style={{ display: 'block', color: '#8A9AB0', fontSize: '0.75rem', fontWeight: 600, marginBottom: '6px' }}>
            Phone Number *
          </label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 98765 43210"
            className="w-full px-3.5 py-2.5 rounded text-sm text-white focus:outline-none transition-colors"
            style={{
              background: '#101820',
              border: `1px solid ${fieldErrors.phone ? '#F87171' : 'rgba(255, 255, 255, 0.1)'}`,
            }}
          />
          {fieldErrors.phone && (
            <p className="text-red-400 text-xs mt-1">{fieldErrors.phone[0]}</p>
          )}
        </div>

        <div>
          <label style={{ display: 'block', color: '#8A9AB0', fontSize: '0.75rem', fontWeight: 600, marginBottom: '6px' }}>
            Industry Category *
          </label>
          <select
            name="industry"
            value={formData.industry}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 rounded text-sm text-white focus:outline-none transition-colors"
            style={{
              background: '#101820',
              border: `1px solid ${fieldErrors.industry ? '#F87171' : 'rgba(255, 255, 255, 0.1)'}`,
            }}
          >
            {industryOptions.map((opt) => (
              <option key={opt} value={opt} className="bg-[#101820] text-white">
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Row 4: Asset Description & Count */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
        <div className="sm:col-span-2">
          <label style={{ display: 'block', color: '#8A9AB0', fontSize: '0.75rem', fontWeight: 600, marginBottom: '6px' }}>
            What would you like to protect? *
          </label>
          <input
            type="text"
            name="assetDescription"
            required
            value={formData.assetDescription}
            onChange={handleChange}
            placeholder="e.g. 3 welding machines, 2 portable DG sets, tower batteries"
            className="w-full px-3.5 py-2.5 rounded text-sm text-white focus:outline-none transition-colors"
            style={{
              background: '#101820',
              border: `1px solid ${fieldErrors.assetDescription ? '#F87171' : 'rgba(255, 255, 255, 0.1)'}`,
            }}
          />
          {fieldErrors.assetDescription && (
            <p className="text-red-400 text-xs mt-1">{fieldErrors.assetDescription[0]}</p>
          )}
        </div>

        <div>
          <label style={{ display: 'block', color: '#8A9AB0', fontSize: '0.75rem', fontWeight: 600, marginBottom: '6px' }}>
            Approx. Asset Count *
          </label>
          <input
            type="text"
            name="assetCount"
            required
            value={formData.assetCount}
            onChange={handleChange}
            placeholder="e.g. 2-5 units"
            className="w-full px-3.5 py-2.5 rounded text-sm text-white focus:outline-none transition-colors"
            style={{
              background: '#101820',
              border: `1px solid ${fieldErrors.assetCount ? '#F87171' : 'rgba(255, 255, 255, 0.1)'}`,
            }}
          />
          {fieldErrors.assetCount && (
            <p className="text-red-400 text-xs mt-1">{fieldErrors.assetCount[0]}</p>
          )}
        </div>
      </div>

      {/* Row 5: Asset Location */}
      <div className="mb-4">
        <label style={{ display: 'block', color: '#8A9AB0', fontSize: '0.75rem', fontWeight: 600, marginBottom: '6px' }}>
          Where are the assets located? *
        </label>
        <input
          type="text"
          name="assetLocation"
          required
          value={formData.assetLocation}
          onChange={handleChange}
          placeholder="e.g. Outdoor equipment laydown yard in Dahej, Gujarat"
          className="w-full px-3.5 py-2.5 rounded text-sm text-white focus:outline-none transition-colors"
          style={{
            background: '#101820',
            border: `1px solid ${fieldErrors.assetLocation ? '#F87171' : 'rgba(255, 255, 255, 0.1)'}`,
          }}
        />
        {fieldErrors.assetLocation && (
          <p className="text-red-400 text-xs mt-1">{fieldErrors.assetLocation[0]}</p>
        )}
      </div>

      {/* Row 6: Current Missing Asset Process */}
      <div className="mb-4">
        <label style={{ display: 'block', color: '#8A9AB0', fontSize: '0.75rem', fontWeight: 600, marginBottom: '6px' }}>
          What happens today if an asset goes missing or moves unexpectedly? *
        </label>
        <textarea
          name="currentProcess"
          required
          rows={2}
          value={formData.currentProcess}
          onChange={handleChange}
          placeholder="e.g. We only notice during weekly inventory reconciliation or when the next shift cannot find it."
          className="w-full px-3.5 py-2 rounded text-sm text-white focus:outline-none transition-colors"
          style={{
            background: '#101820',
            border: `1px solid ${fieldErrors.currentProcess ? '#F87171' : 'rgba(255, 255, 255, 0.1)'}`,
          }}
        />
        {fieldErrors.currentProcess && (
          <p className="text-red-400 text-xs mt-1">{fieldErrors.currentProcess[0]}</p>
        )}
      </div>

      {/* Row 7: Pilot Area Access */}
      <div className="mb-6">
        <label style={{ display: 'block', color: '#8A9AB0', fontSize: '0.75rem', fontWeight: 600, marginBottom: '6px' }}>
          Would you be able to provide access to a suitable non-hazardous pilot area? *
        </label>
        <div className="grid grid-cols-3 gap-3">
          {pilotAreaAccessOptions.map((opt) => (
            <label
              key={opt}
              className="flex items-center gap-2 p-2.5 rounded cursor-pointer transition-colors"
              style={{
                background: formData.pilotAreaAccess === opt ? 'rgba(22, 185, 232, 0.15)' : '#101820',
                border: `1px solid ${formData.pilotAreaAccess === opt ? '#16B9E8' : 'rgba(255, 255, 255, 0.1)'}`,
              }}
            >
              <input
                type="radio"
                name="pilotAreaAccess"
                value={opt}
                checked={formData.pilotAreaAccess === opt}
                onChange={handleChange}
                className="text-[#16B9E8] focus:ring-0"
              />
              <span style={{ color: formData.pilotAreaAccess === opt ? '#16B9E8' : '#8A9AB0', fontSize: '0.85rem', fontWeight: 500 }}>
                {opt}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3.5 px-6 rounded font-semibold text-center flex items-center justify-center gap-2 transition-all cursor-pointer"
        style={{
          background: isSubmitting ? '#5A6E88' : '#16B9E8',
          color: '#080C10',
          fontSize: '0.95rem',
        }}
      >
        {isSubmitting ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            <span>Processing Pilot Application...</span>
          </>
        ) : (
          <span>Request Free Pilot</span>
        )}
      </button>

      <p className="text-center mt-3 text-xs text-[#5A6E88]">
        We review every pilot request individually. No upfront payment or commercial obligation required.
      </p>
    </form>
  );
}
