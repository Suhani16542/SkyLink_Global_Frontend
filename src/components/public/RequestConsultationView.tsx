'use client';

import React, { useState } from 'react';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { submitConsultationForm, ConsultationFormPayload } from '@/lib/api/forms';
import {
  CheckCircle2,
  ArrowRight,
  AlertCircle,
  X,
} from 'lucide-react';

export function RequestConsultationView() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    country: 'India',
    businessType: 'Manufacturer',
    tradeDirection: 'Export',
    productCommodity: '',
    origin: '',
    destination: '',
    cargoType: 'General Dry Cargo (FCL)',
    shipmentMode: 'Sea',
    expectedShipment: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setIsSubmitting(true);

    const payload: ConsultationFormPayload = {
      formType: 'consultation',
      fullName: formData.fullName.trim(),
      companyName: formData.companyName.trim(),
      officialWorkEmail: formData.email.trim(),
      contactPhoneWhatsApp: formData.phone.trim(),
      countryHeadOfficeLocation: formData.country.trim(),
      businessType: formData.businessType,
      tradeDirection: formData.tradeDirection,
      productCommodityDescription: formData.productCommodity.trim(),
      originPortCity: formData.origin.trim(),
      destinationPortCity: formData.destination.trim(),
      cargoCategory: formData.cargoType,
      preferredShipmentMode: formData.shipmentMode,
      expectedShipmentDateTimeline: formData.expectedShipment,
      detailedTradeRequirements: formData.message.trim(),
    };

    try {
      const res = await submitConsultationForm(payload);
      if (res.success || res.data?.status === 'success') {
        setSubmitted(true);
      } else {
        setErrorMessage(
          res.error || (res.data as any)?.message || 'Failed to submit consultation request. Please try again.'
        );
      }
    } catch (err: any) {
      setErrorMessage(
        err?.message || 'Unable to connect to the server. Please check your network and try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section className="bg-[#0A2540] text-white py-14 sm:py-20 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs
            items={[
              { name: 'Home', item: '/' },
              { name: 'Request Consultation', item: '/request-consultation' },
            ]}
            className="text-neutral-400"
          />
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
              Commercial Trade Evaluation
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              Request an EXIM &amp; Logistics Consultation
            </h1>
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
              Complete the trade specification details below to receive a strategic advisory assessment, customs tariff feasibility check, and optimized freight proposal.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 sm:py-24 bg-neutral-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Card variant="bordered" className="p-8 sm:p-12 bg-white shadow-lg border-neutral-200">
            {submitted ? (
              <div className="text-center py-16 space-y-5">
                <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900">
                  Trade Consultation Request Submitted
                </h2>
                <p className="text-sm text-neutral-600 max-w-lg mx-auto leading-relaxed">
                  Thank you for submitting your trade requirements for <strong>{formData.companyName}</strong>. Our senior EXIM and logistics consultants are reviewing your trade corridor and will deliver an actionable evaluation within 24 hours.
                </p>
                <div className="pt-4 flex justify-center gap-4">
                  <Button onClick={() => setSubmitted(false)} variant="outline" size="sm">
                    Submit Another Request
                  </Button>
                  <Button href="/" variant="primary" size="sm">
                    Return to Home
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {errorMessage && (
                  <div className="p-4 rounded-xl bg-red-50 border border-red-200 flex items-start justify-between gap-3 text-sm text-red-700 shadow-xs">
                    <div className="flex items-start gap-2.5">
                      <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold">Submission Failed</div>
                        <div className="mt-0.5 text-xs text-red-600 font-medium">{errorMessage}</div>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setErrorMessage(null)}
                      className="text-red-400 hover:text-red-700 cursor-pointer"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                )}

                {/* Step 1: Enterprise Profile */}
                <div>
                  <div className="flex items-center gap-2 pb-3 border-b border-neutral-100">
                    <span className="w-6 h-6 rounded-full bg-[#0A2540] text-white flex items-center justify-center text-xs font-bold">
                      1
                    </span>
                    <h2 className="text-lg font-bold text-neutral-900">Enterprise &amp; Contact Details</h2>
                  </div>

                  <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      label="Full Name *"
                      required
                      placeholder="e.g. Anand Patel"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    />
                    <Input
                      label="Company Name *"
                      required
                      placeholder="e.g. Apex Global Industries Ltd"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    />
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
                    <Input
                      label="Country / Head Office Location *"
                      required
                      placeholder="e.g. India"
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    />
                    <Select
                      label="Business Type *"
                      options={[
                        { value: 'Manufacturer', label: 'Manufacturer' },
                        { value: 'Exporter', label: 'Exporter' },
                        { value: 'Importer', label: 'Importer' },
                        { value: 'Trader', label: 'Trader / Merchant Exporter' },
                        { value: 'Distributor', label: 'Distributor' },
                        { value: 'Other', label: 'Other Enterprise' },
                      ]}
                      value={formData.businessType}
                      onChange={(e) => setFormData({ ...formData, businessType: e.target.value as typeof formData.businessType })}
                    />
                  </div>
                </div>

                {/* Step 2: Trade & Shipment Specifications */}
                <div>
                  <div className="flex items-center gap-2 pb-3 border-b border-neutral-100">
                    <span className="w-6 h-6 rounded-full bg-[#0284C7] text-white flex items-center justify-center text-xs font-bold">
                      2
                    </span>
                    <h2 className="text-lg font-bold text-neutral-900">Trade &amp; Logistics Specifications</h2>
                  </div>

                  <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Select
                      label="Trade Direction *"
                      options={[
                        { value: 'Export', label: 'Outbound Export' },
                        { value: 'Import', label: 'Inbound Import' },
                        { value: 'Both', label: 'Both Import & Export' },
                        { value: 'ThirdCountry', label: 'Merchanting / High Seas Trade' },
                      ]}
                      value={formData.tradeDirection}
                      onChange={(e) => setFormData({ ...formData, tradeDirection: e.target.value })}
                    />
                    <Input
                      label="Product / Commodity Description *"
                      required
                      placeholder="e.g. Active Pharmaceutical Ingredients (APIs) / Auto Parts"
                      value={formData.productCommodity}
                      onChange={(e) => setFormData({ ...formData, productCommodity: e.target.value })}
                    />
                    <Input
                      label="Origin Port / City *"
                      required
                      placeholder="e.g. Nhava Sheva (INNSA) / Mumbai"
                      value={formData.origin}
                      onChange={(e) => setFormData({ ...formData, origin: e.target.value })}
                    />
                    <Input
                      label="Destination Port / City *"
                      required
                      placeholder="e.g. Rotterdam (NLRTM) / Hamburg"
                      value={formData.destination}
                      onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                    />
                    <Select
                      label="Cargo Category *"
                      options={[
                        { value: 'General Dry Cargo (FCL)', label: 'General Dry Cargo (FCL Full Container)' },
                        { value: 'LCL Consolidated Cargo', label: 'LCL Consolidated Cargo' },
                        { value: 'Refrigerated Cold Chain (-25°C to +8°C)', label: 'Refrigerated Cold Chain (-25°C to +8°C)' },
                        { value: 'Hazardous / Dangerous Goods (DG)', label: 'Hazardous / Dangerous Goods (DG)' },
                        { value: 'Over-Dimensional Project Cargo', label: 'Over-Dimensional Project Cargo (ODC)' },
                        { value: 'Air Cargo Express', label: 'Time-Critical Air Cargo' },
                      ]}
                      value={formData.cargoType}
                      onChange={(e) => setFormData({ ...formData, cargoType: e.target.value })}
                    />
                    <Select
                      label="Preferred Shipment Mode *"
                      options={[
                        { value: 'Sea', label: 'Ocean Freight (Sea)' },
                        { value: 'Air', label: 'Air Freight (Air)' },
                        { value: 'Road', label: 'Intermodal / Road / Rail' },
                      ]}
                      value={formData.shipmentMode}
                      onChange={(e) => setFormData({ ...formData, shipmentMode: e.target.value as typeof formData.shipmentMode })}
                    />
                    <div className="sm:col-span-2">
                      <Input
                        label="Expected Shipment Date / Timeline *"
                        type="date"
                        required
                        value={formData.expectedShipment}
                        onChange={(e) => setFormData({ ...formData, expectedShipment: e.target.value })}
                      />
                    </div>
                  </div>
                </div>

                {/* Step 3: Message / Specific Objectives */}
                <div>
                  <div className="flex items-center gap-2 pb-3 border-b border-neutral-100">
                    <span className="w-6 h-6 rounded-full bg-[#0A2540] text-white flex items-center justify-center text-xs font-bold">
                      3
                    </span>
                    <h2 className="text-lg font-bold text-neutral-900">Specific Objectives &amp; Message</h2>
                  </div>

                  <div className="mt-5">
                    <label htmlFor="message" className="block text-xs font-semibold text-neutral-800 mb-1.5">
                      Detailed Trade Requirements &amp; Current Pain Points
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Specify if you require export incentive maximization (RoDTEP/EPCG), customs valuation help, cold chain telemetry, or carrier freight rate benchmarking..."
                      className="w-full rounded-lg border border-neutral-300 bg-white px-3.5 py-2 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#0284C7]/20 focus:border-[#0284C7]"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>
                </div>

                <div className="pt-4">
                  <Button
                    type="submit"
                    variant="secondary"
                    size="lg"
                    isLoading={isSubmitting}
                    disabled={isSubmitting}
                    className="w-full justify-center"
                    rightIcon={<ArrowRight className="w-4 h-4" />}
                  >
                    Submit Trade Consultation Request
                  </Button>
                  <p className="text-center text-xs text-neutral-500 mt-3">
                    Your trade information is strictly confidential and protected by NDA standards.
                  </p>
                </div>
              </form>
            )}
          </Card>
        </div>
      </section>
    </div>
  );
}
