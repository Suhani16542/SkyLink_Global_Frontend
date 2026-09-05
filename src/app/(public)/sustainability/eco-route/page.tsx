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
import { StaggerContainer } from '@/components/animation/StaggerContainer';
import {
  Leaf,
  Globe2,
  Ship,
  Train,
  Truck,
  TrendingDown,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  BarChart3,
  Trees,
  Compass,
} from 'lucide-react';

export const metadata: Metadata = constructMetadata({
  title: 'Eco-Route Multimodal Green Logistics | SkyLink Global Services',
  description:
    'Optimize supply chain carbon efficiency through multimodal coastal shipping, electrified rail freight corridors, Scope 3 emissions advisory, and eco-route logistics.',
  path: '/sustainability/eco-route',
});

export default function EcoRoutePage() {
  const multimodalSolutions = [
    {
      title: 'Electrified Rail Freight & ICD Corridors',
      icon: Train,
      metric: '65% CO2 Reduction',
      desc: 'Shifting heavy inland container haulage from long-distance highway diesel trucking to electrified rail container trains (CONCOR/Private CTOs) directly connecting Inland Container Depots to gateway seaports.',
    },
    {
      title: 'Coastal Shipping & Short-Sea Feeder',
      icon: Ship,
      metric: '50% Lower Emission Intensity',
      desc: 'Utilizing domestic coastal maritime routes between western and eastern peninsular ports for bulk and domestic cargo, bypassing congested highway transit corridors.',
    },
    {
      title: 'Multimodal Consolidation Hubs',
      icon: Compass,
      metric: '30% Fuel Optimization',
      desc: 'Consolidating LCL shipments at strategically located bonded ICDs to maximize full container load (FCL) density and minimize deadhead vehicular trips.',
    },
    {
      title: 'Scope 3 Supply Chain Carbon Reporting',
      icon: BarChart3,
      metric: 'ISO 14064 Aligned',
      desc: 'Providing exporters and multinational buyers with accurate carbon footprint accounting per ton-kilometer across every ocean, air, and overland leg of the journey.',
    },
  ];

  return (
    <div className="bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#07192D] via-[#0A2540] to-[#07192D] text-white py-16 sm:py-24 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-24 right-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-sky-600/10 rounded-full blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal effect="fade-down" delay={0}>
            <Breadcrumbs
              items={[
                { name: 'Home', item: '/' },
                { name: 'Sustainability', item: '/sustainability/eco-route' },
                { name: 'Eco-Route', item: '/sustainability/eco-route' },
              ]}
              className="text-neutral-400 mb-6"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <ScrollReveal effect="fade-up" delay={80}>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-400/10 px-3.5 py-1.5 rounded-full border border-emerald-400/30">
                  <Leaf className="w-3.5 h-3.5" />
                  Sustainable Cross-Border Logistics
                </span>
              </ScrollReveal>

              <ScrollReveal effect="fade-up" delay={140}>
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12] text-balance">
                  Eco-Route: Low-Carbon Multimodal Trade Corridors
                </h1>
              </ScrollReveal>

              <ScrollReveal effect="fade-up" delay={200}>
                <p className="text-sm sm:text-base lg:text-lg text-neutral-300 leading-relaxed max-w-2xl text-pretty font-normal">
                  Decarbonize your global supply chain without sacrificing transit speed. SkyLink designs carbon-efficient multimodal routes leveraging coastal shipping, electrified rail, and intelligent cargo consolidation.
                </p>
              </ScrollReveal>

              <ScrollReveal effect="fade-up" delay={260}>
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Button href="/request-consultation" variant="secondary" size="md">
                    Evaluate Eco-Route Feasibility
                    <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Button>
                  <Button href="/sustainability/aeo-green" variant="outline-light" size="md">
                    Explore AEO Green Protocols
                  </Button>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-5">
              <ScrollReveal effect="fade-left" delay={200}>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/15 bg-neutral-900 group">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop"
                      alt="Green multimodal rail and sustainable freight transportation"
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07192D]/80 via-transparent to-transparent" />
                  </div>
                  <div className="p-5 bg-[#07192D]/90 border-t border-white/10">
                    <div className="flex items-center justify-between text-xs text-neutral-300">
                      <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                        <Leaf className="w-4 h-4 text-emerald-400" />
                        Multimodal Emission Reduction
                      </span>
                      <span className="font-mono text-white">Scope 3 Compliant</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE 4 MULTIMODAL INITIATIVES */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Green Framework"
            title="How Eco-Route Optimizes Carbon & Cost"
            subtitle="Strategic route shifts that reduce greenhouse emissions while protecting cargo transit integrity."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {multimodalSolutions.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <Card
                  key={idx}
                  variant="bordered"
                  className="p-8 bg-gradient-to-br from-white to-emerald-50/30 border-neutral-200 hover-lift shadow-xs flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-[#0A2540] text-emerald-400 flex items-center justify-center shadow-sm">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                        {item.metric}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-neutral-900">{item.title}</h3>
                    <p className="text-sm text-neutral-600 leading-relaxed">{item.desc}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. ESG REPORTING & VALUE */}
      <section className="py-16 sm:py-24 bg-neutral-50 border-y border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200">
                Corporate ESG Alignment
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight">
                Empowering Exporters for Global ESG Audits
              </h2>
              <p className="text-base text-neutral-600 leading-relaxed">
                International buyers across the European Union and North America increasingly evaluate supplier carbon footprints. SkyLink gives your business substantiated green logistics metrics.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  'Verified ton-kilometer carbon data for corporate sustainability disclosures',
                  'Prioritized allocation on eco-class vessels and modern container fleets',
                  'Optimized inland routing reducing avoidable empty container hauling',
                  'Paperless customs documentation saving thousands of physical paper records',
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
                <div className="text-3xl sm:text-4xl font-black text-emerald-400">Up to 65%</div>
                <div className="mt-2 text-xs sm:text-sm text-neutral-300">
                  Lower CO2 intensity vs. long-haul road freight
                </div>
              </div>
              <div className="rounded-2xl bg-emerald-700 text-white p-6 shadow-xs">
                <div className="text-3xl sm:text-4xl font-black text-white">100%</div>
                <div className="mt-2 text-xs sm:text-sm text-emerald-100">
                  Digital paperless documentation workflow
                </div>
              </div>
              <div className="rounded-2xl bg-white border border-neutral-200 text-neutral-900 p-6 shadow-xs">
                <div className="text-3xl sm:text-4xl font-black text-[#0A2540]">ISO 14064</div>
                <div className="mt-2 text-xs sm:text-sm text-neutral-600">
                  Aligned emissions calculation methodology
                </div>
              </div>
              <div className="rounded-2xl bg-white border border-neutral-200 text-neutral-900 p-6 shadow-xs">
                <div className="text-3xl sm:text-4xl font-black text-emerald-700">Zero</div>
                <div className="mt-2 text-xs sm:text-sm text-neutral-600">
                  Compromise on shipment delivery deadlines
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
            Transform Your Trade Lanes with Eco-Route
          </h2>
          <p className="text-sm sm:text-base text-neutral-300">
            Let our multimodal route engineers model low-carbon alternatives for your key domestic and global corridors.
          </p>
          <div className="pt-3 flex flex-wrap justify-center gap-4">
            <Button href="/request-consultation" variant="secondary" size="md">
              Request Green Corridor Proposal
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>
            <Button href="/sustainability/aeo-green" variant="outline-light" size="md">
              View AEO Green Protocols
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
