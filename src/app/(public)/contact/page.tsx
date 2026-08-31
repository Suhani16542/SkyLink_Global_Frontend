'use client';

import React, { useState } from 'react';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { siteConfig } from '@/config/site';
import {
  Mail,
  Phone,
  Clock,
  MapPin,
  Send,
  CheckCircle2,
} from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    serviceInterest: 'EXIM Consultancy',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section className="bg-[#0A2540] text-white py-14 sm:py-20 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs
            items={[
              { name: 'Home', item: '/' },
              { name: 'Contact Us', item: '/contact' },
            ]}
            className="text-neutral-400"
          />
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
              Direct Communication
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Contact SkyLink Global Services
            </h1>
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
              Connect directly with our international trade desk, customs compliance officers, and multimodal freight specialists.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-16 sm:py-24 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left 5 Cols: Contact Information Cards */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0284C7]">
                  Trade Support Desks
                </span>
                <h2 className="text-2xl font-bold text-neutral-900 mt-1">
                  We Are Ready to Assist Your Global Operations
                </h2>
                <p className="text-sm text-neutral-600 mt-2 leading-relaxed">
                  Whether you have an urgent port clearance inquiry, require freight lane contracting, or need an export incentive audit, our team is at your service.
                </p>
              </div>

              {/* Direct Info Cards */}
              <div className="space-y-4">
                <Card variant="bordered" className="p-5 bg-white flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-sky-50 text-[#0284C7] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                      Official Email
                    </h3>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-sm font-semibold text-neutral-900 hover:text-[#0284C7] transition-colors mt-0.5 block"
                    >
                      {siteConfig.contact.email}
                    </a>
                    <span className="text-xs text-neutral-500">Fast response within 2 hours</span>
                  </div>
                </Card>

                <Card variant="bordered" className="p-5 bg-white flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-sky-50 text-[#0284C7] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                      Direct Phone &amp; WhatsApp
                    </h3>
                    <a
                      href={`tel:${siteConfig.contact.phone}`}
                      className="text-sm font-semibold text-neutral-900 hover:text-[#0284C7] transition-colors mt-0.5 block"
                    >
                      {siteConfig.contact.phone}
                    </a>
                    <span className="text-xs text-neutral-500">Direct trade advisory hotline</span>
                  </div>
                </Card>

                <Card variant="bordered" className="p-5 bg-white flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-sky-50 text-[#0284C7] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                      Support Desk Hours
                    </h3>
                    <div className="text-sm font-semibold text-neutral-900 mt-0.5">
                      {siteConfig.contact.supportHours}
                    </div>
                    <span className="text-xs text-neutral-500">24/7 emergency telemetry monitoring</span>
                  </div>
                </Card>

                <Card variant="bordered" className="p-5 bg-white flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-sky-50 text-[#0284C7] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                      Corporate Hub
                    </h3>
                    <div className="text-sm font-semibold text-neutral-900 mt-0.5">
                      {siteConfig.contact.address}
                    </div>
                    <span className="text-xs text-neutral-500">Coordination desks at major sea &amp; airports</span>
                  </div>
                </Card>
              </div>
            </div>

            {/* Right 7 Cols: Inquiry Form */}
            <div className="lg:col-span-7">
              <Card variant="bordered" className="p-8 sm:p-10 bg-white shadow-md border-neutral-200">
                {submitted ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-neutral-900">Inquiry Received</h3>
                    <p className="text-sm text-neutral-600 max-w-md mx-auto">
                      Thank you for contacting SkyLink Global Services. One of our trade compliance specialists will review your requirements and reach out to you within 2 business hours.
                    </p>
                    <Button onClick={() => setSubmitted(false)} variant="outline" size="sm">
                      Submit Another Inquiry
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <h2 className="text-xl font-bold text-neutral-900">Send an Inquiry</h2>
                      <p className="text-xs text-neutral-500 mt-1">
                        Fill out the form below to connect with our EXIM advisory and logistics desk.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Input
                        label="Full Name *"
                        required
                        placeholder="e.g. Vikram Singhania"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      />
                      <Input
                        label="Company Name *"
                        required
                        placeholder="e.g. Apex Global Exports"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Input
                        label="Official Work Email *"
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                      <Input
                        label="Contact Phone / WhatsApp *"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>

                    <Select
                      label="Primary Service Required *"
                      options={[
                        { value: 'EXIM Consultancy', label: 'EXIM Consultancy & Policy Advisory' },
                        { value: 'Export Incentives', label: 'Export Incentives (RoDTEP, EPCG, Drawback)' },
                        { value: 'Logistics & Shipping', label: 'Ocean & Air Freight Forwarding' },
                        { value: 'Customs Compliance', label: 'Customs Clearance & HS Classification' },
                        { value: 'Cold Chain Logistics', label: 'Temperature-Controlled Cold Chain' },
                        { value: 'Tax & GST Advisory', label: 'Trade GST & ITC Refund Reconciliation' },
                        { value: 'Trade Risk Management', label: 'Marine Cargo Insurance & Risk Structuring' },
                      ]}
                      value={formData.serviceInterest}
                      onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                    />

                    <div>
                      <label htmlFor="message" className="block text-xs font-semibold text-neutral-800 mb-1.5">
                        Inquiry Details / Trade Corridor Requirements *
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        required
                        placeholder="Describe your cargo type, origin/destination ports, expected shipment timelines, or compliance challenges..."
                        className="w-full rounded-lg border border-neutral-300 bg-white px-3.5 py-2 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#0284C7]/20 focus:border-[#0284C7]"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="secondary"
                      size="lg"
                      className="w-full justify-center"
                      rightIcon={<Send className="w-4 h-4" />}
                    >
                      Send Message to Trade Desk
                    </Button>
                  </form>
                )}
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
