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
    title: 'Consultation & Scoping',
    subtitle: 'Trade Lane & Regulatory Audit',
    desc: 'Corridor feasibility analysis, HS code tariff classification, and export incentive eligibility evaluation.',
    icon: FileSearch,
    details: ['DGFT policy applicability', 'Incentive mapping (RoDTEP/EPCG)', 'Duty drawback scoping'],
  },
  {
    step: '02',
    title: 'Documentation Preparation',
    subtitle: 'Zero-Defect Documentation',
    desc: 'Drafting statutory commercial invoices, packing lists, e-BRC tracking templates, and Certificates of Origin.',
    icon: FileCheck2,
    details: ['Chamber of Commerce legalization', 'Letter of Credit (LC) compliance', 'Bill of Entry review'],
  },
  {
    step: '03',
    title: 'Statutory Compliance & Licensing',
    subtitle: 'DGFT & Customs Authorization',
    desc: 'Filing pre-arrival documentation on ICEGATE and managing statutory approvals with port customs officers.',
    icon: ShieldCheck,
    details: ['ICEGATE clearance protocols', 'Advance Authorisation validation', 'Statutory duty remissions'],
  },
  {
    step: '04',
    title: 'Logistics Planning & Booking',
    subtitle: 'Direct Carrier Allocation',
    desc: 'Securing vessel space, container stuffing coordination, drayage transport, and cold-chain pre-cooling.',
    icon: Compass,
    details: ['Tier-1 shipping line booking', 'Specialized reefer inspection', 'Multimodal route optimization'],
  },
  {
    step: '05',
    title: 'Shipment & Live Tracking',
    subtitle: 'Multimodal Transit & Telemetry',
    desc: 'Real-time container milestone tracking, port gate logging, and active 24/7 reefer temperature telemetry.',
    icon: Ship,
    details: ['IoT thermal monitoring', 'Vessel ETA synchronization', 'Transshipment supervision'],
  },
  {
    step: '06',
    title: 'Delivery & Incentive Closure',
    subtitle: 'Destination Clearance & Realization',
    desc: 'Overseeing destination customs release, final-mile delivery haulage, and complete bank realization closure.',
    icon: CheckCircle2,
    details: ['e-BRC realization audit', 'Duty drawback credit', 'Complete digital compliance dossier'],
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
                    className={`text-[10px] font-bold uppercase tracking-wider block mb-1 ${
                      isSelected ? 'text-sky-300' : 'text-neutral-400'
                    }`}
                  >
                    {item.subtitle}
                  </span>
                  <h3
                    className={`text-lg font-bold ${
                      isSelected ? 'text-white' : 'text-neutral-900'
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`mt-2 text-xs sm:text-sm leading-relaxed ${
                      isSelected ? 'text-neutral-300' : 'text-neutral-600'
                    }`}
                  >
                    {item.desc}
                  </p>
                </div>

                {/* Sub-item bullet points */}
                <div
                  className={`mt-5 pt-4 border-t ${
                    isSelected ? 'border-white/10' : 'border-neutral-200'
                  }`}
                >
                  <ul className="space-y-1.5 text-xs">
                    {item.details.map((detail, dIdx) => (
                      <li
                        key={dIdx}
                        className={`flex items-center gap-2 ${
                          isSelected ? 'text-sky-200' : 'text-neutral-600'
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            isSelected ? 'bg-sky-400' : 'bg-[#0284C7]'
                          }`}
                        />
                        <span>{detail}</span>
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
