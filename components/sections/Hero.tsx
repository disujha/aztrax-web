'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

function SystemDiagram() {
  const [step, setStep] = useState(0);
  const [alertVisible, setAlertVisible] = useState(false);

  useEffect(() => {
    const sequence = () => {
      setStep(0);
      setAlertVisible(false);
      setTimeout(() => setStep(1), 800);
      setTimeout(() => setStep(2), 1800);
      setTimeout(() => setStep(3), 2800);
      setTimeout(() => setAlertVisible(true), 3200);
      setTimeout(() => {
        setStep(0);
        setAlertVisible(false);
      }, 5500);
    };
    sequence();
    const interval = setInterval(sequence, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative"
      style={{
        width: '100%',
        maxWidth: '480px',
        margin: '0 auto',
      }}
    >
      {/* Outer frame */}
      <div
        style={{
          background: 'rgba(16,24,32,0.8)',
          border: '1px solid rgba(22,185,232,0.2)',
          borderRadius: '8px',
          padding: '2rem 1.5rem',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Corner brackets */}
        <div style={{ position: 'absolute', top: 8, left: 8, width: 12, height: 12, borderTop: '1.5px solid rgba(22,185,232,0.5)', borderLeft: '1.5px solid rgba(22,185,232,0.5)' }} />
        <div style={{ position: 'absolute', top: 8, right: 8, width: 12, height: 12, borderTop: '1.5px solid rgba(22,185,232,0.5)', borderRight: '1.5px solid rgba(22,185,232,0.5)' }} />
        <div style={{ position: 'absolute', bottom: 8, left: 8, width: 12, height: 12, borderBottom: '1.5px solid rgba(22,185,232,0.5)', borderLeft: '1.5px solid rgba(22,185,232,0.5)' }} />
        <div style={{ position: 'absolute', bottom: 8, right: 8, width: 12, height: 12, borderBottom: '1.5px solid rgba(22,185,232,0.5)', borderRight: '1.5px solid rgba(22,185,232,0.5)' }} />

        {/* System label */}
        <div className="flex items-center justify-between mb-6">
          <span style={{ color: '#16b9e8', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' }}>AZTRAX System</span>
          <div className="flex items-center gap-1.5">
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: step >= 3 ? '#2ea84a' : '#3a4e68', transition: 'background 0.3s' }} />
            <span style={{ color: '#5a6e88', fontSize: '0.65rem' }}>{step >= 3 ? 'ACTIVE' : 'MONITORING'}</span>
          </div>
        </div>

        {/* Protected zone visualization */}
        <div
          style={{
            border: `1.5px ${step >= 2 ? 'solid' : 'dashed'} ${step >= 2 ? 'rgba(22,185,232,0.6)' : 'rgba(22,185,232,0.25)'}`,
            borderRadius: '6px',
            padding: '1.25rem',
            marginBottom: '1.25rem',
            position: 'relative',
            transition: 'border 0.4s',
            background: step >= 2 ? 'rgba(22,185,232,0.03)' : 'transparent',
          }}
        >
          <div style={{ position: 'absolute', top: -9, left: 12, background: '#0c111a', padding: '0 6px' }}>
            <span style={{ color: '#3a4e68', fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Protected Area</span>
          </div>

          {/* Asset with tag */}
          <div className="flex items-center justify-between">
            <div className="flex flex-col items-center gap-2">
              {/* Asset icon */}
              <div
                style={{
                  width: 48,
                  height: 48,
                  background: '#182030',
                  border: '1px solid rgba(22,185,232,0.15)',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="8" width="18" height="12" rx="2" stroke="#5a6e88" strokeWidth="1.5" />
                  <path d="M8 8V6a4 4 0 0 1 8 0v2" stroke="#5a6e88" strokeWidth="1.5" strokeLinecap="round" />
                  <rect x="9" y="11" width="6" height="5" rx="1" fill="#3a4e68" />
                </svg>
                {/* Official Tag hardware badge */}
                <div
                  style={{
                    position: 'absolute',
                    top: -8,
                    right: -8,
                    width: 20,
                    height: 20,
                    borderRadius: '4px',
                    background: '#101820',
                    border: `1.5px solid ${step >= 1 ? '#16b9e8' : '#3a4e68'}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '1px',
                    transition: 'border-color 0.3s',
                    boxShadow: step >= 1 ? '0 0 8px rgba(22,185,232,0.6)' : 'none',
                  }}
                >
                  <Image
                    src="/main_icon.png"
                    alt="AZTRAX Tag"
                    width={16}
                    height={16}
                    className="object-contain"
                  />
                </div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ color: '#8a9ab0', fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Asset</div>
                <div style={{ color: step >= 1 ? '#16b9e8' : '#3a4e68', fontSize: '0.6rem', fontWeight: 600, transition: 'color 0.3s' }}>AZTRAX TAG</div>
              </div>
            </div>

            {/* Signal wave */}
            <div className="flex-1 flex items-center justify-center px-3">
              <svg width="80" height="24" viewBox="0 0 80 24" fill="none">
                {[0, 1, 2].map((i) => (
                  <circle
                    key={i}
                    cx={20 + i * 20}
                    cy={12}
                    r={3}
                    fill={step >= 2 ? '#16b9e8' : '#2a3a50'}
                    opacity={step >= 2 ? (i === 0 ? 1 : i === 1 ? 0.6 : 0.3) : 0.3}
                    style={{ transition: 'fill 0.3s, opacity 0.3s', transitionDelay: `${i * 0.1}s` }}
                  />
                ))}
                <line x1="10" y1="12" x2="70" y2="12" stroke={step >= 2 ? 'rgba(22,185,232,0.3)' : 'rgba(42,58,80,0.5)'} strokeWidth="1" strokeDasharray="4 4" style={{ transition: 'stroke 0.3s' }} />
              </svg>
            </div>

            {/* Gateway */}
            <div className="flex flex-col items-center gap-2">
              <div
                style={{
                  width: 48,
                  height: 48,
                  background: '#182030',
                  border: `1px solid ${step >= 2 ? 'rgba(22,185,232,0.5)' : 'rgba(22,185,232,0.15)'}`,
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'border-color 0.3s',
                  position: 'relative',
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="6" width="20" height="14" rx="2" stroke={step >= 2 ? '#16b9e8' : '#5a6e88'} strokeWidth="1.5" style={{ transition: 'stroke 0.3s' }} />
                  <circle cx="12" cy="3" r="1.5" fill={step >= 2 ? '#16b9e8' : '#5a6e88'} style={{ transition: 'fill 0.3s' }} />
                  <line x1="12" y1="4.5" x2="12" y2="6" stroke={step >= 2 ? '#16b9e8' : '#5a6e88'} strokeWidth="1.5" style={{ transition: 'stroke 0.3s' }} />
                  <line x1="7" y1="11" x2="17" y2="11" stroke="#3a4e68" strokeWidth="1" />
                  <line x1="7" y1="14" x2="13" y2="14" stroke="#3a4e68" strokeWidth="1" />
                </svg>
                {step >= 2 && (
                  <div
                    style={{
                      position: 'absolute',
                      inset: -4,
                      borderRadius: '10px',
                      border: '1px solid rgba(22,185,232,0.3)',
                      animation: 'az-ping 2s ease-out infinite',
                    }}
                  />
                )}
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ color: '#8a9ab0', fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Gateway</div>
                <div style={{ color: step >= 2 ? '#16b9e8' : '#3a4e68', fontSize: '0.6rem', fontWeight: 600, transition: 'color 0.3s' }}>LISTENING</div>
              </div>
            </div>
          </div>
        </div>

        {/* Alert panel */}
        <div
          style={{
            background: alertVisible ? 'rgba(22,185,232,0.08)' : 'rgba(16,24,32,0.5)',
            border: `1px solid ${alertVisible ? 'rgba(22,185,232,0.4)' : 'rgba(42,58,80,0.3)'}`,
            borderRadius: '6px',
            padding: '0.875rem 1rem',
            transition: 'all 0.4s',
          }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  background: alertVisible ? '#16b9e8' : '#2a3a50',
                  transition: 'background 0.3s',
                  flexShrink: 0,
                }}
              />
              <div>
                <div style={{ color: alertVisible ? '#f5f7f8' : '#3a4e68', fontSize: '0.75rem', fontWeight: 600, transition: 'color 0.3s' }}>
                  {alertVisible ? 'MOVEMENT DETECTED' : 'AWAITING EVENTS'}
                </div>
                {alertVisible && (
                  <div style={{ color: '#16b9e8', fontSize: '0.65rem', marginTop: '2px' }}>
                    Alert sent → Responsible person notified
                  </div>
                )}
              </div>
            </div>
            {alertVisible && (
              <div style={{ color: '#8a9ab0', fontSize: '0.6rem', fontFamily: 'monospace' }}>
                {new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
              </div>
            )}
          </div>
        </div>

        {/* Step indicator */}
        <div className="flex items-center gap-1.5 mt-4 justify-center">
          {['Tag', 'Signal', 'Gateway', 'Alert'].map((label, i) => (
            <div key={label} className="flex items-center gap-1.5">
              <div className="flex flex-col items-center gap-0.5">
                <div
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    background: step >= i ? '#16b9e8' : '#2a3a50',
                    transition: 'background 0.3s',
                  }}
                />
                <span style={{ color: step >= i ? '#5a6e88' : '#2a3a50', fontSize: '0.55rem', textTransform: 'uppercase', letterSpacing: '0.05em', transition: 'color 0.3s' }}>{label}</span>
              </div>
              {i < 3 && (
                <div style={{ width: 16, height: 1, background: step > i ? '#16b9e8' : '#2a3a50', transition: 'background 0.3s', marginBottom: 10, marginLeft: 0 }} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 64;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section
      style={{
        background: '#0c111a',
        minHeight: '100vh',
        paddingTop: '64px',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Grid background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(22,185,232,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(22,185,232,0.04) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          pointerEvents: 'none',
        }}
      />
      {/* Gradient vignette */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 70% 50%, rgba(22,185,232,0.04) 0%, transparent 60%)',
          pointerEvents: 'none',
        }}
      />

      <div className="az-container" style={{ width: '100%', paddingTop: '4rem', paddingBottom: '4rem' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div>
            {/* Badge */}
            <div className="az-badge mb-6" style={{ display: 'inline-flex' }}>
              <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#16b9e8' }} />
              Wireless Asset Detection
            </div>

            {/* Headline */}
            <h1
              style={{
                color: '#f5f7f8',
                fontSize: 'clamp(2.25rem, 5vw, 4rem)',
                fontWeight: 700,
                lineHeight: 1.12,
                letterSpacing: '-0.02em',
                marginBottom: '1.5rem',
                maxWidth: '680px',
              }}
            >
              Know when something valuable moves{' '}
              <span style={{ color: '#16b9e8' }}>when it shouldn&apos;t.</span>
            </h1>

            {/* Subheadline */}
            <p
              style={{
                color: '#8a9ab0',
                fontSize: '1.1rem',
                lineHeight: 1.7,
                maxWidth: '560px',
                marginBottom: '2.5rem',
              }}
            >
              AZTRAX is a wireless asset movement and removal detection system
              for industrial sites, equipment yards, telecom infrastructure,
              EV charging locations and other controlled environments.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <button
                onClick={() => scrollToSection('pilot')}
                style={{
                  background: '#16b9e8',
                  color: '#060810',
                  fontSize: '0.9375rem',
                  fontWeight: 600,
                  padding: '0.875rem 2rem',
                  borderRadius: '4px',
                  border: 'none',
                  cursor: 'pointer',
                  letterSpacing: '0.01em',
                  transition: 'background 0.15s',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#4dcef0')}
                onMouseLeave={(e) => (e.currentTarget.style.background = '#16b9e8')}
              >
                Request a Free Pilot
              </button>
              <button
                onClick={() => scrollToSection('how-it-works')}
                style={{
                  background: 'transparent',
                  color: '#f5f7f8',
                  fontSize: '0.9375rem',
                  fontWeight: 500,
                  padding: '0.875rem 2rem',
                  borderRadius: '4px',
                  border: '1px solid rgba(245,247,248,0.2)',
                  cursor: 'pointer',
                  letterSpacing: '0.01em',
                  transition: 'border-color 0.15s, color 0.15s',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(22,185,232,0.5)';
                  e.currentTarget.style.color = '#16b9e8';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(245,247,248,0.2)';
                  e.currentTarget.style.color = '#f5f7f8';
                }}
              >
                See How It Works
              </button>
            </div>

            {/* Trust statement */}
            <div className="flex items-center gap-2">
              <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#16b9e8', flexShrink: 0 }} />
              <p style={{ color: '#5a6e88', fontSize: '0.8125rem' }}>
                Pilot first. Measure the result. Decide what to deploy.
              </p>
            </div>
          </div>

          {/* Diagram */}
          <div className="flex justify-center lg:justify-end">
            <SystemDiagram />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-16 lg:mt-20">
          <button
            onClick={() => scrollToSection('solutions')}
            style={{ color: '#3a4e68', background: 'none', border: 'none', cursor: 'pointer', transition: 'color 0.15s' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#16b9e8')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#3a4e68')}
            aria-label="Scroll to next section"
          >
            <ChevronDown size={24} style={{ animation: 'az-pulse 2s ease-in-out infinite' }} />
          </button>
        </div>
      </div>
    </section>
  );
}
