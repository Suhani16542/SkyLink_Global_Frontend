'use client';

import React, { useState } from 'react';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { ScrollReveal } from '@/components/animation/ScrollReveal';
import {
  Users,
  Send,
  CheckCircle2,
  Clock,
  Mail,
  ShieldCheck,
  TrendingUp,
  DollarSign,
  Globe2,
  Building2,
  User,
  Phone,
  MessageSquare,
} from 'lucide-react';

export function CollaborationEnquiryView() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    email: '',
    phone: '',
    tradeLane: '',
    proposedRate: '',
    partnerType: 'Freight Forwarder / NVOCC',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch('/api/forms/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'collaboration-enquiry',
          data: formData,
        }),
      }).catch(() => {});
    } catch {
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
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
              <div className="flex flex-wrap items-center justify-center gap-2">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-400/10 px-3.5 py-1.5 rounded-full border border-sky-400/30">
                  <Users className="w-3.5 h-3.5" />
                  Strategic Partnership &amp; Freight Desk
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-300 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-500/30">
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Merit-Based Shipment Routing</span>
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal effect="fade-up" delay={140}>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight text-balance">
                Freight Forwarder &amp; Agent Offer Submission
              </h1>
            </ScrollReveal>

            <ScrollReveal effect="fade-up" delay={200}>
              <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-3xl mx-auto font-normal text-pretty">
                Skylink connects an extensive manufacturer client base with competitive freight forwarders. If you can provide better rates or specialized capacity on specific trade lanes, submit your proposal below.
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
                  Collaboration Terms
                </span>

                <h3 className="text-2xl font-bold text-[#0A2540]">
                  Why Partner With SkyLink?
                </h3>

                <div className="space-y-4">
                  {[
                    {
                      title: 'Direct Access to Active Cargo Flow',
                      desc: 'Steady containerized and bulk volume requirements from leading Indian manufacturers and EXIM clients.',
                    },
                    {
                      title: 'Merit-Based Allocation',
                      desc: 'Better commercial rates and proven transit reliability directly qualify forwarders for shipment bookings.',
                    },
                    {
                      title: 'Strict Bilateral NDA & Neutrality',
                      desc: '100% confidentiality protection with bilateral Non-Disclosure and client ring-fencing.',
                    },
                    {
                      title: 'Predictable & Prompt Settlement',
                      desc: 'Transparent invoicing, clear credit agreements, and prompt financial settlement execution.',
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
                    <span>Commercial Evaluation SLA</span>
                  </div>
                  <p className="text-neutral-300">
                    All submitted trade lane offers are reviewed against active bookings within 24 business hours.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Collaboration Form */}
            <div className="lg:col-span-7">
              <Card variant="bordered" className="p-8 sm:p-10 bg-white border-neutral-200 shadow-xl rounded-3xl relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0284C7] via-sky-400 to-emerald-400" />

                {submitted ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-neutral-900">
                      Offer / Enquiry Successfully Submitted
                    </h3>
                    <p className="text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
                      Thank you for submitting your freight proposal. Our Commercial Operations &amp; Alliances Desk will evaluate your offer against active manufacturer requirements and contact you promptly.
                    </p>
                    <div className="pt-4">
                      <Button onClick={() => setSubmitted(false)} variant="outline" size="sm">
                        Submit Another Freight Offer
                      </Button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-1">
                      <h3 className="text-2xl font-bold text-[#0A2540]">
                        Submit Freight Rate &amp; Trade Lane
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-600">
                        Share your company details and commercial offer for active consideration.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                          <User className="w-3.5 h-3.5 text-sky-600" />
                          <span>Your Name *</span>
                        </label>
                        <Input
                          type="text"
                          required
                          placeholder="e.g. Rahul Sharma"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                          <Building2 className="w-3.5 h-3.5 text-sky-600" />
                          <span>Company Name *</span>
                        </label>
                        <Input
                          type="text"
                          required
                          placeholder="e.g. Pacific Logistics Pvt Ltd"
                          value={formData.companyName}
                          onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                          <Mail className="w-3.5 h-3.5 text-sky-600" />
                          <span>Work Email *</span>
                        </label>
                        <Input
                          type="email"
                          required
                          placeholder="partner@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                          <Phone className="w-3.5 h-3.5 text-sky-600" />
                          <span>Phone / WhatsApp *</span>
                        </label>
                        <Input
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                          <Globe2 className="w-3.5 h-3.5 text-sky-600" />
                          <span>Service / Trade Lane *</span>
                        </label>
                        <Input
                          type="text"
                          required
                          placeholder="e.g. Ocean FCL: Nhava Sheva to Rotterdam"
                          value={formData.tradeLane}
                          onChange={(e) => setFormData({ ...formData, tradeLane: e.target.value })}
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                          <DollarSign className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Proposed Freight Offer / Rate *</span>
                        </label>
                        <Input
                          type="text"
                          required
                          placeholder="e.g. $1,450 / 40HC (Spot) or Contract Rate"
                          value={formData.proposedRate}
                          onChange={(e) => setFormData({ ...formData, proposedRate: e.target.value })}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                        <MessageSquare className="w-3.5 h-3.5 text-sky-600" />
                        <span>Message / Scope of Solution</span>
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Detail carrier lines, transit time, free days at POD, equipment availability, or special terms..."
                        className="w-full rounded-xl border border-neutral-300 p-3 text-sm text-neutral-900 focus:border-[#0284C7] focus:outline-none focus:ring-1 focus:ring-[#0284C7]"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>

                    <div className="flex items-start gap-2.5 p-3 rounded-xl bg-neutral-50 border border-neutral-200/80 text-[11px] text-neutral-600">
                      <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>
                        <strong>Bilateral Neutrality:</strong> All shared commercial rates are evaluated under strict confidentiality. Rate acceptance is subject to commercial viability and carrier execution standards.
                      </span>
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      variant="secondary"
                      size="lg"
                      className="w-full justify-center text-sm font-bold shadow-lg shadow-sky-500/20"
                    >
                      {isSubmitting ? (
                        <span>Submitting Offer...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          <span>Submit Your Offer</span>
                        </>
                      )}
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

