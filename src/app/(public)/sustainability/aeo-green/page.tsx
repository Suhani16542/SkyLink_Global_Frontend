import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { constructMetadata } from '@/lib/seo/metadata';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/animation/ScrollReveal';
import {
  Award,
  ShieldCheck,
  FileCheck2,
  Zap,
  CheckCircle2,
  ArrowRight,
  Clock,
  Sparkles,
  Building2,
  Globe2,
} from 'lucide-react';

export const metadata: Metadata = constructMetadata({
  title: 'AEO Green Protocols & Fast-Track Customs | SkyLink Global Services',
  description:
    'Authorized Economic Operator (AEO T1/T2/T3/LO) paperless green-channel protocols, Direct Port Delivery (DPD), expedited green customs clearance, and reduced terminal dwell times.',
  path: '/sustainability/aeo-green',
});

export default function AeoGreenPage() {
  const aeoTiers = [
    {
      tier: 'AEO-T1 Tier',
      title: 'Digital Fast-Track Importers & Exporters',
      desc: 'Paperless compliance verification with priority clearance on self-assessment bills and minimal customs intervention.',
      benefits: ['Direct Port Delivery (DPD) eligible', 'Reduced bank guarantee amounts', 'Priority resolution of trade disputes'],
    },
    {
      tier: 'AEO-T2 Tier',
      title: 'Enhanced Physical Security & Green Channel',
      desc: 'Zero physical examination on green-channel consignments, 24/7 port access, and deferred customs duty payment privileges.',
      benefits: ['Zero port physical examination holds', 'Deferred duty payment scheme', '100% bank guarantee waiver for export schemes'],
    },
    {
      tier: 'AEO-T3 Tier',
      title: 'Premier Multi-Corridor Accreditation',
      desc: 'Highest institutional accreditation level offering Mutual Recognition Agreements (MRA) with global customs authorities.',
      benefits: ['Global MRA fast-track in USA, EU, Japan & Korea', 'Dedicated Customs Relationship Manager', 'Highest priority container berthing'],
    },
    {
      tier: 'AEO-LO Tier',
      title: 'Logistics Operators & Custodians',
      desc: 'Accreditation for customs brokers, warehouse custodians, freight forwarders, and terminal operators ensuring unbroken chain security.',
      benefits: ['Waiver of security deposits at port terminals', 'Pre-approved customs bonded operations', 'Priority scanner throughput'],
    },
  ];

  return (
    <div className="bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#07192D] via-[#0A2540] to-[#07192D] text-white py-16 sm:py-24 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-24 right-1/4 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-emerald-600/10 rounded-full blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal effect="fade-down" delay={0}>
            <Breadcrumbs
              items={[
                { name: 'Home', item: '/' },
                { name: 'Sustainability', item: '/sustainability/eco-route' },
                { name: 'AEO Green Protocols', item: '/sustainability/aeo-green' },
              ]}
              className="text-neutral-400 mb-6"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <ScrollReveal effect="fade-up" delay={80}>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-400/10 px-3.5 py-1.5 rounded-full border border-sky-400/30">
                  <Award className="w-3.5 h-3.5" />
                  Statutory Green-Channel Governance
                </span>
              </ScrollReveal>

              <ScrollReveal effect="fade-up" delay={140}>
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
                  AEO Green: Paperless Fast-Track Customs Protocols
                </h1>
              </ScrollReveal>

              <ScrollReveal effect="fade-up" delay={200}>
                <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl">
                  Leverage Authorized Economic Operator (AEO) status to achieve zero-delay green-channel clearance, Direct Port Delivery (DPD), paperless customs workflows, and reduced port dwell times.
                </p>
              </ScrollReveal>

              <ScrollReveal effect="fade-up" delay={260}>
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Button href="/request-consultation" variant="secondary" size="md">
                    Assess AEO Green Eligibility
                    <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Button>
                  <Button href="/sustainability/eco-route" variant="outline-light" size="md">
                    Explore Eco-Route Multimodal
                  </Button>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-5">
              <ScrollReveal effect="fade-left" delay={200}>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/15 bg-neutral-900 group">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200&auto=format&fit=crop"
                      alt="Paperless customs and international AEO green trade clearance"
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07192D]/80 via-transparent to-transparent" />
                  </div>
                  <div className="p-5 bg-[#07192D]/90 border-t border-white/10">
                    <div className="flex items-center justify-between text-xs text-neutral-300">
                      <span className="flex items-center gap-1.5 text-sky-400 font-semibold">
                        <Award className="w-4 h-4 text-sky-400" />
                        WCO SAFE Framework
                      </span>
                      <span className="font-mono text-white">Direct Port Delivery (DPD)</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE 4 AEO TIERS */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Institutional Certification"
            title="AEO Accreditation Tiers"
            subtitle="Understand the statutory framework and operational privileges across every AEO certification level."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {aeoTiers.map((tierItem, idx) => (
              <Card
                key={idx}
                variant="bordered"
                className="p-8 bg-gradient-to-br from-white to-sky-50/40 border-neutral-200 hover-lift shadow-xs flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
                      {tierItem.tier}
                    </span>
                    <ShieldCheck className="w-5 h-5 text-emerald-600" />
                  </div>

                  <h3 className="text-xl font-bold text-neutral-900">{tierItem.title}</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">{tierItem.desc}</p>

                  <div className="space-y-2 pt-3 border-t border-neutral-100">
                    {tierItem.benefits.map((benefit, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ENVIRONMENTAL & FINANCIAL BENEFITS */}
      <section className="py-16 sm:py-24 bg-neutral-50 border-y border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0284C7] bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-200">
                Triple-Bottom-Line Impact
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight">
                How AEO Green Drives Speed and Sustainability
              </h2>
              <p className="text-base text-neutral-600 leading-relaxed">
                By eliminating paper documentation and avoiding container idling at port container freight stations (CFS), AEO Green delivers immediate operational and environmental wins.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  'Direct Port Delivery (DPD) bypasses off-dock CFS transfers, cutting truck diesel emissions',
                  '100% digital faceless assessment eliminating thousands of physical statutory files',
                  'Deferred duty payments releasing enterprise working capital liquidity',
                  'Fewer physical cargo examinations preventing container seal breakage and packaging waste',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-neutral-800 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-[#0A2540] text-white p-6 shadow-xs">
                <div className="text-3xl sm:text-4xl font-black text-sky-400">&lt; 24h</div>
                <div className="mt-2 text-xs sm:text-sm text-neutral-300">
                  Average port gate-out under DPD Green Channel
                </div>
              </div>
              <div className="rounded-2xl bg-[#0284C7] text-white p-6 shadow-xs">
                <div className="text-3xl sm:text-4xl font-black text-white">100%</div>
                <div className="mt-2 text-xs sm:text-sm text-sky-100">
                  Paperless digital verification on managed accounts
                </div>
              </div>
              <div className="rounded-2xl bg-white border border-neutral-200 text-neutral-900 p-6 shadow-xs">
                <div className="text-3xl sm:text-4xl font-black text-[#0A2540]">Zero</div>
                <div className="mt-2 text-xs sm:text-sm text-neutral-600">
                  CFS secondary handling &amp; detention surcharges
                </div>
              </div>
              <div className="rounded-2xl bg-white border border-neutral-200 text-neutral-900 p-6 shadow-xs">
                <div className="text-3xl sm:text-4xl font-black text-[#0284C7]">Global</div>
                <div className="mt-2 text-xs sm:text-sm text-neutral-600">
                  Mutual Recognition Agreements (MRA) across key ports
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CTA */}
      <section className="py-16 sm:py-20 bg-[#07192D] text-white text-center">
        <div className="mx-auto max-w-3xl px-4 space-y-4">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            Ready to Fast-Track Your Customs Clearance?
          </h2>
          <p className="text-sm sm:text-base text-neutral-300">
            Let our AEO compliance directors conduct an institutional pre-audit to qualify your business for AEO green-channel status.
          </p>
          <div className="pt-3 flex flex-wrap justify-center gap-4">
            <Button href="/request-consultation" variant="secondary" size="md">
              Apply for AEO Pre-Audit
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>
            <Button href="/contact" variant="outline-light" size="md">
              Speak to Customs Counsel
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
