'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { ScrollReveal } from '@/components/animation/ScrollReveal';
import {
  Users,
  Handshake,
  Send,
  CheckCircle2,
  Building2,
  Globe2,
  ShieldCheck,
  Ship,
  Mail,
  Phone,
  Clock,
  ArrowRight,
} from 'lucide-react';

export default function CollaborationEnquiryPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    partnerType: 'Freight Forwarder / NVOCC',
    organizationName: '',
    contactPerson: '',
    workEmail: '',
    phoneNumber: '',
    countryLocation: 'India',
    corridorsOfInterest: '',
    monthlyVolumeEstimate: '10–50 TEUs',
    partnershipModel: 'Co-Loading / Rate Integration',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#07192D] via-[#0A2540] to-[#07192D] text-white py-16 sm:py-24 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-24 right-1/4 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex justify-center">
            <ScrollReveal effect="fade-down" delay={0}>
              <Breadcrumbs
                items={[
                  { name: 'Home', item: '/' },
                  { name: 'Why Collaborate With Us', item: '/collaborate/freight-forwarders' },
                  { name: 'Collaboration Enquiry', item: '/collaborate/enquiry' },
                ]}
                className="text-neutral-400 mb-6 justify-center"
              />
            </ScrollReveal>
          </div>

          <div className="max-w-4xl mx-auto text-center space-y-5">
            <ScrollReveal effect="fade-up" delay={80}>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-400/10 px-3.5 py-1.5 rounded-full border border-sky-400/30">
                <Users className="w-3.5 h-3.5" />
                Strategic Partnership Desk
              </span>
            </ScrollReveal>

            <ScrollReveal effect="fade-up" delay={140}>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
                Submit an Institutional Collaboration Request
              </h1>
            </ScrollReveal>

            <ScrollReveal effect="fade-up" delay={200}>
              <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-3xl mx-auto">
                Connect with our Global Alliances Desk to explore agency representation, co-loading agreements, or neutral statutory trade coordination.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 2. FORM & INFORMATION SECTION */}
      <section className="py-16 sm:py-24 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Context & Guarantees */}
            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-3xl bg-white border border-neutral-200 p-8 shadow-xs space-y-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0284C7] bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
                  Partnership Guarantees
                </span>

                <h3 className="text-2xl font-bold text-[#0A2540]">
                  Why Partner With SkyLink?
                </h3>

                <div className="space-y-4">
                  {[
                    {
                      title: 'Strict Client Ring-Fencing',
                      desc: 'Full bilateral NDA protection guaranteeing 100% neutrality and confidentiality.',
                    },
                    {
                      title: 'Direct Carrier Tier-1 Contracts',
                      desc: 'Access to premier ocean & air space allocations across major corridors.',
                    },
                    {
                      title: 'Fast-Track SLA Execution',
                      desc: 'Dedicated partnership manager with 2-hour response turnaround on port queries.',
                    },
                    {
                      title: 'Pan-India Ground Reach',
                      desc: 'Active operational desks across Nhava Sheva, Mundra, Chennai, Kolkata, and Delhi NCR.',
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-bold text-neutral-900">{item.title}</h4>
                        <p className="text-xs text-neutral-600 leading-relaxed mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-2xl bg-[#0A2540] text-white text-xs space-y-1.5">
                  <div className="font-bold text-sky-400 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    Alliance Response SLA
                  </div>
                  <p className="text-neutral-300">
                    All formal collaboration inquiries receive an NDA draft and initial review within 1 business day.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Collaboration Form */}
            <div className="lg:col-span-7">
              <Card variant="bordered" className="p-8 sm:p-10 bg-white border-neutral-200 shadow-md rounded-3xl">
                {submitted ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-neutral-900">
                      Collaboration Request Received
                    </h3>
                    <p className="text-sm text-neutral-600 max-w-md mx-auto">
                      Thank you for submitting your partnership proposal. Our Global Alliances Director will review your requirements and reach out within 24 hours.
                    </p>
                    <div className="pt-4">
                      <Button onClick={() => setSubmitted(false)} variant="outline" size="sm">
                        Submit Another Enquiry
                      </Button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-1">
                      <h3 className="text-2xl font-bold text-[#0A2540]">
                        Alliance Profile &amp; Requirements
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-600">
                        Please provide your institutional details to initiate mutual onboarding.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                          Partner Type *
                        </label>
                        <Select
                          value={formData.partnerType}
                          onChange={(e) => setFormData({ ...formData, partnerType: e.target.value })}
                          options={[
                            { value: 'Freight Forwarder / NVOCC', label: 'Freight Forwarder / NVOCC' },
                            { value: 'Customs Broker / CHA', label: 'Customs Broker / CHA' },
                            { value: 'Overseas Agency Partner', label: 'Overseas Agency Partner' },
                            { value: 'Warehouse & 3PL Provider', label: 'Warehouse & 3PL Provider' },
                            { value: 'Institutional Trade Association', label: 'Institutional Trade Association' },
                          ]}
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                          Partnership Model *
                        </label>
                        <Select
                          value={formData.partnershipModel}
                          onChange={(e) => setFormData({ ...formData, partnershipModel: e.target.value })}
                          options={[
                            { value: 'Co-Loading / Rate Integration', label: 'Co-Loading / Rate Integration' },
                            { value: 'Customs Clearance Sub-Contracting', label: 'Customs Clearance Sub-Contracting' },
                            { value: 'Overseas Inbound Representation', label: 'Overseas Inbound Representation' },
                            { value: 'Cold-Chain Joint Venture', label: 'Cold-Chain Joint Venture' },
                          ]}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                          Organization / Company Name *
                        </label>
                        <Input
                          type="text"
                          required
                          placeholder="e.g. Apex Global Logistics Ltd"
                          value={formData.organizationName}
                          onChange={(e) => setFormData({ ...formData, organizationName: e.target.value })}
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                          Contact Person &amp; Designation *
                        </label>
                        <Input
                          type="text"
                          required
                          placeholder="e.g. Rahul Sharma, Director"
                          value={formData.contactPerson}
                          onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                          Corporate Work Email *
                        </label>
                        <Input
                          type="email"
                          required
                          placeholder="partner@company.com"
                          value={formData.workEmail}
                          onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                          Direct Phone / WhatsApp *
                        </label>
                        <Input
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          value={formData.phoneNumber}
                          onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                          Primary Trade Corridors
                        </label>
                        <Input
                          type="text"
                          placeholder="e.g. India - US East Coast, EU, Gulf"
                          value={formData.corridorsOfInterest}
                          onChange={(e) => setFormData({ ...formData, corridorsOfInterest: e.target.value })}
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                          Estimated Monthly Volume
                        </label>
                        <Select
                          value={formData.monthlyVolumeEstimate}
                          onChange={(e) => setFormData({ ...formData, monthlyVolumeEstimate: e.target.value })}
                          options={[
                            { value: 'Under 10 TEUs', label: 'Under 10 TEUs / 5 Tons' },
                            { value: '10–50 TEUs', label: '10–50 TEUs / 20 Tons' },
                            { value: '50–200 TEUs', label: '50–200 TEUs / 50 Tons' },
                            { value: '200+ TEUs', label: '200+ TEUs / Enterprise' },
                          ]}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                        Partnership Objectives &amp; Collaboration Scope
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Detail the corridors, port handling needs, or co-loading support you are looking to establish with SkyLink..."
                        className="w-full rounded-xl border border-neutral-300 p-3 text-sm text-neutral-900 focus:border-[#0284C7] focus:outline-none focus:ring-1 focus:ring-[#0284C7]"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>

                    <Button type="submit" variant="secondary" size="md" className="w-full justify-center">
                      <Send className="w-4 h-4 mr-2" />
                      Submit Formal Collaboration Request
                    </Button>
                  </form>
                )}
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CTA */}
      <section className="py-16 sm:py-20 bg-[#07192D] text-white text-center">
        <div className="mx-auto max-w-3xl px-4 space-y-4">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            Need Immediate Alliance Discussion?
          </h2>
          <p className="text-sm sm:text-base text-neutral-300">
            Contact our Global Alliances desk directly via telephone or email.
          </p>
          <div className="pt-3 flex flex-wrap justify-center gap-4">
            <Button href="mailto:connect@skylinkglobal.in" variant="secondary" size="md">
              <Mail className="w-4 h-4 mr-2" />
              Email Alliances Desk
            </Button>
            <Button href="/collaborate/freight-forwarders" variant="outline-light" size="md">
              Review Forwarder Terms
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
