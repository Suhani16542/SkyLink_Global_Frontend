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
  Globe2,
  Users,
  Target,
  Eye,
  CheckCircle2,
  Scale,
  Award,
  Ship,
  TrendingDown,
  Clock,
  ArrowRight,
  FileCheck2,
  Building2,
  Lock,
} from 'lucide-react';

export const metadata: Metadata = getPageMetadata('aboutOverview');

export default function AboutOverviewPage() {
  const leadershipValues = [
    {
      title: 'Statutory Integrity',
      desc: 'Zero-compromise compliance with DGFT, CBIC, and international customs frameworks ensuring smooth cross-border throughput.',
      icon: Scale,
    },
    {
      title: 'Direct Carrier Access',
      desc: 'Pre-negotiated volume tier agreements with global ocean carriers and air freight airlines eliminating intermediary markups.',
      icon: Ship,
    },
    {
      title: 'Single-Window Governance',
      desc: 'A unified operational accountability model connecting statutory advisory, documentation, freight, and cargo release.',
      icon: ShieldCheck,
    },
    {
      title: 'Cold-Chain Precision',
      desc: 'GDP-compliant temperature preservation and 24/7 telemetry monitoring for life sciences and perishable consignments.',
      icon: Clock,
    },
  ];

  const milestones = [
    {
      year: 'Core Mission',
      title: 'Bridging Exporters to Global Corridors',
      desc: 'Established with the mandate to eliminate cross-border trade friction, minimize port dwell times, and protect Indian exporters against regulatory liabilities.',
    },
    {
      year: 'Statutory Reach',
      title: 'Full DGFT & ICEGATE Integration',
      desc: 'Architected automated workflows for RoDTEP, RoSCTL, Advance Authorisation, EPCG license lifecycles, and fast-track GST zero-rated refund recovery.',
    },
    {
      year: 'Multimodal Strength',
      title: 'Global Ocean & Air Carrier Alliances',
      desc: 'Built strategic co-loading and tier-1 contracted space allocations across key maritime trade lanes connecting Asia, Europe, the Americas, and the Middle East.',
    },
    {
      year: 'Next-Gen Operations',
      title: '24/7 Telemetry & Green Logistics',
      desc: 'Pioneered multimodal Eco-Route corridors and AEO paperless green-channel protocols to enhance speed and environmental compliance.',
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
          <ScrollReveal effect="fade-down" delay={0}>
            <Breadcrumbs
              items={[
                { name: 'Home', item: '/' },
                { name: 'About Us', item: '/about' },
                { name: 'Overview', item: '/about/overview' },
              ]}
              className="text-neutral-400 mb-6"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <ScrollReveal effect="fade-up" delay={80}>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-400/10 px-3.5 py-1.5 rounded-full border border-sky-400/30">
                  <Building2 className="w-3.5 h-3.5" />
                  Institutional Overview
                </span>
              </ScrollReveal>

              <ScrollReveal effect="fade-up" delay={140}>
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12] text-balance">
                  Institutional Leadership in Cross-Border Trade &amp; Logistics
                </h1>
              </ScrollReveal>

              <ScrollReveal effect="fade-up" delay={200}>
                <p className="text-sm sm:text-base lg:text-lg text-neutral-300 leading-relaxed max-w-2xl text-pretty font-normal">
                  SkyLink Global Services serves as an institutional partner to manufacturers, global exporters, and enterprises. We unify statutory EXIM compliance, direct carrier shipping, and cold-chain logistics into a single dependable window.
                </p>
              </ScrollReveal>

              <ScrollReveal effect="fade-up" delay={260}>
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Button href="/request-consultation" variant="secondary" size="md">
                    Request Corporate Consultation
                    <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Button>
                  <Button href="/contact" variant="outline-light" size="md">
                    Connect With Our Desk
                  </Button>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-5">
              <ScrollReveal effect="fade-left" delay={200}>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/15 bg-neutral-900 group">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1200&auto=format&fit=crop"
                      alt="SkyLink Global Services corporate logistics hub operations"
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07192D]/80 via-transparent to-transparent" />
                  </div>
                  <div className="p-6 bg-[#07192D]/90 border-t border-white/10 backdrop-blur-md">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div className="border-r border-white/10 pr-2">
                        <div className="text-2xl sm:text-3xl font-black text-sky-400">100%</div>
                        <div className="text-[11px] sm:text-xs text-neutral-300 font-medium">Statutory Compliance</div>
                      </div>
                      <div className="pl-2">
                        <div className="text-2xl sm:text-3xl font-black text-white">24/7</div>
                        <div className="text-[11px] sm:text-xs text-neutral-300 font-medium">Trade Operations Desk</div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 2. VISION & MISSION */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Corporate Ideology"
            title="Vision & Mission"
            subtitle="Guiding principles driving dependable, compliant, and cost-effective international trade execution."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <Card variant="bordered" className="p-8 sm:p-10 bg-gradient-to-br from-white to-sky-50/50 border-neutral-200 hover-lift shadow-xs">
              <div className="w-14 h-14 rounded-2xl bg-[#0A2540] text-white flex items-center justify-center mb-6 shadow-sm">
                <Eye className="w-7 h-7 text-sky-400" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">Our Vision</h2>
              <p className="mt-4 text-base text-neutral-600 leading-relaxed">
                To be the world&apos;s most dependable, transparent, and compliant B2B trade facilitation partner—empowering enterprises of all scales to connect markets, eliminate border friction, and unlock sustainable global commerce without regulatory risk.
              </p>
            </Card>

            <Card variant="bordered" className="p-8 sm:p-10 bg-gradient-to-br from-white to-sky-50/50 border-neutral-200 hover-lift shadow-xs">
              <div className="w-14 h-14 rounded-2xl bg-[#0284C7] text-white flex items-center justify-center mb-6 shadow-sm">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">Our Mission</h2>
              <p className="mt-4 text-base text-neutral-600 leading-relaxed">
                To simplify cross-border commerce through zero-defect statutory compliance, aggressive freight rate optimization, direct ocean and air carrier connectivity, and state-of-the-art temperature-controlled logistics infrastructure.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* 3. CORE INSTITUTIONAL VALUES */}
      <section className="py-16 sm:py-24 bg-neutral-50 border-y border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Institutional Pillars"
            title="The 4 Foundational Pillars"
            subtitle="How SkyLink maintains operational consistency across demanding trade corridors."
          />

          <StaggerContainer
            staggerDelay={90}
            baseDelay={100}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
          >
            {leadershipValues.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <Card key={idx} variant="bordered" className="p-6 bg-white hover-lift border-neutral-200 shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-sky-50 text-[#0284C7] flex items-center justify-center mb-5 border border-sky-100">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-neutral-900">{pillar.title}</h3>
                    <p className="mt-2 text-sm text-neutral-600 leading-relaxed">{pillar.desc}</p>
                  </div>
                </Card>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* 4. STRATEGIC JOURNEY & FOUNDATION */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0284C7] bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-200">
                Strategic Foundation
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight leading-tight">
                Engineered for Precision in Cross-Border Trade
              </h2>
              <p className="text-base text-neutral-600 leading-relaxed">
                Cross-border supply chains require more than transport; they require deep regulatory mastery, statutory risk shielding, and swift terminal execution.
              </p>
              <div className="space-y-3 pt-2">
                {[
                  'DGFT policy navigation & duty remission monetization',
                  'Pre-arrival customs filing & faceless assessment compliance',
                  'Direct ocean shipping line & airline space allocations',
                  'Pharma GDP & perishable cold chain integrity',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm text-neutral-800 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              {milestones.map((milestone, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-neutral-200 p-6 bg-neutral-50 hover:bg-white hover:shadow-md transition-all flex flex-col sm:flex-row gap-5 items-start"
                >
                  <span className="rounded-xl bg-[#0A2540] text-sky-300 text-xs font-bold px-3 py-1.5 shrink-0">
                    {milestone.year}
                  </span>
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-neutral-900">{milestone.title}</h3>
                    <p className="text-sm text-neutral-600 leading-relaxed">{milestone.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA STRIP */}
      <section className="py-16 sm:py-20 bg-[#07192D] text-white text-center border-t border-white/10">
        <div className="mx-auto max-w-4xl px-4 space-y-5">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-400/10 px-3.5 py-1.5 rounded-full border border-sky-400/30">
            Partner With SkyLink
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
            Ready to Align Your Global Supply Chain With Proven Leadership?
          </h2>
          <p className="text-sm sm:text-base text-neutral-300 max-w-2xl mx-auto">
            Schedule a comprehensive trade evaluation with our senior EXIM advisors and logistics specialists.
          </p>
          <div className="pt-3 flex flex-wrap justify-center gap-4">
            <Button href="/request-consultation" variant="secondary" size="md">
              Start Free Trade Evaluation
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>
            <Button href="/contact" variant="outline-light" size="md">
              Speak to Trade Counsel
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
