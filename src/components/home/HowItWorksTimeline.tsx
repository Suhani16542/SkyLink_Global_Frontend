'use client';

import React, { useState } from 'react';
import {
  FileSearch,
  FileCheck2,
  ShieldCheck,
  Ship,
  Compass,
  CheckCircle2,
} from 'lucide-react';
import { ScrollReveal } from '@/components/animation/ScrollReveal';
import { StaggerContainer } from '@/components/animation/StaggerContainer';

const workflowSteps = [
  {
    step: '01',
    title: 'Consultation & Trade Audit',
    subtitle: 'Corridor & Tariff Feasibility',
    desc: 'Corridor feasibility analysis, HS code GRI tariff classification, Incoterms® 2020 contract structuring, and statutory incentive scoping.',
    icon: FileSearch,
    details: ['DGFT foreign trade policy audit', 'Incentive mapping (RoDTEP/EPCG/Advance Auth)', 'Incoterms risk boundary advisory (FOB/CIF/DDP)'],
  },
  {
    step: '02',
    title: 'Zero-Defect Documentation',
    subtitle: 'Commercial & Statutory Alignment',
    desc: 'Drafting statutory commercial invoices, packing lists, digital Certificates of Origin (FTA/CEPA), and UCP 600 Letter of Credit vetting.',
    icon: FileCheck2,
    details: ['Chamber of Commerce FTA legalization', 'Letter of Credit (LC) compliance review', 'Pre-shipment inspection certificates'],
  },
  {
    step: '03',
    title: 'Statutory Clearance & EDI',
    subtitle: 'DGFT & ICEGATE Electronic Filing',
    desc: 'Filing pre-arrival electronic Shipping Bills / Bills of Entry on ICEGATE and managing statutory compliance with port customs officials.',
    icon: ShieldCheck,
    details: ['ICEGATE EDI clearance protocols', 'Advance Authorisation / EPCG license debit', 'Faceless Assessment query resolution'],
  },
  {
    step: '04',
    title: 'Carrier Booking & Multimodal Drayage',
    subtitle: 'Direct Vessel Space Allocation',
    desc: 'Securing vessel space on Tier-1 shipping lines, container stuffing supervision, port drayage, and cold-chain thermal pre-cooling.',
    icon: Compass,
    details: ['Tier-1 shipping line service contracting', 'Reefer container pre-trip inspection (PTI)', 'Multimodal Bill of Lading (FBL) issuance'],
  },
  {
    step: '05',
    title: 'Shipment & Live Telemetry',
    subtitle: 'Multimodal Transit & Active Monitoring',
    desc: 'Real-time container milestone tracking, port terminal gate logging, and 24/7 active IoT reefer temperature telemetry.',
    icon: Ship,
    details: ['IoT real-time temperature & GPS tracking', 'Carrier vessel ETA synchronization', 'Transshipment & feeder hub supervision'],
  },
  {
    step: '06',
    title: 'Destination Release & Realization',
    subtitle: 'Final Door Delivery & Incentive Scrip',
    desc: 'Destination customs release under DAP/DDP, final-mile warehouse delivery, e-BRC realization closure, and duty credit scrip crediting.',
    icon: CheckCircle2,
    details: ['Destination port customs green-channel', 'e-BRC EDPMS foreign exchange closure', 'RoDTEP & Duty Drawback cash credit ledger'],
  },
];

export function HowItWorksTimeline() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-20 sm:py-28 bg-white border-t border-neutral-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <ScrollReveal effect="fade-down" delay={0}>
            <div className="inline-flex items-center gap-2 rounded-full bg-sky-50 border border-sky-200 px-3.5 py-1.5 text-xs font-bold text-[#0284C7]">
              <span>Structured 6-Stage Execution</span>
            </div>
          </ScrollReveal>
          <ScrollReveal effect="fade-up" delay={80}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A2540] tracking-tight">
              How SkyLink Executes Global Trade
            </h2>
          </ScrollReveal>
          <ScrollReveal effect="fade-up" delay={160}>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              From preliminary tariff advisory to final container release and export incentive closure, our structured workflow eliminates friction at every cross-border milestone.
            </p>
          </ScrollReveal>
        </div>

        {/* 6-Step Visual Timeline Grid with StaggerContainer */}
        <StaggerContainer
          staggerDelay={100}
          baseDelay={100}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative"
        >
          {workflowSteps.map((item, idx) => {
            const IconComp = item.icon;
            const isSelected = activeStep === idx;

            return (
              <div
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`relative rounded-2xl p-6 sm:p-7 border transition-all duration-300 cursor-pointer flex flex-col justify-between hover-lift h-full ${
                  isSelected
                    ? 'bg-gradient-to-b from-[#0A2540] to-[#07192D] text-white border-sky-400/40 shadow-xl scale-[1.02]'
                    : 'bg-neutral-50/70 hover:bg-white text-neutral-900 border-neutral-200 shadow-sm'
                }`}
              >
                <div>
                  {/* Top Bar with Step and Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span
                      className={`text-2xl sm:text-3xl font-black font-mono ${
                        isSelected ? 'text-sky-400' : 'text-[#0284C7]'
                      }`}
                    >
                      {item.step}
                    </span>
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                        isSelected
                          ? 'bg-sky-500/20 text-sky-300 border border-sky-400/30'
                          : 'bg-sky-100/80 text-[#0284C7]'
                      }`}
                    >
                      <IconComp className="w-6 h-6" />
                    </div>
                  </div>

                  <span
                    className={`text-xs font-bold uppercase tracking-wider block mb-1.5 ${
                      isSelected ? 'text-sky-300' : 'text-neutral-500'
                    }`}
                  >
                    {item.subtitle}
                  </span>
                  <h3
                    className={`text-lg sm:text-xl font-bold tracking-tight ${
                      isSelected ? 'text-white' : 'text-neutral-900'
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`mt-2.5 text-sm sm:text-[15px] leading-relaxed font-normal ${
                      isSelected ? 'text-neutral-200' : 'text-neutral-600'
                    }`}
                  >
                    {item.desc}
                  </p>
                </div>

                {/* Sub-item bullet points */}
                <div
                  className={`mt-6 pt-4 border-t ${
                    isSelected ? 'border-white/15' : 'border-neutral-200'
                  }`}
                >
                  <ul className="space-y-2 text-xs sm:text-sm">
                    {item.details.map((detail, dIdx) => (
                      <li
                        key={dIdx}
                        className={`flex items-start gap-2.5 ${
                          isSelected ? 'text-sky-100' : 'text-neutral-600'
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${
                            isSelected ? 'bg-sky-400' : 'bg-[#0284C7]'
                          }`}
                        />
                        <span className="leading-snug">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
