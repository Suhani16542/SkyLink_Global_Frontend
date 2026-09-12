'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { ScrollReveal } from '@/components/animation/ScrollReveal';
import { StaggerContainer } from '@/components/animation/StaggerContainer';
import {
  ShieldCheck,
  Globe2,
  Ship,
  Users,
  Target,
  Eye,
  CheckCircle2,
  Scale,
  ArrowRight,
  Clock,
  FileText,
  Layers,
  Compass,
  Sparkles,
  TrendingUp,
  Workflow,
  FileCheck2,
  Network,
  Headphones,
  SearchCheck,
  Building2,
  PhoneCall,
  Activity,
} from 'lucide-react';

export function AboutView() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const coreValues = [
    {
      number: '01',
      title: 'Compliance First',
      desc: 'Every transaction is guided by statutory accuracy, documentation discipline and responsible trade practices.',
      icon: Scale,
      tag: 'Statutory Core',
      gradient: 'from-sky-500/10 to-blue-500/5',
    },
    {
      number: '02',
      title: 'Global Connectivity',
      desc: 'We connect businesses with carriers, logistics partners and trade networks across international markets.',
      icon: Globe2,
      tag: 'Tier-1 Network',
      gradient: 'from-blue-500/10 to-indigo-500/5',
    },
    {
      number: '03',
      title: 'Transparency',
      desc: 'Clear communication, traceable processes and practical guidance at every stage of the trade journey.',
      icon: SearchCheck,
      tag: 'Audit Ready',
      gradient: 'from-cyan-500/10 to-sky-500/5',
    },
    {
      number: '04',
      title: 'Operational Excellence',
      desc: 'We focus on reliable execution, timely coordination and solutions designed around real business requirements.',
      icon: TrendingUp,
      tag: 'Zero Delay',
      gradient: 'from-emerald-500/10 to-teal-500/5',
    },
    {
      number: '05',
      title: 'Long-Term Partnerships',
      desc: 'Our approach is built around relationships that create sustainable value beyond a single shipment or transaction.',
      icon: Users,
      tag: 'Single SLA',
      gradient: 'from-amber-500/10 to-orange-500/5',
    },
  ];

  const expertiseItems = [
    {
      title: 'EXIM Consultancy',
      subtitle: 'Strategic Trade Advisory',
      desc: 'Expert guidance on statutory schemes (RoDTEP, RoSCTL, Advance Authorisation, EPCG), foreign trade policies, and customs duty exemptions.',
      icon: Compass,
      tags: ['Policy Advisory', 'Duty Drawback', 'Incentive Recovery'],
    },
    {
      title: 'Import & Export Documentation',
      subtitle: 'Zero-Defect Processing',
      desc: 'End-to-end documentation governance: commercial invoices, packing lists, bill of lading, certificates of origin, and statutory licenses.',
      icon: FileText,
      tags: ['COO Verification', 'Shipping Bills', 'Bank L/C Compliance'],
    },
    {
      title: 'Trade Compliance',
      subtitle: 'Statutory Governance',
      desc: 'Pre-shipment verification, HS code classification validation, and automated compliance cross-checks against global trade regulations.',
      icon: Scale,
      tags: ['Statutory Audits', 'HS Code Advisory', 'Anti-Dumping Scrutiny'],
    },
    {
      title: 'Freight & Logistics Coordination',
      subtitle: 'Multimodal Execution',
      desc: 'Volume-tier direct carrier space procurement across major ocean container lines and global air cargo airlines for FCL, LCL, and charters.',
      icon: Ship,
      tags: ['Ocean FCL / LCL', 'Air Cargo Charters', 'Rate Optimization'],
    },
    {
      title: 'Customs & Regulatory Support',
      subtitle: 'Green-Channel Clearance',
      desc: 'Fast-track ICEGATE submission, port liaison, ADC port clearances for pharmaceuticals, APEDA/MPEDA certifications, and Customs broker coordination.',
      icon: ShieldCheck,
      tags: ['ADC & FSSAI Ports', 'ICEGATE Speed filing', 'AEO Green Channel'],
    },
    {
      title: 'Supply Chain Solutions',
      subtitle: 'Integrated Infrastructure',
      desc: 'Bonded warehousing, temperature-controlled cold chain logistics (-40°C to +25°C), GDP pharma handling, and last-mile distribution network.',
      icon: Layers,
      tags: ['Bonded Storage', 'GDP Cold Chain', 'Real-Time Telemetry'],
    },
  ];

  const workflowSteps = [
    {
      step: '01',
      title: 'Understand',
      desc: 'Analyzing your trade corridors, cargo parameters, statutory mandates, and target turnaround schedules.',
      icon: SearchCheck,
      badge: 'Analysis & Scope',
    },
    {
      step: '02',
      title: 'Plan',
      desc: 'Architecting optimal multimodal routing, tariff classifications, and carrier contract rate allocations.',
      icon: Workflow,
      badge: 'Route Engineering',
    },
    {
      step: '03',
      title: 'Comply',
      desc: 'Structuring flawless documentation, statutory certifications, customs filings, and export incentive claims.',
      icon: FileCheck2,
      badge: 'Zero-Defect Filing',
    },
    {
      step: '04',
      title: 'Coordinate',
      desc: 'Executing precision port handling, container loading, customs green-channel liaison, and carrier handover.',
      icon: Network,
      badge: 'Terminal Liaison',
    },
    {
      step: '05',
      title: 'Deliver',
      desc: 'Active cargo telemetry, overseas port arrival management, customs clearance, and seamless final delivery.',
      icon: CheckCircle2,
      badge: 'Verified Handover',
    },
  ];

  const whyChooseBenefits = [
    {
      title: 'Regulatory Clarity',
      desc: 'Demystifying intricate DGFT and customs circulars with actionable, risk-free compliance advice tailored to your commercial goods.',
      icon: Scale,
    },
    {
      title: 'Reliable Logistics Coordination',
      desc: 'Direct tier-1 partnerships with leading global shipping lines and air freighters guaranteeing space allocation even during peak seasons.',
      icon: Ship,
    },
    {
      title: 'Faster Documentation Workflows',
      desc: 'Automated documentation workflows and pre-filing protocols cutting port dwell times and eliminating documentation rejection risks.',
      icon: Clock,
    },
    {
      title: 'Global Trade Connectivity',
      desc: 'Active operational corridors linking India with key commercial hubs across Europe, the Americas, Middle East, Southeast Asia, and Africa.',
      icon: Globe2,
    },
    {
      title: 'Responsive Expert Support',
      desc: 'Dedicated single-window account managers available 24/7 to resolve on-ground port exceptions and carrier contingencies.',
      icon: Headphones,
    },
    {
      title: 'End-to-End Visibility',
      desc: 'Real-time consignment milestones and transparent billing with zero hidden port surcharges or demurrage liabilities.',
      icon: Activity,
    },
  ];

  // Tripled for seamless smooth infinite loop
  const marqueeCards = [...expertiseItems, ...expertiseItems, ...expertiseItems];

  return (
    <div className="bg-white text-neutral-900 selection:bg-sky-500 selection:text-white overflow-hidden">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION (Compact Height & Clean Spacing) */}
      {/* ========================================================================= */}
      <section className="relative bg-gradient-to-b from-[#07192D] via-[#0A2540] to-[#07192D] text-white pt-5 pb-8 sm:pt-7 sm:pb-10 lg:pt-8 lg:pb-12 border-b border-white/10 overflow-hidden">
        {/* Animated Background Ambience */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-24 right-1/4 w-[550px] h-[550px] bg-sky-500/15 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-0 left-10 w-[450px] h-[450px] bg-blue-600/15 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal effect="fade-down" delay={0}>
            <Breadcrumbs
              items={[
                { name: 'Home', item: '/' },
                { name: 'About Us', item: '/about' },
              ]}
              className="text-neutral-400 mb-3 sm:mb-4"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            <div className="lg:col-span-7 space-y-4 sm:space-y-4.5">
              <ScrollReveal effect="fade-up" delay={60}>
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-400/10 px-3.5 py-1.5 rounded-full border border-sky-400/30 shadow-xs">
                  <Building2 className="w-3.5 h-3.5" />
                  Institutional Overview
                </span>
              </ScrollReveal>

              <ScrollReveal effect="fade-up" delay={120}>
                <h1 className="text-3xl sm:text-4xl lg:text-[42px] 2xl:text-[44px] font-black tracking-tight text-white leading-[1.14]">
                  Institutional Leadership in Cross-Border Trade &amp; Logistics
                </h1>
              </ScrollReveal>

              <ScrollReveal effect="fade-up" delay={180}>
                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-2xl font-normal">
                  SkyLink Global Services serves as an institutional partner to manufacturers, global exporters, and enterprises. We unify statutory EXIM compliance, direct carrier shipping, and cold-chain logistics into a single dependable window.
                </p>
              </ScrollReveal>

              <ScrollReveal effect="fade-up" delay={240}>
                <div className="flex flex-wrap items-center gap-3.5 pt-1">
                  <Button
                    href="/request-consultation"
                    variant="secondary"
                    size="md"
                    className="font-semibold text-sm px-5 py-2.5 shadow-lg shadow-sky-900/30 hover-lift active:scale-95"
                    rightIcon={<ArrowRight className="w-4 h-4" />}
                  >
                    Request Corporate Consultation
                  </Button>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-300 hover:text-white transition-colors px-4 py-2.5 rounded-xl hover:bg-white/10 border border-white/10 hover-lift"
                  >
                    Connect With Our Desk &rarr;
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-5">
              <ScrollReveal effect="fade-left" delay={200}>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/15 bg-neutral-900 group hover-lift transition-all duration-500">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1200&auto=format&fit=crop"
                      alt="SkyLink Global Services corporate logistics hub operations"
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07192D]/90 via-[#07192D]/20 to-transparent" />
                  </div>
                  <div className="p-6 bg-[#07192D]/95 border-t border-white/10 backdrop-blur-md">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div className="border-r border-white/10 pr-2">
                        <div className="text-2xl sm:text-3xl font-black text-sky-400 group-hover:scale-105 transition-transform">100%</div>
                        <div className="text-[11px] sm:text-xs text-neutral-300 font-medium mt-0.5">Statutory Compliance</div>
                      </div>
                      <div className="pl-2">
                        <div className="text-2xl sm:text-3xl font-black text-white group-hover:scale-105 transition-transform flex items-center justify-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping inline-block" />
                          24/7
                        </div>
                        <div className="text-[11px] sm:text-xs text-neutral-300 font-medium mt-0.5">Trade Operations Desk</div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. VISION & MISSION */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white border-b border-neutral-200 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal effect="fade-up" delay={0}>
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-2.5">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0284C7] bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-200 shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#0284C7]" />
                Guiding Directives
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A2540] tracking-tight">
                Vision &amp; Mission
              </h2>
              <p className="text-sm sm:text-base text-neutral-600 font-normal">
                Guiding principles driving dependable, compliant, and cost-effective international trade execution.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
            {/* Vision Card */}
            <ScrollReveal effect="fade-right" delay={100} className="flex">
              <div className="w-full rounded-3xl bg-gradient-to-br from-white via-sky-50/40 to-blue-50/50 p-7 sm:p-9 shadow-md hover:shadow-2xl border border-sky-200/90 hover:border-sky-400 hover-lift sheen-card transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0A2540] to-sky-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[#0A2540] text-sky-400 flex items-center justify-center shadow-md group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                      <Eye className="w-6 h-6 text-sky-400" />
                    </div>
                    <span className="text-[11px] font-mono font-bold tracking-wider text-sky-700 uppercase px-2.5 py-1 rounded-full bg-sky-100/80 border border-sky-200">
                      Strategic Target
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <div className="text-xs font-mono font-bold text-[#0284C7] uppercase tracking-wider">
                      Our Vision
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#0A2540] group-hover:text-[#0284C7] transition-colors leading-snug">
                      To become a trusted global partner for businesses seeking simpler, safer and more efficient international trade.
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                    To be the world&apos;s most dependable, transparent, and compliant B2B trade facilitation partner—empowering enterprises of all scales to connect markets, eliminate border friction, and unlock sustainable global commerce without regulatory risk.
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-neutral-200/80 flex items-center justify-between text-xs text-neutral-600">
                  <span className="flex items-center gap-1.5 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 group-hover:scale-110 transition-transform" />
                    Global Institutional Reach
                  </span>
                  <span className="text-[#0284C7] font-semibold">Long-Term Horizon</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Mission Card */}
            <ScrollReveal effect="fade-left" delay={150} className="flex">
              <div className="w-full rounded-3xl bg-gradient-to-br from-white via-sky-50/40 to-blue-50/50 p-7 sm:p-9 shadow-md hover:shadow-2xl border border-sky-200/90 hover:border-sky-400 hover-lift sheen-card transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-500 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[#0284C7] text-white flex items-center justify-center shadow-md group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-[11px] font-mono font-bold tracking-wider text-sky-700 uppercase px-2.5 py-1 rounded-full bg-sky-100/80 border border-sky-200">
                      Action Mandate
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <div className="text-xs font-mono font-bold text-[#0284C7] uppercase tracking-wider">
                      Our Mission
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#0A2540] group-hover:text-[#0284C7] transition-colors leading-snug">
                      To combine regulatory expertise, logistics connectivity and technology-driven processes to help businesses move goods across borders with confidence and consistency.
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                    To simplify cross-border commerce through zero-defect statutory compliance, aggressive freight rate optimization, direct ocean and air carrier connectivity, and state-of-the-art temperature-controlled logistics infrastructure.
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-neutral-200/80 flex items-center justify-between text-xs text-neutral-600">
                  <span className="flex items-center gap-1.5 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 group-hover:scale-110 transition-transform" />
                    Zero-Defect Statutory Execution
                  </span>
                  <span className="text-[#0284C7] font-semibold">Active Commitment</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. WHAT WE STAND FOR ("What Drives Us") */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 bg-neutral-50/80 border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal effect="fade-up" delay={0}>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div className="max-w-2xl space-y-2.5">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0284C7] bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
                  Foundational Principles
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A2540] tracking-tight">
                  What Drives Us
                </h2>
                <p className="text-sm sm:text-base text-neutral-600">
                  The five non-negotiable standards behind every shipment, consultation, and cross-border interaction.
                </p>
              </div>
              <div className="shrink-0 text-xs font-mono font-bold text-neutral-500 bg-white px-3 py-1.5 rounded-lg border border-neutral-200 shadow-xs">
                5 Operating Pillars
              </div>
            </div>
          </ScrollReveal>

          {/* 5 Modern Cards Grid with Stagger Animation */}
          <StaggerContainer staggerDelay={80} baseDelay={100} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.slice(0, 3).map((item, idx) => {
              const IconComp = item.icon;
              return (
                <Card
                  key={idx}
                  variant="bordered"
                  className="p-7 bg-white border-neutral-200 hover:border-sky-400 hover:shadow-xl hover-lift sheen-card transition-all duration-300 group relative overflow-hidden flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-sky-50 text-[#0284C7] group-hover:bg-[#0284C7] group-hover:text-white transition-all flex items-center justify-center border border-sky-100 shadow-xs group-hover:scale-110">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-2xl font-black font-mono text-neutral-200 group-hover:text-sky-300 transition-colors">
                        {item.number}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-neutral-900 group-hover:text-[#0284C7] transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-2.5 text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500">
                    <span className="font-mono font-semibold text-sky-700">{item.tag}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#0284C7] group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </Card>
              );
            })}

            {/* Bottom 2 items */}
            {coreValues.slice(3, 5).map((item, idx) => {
              const IconComp = item.icon;
              return (
                <Card
                  key={idx + 3}
                  variant="bordered"
                  className={`p-7 bg-white border-neutral-200 hover:border-sky-400 hover:shadow-xl hover-lift sheen-card transition-all duration-300 group relative overflow-hidden flex flex-col justify-between ${
                    idx === 0 ? 'lg:col-span-1 md:col-span-2 lg:col-span-1' : 'lg:col-span-2 md:col-span-2'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-sky-50 text-[#0284C7] group-hover:bg-[#0284C7] group-hover:text-white transition-all flex items-center justify-center border border-sky-100 shadow-xs group-hover:scale-110">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-2xl font-black font-mono text-neutral-200 group-hover:text-sky-300 transition-colors">
                        {item.number}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-neutral-900 group-hover:text-[#0284C7] transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-2.5 text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500">
                    <span className="font-mono font-semibold text-sky-700">{item.tag}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#0284C7] group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </Card>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. OUR EXPERTISE (Smooth Continuous Horizontal Animated Marquee) */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white border-b border-neutral-200 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-8">
          <ScrollReveal effect="fade-up" delay={0}>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="max-w-3xl space-y-2.5">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0284C7] bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
                  Specialized Capabilities
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A2540] tracking-tight">
                  Our Expertise Across Global Trade
                </h2>
                <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                  Comprehensive EXIM advisory and multimodal logistics execution built to eliminate cross-border bottlenecks.
                </p>
              </div>

              <div className="shrink-0 flex items-center gap-2 text-xs font-semibold text-sky-700 bg-sky-50/90 px-3.5 py-1.5 rounded-full border border-sky-200 shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#0284C7] animate-spin-slow" />
                <span>Continuous Interactive Stream &bull; Hover to Pause</span>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Horizontal Marquee Track with Left/Right Subtle Gradient Masks */}
        <div className="relative w-full overflow-hidden py-4">
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

          {/* Marquee Row */}
          <div className="animate-marquee-rtl flex gap-6 hover:[animation-play-state:paused] cursor-pointer">
            {marqueeCards.map((item, idx) => {
              const IconComp = item.icon;
              const displayIndex = (idx % expertiseItems.length) + 1;
              return (
                <div
                  key={idx}
                  className="w-[320px] sm:w-[360px] shrink-0 rounded-2xl bg-white border border-neutral-200/90 p-6 sm:p-7 shadow-sm hover:shadow-2xl hover:border-sky-400 hover-lift sheen-card transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-50 to-blue-50 text-[#0284C7] flex items-center justify-center border border-sky-100 group-hover:scale-110 group-hover:bg-[#0284C7] group-hover:text-white transition-all shadow-xs">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-mono font-semibold text-neutral-400 group-hover:text-sky-600 transition-colors">
                        0{displayIndex}
                      </span>
                    </div>

                    <div>
                      <div className="text-[11px] font-mono font-bold text-[#0284C7] uppercase tracking-wider">
                        {item.subtitle}
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-neutral-900 mt-1 group-hover:text-[#0284C7] transition-colors">
                        {item.title}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-neutral-100 flex flex-wrap gap-1.5">
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-medium bg-neutral-50 text-neutral-600 px-2 py-0.5 rounded-md border border-neutral-200/70 group-hover:border-sky-200 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. HOW WE WORK ("From Trade Planning to Final Delivery") */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#07192D] text-white border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-sky-500/10 rounded-full blur-3xl animate-pulse-glow" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal effect="fade-up" delay={0}>
            <div className="text-center max-w-3xl mx-auto mb-14 space-y-2.5">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400 bg-sky-400/10 px-3 py-1 rounded-full border border-sky-400/30">
                Operational Lifecycle
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                From Trade Planning to Final Delivery
              </h2>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal max-w-xl mx-auto">
                A structured 5-stage trade execution framework ensuring statutory accuracy and uninterrupted cargo movement.
              </p>
            </div>
          </ScrollReveal>

          {/* 5 Steps Horizontal Process with Animated Glow */}
          <StaggerContainer staggerDelay={70} baseDelay={100} className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 relative">
            {workflowSteps.map((ws, idx) => {
              const IconComp = ws.icon;
              return (
                <div
                  key={idx}
                  onMouseEnter={() => setActiveStep(idx)}
                  className={`rounded-2xl border p-5 sm:p-6 backdrop-blur-xs transition-all duration-300 flex flex-col justify-between group hover-lift sheen-card cursor-pointer ${
                    activeStep === idx
                      ? 'bg-white/15 border-sky-400 shadow-xl shadow-sky-500/10'
                      : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-sky-400/50'
                  }`}
                >
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between">
                      <div className="w-11 h-11 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center border border-sky-400/30 group-hover:scale-110 group-hover:bg-[#0284C7] group-hover:text-white transition-all shadow-xs">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="text-lg font-mono font-black text-sky-400/60 group-hover:text-sky-300 transition-colors">
                        {ws.step}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-sky-300 transition-colors">
                        {ws.title}
                      </h3>
                      <p className="text-xs text-neutral-300 mt-1.5 leading-relaxed font-normal">
                        {ws.desc}
                      </p>
                    </div>
                  </div>

                  <div className="pt-3.5 mt-3.5 border-t border-white/10 flex items-center justify-between text-[10.5px] text-sky-400 font-mono font-semibold">
                    <span>{ws.badge}</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. WHY CLIENTS CHOOSE SKYLINK */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Header */}
            <ScrollReveal effect="fade-right" delay={50} className="lg:col-span-5 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0284C7] bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
                The Skylink Advantage
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A2540] tracking-tight leading-tight">
                One Partner. Multiple Trade &amp; Logistics Needs.
              </h2>
              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
                Instead of coordinating across separate customs brokers, freight forwarders, documentation clerks, and statutory lawyers, SkyLink provides unified accountability across your entire EXIM lifecycle.
              </p>

              <div className="p-4 sm:p-5 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-2.5 hover-lift transition-all">
                <div className="flex items-center gap-2 text-sm font-bold text-neutral-900">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Single-Window Trade Governance</span>
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                  Our unified delivery model eliminates information asymmetry, accelerates duty incentive recovery, and guarantees cargo transit predictability.
                </p>
              </div>

              <div className="pt-2">
                <Button
                  href="/why-choose-us/skylink-advantage"
                  variant="secondary"
                  size="md"
                  className="font-semibold text-sm hover-lift active:scale-95"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  View Operational Benchmark
                </Button>
              </div>
            </ScrollReveal>

            {/* Right 6 Benefits */}
            <div className="lg:col-span-7">
              <StaggerContainer staggerDelay={70} baseDelay={100} className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                {whyChooseBenefits.map((benefit, idx) => {
                  const IconComp = benefit.icon;
                  return (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-white border border-neutral-200 hover:border-sky-400 hover:shadow-xl hover-lift sheen-card transition-all duration-300 group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0284C7] flex items-center justify-center mb-3 group-hover:bg-[#0284C7] group-hover:text-white transition-all border border-sky-100 shadow-xs group-hover:scale-110">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <h3 className="text-sm sm:text-base font-bold text-neutral-900 group-hover:text-[#0284C7] transition-colors">
                        {benefit.title}
                      </h3>
                      <p className="mt-1.5 text-xs text-neutral-600 leading-relaxed font-normal">
                        {benefit.desc}
                      </p>
                    </div>
                  );
                })}
              </StaggerContainer>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. FINAL HIGH-IMPACT CTA */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-24 bg-[#07192D] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-sky-500/15 rounded-full blur-3xl animate-pulse-glow" />
        </div>

        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <ScrollReveal effect="fade-up" delay={0}>
            <span className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-sky-300 bg-sky-500/10 px-3.5 py-1.5 rounded-full border border-sky-400/30">
              <Sparkles className="w-3.5 h-3.5 text-sky-400" />
              <span>Next-Generation EXIM Partnership</span>
            </span>
          </ScrollReveal>

          <ScrollReveal effect="fade-up" delay={80}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
              Ready to Simplify Your Global Trade Journey?
            </h2>
          </ScrollReveal>

          <ScrollReveal effect="fade-up" delay={140}>
            <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed font-normal">
              Talk to our EXIM and logistics specialists to build a more compliant, connected and efficient trade operation.
            </p>
          </ScrollReveal>

          <ScrollReveal effect="fade-up" delay={200}>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Button
                href="/request-consultation"
                variant="secondary"
                size="lg"
                className="font-bold text-sm sm:text-base px-7 py-3.5 shadow-xl shadow-sky-900/40 hover-lift active:scale-95"
                rightIcon={<ArrowRight className="w-4.5 h-4.5" />}
              >
                Request a Consultation
              </Button>
              <Button
                href="tel:+919812471115"
                variant="outline-light"
                size="lg"
                className="font-semibold text-sm sm:text-base px-7 py-3.5 hover-lift active:scale-95"
                leftIcon={<PhoneCall className="w-4.5 h-4.5 text-sky-400" />}
              >
                Talk to an Expert
              </Button>
            </div>
          </ScrollReveal>

          <ScrollReveal effect="fade-up" delay={260}>
            <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-neutral-400">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Free Initial Trade Evaluation
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                DGFT &amp; Customs Expert Advisory
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Direct Tier-1 Carrier Rates
              </span>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
