import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { ScrollReveal } from '@/components/animation/ScrollReveal';
import { StaggerContainer } from '@/components/animation/StaggerContainer';
import {
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  Clock,
  Sparkles,
  Award,
  FileCheck2,
  ChevronRight,
} from 'lucide-react';

export interface ServiceSectionItem {
  number: string;
  title: string;
  icon: React.ElementType;
  points: string[];
}

export interface ServiceDetailViewProps {
  badge: string;
  title: string;
  intro: string;
  bgImage: string;
  sections: ServiceSectionItem[];
  conclusion: string;
  highlights?: Array<{ label: string; value: string }>;
  relatedServices?: Array<{ title: string; href: string; description: string }>;
  slug: string;
}

export function ServiceDetailView({
  badge,
  title,
  intro,
  bgImage,
  sections,
  conclusion,
  highlights = [
    { label: 'Regulatory Framework', value: 'Statutory Compliant' },
    { label: 'Turnaround Target', value: 'Expedited Processing' },
    { label: 'Audit Trail', value: '100% Audit-Ready' },
    { label: 'Support Model', value: 'Dedicated EXIM Specialist' },
  ],
  relatedServices = [
    {
      title: 'Logistics & Shipping',
      href: '/services/logistics-shipping',
      description: 'Freight negotiation, route optimization & consolidations',
    },
    {
      title: 'Warehousing Solutions',
      href: '/services/warehousing-solutions',
      description: 'Bonded storage, Section 65 MOOWR & WMS inventory management',
    },
    {
      title: 'Tax & GST Compliance',
      href: '/services/tax-gst-compliance',
      description: 'GST refunds, LUT filing & ITC reconciliation',
    },
    {
      title: 'Documentation & Liaison',
      href: '/services/documentation-liaison',
      description: 'Custom invoices, shipping bills, CoO & ICEGATE liaison',
    },
    {
      title: 'Risk Management',
      href: '/services/risk-management',
      description: 'Marine cargo insurance, contingency planning & claims support',
    },
  ],
  slug,
}: ServiceDetailViewProps) {
  // Filter out current service from related services
  const currentRelated = relatedServices
    .filter((item) => !item.href.includes(slug))
    .slice(0, 4);

  return (
    <div className="bg-white min-h-screen">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION (2-Column Side-by-Side: Clean Gradient, Strict Line Alignment) */}
      {/* ========================================================================= */}
      <section className="relative bg-gradient-to-b from-[#07192D] via-[#0A2540] to-[#07192D] text-white pt-6 pb-10 sm:pt-8 sm:pb-14 lg:pt-10 lg:pb-16 overflow-hidden border-b border-white/10">
        {/* Soft Ambient Radial Glows (No Grid Lines) */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-24 right-1/4 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal effect="fade-down" delay={0}>
            <Breadcrumbs
              items={[
                { name: 'Home', item: '/' },
                { name: 'Our Services', item: '/services' },
                { name: title.split(':')[0], item: `/services/${slug}` },
              ]}
              className="text-neutral-400 mb-3 sm:mb-4 text-xs"
            />
          </ScrollReveal>

          {/* 2-Column Responsive Layout: Expanded Text Left, Proportional Image Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Prominent & Spacious Content */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-3.5 sm:space-y-4">
              <ScrollReveal effect="fade-down" delay={50}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/15 border border-sky-400/30 text-sky-300 text-xs sm:text-[12px] font-bold uppercase tracking-wider backdrop-blur-md">
                  <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                  <span>{badge}</span>
                </div>
              </ScrollReveal>

              <ScrollReveal effect="fade-up" delay={100}>
                {title.includes(':') ? (
                  <h1 className="tracking-tight text-white leading-[1.15] text-balance break-words">
                    <span className="text-2xl sm:text-3xl lg:text-[36px] xl:text-[40px] font-black text-white block">
                      {title.split(':')[0].trim()}
                    </span>
                    <span className="text-xs sm:text-sm lg:text-[14.5px] font-semibold text-sky-300 block mt-1 sm:mt-1.5 leading-snug">
                      {title.split(':').slice(1).join(':').trim()}
                    </span>
                  </h1>
                ) : (
                  <h1 className="text-2xl sm:text-3xl lg:text-[36px] xl:text-[40px] font-black tracking-tight text-white leading-[1.15] text-balance break-words">
                    {title}
                  </h1>
                )}
              </ScrollReveal>

              <ScrollReveal effect="fade-up" delay={150}>
                <p className="text-xs sm:text-sm lg:text-[15px] text-neutral-200 leading-relaxed font-normal max-w-2xl">
                  {intro}
                </p>
              </ScrollReveal>

              <ScrollReveal effect="fade-up" delay={200} className="pt-1 flex flex-wrap items-center gap-3">
                <Button
                  href="/request-consultation"
                  variant="secondary"
                  size="lg"
                  className="font-semibold shadow-lg shadow-sky-500/20 px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Request Service Proposal
                </Button>
                <Button
                  href="/contact"
                  variant="outline-light"
                  size="lg"
                  className="font-semibold px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base"
                >
                  Speak with a Consultant
                </Button>
              </ScrollReveal>

              {/* Trust Chips Bar */}
              <ScrollReveal
                effect="fade-up"
                delay={250}
                className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-y-2.5 gap-x-6 text-xs sm:text-[13px] text-neutral-200 font-medium"
              >
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Customs &amp; DGFT Authorized</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <FileCheck2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Zero-Defect Documentation</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Trade Governance</span>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column: Hero Thematic Image Card */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <ScrollReveal effect="fade-left" delay={150} className="w-full">
                <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-neutral-900 group w-full">
                  <Image
                    src={bgImage}
                    alt={`${title} visual`}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07192D]/90 via-[#07192D]/20 to-transparent" />

                  {/* Floating Glassmorphic Badge at bottom of Image */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 sm:bottom-4 sm:left-4 sm:right-4 glass-panel-dark p-3 sm:p-3.5 rounded-xl border border-white/20 backdrop-blur-md">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <span className="text-[10px] uppercase font-bold tracking-wider text-sky-400 block">
                          SkyLink Verified Practice
                        </span>
                        <span className="text-xs sm:text-[13px] font-bold text-white block mt-0.5">
                          Statutory &amp; Operational Execution
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-300 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded-md shrink-0">
                        <ShieldCheck className="w-3 h-3 text-emerald-400" />
                        <span>Active</span>
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
      {/* 2. HIGHLIGHTS BANNER */}
      {/* ========================================================================= */}
      <section className="border-b border-neutral-200 bg-neutral-50/80 py-4 sm:py-5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 divide-x-0 md:divide-x divide-neutral-200">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className={`flex flex-col ${idx !== 0 ? 'md:pl-6' : ''}`}
              >
                <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-neutral-500">
                  {item.label}
                </span>
                <span className="text-sm sm:text-base font-bold text-neutral-900 mt-0.5">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. MAIN CONTENT: STRUCTURED SECTIONS & STICKY SIDEBAR */}
      {/* ========================================================================= */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Main 8 Columns */}
          <div className="lg:col-span-8 space-y-10">
            {/* Detailed Section Breakdown */}
            <div className="space-y-6">
              <div className="border-b border-neutral-200 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0284C7]">
                  Comprehensive Scope
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-neutral-900 mt-1">
                  Core Service Modules &amp; Execution Protocols
                </h2>
                <p className="mt-1.5 text-sm text-neutral-600 font-normal">
                  Detailed capabilities and operational procedures managed under this service practice.
                </p>
              </div>

              {/* Sections Cards Grid */}
              <StaggerContainer
                staggerDelay={80}
                baseDelay={50}
                className="grid grid-cols-1 md:grid-cols-2 gap-5"
              >
                {sections.map((sec, idx) => {
                  const Icon = sec.icon || FileCheck2;
                  return (
                    <div
                      key={idx}
                      className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-xs hover-lift transition-all flex flex-col justify-between group h-full"
                    >
                      <div>
                        {/* Section Header */}
                        <div className="flex items-center justify-between gap-3 mb-3.5">
                          <div className="flex items-center gap-2.5">
                            <div className="w-9 h-9 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-[#0284C7] group-hover:bg-[#0284C7] group-hover:text-white transition-colors">
                              <Icon className="w-4 h-4" />
                            </div>
                            <span className="text-[11px] font-bold font-mono uppercase tracking-wider text-sky-700 bg-sky-50 px-2.5 py-0.5 rounded-md border border-sky-100">
                              Module {sec.number}
                            </span>
                          </div>
                        </div>

                        <h3 className="text-base sm:text-lg font-bold text-neutral-900 group-hover:text-[#0284C7] transition-colors leading-snug">
                          {sec.title}
                        </h3>

                        {/* Points List with strict alignment */}
                        <ul className="mt-4 space-y-3">
                          {sec.points.map((point, pIdx) => (
                            <li
                              key={pIdx}
                              className="flex items-start gap-2.5 text-xs sm:text-[13.5px] text-neutral-700 leading-relaxed font-normal"
                            >
                              <CheckCircle2 className="w-4 h-4 text-[#0284C7] shrink-0 mt-0.5" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-5 pt-3.5 border-t border-neutral-100 flex items-center gap-1 text-[11px] font-bold text-neutral-400 group-hover:text-[#0284C7] transition-colors">
                        <span>SkyLink Managed Protocol</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  );
                })}
              </StaggerContainer>
            </div>

            {/* ========================================================================= */}
            {/* 4. EXECUTIVE CONCLUSION CALLOUT */}
            {/* ========================================================================= */}
            <ScrollReveal effect="scale-up" delay={100}>
              <div className="rounded-2xl border-2 border-sky-200 bg-gradient-to-br from-sky-50/90 via-white to-sky-100/40 p-6 sm:p-7 relative overflow-hidden shadow-xs">
                <div className="absolute top-0 right-0 w-64 h-64 bg-sky-400/10 rounded-full blur-2xl pointer-events-none" />

                <div className="relative z-10 space-y-3.5">
                  <div className="flex items-center gap-2 text-[#0284C7]">
                    <ShieldCheck className="w-4 h-4 shrink-0" />
                    <span className="text-xs font-bold uppercase tracking-wider">
                      Strategic Impact &amp; Regulatory Bridge
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-neutral-900 leading-tight">
                    Executive Summary &amp; Strategic Value
                  </h3>

                  <p className="text-sm sm:text-[14.5px] text-neutral-800 leading-relaxed font-normal">
                    {conclusion}
                  </p>

                  <div className="pt-2 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#0A2540] text-sky-400 flex items-center justify-center text-xs font-bold">
                      SL
                    </div>
                    <div>
                      <span className="text-xs font-bold text-neutral-900 block">
                        SkyLink Global Services Practice Group
                      </span>
                      <span className="text-[11px] text-neutral-500 font-normal block">
                        Institutional EXIM Advisory &amp; Trade Operations
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* ========================================================================= */}
          {/* 5. STICKY SIDEBAR (4 Cols) */}
          {/* ========================================================================= */}
          <div className="lg:col-span-4 space-y-6">
            <div className="sticky top-24 space-y-6">
              {/* Consultation Proposal Card */}
              <Card
                variant="bordered"
                className="p-6 bg-gradient-to-b from-[#0A2540] to-[#07192D] text-white shadow-xl rounded-2xl border border-white/15 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-36 h-36 bg-sky-500/15 rounded-full blur-xl pointer-events-none" />

                <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-sky-400 bg-sky-400/10 px-2.5 py-1 rounded-md border border-sky-400/20">
                  Dedicated Practice Desk
                </span>

                <h3 className="text-lg sm:text-xl font-bold text-white mt-2.5 leading-snug">
                  Need Expert Assistance with {title.split(':')[0]}?
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
                  Connect directly with our senior trade specialists to evaluate your compliance status, tariff classifications, and supply chain workflows.
                </p>

                <div className="mt-5 space-y-2.5">
                  <Button
                    href="/request-consultation"
                    variant="secondary"
                    size="md"
                    className="w-full justify-center shadow-lg shadow-sky-500/20 font-semibold text-xs sm:text-sm py-2.5"
                    rightIcon={<ArrowRight className="w-4 h-4" />}
                  >
                    Request Consultation
                  </Button>
                  <Button
                    href="/contact"
                    variant="outline"
                    size="md"
                    className="w-full justify-center text-white border-white/20 hover:bg-white/10 font-semibold text-xs sm:text-sm py-2.5"
                  >
                    Contact Trade Desk
                  </Button>
                </div>

                <div className="mt-4 pt-3.5 border-t border-white/10 flex items-center justify-between text-[11px] text-neutral-400">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-sky-400" />
                    2-Hour SLA Response
                  </span>
                  <span>Confidential Review</span>
                </div>
              </Card>

              {/* SkyLink Guarantee Card */}
              <Card
                variant="bordered"
                className="p-5 bg-neutral-50 border-neutral-200 text-xs text-neutral-700 space-y-3 rounded-2xl"
              >
                <div className="flex items-center gap-2 text-neutral-900 font-bold text-sm">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>The SkyLink Standard</span>
                </div>
                <p className="leading-relaxed font-normal">
                  Every advisory service and documentation filing is backed by licensed customs brokerage, strict statutory compliance, and zero-defect procedural verification.
                </p>
                <div className="pt-2 border-t border-neutral-200/80 space-y-1.5 text-[11px] text-neutral-600">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-[#0284C7]" />
                    <span>Statutory DGFT &amp; Customs Authorized</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-[#0284C7]" />
                    <span>PAN-India Port &amp; ICD Coverage</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-[#0284C7]" />
                    <span>Single-Window Dedicated Contact</span>
                  </div>
                </div>
              </Card>

              {/* Related Services Navigation */}
              {currentRelated.length > 0 && (
                <Card
                  variant="bordered"
                  className="p-5 bg-white border-neutral-200 rounded-2xl space-y-3 shadow-xs"
                >
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                    Explore Other Services
                  </h4>
                  <div className="space-y-1.5 pt-1">
                    {currentRelated.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        className="group flex items-start justify-between gap-2 p-2 rounded-xl hover:bg-neutral-50 transition-colors"
                      >
                        <div>
                          <span className="text-xs sm:text-[13px] font-bold text-neutral-900 group-hover:text-[#0284C7] transition-colors block leading-tight">
                            {item.title}
                          </span>
                          <span className="text-[11px] text-neutral-500 font-normal line-clamp-1 mt-0.5 block">
                            {item.description}
                          </span>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#0284C7] group-hover:translate-x-0.5 transition-all shrink-0 mt-1" />
                      </Link>
                    ))}
                  </div>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 4. BOTTOM FULL-WIDTH CONVERSION BANNER */}
      {/* ========================================================================= */}
      <section className="bg-[#07192D] text-white py-14 sm:py-18 border-t border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-sky-400 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-600 rounded-full blur-3xl" />
        </div>

        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4">
          <ScrollReveal effect="fade-up">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-400/10 px-3 py-1 rounded-full border border-sky-400/20">
              Transform Your Cross-Border Trade
            </span>
          </ScrollReveal>

          <ScrollReveal effect="fade-up" delay={80}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Ready to streamline your global trade operations?
            </h2>
          </ScrollReveal>

          <ScrollReveal effect="fade-up" delay={140}>
            <p className="text-sm sm:text-base text-neutral-300 max-w-2xl mx-auto font-normal leading-relaxed">
              Partner with SkyLink Global Services to eliminate regulatory bottlenecks, optimize customs tariffs, and accelerate international shipments.
            </p>
          </ScrollReveal>

          <ScrollReveal effect="scale-up" delay={200} className="pt-2 flex flex-wrap justify-center gap-3">
            <Button
              href="/request-consultation"
              variant="secondary"
              size="md"
              className="font-semibold shadow-lg shadow-sky-500/20 px-6 py-2.5 text-sm"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Request Free Consultation
            </Button>
            <Button
              href="/contact"
              variant="outline-light"
              size="md"
              className="font-semibold px-6 py-2.5 text-sm"
            >
              Contact Support Desk
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
