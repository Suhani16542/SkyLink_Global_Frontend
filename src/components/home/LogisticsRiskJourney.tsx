'use client';

import React, { useState } from 'react';
import {
  AlertTriangle,
  ShieldCheck,
  Building2,
  FileCheck2,
  Anchor,
  Ship,
  Scale,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { ScrollReveal } from '@/components/animation/ScrollReveal';
import { Button } from '@/components/ui/Button';

interface RiskStage {
  id: string;
  stageNum: string;
  title: string;
  location: string;
  icon: React.ElementType;
  unmanagedRisk: {
    heading: string;
    impact: string;
  };
  skylinkShield: {
    heading: string;
    action: string;
  };
}

const riskStages: RiskStage[] = [
  {
    id: 'supplier',
    stageNum: '01',
    title: 'Supplier Factory & Packaging',
    location: 'Origin Manufacturing Floor',
    icon: Building2,
    unmanagedRisk: {
      heading: 'Inadequate Export Packaging & HS Misalignment',
      impact:
        'Substandard crating or thermal preparation leads to cargo damage in transit and non-compliant pallet marking delays.',
    },
    skylinkShield: {
      heading: 'Pre-Shipment Compliance & Packaging Audit',
      action:
        'We enforce ISPM-15 wood packaging standards, pre-trip thermal validation, and preliminary HS code tariff verification.',
    },
  },
  {
    id: 'documentation',
    stageNum: '02',
    title: 'Trade Documentation & Banking',
    location: 'DGFT & Negotiating Bank Desk',
    icon: FileCheck2,
    unmanagedRisk: {
      heading: 'Letter of Credit (LC) Discrepancies & e-BRC Mismatches',
      impact:
        'Clerical errors in commercial invoices trigger bank refusal under UCP 600 and subsequent blocking of RoDTEP/EPCG incentive scrips.',
    },
    skylinkShield: {
      heading: 'Zero-Defect Statutory Vetting',
      action:
        'Our compliance desk reviews LC clauses, generates digital Preferential Certificates of Origin, and ensures seamless EDPMS reconciliation.',
    },
  },
  {
    id: 'port-gate',
    stageNum: '03',
    title: 'Port Gate & Drayage Terminal',
    location: 'Nhava Sheva / Mundra / ICDs',
    icon: Anchor,
    unmanagedRisk: {
      heading: 'Port Congestion & Missed Vessel Gate-Cutoffs',
      impact:
        'Delayed inland haulage results in missed container vessel cutoffs, cargo roll-overs, and accumulating port terminal storage fees.',
    },
    skylinkShield: {
      heading: 'Priority Gate In & Guaranteed Vessel Space',
      action:
        'Pre-scheduled ICD intermodal rail slots and dedicated terminal liaison ensure on-time container vessel staging with zero rollover.',
    },
  },
  {
    id: 'freight',
    stageNum: '04',
    title: 'Ocean & Air Freight Transit',
    location: 'International Maritime & Air Corridors',
    icon: Ship,
    unmanagedRisk: {
      heading: 'Uninsured Maritime Losses & General Average',
      impact:
        'Vessel groundings, container loss overboard, or General Average declarations impose sudden multi-million dollar legal liability on cargo owners.',
    },
    skylinkShield: {
      heading: 'Institute Cargo Clauses (A) All-Risk Indemnity',
      action:
        'Direct Tier-1 carrier booking backed by comprehensive all-risk marine cargo insurance and 24/7 active satellite telemetry tracking.',
    },
  },
  {
    id: 'customs',
    stageNum: '05',
    title: 'Customs & Border Control',
    location: 'Destination Port Gateway',
    icon: Scale,
    unmanagedRisk: {
      heading: 'Faceless Assessment Queries & Demurrage Charges',
      impact:
        'Unresolved customs objections or valuation disputes (SVB) trigger expensive port demurrage ($150–$300/container/day) and shipment holds.',
    },
    skylinkShield: {
      heading: 'Pre-Arrival EDI Filing & Green-Channel Release',
      action:
        'Authorized customs brokerage with pre-arrival electronic filing under AEO protocols delivers instant release with zero demurrage holds.',
    },
  },
  {
    id: 'destination',
    stageNum: '06',
    title: 'Final Consignee Delivery',
    location: 'Buyer Warehouse & Facility',
    icon: CheckCircle2,
    unmanagedRisk: {
      heading: 'Destination Tariff Shocks & Disputed Incoterms',
      impact:
        'Misunderstood Incoterms risk boundaries cause unexpected destination terminal handling charges (DTHC) and buyer disputes.',
    },
    skylinkShield: {
      heading: 'Turnkey DDP / DAP Doorstep Execution',
      action:
        'End-to-end milestone accountability with clear Incoterms contract boundaries and audit-ready electronic delivery dossiers.',
    },
  },
];

export function LogisticsRiskJourney() {
  const [activeStageId, setActiveStageId] = useState<string>('documentation');

  const currentStage =
    riskStages.find((s) => s.id === activeStageId) || riskStages[1];

  return (
    <section className="py-20 sm:py-28 bg-[#07192D] text-white relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-red-500/5 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none opacity-40" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <ScrollReveal effect="fade-down" delay={0}>
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 border border-amber-400/30 px-3.5 py-1.5 text-xs font-semibold text-amber-300">
              <AlertTriangle className="w-4 h-4 text-amber-400" />
              <span>Cross-Border Risk Mitigation</span>
            </div>
          </ScrollReveal>
          <ScrollReveal effect="fade-up" delay={80}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Every Shipment Carries Real Risk
            </h2>
          </ScrollReveal>
          <ScrollReveal effect="fade-up" delay={160}>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              Without specialized EXIM oversight, cross-border operations face severe operational, regulatory, and financial bottlenecks. Explore how SkyLink shields your supply chain at every milestone.
            </p>
          </ScrollReveal>
        </div>

        {/* Visual Supply Chain Pipeline Track */}
        <ScrollReveal effect="fade-up" delay={200} className="mb-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 relative">
            {riskStages.map((stage, idx) => {
              const isSelected = activeStageId === stage.id;
              const IconComp = stage.icon;

              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveStageId(stage.id)}
                  className={`p-4 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between relative group ${
                    isSelected
                      ? 'bg-gradient-to-b from-[#0A2540] to-[#07192D] border-sky-400/60 shadow-xl shadow-sky-500/15 scale-[1.03] ring-1 ring-sky-400/40'
                      : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                  }`}
                >
                  {/* Top Step Number and Icon */}
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`text-xs font-mono font-bold ${
                        isSelected ? 'text-sky-400' : 'text-neutral-400'
                      }`}
                    >
                      Stage {stage.stageNum}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                        isSelected
                          ? 'bg-sky-500/20 text-sky-300 border border-sky-400/30'
                          : 'bg-white/5 text-neutral-400 group-hover:text-white'
                      }`}
                    >
                      <IconComp className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Stage Title */}
                  <div className="text-xs sm:text-sm font-bold text-white leading-tight">
                    {stage.title}
                  </div>

                  {/* Status Indicator */}
                  <div className="mt-3 pt-2 border-t border-white/10 flex items-center justify-between text-[10px]">
                    <span
                      className={
                        isSelected ? 'text-sky-300 font-bold' : 'text-neutral-400'
                      }
                    >
                      {isSelected ? 'Active View' : 'Inspect Risk'}
                    </span>
                    <ArrowRight
                      className={`w-3 h-3 transition-transform ${
                        isSelected
                          ? 'text-sky-400 translate-x-0.5'
                          : 'text-neutral-500 group-hover:translate-x-0.5'
                      }`}
                    />
                  </div>
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Detailed Active Risk vs SkyLink Shield Comparison Card */}
        <ScrollReveal effect="scale-up" delay={260} duration={750}>
          <div className="rounded-3xl border border-white/15 bg-gradient-to-b from-[#0A2540] to-[#07192D] p-6 sm:p-8 lg:p-10 shadow-2xl backdrop-blur-xl">
            {/* Header of Active Stage */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 gap-4">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400">
                  Stage {currentStage.stageNum} Breakdown
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-1">
                  {currentStage.title}
                </h3>
                <span className="text-xs text-neutral-400 block mt-0.5">
                  Milestone Location: {currentStage.location}
                </span>
              </div>

              <div className="shrink-0">
                <Button
                  href="/request-consultation"
                  variant="secondary"
                  size="sm"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Protect This Stage
                </Button>
              </div>
            </div>

            {/* Split Comparison: Unmanaged Vulnerability vs SkyLink Proactive Shield */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
              {/* Left: Unmanaged Risk Box */}
              <div className="p-6 rounded-2xl bg-red-950/30 border border-red-500/30 space-y-3">
                <div className="flex items-center gap-2 text-red-400">
                  <AlertTriangle className="w-5 h-5 shrink-0" />
                  <span className="text-xs font-bold uppercase tracking-wider">
                    Unmanaged Cross-Border Vulnerability
                  </span>
                </div>
                <h4 className="text-base font-bold text-white">
                  {currentStage.unmanagedRisk.heading}
                </h4>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  {currentStage.unmanagedRisk.impact}
                </p>
              </div>

              {/* Right: SkyLink Shield Box */}
              <div className="p-6 rounded-2xl bg-sky-950/40 border border-sky-500/40 space-y-3">
                <div className="flex items-center gap-2 text-sky-400">
                  <ShieldCheck className="w-5 h-5 shrink-0 text-emerald-400" />
                  <span className="text-xs font-bold uppercase tracking-wider">
                    SkyLink Proactive Operational Shield
                  </span>
                </div>
                <h4 className="text-base font-bold text-white">
                  {currentStage.skylinkShield.heading}
                </h4>
                <p className="text-xs sm:text-sm text-sky-100 leading-relaxed">
                  {currentStage.skylinkShield.action}
                </p>
              </div>
            </div>

            {/* Bottom Strategic Promise Banner */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
              <div className="flex items-center gap-2 text-sky-300">
                <Sparkles className="w-4 h-4 text-sky-400 shrink-0" />
                <span>
                  Eliminate cross-border blind spots with single-window milestone accountability.
                </span>
              </div>
              <a
                href="/contact"
                className="text-white hover:text-sky-300 font-bold underline shrink-0 inline-flex items-center gap-1"
              >
                Schedule Supply Chain Risk Audit &rarr;
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
