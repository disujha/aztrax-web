'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { AztraxLogo } from '@/components/ui/AztraxLogo';
import {
  Inbox,
  Building2,
  MapPin,
  Radio,
  BarChart3,
  RefreshCw,
  Clock,
  Mail,
  Phone,
  HardHat,
} from 'lucide-react';
import type { PilotRequestRecord } from '@/lib/pilot-schema';

type AdminTab = 'requests' | 'companies' | 'sites' | 'devices' | 'results';

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<AdminTab>('requests');
  const [requests, setRequests] = useState<PilotRequestRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterIndustry, setFilterIndustry] = useState<string>('ALL');

  const fetchRequests = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/pilot-requests');
      const data = await res.json();
      if (data.data) {
        setRequests(data.data);
      }
    } catch (err) {
      console.error('Failed to load pilot requests:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  const filteredRequests = requests.filter((r) =>
    filterIndustry === 'ALL' ? true : r.industry === filterIndustry
  );

  return (
    <div style={{ background: '#080C10', minHeight: '100vh', color: '#F5F7F8', paddingTop: '80px', paddingBottom: '80px' }}>
      <div className="az-container">
        {/* Admin Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-[rgba(255,255,255,0.08)] gap-4 mb-8">
          <div className="flex items-center gap-4">
            <AztraxLogo size="sm" showSubtitle={false} />
            <div>
              <span style={{ color: '#16B9E8', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                Internal Operations
              </span>
              <h1 style={{ color: '#F5F7F8', fontSize: '1.25rem', fontWeight: 800 }}>
                Pilot Evaluation Dashboard
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={fetchRequests}
              className="px-3.5 py-1.5 rounded text-xs font-semibold flex items-center gap-1.5 cursor-pointer transition-colors"
              style={{
                background: '#101820',
                border: '1px solid rgba(22, 185, 232, 0.3)',
                color: '#16B9E8',
              }}
            >
              <RefreshCw size={13} className={loading ? 'animate-spin' : ''} />
              <span>Refresh</span>
            </button>
            <Link
              href="/"
              className="px-3.5 py-1.5 rounded text-xs font-semibold text-[#8A9AB0] hover:text-white transition-colors"
              style={{ background: '#101820', border: '1px solid rgba(255, 255, 255, 0.1)' }}
            >
              Exit to Site
            </Link>
          </div>
        </div>

        {/* Tab Navigation (Structured for Section 32 requirements) */}
        <div className="flex flex-wrap items-center gap-2 mb-8 border-b border-[rgba(255,255,255,0.06)] pb-2">
          {[
            { id: 'requests', label: 'Pilot Requests', icon: Inbox, count: requests.length },
            { id: 'companies', label: 'Companies', icon: Building2, count: null },
            { id: 'sites', label: 'Pilot Sites', icon: MapPin, count: null },
            { id: 'devices', label: 'Gateways & Tags', icon: Radio, count: null },
            { id: 'results', label: 'Pilot Results', icon: BarChart3, count: null },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as AdminTab)}
                className="flex items-center gap-2 px-4 py-2.5 rounded text-xs font-semibold cursor-pointer transition-all"
                style={{
                  background: isActive ? '#101820' : 'transparent',
                  color: isActive ? '#16B9E8' : '#8A9AB0',
                  border: isActive ? '1px solid rgba(22, 185, 232, 0.3)' : '1px solid transparent',
                }}
              >
                <Icon size={14} />
                <span>{tab.label}</span>
                {tab.count !== null && (
                  <span
                    className="ml-1 px-1.5 py-0.2 rounded-full text-[10px]"
                    style={{
                      background: isActive ? 'rgba(22, 185, 232, 0.2)' : 'rgba(255, 255, 255, 0.08)',
                      color: isActive ? '#16B9E8' : '#8A9AB0',
                    }}
                  >
                    {tab.count}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Active Tab: Pilot Requests */}
        {activeTab === 'requests' && (
          <div>
            {/* Filter toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6 p-4 rounded" style={{ background: '#101820', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
              <div className="flex items-center gap-3">
                <span style={{ color: '#8A9AB0', fontSize: '0.75rem', fontWeight: 600 }}>Filter by Sector:</span>
                <select
                  value={filterIndustry}
                  onChange={(e) => setFilterIndustry(e.target.value)}
                  className="px-3 py-1.5 rounded text-xs bg-[#080C10] text-white border border-[rgba(255,255,255,0.1)] focus:outline-none"
                >
                  <option value="ALL">All Sectors ({requests.length})</option>
                  <option value="EPC / Construction">EPC / Construction</option>
                  <option value="Telecom Infrastructure">Telecom</option>
                  <option value="EV Charging Infrastructure">EV Charging</option>
                  <option value="Warehouse / CFA Operations">Warehouse / CFA</option>
                  <option value="Manufacturing & Plant Operations">Manufacturing</option>
                  <option value="Facility & Equipment Management">Facility Management</option>
                </select>
              </div>

              <div style={{ color: '#5A6E88', fontSize: '0.75rem' }}>
                Showing {filteredRequests.length} candidate pilot applications
              </div>
            </div>

            {loading ? (
              <div className="py-20 text-center text-[#8A9AB0] text-sm">
                Loading pilot requests from Firestore / repository...
              </div>
            ) : filteredRequests.length === 0 ? (
              <div className="py-20 text-center rounded border border-dashed border-[rgba(255,255,255,0.1)]" style={{ background: '#101820' }}>
                <Inbox size={32} style={{ color: '#5A6E88', margin: '0 auto 12px' }} />
                <h3 style={{ color: '#F5F7F8', fontSize: '1rem', fontWeight: 600 }}>No pilot requests found</h3>
                <p style={{ color: '#8A9AB0', fontSize: '0.8rem', marginTop: '4px' }}>
                  Submissions received through the Free Pilot Form will appear here.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredRequests.map((req) => (
                  <div
                    key={req.id}
                    className="p-6 rounded-lg border transition-all"
                    style={{
                      background: '#101820',
                      borderColor: 'rgba(22, 185, 232, 0.15)',
                    }}
                  >
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-3 border-b border-[rgba(255,255,255,0.06)] gap-2 mb-4">
                      <div>
                        <div className="flex items-center gap-2.5">
                          <span style={{ color: '#16B9E8', fontSize: '0.8rem', fontFamily: 'monospace', fontWeight: 700 }}>
                            {req.id}
                          </span>
                          <span
                            className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider"
                            style={{
                              background: req.status === 'PENDING_REVIEW' ? 'rgba(212, 160, 32, 0.15)' : 'rgba(22, 185, 232, 0.15)',
                              color: req.status === 'PENDING_REVIEW' ? '#D4A020' : '#16B9E8',
                              border: `1px solid ${req.status === 'PENDING_REVIEW' ? 'rgba(212, 160, 32, 0.3)' : 'rgba(22, 185, 232, 0.3)'}`,
                            }}
                          >
                            {req.status.replace('_', ' ')}
                          </span>
                        </div>
                        <h3 style={{ color: '#F5F7F8', fontSize: '1.1rem', fontWeight: 700, marginTop: '4px' }}>
                          {req.companyName}
                        </h3>
                      </div>

                      <div className="flex items-center gap-2 text-xs text-[#5A6E88]">
                        <Clock size={12} />
                        <span>Submitted: {new Date(req.createdAt).toLocaleString('en-IN')}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
                      {/* Contact Column */}
                      <div className="space-y-2">
                        <div style={{ color: '#5A6E88', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                          Operational Contact
                        </div>
                        <div style={{ color: '#F5F7F8', fontWeight: 600 }}>{req.fullName}</div>
                        <div style={{ color: '#8A9AB0' }}>{req.jobTitle}</div>
                        <div className="flex items-center gap-1.5 text-[#16B9E8]">
                          <Mail size={12} />
                          <a href={`mailto:${req.workEmail}`} className="hover:underline">
                            {req.workEmail}
                          </a>
                        </div>
                        <div className="flex items-center gap-1.5 text-[#8A9AB0]">
                          <Phone size={12} />
                          <span>{req.phone}</span>
                        </div>
                      </div>

                      {/* Assets Column */}
                      <div className="space-y-2">
                        <div style={{ color: '#5A6E88', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                          Asset &amp; Scope
                        </div>
                        <div>
                          <span style={{ color: '#8A9AB0' }}>Sector: </span>
                          <strong style={{ color: '#F5F7F8' }}>{req.industry}</strong>
                        </div>
                        <div>
                          <span style={{ color: '#8A9AB0' }}>Target Assets: </span>
                          <span style={{ color: '#B8C4D0' }}>{req.assetDescription}</span>
                        </div>
                        <div>
                          <span style={{ color: '#8A9AB0' }}>Asset Count: </span>
                          <span style={{ color: '#16B9E8', fontWeight: 600 }}>{req.assetCount}</span>
                        </div>
                        <div>
                          <span style={{ color: '#8A9AB0' }}>Area Access: </span>
                          <span style={{ color: req.pilotAreaAccess === 'Yes' ? '#2EA84A' : '#D4A020', fontWeight: 600 }}>
                            {req.pilotAreaAccess}
                          </span>
                        </div>
                      </div>

                      {/* Location & Current Process */}
                      <div className="space-y-2">
                        <div style={{ color: '#5A6E88', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                          Site &amp; Current Missing Process
                        </div>
                        <div>
                          <span style={{ color: '#8A9AB0' }}>Location: </span>
                          <span style={{ color: '#B8C4D0' }}>{req.assetLocation}</span>
                        </div>
                        <div>
                          <span style={{ color: '#8A9AB0' }}>Current Process: </span>
                          <p style={{ color: '#8A9AB0', fontStyle: 'italic', marginTop: '2px', lineHeight: 1.4 }}>
                            &ldquo;{req.currentProcess}&rdquo;
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Future-Proofed Placeholder Tabs */}
        {activeTab !== 'requests' && (
          <div
            className="p-12 text-center rounded border border-[rgba(255,255,255,0.08)]"
            style={{ background: '#101820' }}
          >
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '8px',
                background: 'rgba(22, 185, 232, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px',
              }}
            >
              <HardHat size={24} style={{ color: '#16B9E8' }} />
            </div>
            <h3 style={{ color: '#F5F7F8', fontSize: '1.1rem', fontWeight: 700 }}>
              Module Structure Initialized
            </h3>
            <p style={{ color: '#8A9AB0', fontSize: '0.85rem', maxWidth: '480px', margin: '8px auto 0', lineHeight: 1.6 }}>
              Per Section 32 of the specification, the schema and database architecture have been structured to support{' '}
              <strong>{activeTab.toUpperCase()}</strong> in the next release once initial pilots complete validation.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
