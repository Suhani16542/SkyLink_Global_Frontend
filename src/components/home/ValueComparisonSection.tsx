'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  TrendingDown,
  TrendingUp,
  ShieldCheck,
  Zap,
  Sparkles,
  CheckCircle2,
  XCircle,
  SlidersHorizontal,
} from 'lucide-react';
import { ScrollReveal } from '@/components/animation/ScrollReveal';

interface ComparisonPoint {
  id: string;
  category: string;
  label: string;
  traditional: {
    title: string;
    impact: string;
    loss: string;
  };
  skylink: {
    title: string;
    impact: string;
    gain: string;
    metric: string;
  };
}

const comparisonPoints: ComparisonPoint[] = [
  {
    id: 'freight-tariffs',
    category: 'Procurement',
    label: 'Freight Cost & Rate Transparency',
    traditional: {
      title: 'Layered sub-broker markups with hidden DTHC surcharges',
      impact: 'Unpredictable spot pricing eroding 8–12% of export margins per container lane.',
      loss: '+15% Excess Overhead',
    },
    skylink: {
      title: 'Direct premier volume shipping line contracts',
      impact: 'Guaranteed all-in fixed tariffs with zero hidden destination charges and priority space allocation.',
      gain: '18% Average Cost Savings',
      metric: '18% Net Savings',
    },
  },
  {
    id: 'customs-speed',
    category: 'Clearance',
    label: 'Customs & Port Dwell Time',
    traditional: {
      title: 'Reactive filing causing ICEGATE red-channel holds',
      impact: 'Clerical HS code misclassifications leading to port queries, container detention, and demurrage penalties.',
      loss: '3–5 Days Avg Delay',
    },
    skylink: {
      title: 'Pre-arrival statutory audit & Green-Channel release',
      impact: 'Zero-defect documentation verified against current CBIC rules before vessel arrives at berth.',
      gain: '0-Demurrage Release',
      metric: '99.8% First-Pass',
    },
  },
  {
    id: 'incentives-recovery',
    category: 'Fiscal',
    label: 'Statutory Export Incentive Realization',
    traditional: {
      title: 'Unassisted forwarding with unclaimed RoDTEP / Drawback',
      impact: 'Exporters lose legitimate statutory subsidies due to lack of electronic script filing liaison.',
      loss: 'Unclaimed Cash Flow',
    },
    skylink: {
      title: 'End-to-end RoDTEP, RoSCTL & Drawback recovery',
      impact: 'Automated script filing, e-BRC realization tracking, and EPCG/Advance Authorisation EODC redemption.',
      gain: '100% Realized Benefits',
      metric: '100% Monetized',
    },
  },
  {
    id: 'live-telemetry',
    category: 'Operations',
    label: 'Real-Time Telemetry & SLA Accountability',
    traditional: {
      title: 'Manual status emails with transshipment blind spots',
      impact: 'Fragmented response times, blind transshipment dwells, and zero visibility into thermal deviations.',
      loss: 'Blind Transit Gaps',
    },
    skylink: {
      title: 'Active 24/7 IoT tracking & single-desk SLA',
      impact: 'Live temperature, humidity, and milestone telemetry with dedicated single account manager accountability.',
      gain: '< 15 Min SLA Response',
      metric: '24/7 Live Stream',
    },
  },
];

export function ValueComparisonSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const current = comparisonPoints[activeIdx];

  // Auto-progress tabs smoothly
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % comparisonPoints.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  return (
    <section
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
      className="py-12 sm:py-16 lg:py-20 bg-white text-neutral-900 relative overflow-hidden border-t border-neutral-200 select-none"
    >
      {/* Subtle Background Geometric Accents on Pure White with Animated Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000004_1px,transparent_1px),linear-gradient(to_bottom,#00000004_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-sky-100/40 rounded-full blur-[120px] pointer-events-none animate-pulse-glow -z-10" />
      <div className="absolute bottom-5 left-10 w-[400px] h-[400px] bg-emerald-100/30 rounded-full blur-[120px] pointer-events-none animate-pulse-glow -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Compact Editorial Header with High Impact */}
        <div className="max-w-4xl mb-8 sm:mb-10 space-y-3">
          <ScrollReveal effect="fade-down" delay={0}>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-sky-700 bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-200/80 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-sky-500 animate-ping" />
              <span>Operational Efficiency Matrix</span>
            </div>
          </ScrollReveal>

          <ScrollReveal effect="fade-up" delay={50}>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#0A2540] tracking-tight leading-[1.06]">
              The Traditional Model <br className="hidden sm:inline" />
              <span className="text-neutral-400 font-light italic">vs.</span> The SkyLink Standard
            </h2>
          </ScrollReveal>

          <ScrollReveal effect="fade-up" delay={100}>
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-3xl font-normal">
              Compare standard freight forwarding brokerage friction against our integrated statutory trade advisory and direct premier carrier logistics infrastructure.
            </p>
          </ScrollReveal>
        </div>

        {/* Cardless Interactive Navigation Bar with Animated Progress Line */}
        <div className="flex border-b border-neutral-200 overflow-x-auto no-scrollbar gap-6 lg:gap-10 mb-8 sm:mb-12">
          {comparisonPoints.map((item, idx) => {
            const isActive = activeIdx === idx;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveIdx(idx);
                  setIsAutoPlaying(false);
                }}
                className={`pb-3.5 text-left transition-all duration-300 relative cursor-pointer shrink-0 group ${
                  isActive ? 'text-[#0A2540] scale-[1.01]' : 'text-neutral-400 hover:text-neutral-800'
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className={`text-xs font-mono font-bold uppercase tracking-wider transition-colors ${
                      isActive ? 'text-sky-600' : 'text-neutral-400'
                    }`}
                  >
                    0{idx + 1}
                  </span>
                  <span className="text-xs font-mono text-neutral-400 font-medium">
                    {item.category}
                  </span>
                </div>
                <span className="text-sm sm:text-base lg:text-lg font-extrabold block tracking-tight">
                  {item.label}
                </span>

                {/* Animated Indicator Line */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full transition-all duration-500 ${
                    isActive ? 'bg-[#0284C7] shadow-sm shadow-sky-500/50 scale-100' : 'bg-transparent group-hover:bg-neutral-200 scale-95'
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Cardless Open Dual-Track Visual Stage on Clean White */}
        <div key={current.id} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center animate-fade-in transition-all duration-500">
          {/* Left Side: Traditional Forwarding Breakdown */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-rose-600 tracking-wider">
              <span className="w-2 h-2 rounded-full bg-rose-500" />
              <span>Standard Forwarding Pitfalls</span>
            </div>

            <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-neutral-900 leading-snug tracking-tight">
              {current.traditional.title}
            </h3>

            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
              {current.traditional.impact}
            </p>

            <div className="pt-3 border-t border-neutral-200 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600 shrink-0 shadow-xs">
                <TrendingDown className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-neutral-400 uppercase block font-semibold">
                  Compounded Friction Cost
                </span>
                <span className="text-base sm:text-lg font-bold text-rose-700 font-mono">
                  {current.traditional.loss}
                </span>
              </div>
            </div>
          </div>

          {/* Center Vertical Divider with Animated VS Badge */}
          <div className="hidden lg:flex lg:col-span-2 flex-col items-center justify-center self-stretch">
            <div className="w-px flex-1 bg-gradient-to-b from-transparent via-neutral-300 to-transparent" />
            <div className="my-4 w-10 h-10 rounded-full border border-neutral-300 bg-white flex items-center justify-center text-xs font-mono font-black text-neutral-500 shadow-md transition-transform hover:scale-110">
              VS
            </div>
            <div className="w-px flex-1 bg-gradient-to-b from-transparent via-neutral-300 to-transparent" />
          </div>

          {/* Right Side: The SkyLink Standard */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-emerald-700 tracking-wider">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>The SkyLink Advantage</span>
              </div>
              <span className="text-xs font-mono font-bold text-sky-800 bg-sky-50 px-3 py-1 rounded-full border border-sky-200 shadow-xs">
                {current.skylink.metric}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#0A2540] leading-snug tracking-tight">
              {current.skylink.title}
            </h3>

            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed font-normal">
              {current.skylink.impact}
            </p>

            <div className="pt-3 border-t border-neutral-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0 shadow-xs">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-neutral-400 uppercase block font-semibold">
                    Audited Outcome
                  </span>
                  <span className="text-base sm:text-lg font-bold text-emerald-700 font-mono">
                    {current.skylink.gain}
                  </span>
                </div>
              </div>

              {/* Big Impact Action Button */}
              <Link
                href="/request-consultation"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0A2540] hover:bg-[#0284C7] text-white text-xs sm:text-sm font-bold shadow-lg shadow-neutral-900/15 transition-all duration-300 hover:scale-105 active:scale-95 group/btn shrink-0"
              >
                <span>Audit This Lane</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Compact Minimalist Bottom Statistics Row (Cardless) */}
        <div className="mt-12 sm:mt-16 pt-8 sm:pt-10 border-t border-neutral-200 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {[
            { value: '18%', label: 'Average Baseline Freight Savings', sub: 'Direct premier carrier volume contracting' },
            { value: '99.8%', label: 'First-Pass Customs Clearance', sub: 'Pre-arrival verified statutory documentation' },
            { value: '100%', label: 'Export Incentive Recovery', sub: 'RoDTEP, RoSCTL & Duty Drawback monetized' },
            { value: '< 15m', label: 'Dedicated Account SLA Response', sub: '24/7 continuous active telemetry stream' },
          ].map((stat, i) => (
            <div key={i} className="space-y-1 group cursor-default">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A2540] group-hover:text-[#0284C7] tracking-tight font-mono transition-colors duration-300">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-extrabold text-neutral-900">
                {stat.label}
              </div>
              <div className="text-[11px] text-neutral-500 font-normal leading-snug">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
