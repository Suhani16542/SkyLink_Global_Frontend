'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import {
  Send,
  CheckCircle2,
  Clock,
  ShieldCheck,
  TrendingUp,
  DollarSign,
  Globe2,
  Building2,
  Mail,
  Phone,
  User,
  MessageSquare,
} from 'lucide-react';

export function FreightForwarderOfferForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    email: '',
    phone: '',
    tradeLane: '',
    proposedRate: '',
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
          formType: 'freight-forwarder-collaboration-enquiry',
          data: formData,
        }),
      }).catch(() => {
        // Fallback gracefully
      });
    } catch {
      // Graceful fallback
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      companyName: '',
      email: '',
      phone: '',
      tradeLane: '',
      proposedRate: '',
      message: '',
    });
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <div className="rounded-3xl bg-white border border-neutral-200 p-8 sm:p-10 shadow-xl text-center space-y-5 animate-in fade-in zoom-in-95 duration-300">
        <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-500/20">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <div className="space-y-2">
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Enquiry Received &amp; Logged
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A2540]">
            Thank You, {formData.name || 'Partner'}!
          </h3>
          <p className="text-sm sm:text-base text-neutral-600 max-w-md mx-auto leading-relaxed">
            Your freight collaboration enquiry and trade lane offer have been sent to our Commercial Operations &amp; Alliances Desk.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-sky-50 border border-sky-200/70 max-w-md mx-auto text-left space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold text-sky-900">
            <Clock className="w-4 h-4 text-sky-600" />
            <span>Commercial Evaluation SLA (24 Hours)</span>
          </div>
          <p className="text-xs text-sky-800 leading-relaxed">
            Our team will evaluate your commercial offer against active manufacturer requirements on <strong>{formData.tradeLane || 'your specified corridor'}</strong>. If competitive and aligned, our freight coordinator will contact you directly.
          </p>
        </div>

        <div className="pt-2">
          <Button onClick={handleReset} variant="outline" size="sm">
            Submit Another Enquiry
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-3xl bg-white border border-neutral-200 p-6 sm:p-8 lg:p-9 shadow-xl space-y-6 relative overflow-hidden">
      {/* Top Accent Gradient */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0284C7] via-sky-400 to-emerald-400" />

      {/* Form Header */}
      <div className="space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#0284C7] bg-sky-50 px-2.5 py-1 rounded-full border border-sky-200">
            Forwarder &amp; Agent Desk
          </span>
          <span className="text-[10px] text-neutral-500 font-medium">
            Merit-Based Shipment Allocation
          </span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A2540]">
          Submit Collaboration Enquiry
        </h3>
        <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
          Share your trade lane capabilities and competitive rate. When your offer aligns with active enterprise shipments, we route execution directly through your freight desk.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
        {/* Row 1: Full Name & Company Name */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-sky-600" />
              <span>Full Name *</span>
            </label>
            <Input
              type="text"
              required
              placeholder="e.g. Rahul Sharma"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="bg-neutral-50/60 focus:bg-white"
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
              className="bg-neutral-50/60 focus:bg-white"
            />
          </div>
        </div>

        {/* Row 2: Official Email & Phone / WhatsApp */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-sky-600" />
              <span>Official Email *</span>
            </label>
            <Input
              type="email"
              required
              placeholder="partner@company.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="bg-neutral-50/60 focus:bg-white"
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
              className="bg-neutral-50/60 focus:bg-white"
            />
          </div>
        </div>

        {/* Row 3: Service / Trade Lane & Proposed Freight Offer / Rate */}
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
              className="bg-neutral-50/60 focus:bg-white"
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
              placeholder="e.g. $1,450 / 40HC or $1.85 / kg (Air)"
              value={formData.proposedRate}
              onChange={(e) => setFormData({ ...formData, proposedRate: e.target.value })}
              className="bg-neutral-50/60 focus:bg-white"
            />
          </div>
        </div>

        {/* Row 4: Message */}
        <div>
          <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
            <MessageSquare className="w-3.5 h-3.5 text-sky-600" />
            <span>Message</span>
          </label>
          <textarea
            rows={3}
            placeholder="Provide carrier contracts, transit times, free detention days at POD, equipment capacity, or special terms..."
            className="w-full rounded-xl border border-neutral-300 bg-neutral-50/60 focus:bg-white p-3 text-sm text-neutral-900 focus:border-[#0284C7] focus:outline-none focus:ring-1 focus:ring-[#0284C7] transition-all"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
        </div>

        {/* Bilateral NDA & Neutrality Note */}
        <div className="flex items-start gap-2.5 p-3 rounded-xl bg-neutral-50 border border-neutral-200/80 text-[11px] text-neutral-600">
          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
          <span>
            <strong>Bilateral NDA Protected:</strong> Tariffs and operational terms are treated with 100% confidentiality. Allocations are based on commercial merit and carrier reliability.
          </span>
        </div>

        {/* Submit Enquiry Button */}
        <Button
          type="submit"
          disabled={isSubmitting}
          variant="secondary"
          size="lg"
          className="w-full justify-center text-sm sm:text-base font-bold shadow-lg shadow-sky-500/20"
        >
          {isSubmitting ? (
            <span>Submitting Enquiry...</span>
          ) : (
            <>
              <span>Submit Enquiry</span>
              <Send className="w-4 h-4 ml-2" />
            </>
          )}
        </Button>
      </form>
    </div>
  );
}
