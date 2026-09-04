'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  TrendingDown,
  TrendingUp,
  CheckCircle2,
  XCircle,
  Sparkles,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import { ScrollReveal } from '@/components/animation/ScrollReveal';

interface ComparisonPoint {
  id: string;
  num: string;
  category: string;
  label: string;
  metric: string;
  traditional: {
    title: string;
    impact: string;
    loss: string;
  };
  skylink: {
    title: string;
    impact: string;
    gain: string;
  };
}

const comparisonPoints: ComparisonPoint[] = [
  {
    id: 'freight-tariffs',
    num: '01',
    category: 'Procurement',
    label: 'Freight Cost & Rate Transparency',
    metric: '18% Net Savings',
    traditional: {
      title: 'Layered sub-broker markups with hidden DTHC surcharges',
      impact: 'Unpredictable spot pricing eroding 8–12% of export margins per container lane.',
      loss: '+15% Excess Overhead',
    },
    skylink: {
      title: 'Direct premier volume shipping line contracts',
      impact: 'Guaranteed all-in fixed tariffs with zero hidden destination charges and priority space allocation.',
      gain: '18% Average Cost Savings',
    },
  },
  {
    id: 'customs-speed',
    num: '02',
    category: 'Clearance',
    label: 'Customs & Port Dwell Time',
    metric: '99.8% First-Pass',
    traditional: {
      title: 'Reactive filing causing ICEGATE red-channel holds',
      impact: 'Clerical HS code misclassifications leading to port queries, container detention, and demurrage penalties.',
      loss: '3–5 Days Avg Delay',
    },
    skylink: {
      title: 'Pre-arrival statutory audit & Green-Channel release',
      impact: 'Zero-defect documentation verified against current CBIC rules before vessel arrives at berth.',
      gain: '0-Demurrage Release',
    },
  },
  {
    id: 'incentives-recovery',
    num: '03',
    category: 'Fiscal',
    label: 'Statutory Export Incentive Realization',
    metric: '100% Monetized',
    traditional: {
      title: 'Unassisted forwarding with unclaimed RoDTEP / Drawback',
      impact: 'Exporters lose legitimate statutory subsidies due to lack of electronic script filing liaison.',
      loss: 'Unclaimed Cash Flow',
    },
    skylink: {
      title: 'End-to-end RoDTEP, RoSCTL & Drawback recovery',
      impact: 'Automated script filing, e-BRC realization tracking, and EPCG/Advance Authorisation EODC redemption.',
      gain: '100% Realized Benefits',
    },
  },
  {
    id: 'live-telemetry',
    num: '04',
    category: 'Operations',
    label: 'Real-Time Telemetry & SLA Accountability',
    metric: '24/7 Live Stream',
    traditional: {
      title: 'Manual status emails with transshipment blind spots',
      impact: 'Fragmented response times, blind transshipment dwells, and zero visibility into thermal deviations.',
      loss: 'Blind Transit Gaps',
    },
    skylink: {
      title: 'Active 24/7 IoT tracking & single-desk SLA',
      impact: 'Live temperature, humidity, and milestone telemetry with dedicated single account manager accountability.',
      gain: '< 15 Min SLA Response',
    },
  },
];

export function ValueComparisonSection() {
  const [activeHoverId, setActiveHoverId] = useState<string | null>(null);

  return (
    <section id="value-comparison" className="py-16 sm:py-24 bg-gradient-to-b from-white via-slate-50/40 to-white text-neutral-900 relative overflow-hidden border-t border-neutral-200 scroll-mt-24">
      {/* Background Animated Subtle Glows */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000004_1px,transparent_1px),linear-gradient(to_bottom,#00000004_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-sky-200/25 rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute bottom-1/4 left-0 w-[450px] h-[450px] bg-emerald-200/20 rounded-full blur-[130px] pointer-events-none -z-10 animate-pulse-glow" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-3xl space-y-3">
            <ScrollReveal effect="fade-down" delay={0}>
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-sky-700 bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-200/80 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-sky-500 animate-ping" />
                <span>Operational Efficiency Matrix</span>
              </div>
            </ScrollReveal>

            <ScrollReveal effect="fade-up" delay={60}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A2540] tracking-tight leading-tight">
                The Traditional Model <br className="hidden sm:inline" />
                <span className="text-neutral-400 font-light italic">vs.</span> The SkyLink Standard
              </h2>
            </ScrollReveal>

            <ScrollReveal effect="fade-up" delay={120}>
              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed max-w-2xl font-normal">
                Compare standard freight forwarding brokerage friction against our integrated statutory trade advisory and direct premier carrier logistics infrastructure.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal effect="fade-left" delay={150} className="shrink-0">
            <Link
              href="/request-consultation"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0A2540] hover:bg-[#0284C7] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 active:scale-95 group"
            >
              <span>Request Full Trade Audit</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-200" />
            </Link>
          </ScrollReveal>
        </div>

        {/* 2x2 Grid Layout (2 Cards Top, 2 Cards Bottom) - Opens/Expands On Hover */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-start">
          {comparisonPoints.map((item, idx) => {
            const isHovered = activeHoverId === item.id;
            return (
              <ScrollReveal
                key={item.id}
                effect="fade-up"
                delay={idx * 90}
                duration={550}
                className="group relative rounded-3xl bg-white border border-neutral-200/90 hover:border-sky-400 hover:shadow-2xl hover:shadow-sky-500/15 transition-all duration-500 hover:-translate-y-1 overflow-hidden cursor-pointer"
              >
                <div
                  onMouseEnter={() => setActiveHoverId(item.id)}
                  onMouseLeave={() => setActiveHoverId(null)}
                  onClick={() => setActiveHoverId(isHovered ? null : item.id)}
                >
                  {/* Top Animated Shimmer Accent Line */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0284C7] via-sky-400 to-emerald-400 transition-opacity duration-500 ${
                      isHovered ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    }`}
                  />

                  {/* Ambient Glow */}
                  <div className="absolute -top-24 -right-24 w-48 h-48 bg-sky-400/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700 pointer-events-none" />

                  <div className="p-6 sm:p-8 space-y-4 relative z-10">
                    {/* Header: Number, Category & Metric */}
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2.5">
                        <span className="text-base font-mono font-black text-[#0284C7] bg-sky-50 px-2.5 py-1 rounded-lg border border-sky-100 group-hover:scale-105 group-hover:bg-[#0284C7] group-hover:text-white transition-all duration-300">
                          {item.num}
                        </span>
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-600 bg-neutral-100/80 px-3 py-1 rounded-full border border-neutral-200/60">
                          {item.category}
                        </span>
                      </div>

                      <span className="text-xs font-mono font-bold text-sky-800 bg-sky-50/90 group-hover:bg-sky-100 px-3 py-1 rounded-full border border-sky-200/80 shadow-xs transition-colors">
                        {item.metric}
                      </span>
                    </div>

                    {/* Card Title */}
                    <div>
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-[#0A2540] group-hover:text-[#0284C7] transition-colors leading-tight">
                        {item.label}
                      </h3>
                    </div>

                    {/* Hover Reveal Trigger Prompt (Visible when collapsed) */}
                    <div className="flex items-center justify-between text-xs font-semibold text-neutral-400 group-hover:text-sky-600 transition-colors pt-1">
                      <span className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-ping" />
                        <span>Hover to inspect comparison breakdown</span>
                      </span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-sky-600" />
                    </div>

                    {/* Expandable Dual Comparison View (Opens on cursor hover) */}
                    <div
                      className={`grid transition-all duration-500 ease-out ${
                        isHovered
                          ? 'grid-rows-[1fr] opacity-100 mt-4 pt-4 border-t border-neutral-100'
                          : 'grid-rows-[0fr] opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100 group-hover:mt-4 group-hover:pt-4 group-hover:border-t group-hover:border-neutral-100'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1 animate-in fade-in duration-300">
                          {/* Traditional Forwarding Pitfall (Red Tinted) */}
                          <div className="p-4 rounded-2xl bg-rose-50/70 border border-rose-100 flex flex-col justify-between space-y-3">
                            <div>
                              <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase text-rose-600 mb-1.5">
                                <XCircle className="w-3.5 h-3.5 shrink-0" />
                                <span>Traditional Pitfall</span>
                              </div>
                              <h4 className="text-xs sm:text-sm font-bold text-neutral-900 leading-snug">
                                {item.traditional.title}
                              </h4>
                              <p className="mt-1.5 text-xs text-neutral-600 leading-relaxed font-normal">
                                {item.traditional.impact}
                              </p>
                            </div>

                            <div className="pt-2 border-t border-rose-200/70 flex items-center justify-between text-xs font-bold text-rose-700">
                              <span className="text-[10px] font-mono text-neutral-500 uppercase font-semibold">Friction:</span>
                              <span className="font-mono">{item.traditional.loss}</span>
                            </div>
                          </div>

                          {/* SkyLink Standard (Emerald/Sky Tinted) */}
                          <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/90 shadow-xs flex flex-col justify-between space-y-3">
                            <div>
                              <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase text-emerald-700 mb-1.5">
                                <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-emerald-600" />
                                <span>SkyLink Standard</span>
                              </div>
                              <h4 className="text-xs sm:text-sm font-bold text-[#0A2540] leading-snug">
                                {item.skylink.title}
                              </h4>
                              <p className="mt-1.5 text-xs text-neutral-700 leading-relaxed font-normal">
                                {item.skylink.impact}
                              </p>
                            </div>

                            <div className="pt-2 border-t border-emerald-200/70 flex items-center justify-between text-xs font-bold text-emerald-700">
                              <span className="text-[10px] font-mono text-neutral-500 uppercase font-semibold">Gain:</span>
                              <span className="font-mono">{item.skylink.gain}</span>
                            </div>
                          </div>
                        </div>

                        {/* Action Link inside expanded view */}
                        <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between">
                          <span className="text-xs text-neutral-500 font-medium">
                            Single-Window Governance &amp; Direct Tariffs
                          </span>
                          <Link
                            href="/request-consultation"
                            className="inline-flex items-center gap-1 text-xs font-bold text-[#0284C7] hover:text-[#0A2540] transition-colors"
                          >
                            <span>Audit Lane &rarr;</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Bottom Quantitative Operational Impact Statistics */}
        <div className="mt-14 sm:mt-18 pt-10 border-t border-neutral-200 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {[
            { value: '18%', label: 'Average Baseline Freight Savings', sub: 'Direct premier carrier volume contracting' },
            { value: '99.8%', label: 'First-Pass Customs Clearance', sub: 'Pre-arrival verified statutory documentation' },
            { value: '100%', label: 'Export Incentive Recovery', sub: 'RoDTEP, RoSCTL & Duty Drawback monetized' },
            { value: '< 15m', label: 'Dedicated Account SLA Response', sub: '24/7 continuous active telemetry stream' },
          ].map((stat, i) => (
            <ScrollReveal key={i} effect="fade-up" delay={i * 70} className="space-y-1.5 group cursor-default">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A2540] group-hover:text-[#0284C7] tracking-tight font-mono transition-colors duration-300">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-extrabold text-neutral-900">
                {stat.label}
              </div>
              <div className="text-[11px] text-neutral-500 font-normal leading-snug">
                {stat.sub}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
