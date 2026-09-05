import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getPageMetadata } from '@/lib/seo/metadata';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/animation/ScrollReveal';
import { StaggerContainer } from '@/components/animation/StaggerContainer';
import {
  ShieldCheck,
  TrendingDown,
  Scale,
  ThermometerSnowflake,
  ArrowRight,
  CheckCircle2,
  Zap,
  Globe2,
  Layers,
  FileCheck2,
  Ship,
  Sparkles,
  Lock,
  Headphones,
} from 'lucide-react';

export const metadata: Metadata = getPageMetadata('whySkyLinkAdvantage');


export default function SkylinkAdvantagePage() {
  const coreAdvantages = [
    {
      icon: ShieldCheck,
      badge: 'SINGLE-WINDOW CONTROL',
      title: 'Unified Trade Governance',
      desc: 'One single SLA covers DGFT advisory, customs brokerage, export documentation, and multimodal freight—eliminating third-party finger-pointing and coordination delays.',
      highlights: [
        'Single accountable point of contact',
        'Direct coordination between customs & ocean carriers',
        'Standardized operational protocols across all ports',
      ],
    },
    {
      icon: TrendingDown,
      badge: 'RATE TRANSPARENCY',
      title: 'Direct Carrier Contracts',
      desc: 'Contracted volume agreements with premier global shipping lines and scheduled air cargo operators guarantee fixed all-in pricing with zero hidden destination fees.',
      highlights: [
        'Pre-negotiated volume tier freight tariffs',
        'Zero unauthorized origin/destination broker markups',
        'Extended demurrage & detention free-day waivers',
      ],
    },
    {
      icon: Scale,
      badge: 'STATUTORY SHIELD',
      title: 'Duty Recovery & Risk Shielding',
      desc: 'Pre-arrival ICEGATE documentation filing and faceless assessment expertise secure rapid green-channel releases while maximizing RoDTEP, RoSCTL, and GST refunds.',
      highlights: [
        '100% statutory incentive monetization',
        'Pre-arrival Bill of Entry & Shipping Bill verification',
        'CAROTAR & Rules of Origin audit readiness',
      ],
    },
    {
      icon: ThermometerSnowflake,
      badge: 'COLD-CHAIN MASTERY',
      title: 'GDP-Compliant Telemetry & Port Desk',
      desc: 'Unbroken temperature protection (-25°C to +25°C) with satellite IoT tracking, active ramp coordination, and 24/7 dedicated port milestone monitoring.',
      highlights: [
        'Real-time IoT temperature & shock telemetry',
        'ADC & EIA health certification liaison',
        'Immediate terminal plug-in shore-power assurance',
      ],
    },
  ];

  const operationalMetrics = [
    { value: '100%', label: 'Statutory Compliance', subtext: 'Zero unresolved DGFT/ICEGATE audits' },
    { value: '20%+', label: 'Cost Reduction', subtext: 'Through direct shipping line contracts' },
    { value: '24/7', label: 'Telemetry Monitoring', subtext: 'Active temperature & milestone tracking' },
    { value: 'Zero', label: 'Demurrage Guarantee', subtext: 'Under managed single-window accounts' },
  ];

  return (
    <div className="bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#07192D] via-[#0A2540] to-[#07192D] text-white py-16 sm:py-24 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-24 right-1/4 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal effect="fade-down" delay={0}>
            <Breadcrumbs
              items={[
                { name: 'Home', item: '/' },
                { name: 'Why Choose Us', item: '/why-choose-us/skylink-advantage' },
                { name: 'Skylink Advantage', item: '/why-choose-us/skylink-advantage' },
              ]}
              className="text-neutral-400 mb-6"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <ScrollReveal effect="fade-up" delay={80}>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-400/10 px-3.5 py-1.5 rounded-full border border-sky-400/30">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  The SkyLink Difference
                </span>
              </ScrollReveal>

              <ScrollReveal effect="fade-up" delay={140}>
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12] text-balance">
                  Single-Window Trade Governance &amp; Direct Carrier Power
                </h1>
              </ScrollReveal>

              <ScrollReveal effect="fade-up" delay={200}>
                <p className="text-sm sm:text-base lg:text-lg text-neutral-300 leading-relaxed max-w-2xl text-pretty font-normal">
                  Traditional forwarding fragments your supply chain across disconnected brokers and middlemen. SkyLink unifies regulatory counsel, statutory customs filing, and tier-1 ocean/air capacity into a seamless, high-velocity operation.
                </p>
              </ScrollReveal>

              <ScrollReveal effect="fade-up" delay={260}>
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Button href="/request-consultation" variant="secondary" size="md">
                    Evaluate Your Trade Corridors
                    <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Button>
                  <Button href="/why-choose-us/traditional-vs-skylink" variant="outline-light" size="md">
                    View Value Comparison
                  </Button>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-5">
              <ScrollReveal effect="fade-left" delay={200}>
                <div className="grid grid-cols-2 gap-4">
                  {operationalMetrics.map((metric, idx) => (
                    <div
                      key={idx}
                      className="rounded-2xl bg-white/5 border border-white/10 p-5 backdrop-blur-md flex flex-col justify-between hover:bg-white/10 transition-colors"
                    >
                      <div className="text-3xl sm:text-4xl font-black text-sky-400">{metric.value}</div>
                      <div className="mt-3">
                        <div className="text-sm font-bold text-white">{metric.label}</div>
                        <div className="text-[11px] text-neutral-300 mt-0.5">{metric.subtext}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE FOUR PILLARS OF ADVANTAGE */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Operational Superiority"
            title="Why Leading Exporters Choose SkyLink"
            subtitle="Engineered to solve the fundamental vulnerabilities in cross-border trade."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {coreAdvantages.map((adv, idx) => {
              const IconComp = adv.icon;
              return (
                <Card
                  key={idx}
                  variant="bordered"
                  className="p-8 sm:p-10 bg-gradient-to-br from-white to-sky-50/40 border-neutral-200 hover-lift shadow-xs flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-[#0A2540] text-sky-400 flex items-center justify-center shadow-sm">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#0284C7] bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
                        {adv.badge}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-neutral-900">{adv.title}</h3>
                    <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">{adv.desc}</p>

                    <div className="space-y-2 pt-2 border-t border-neutral-100">
                      {adv.highlights.map((point, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. THREE-DIMENSIONAL EXECUTION MODEL */}
      <section className="py-16 sm:py-24 bg-neutral-50 border-y border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Execution Framework"
            title="The Three-Dimensional SkyLink Model"
            subtitle="How we bridge statutory trade compliance, logistics execution, and fiscal security."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
            <div className="rounded-3xl bg-white border border-neutral-200 p-8 shadow-xs flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#0A2540] text-white flex items-center justify-center">
                  <Scale className="w-6 h-6 text-sky-400" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900">1. Regulatory Defense</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Proactive customs tariff classification, Advance Authorisation tracking, CAROTAR substantiation, and zero-defect ICEGATE filing.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-neutral-100 text-xs font-semibold text-[#0284C7]">
                Zero Customs Hold Guarantee
              </div>
            </div>

            <div className="rounded-3xl bg-white border border-neutral-200 p-8 shadow-xs flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#0284C7] text-white flex items-center justify-center">
                  <Ship className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900">2. Multimodal Capacity</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Direct space allocation on premier ocean carriers and air freight networks with transparent all-in pricing and priority port berthing.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-neutral-100 text-xs font-semibold text-[#0284C7]">
                Guaranteed Space &amp; Fixed Tariffs
              </div>
            </div>

            <div className="rounded-3xl bg-white border border-neutral-200 p-8 shadow-xs flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-700 text-white flex items-center justify-center">
                  <Lock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900">3. Capital &amp; Cash Flow</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Accelerated GST zero-rated refund reconciliation, RoDTEP script monetisation, and duty deferment via Section 65 MOOWR warehousing.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-neutral-100 text-xs font-semibold text-[#0284C7]">
                Maximum Working Capital Liquidity
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CTA */}
      <section className="py-16 sm:py-20 bg-[#07192D] text-white text-center">
        <div className="mx-auto max-w-3xl px-4 space-y-4">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            Experience the SkyLink Advantage First-Hand
          </h2>
          <p className="text-sm sm:text-base text-neutral-300">
            Let our compliance and freight analysts audit your recent shipments and identify immediate cost &amp; compliance gains.
          </p>
          <div className="pt-3 flex flex-wrap justify-center gap-4">
            <Button href="/request-consultation" variant="secondary" size="md">
              Request Free Trade Audit
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>
            <Button href="/why-choose-us/traditional-vs-skylink" variant="outline-light" size="md">
              Compare Side-By-Side
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
