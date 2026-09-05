import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { constructMetadata } from '@/lib/seo/metadata';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/animation/ScrollReveal';
import {
  Scale,
  CheckCircle2,
  XCircle,
  TrendingDown,
  TrendingUp,
  ShieldCheck,
  Zap,
  ArrowRight,
  AlertTriangle,
  Clock,
  Sparkles,
} from 'lucide-react';

export const metadata: Metadata = constructMetadata({
  title: 'Traditional vs SkyLink | Operational Value & Efficiency Comparison Matrix',
  description:
    'Compare traditional freight forwarding vs. SkyLink integrated trade governance across rate transparency, customs dwell time, statutory compliance, cold-chain telemetry, and cash flow.',
  path: '/why-choose-us/traditional-vs-skylink',
});

interface ComparisonRow {
  dimension: string;
  traditional: {
    title: string;
    points: string[];
    result: string;
  };
  skylink: {
    title: string;
    points: string[];
    result: string;
  };
}

export default function TraditionalVsSkylinkPage() {
  const comparisonMatrix: ComparisonRow[] = [
    {
      dimension: 'Freight Procurement & Tariffs',
      traditional: {
        title: 'Multi-Tier Brokerage Markups',
        points: [
          'Passes through 3–4 layers of non-vessel brokers & NVOCCs',
          'Frequent unannounced Destination Terminal Handling Charges (DTHC)',
          'Volatile spot pricing with no capacity guarantees during peak season',
        ],
        result: '8–15% inflated logistics costs',
      },
      skylink: {
        title: 'Direct Premier Carrier Contracting',
        points: [
          'Direct volume agreements with top ocean lines & air cargo carriers',
          '100% transparent all-in pricing with fixed origin & destination charges',
          'Contracted space protection with priority vessel berthing allocations',
        ],
        result: '18%+ average logistics cost savings',
      },
    },
    {
      dimension: 'Customs & Port Clearance',
      traditional: {
        title: 'Reactive Post-Arrival Filing',
        points: [
          'Documentation filed only after cargo lands at the terminal',
          'High vulnerability to ICEGATE red-channel holds and physical examinations',
          'Frequent port demurrage & container detention liabilities',
        ],
        result: '4–7 days average customs dwell time',
      },
      skylink: {
        title: 'Pre-Arrival Green-Channel Verification',
        points: [
          'Pre-filing of Bill of Entry & Shipping Bills 48–72h prior to arrival',
          'Automated AI-assisted HS code & CAROTAR compliance checks',
          'Direct Port Delivery (DPD) and fast-track AEO green-channel release',
        ],
        result: '99.4% first-pass green clearance (<24h)',
      },
    },
    {
      dimension: 'Statutory Incentives & Duty Recovery',
      traditional: {
        title: 'Ignored or Delayed Duty Remissions',
        points: [
          'Exporters left to handle DGFT, RoDTEP, and RoSCTL independently',
          'Frequent SB005/SB006 portal errors blocking government incentive disbursements',
          'Advance Authorisation & EPCG export obligations remain unmonitored',
        ],
        result: 'Millions in unrecovered statutory capital',
      },
      skylink: {
        title: 'End-to-End Statutory Monetization',
        points: [
          'Complete lifecycle management of RoDTEP, Drawback, and GST refunds',
          'Proactive e-BRC reconciliation and portal error resolution',
          'Strategic Duty Deferment via Section 65 MOOWR bonded warehousing',
        ],
        result: '100% duty recovery & enhanced liquidity',
      },
    },
    {
      dimension: 'Cold Chain & Perishable Cargo',
      traditional: {
        title: 'Passive Loggers & Fragmented Drayage',
        points: [
          'Post-arrival USB data loggers only reveal spoilage after delivery',
          'Disjointed transfers between reefer trucks and port plug-in shore-power',
          'No dedicated ADC or plant quarantine emergency escalation desk',
        ],
        result: 'High thermal excursion & cargo loss risk',
      },
      skylink: {
        title: 'Active IoT Telemetry & 24/7 Port Desk',
        points: [
          'Real-time cellular/satellite IoT sensor telemetry for temp, humidity & shock',
          'Guaranteed pre-tripped reefers with immediate loading port shore-power plug-in',
          'Dedicated ADC, MPEDA, and APEDA statutory fast-track clearance liaison',
        ],
        result: 'Zero thermal excursion guarantee',
      },
    },
    {
      dimension: 'Accountability & Communication',
      traditional: {
        title: 'Siloed Point-to-Point Handoffs',
        points: [
          'Exporters must juggle separate forwarders, CHAs, truckers, and insurance agents',
          'Disputed blame between parties whenever disruptions or delays occur',
          'No central audit trail or standardized operational reporting',
        ],
        result: 'Administrative chaos & uncontained liabilities',
      },
      skylink: {
        title: 'Unified Single-Window Governance',
        points: [
          'Single dedicated account director for legal compliance, freight & port ops',
          'End-to-end contractual accountability from factory dispatch to buyer delivery',
          'Transparent digital milestone tracking & executive dashboards',
        ],
        result: 'Total peace of mind & effortless control',
      },
    },
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
          <div className="flex justify-center">
            <ScrollReveal effect="fade-down" delay={0}>
              <Breadcrumbs
                items={[
                  { name: 'Home', item: '/' },
                  { name: 'Why Choose Us', item: '/why-choose-us/skylink-advantage' },
                  { name: 'Traditional vs SkyLink', item: '/why-choose-us/traditional-vs-skylink' },
                ]}
                className="text-neutral-400 mb-6 justify-center"
              />
            </ScrollReveal>
          </div>

          <div className="max-w-4xl mx-auto text-center space-y-5">
            <ScrollReveal effect="fade-up" delay={80}>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-400/10 px-3.5 py-1.5 rounded-full border border-sky-400/30">
                <Scale className="w-3.5 h-3.5" />
                Operational Benchmark
              </span>
            </ScrollReveal>

            <ScrollReveal effect="fade-up" delay={140}>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12] text-balance">
                Traditional Freight Forwarding vs. SkyLink Trade Governance
              </h1>
            </ScrollReveal>

            <ScrollReveal effect="fade-up" delay={200}>
              <p className="text-sm sm:text-base lg:text-lg text-neutral-300 leading-relaxed max-w-2xl mx-auto text-pretty font-normal">
                See the side-by-side comparison of how SkyLink eliminates broker layers, prevents costly customs holds, accelerates duty recovery, and secures 100% cold-chain integrity.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 2. COMPARISON MATRIX SECTION */}
      <section className="py-16 sm:py-24 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeading
            badge="Direct Comparison"
            title="Side-by-Side Operational Matrix"
            subtitle="Understand how integrated single-window governance outperforms multi-tier forwarding."
          />

          <div className="space-y-8 mt-8">
            {comparisonMatrix.map((item, idx) => (
              <div
                key={idx}
                className="rounded-3xl border border-neutral-200 bg-white overflow-hidden shadow-xs hover:shadow-md transition-all"
              >
                {/* Row Header */}
                <div className="bg-[#0A2540] text-white px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-sky-400 bg-white/10 px-2.5 py-1 rounded-md">
                      0{idx + 1}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold tracking-tight text-white">
                      {item.dimension}
                    </h3>
                  </div>
                </div>

                {/* Grid Comparison */}
                <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-neutral-200">
                  {/* Traditional Forwarding Col */}
                  <div className="p-6 sm:p-8 bg-neutral-50/50 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-rose-600 font-bold text-sm mb-3">
                        <XCircle className="w-4 h-4 shrink-0" />
                        <span>Traditional Forwarding &amp; Brokers</span>
                      </div>
                      <h4 className="text-lg font-bold text-neutral-900 mb-3">{item.traditional.title}</h4>
                      <ul className="space-y-2.5">
                        {item.traditional.points.map((pt, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-600">
                            <span className="text-rose-500 font-bold mt-0.5">•</span>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-6 pt-4 border-t border-neutral-200 flex items-center gap-2 text-xs font-bold text-rose-700 bg-rose-50 px-3.5 py-2 rounded-xl border border-rose-200">
                      <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                      <span>Impact: {item.traditional.result}</span>
                    </div>
                  </div>

                  {/* SkyLink Advantage Col */}
                  <div className="p-6 sm:p-8 bg-sky-50/20 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-emerald-600 font-bold text-sm mb-3">
                        <CheckCircle2 className="w-4 h-4 shrink-0" />
                        <span>The SkyLink Integrated Model</span>
                      </div>
                      <h4 className="text-lg font-bold text-[#0A2540] mb-3">{item.skylink.title}</h4>
                      <ul className="space-y-2.5">
                        {item.skylink.points.map((pt, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700 font-medium">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-6 pt-4 border-t border-sky-100 flex items-center gap-2 text-xs font-bold text-[#0284C7] bg-sky-50 px-3.5 py-2 rounded-xl border border-sky-200">
                      <Sparkles className="w-3.5 h-3.5 shrink-0" />
                      <span>SkyLink Gain: {item.skylink.result}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CTA */}
      <section className="py-16 sm:py-20 bg-[#07192D] text-white text-center">
        <div className="mx-auto max-w-3xl px-4 space-y-4">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            Upgrade from Traditional Fragmentation to Unified Governance
          </h2>
          <p className="text-sm sm:text-base text-neutral-300">
            Discover how much time and money your enterprise can recover with SkyLink.
          </p>
          <div className="pt-3 flex flex-wrap justify-center gap-4">
            <Button href="/request-consultation" variant="secondary" size="md">
              Request Side-By-Side Rate Audit
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>
            <Button href="/contact" variant="outline-light" size="md">
              Contact EXIM Desk
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
