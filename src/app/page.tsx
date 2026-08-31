import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo/metadata';
import { OrganizationSchema } from '@/components/seo/OrganizationSchema';
import { LocalBusinessSchema } from '@/components/seo/LocalBusinessSchema';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { HeroVisual } from '@/components/home/HeroVisual';
import { GlobalRouteMap } from '@/components/home/GlobalRouteMap';
import { HowItWorksTimeline } from '@/components/home/HowItWorksTimeline';
import { ValueComparisonSection } from '@/components/home/ValueComparisonSection';
import { ScrollReveal } from '@/components/animation/ScrollReveal';
import { StaggerContainer } from '@/components/animation/StaggerContainer';
import { getAllServices } from '@/data/services';
import { getAllIndustries } from '@/data/industries';
import {
  ArrowRight,
  ShieldCheck,
  Globe2,
  Ship,
  Building2,
  CheckCircle2,
  AlertTriangle,
  Users,
  Network,
  Scale,
  ThermometerSnowflake,
  TrendingDown,
  Coins,
  Percent,
} from 'lucide-react';

export const metadata: Metadata = constructMetadata({
  title: 'SkyLink Global Services | B2B EXIM Consultancy & Global Logistics',
  description:
    'Connecting Markets. Delivering Opportunities. End-to-end EXIM consultancy, international freight forwarding, customs clearance, and global trade compliance.',
  path: '/',
});

// Curated high-res imagery mapping for services
const serviceImages: Record<string, string> = {
  'licensing-registrations': 'https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=800&auto=format&fit=crop',
  'export-incentives': 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop',
  'documentation-liaison': 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop',
  'logistics-shipping': 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?q=80&w=800&auto=format&fit=crop',
  'customs-compliance': 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=800&auto=format&fit=crop',
  'warehousing-distribution': 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop',
  'cold-chain-solutions': 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=800&auto=format&fit=crop',
  'tax-gst-advisory': 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop',
  'trade-risk-management': 'https://images.unsplash.com/photo-1505705694340-019e1e335916?q=80&w=800&auto=format&fit=crop',
};

// Curated high-res imagery mapping for industries
const industryImages: Record<string, string> = {
  pharmaceuticals: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=800&auto=format&fit=crop',
  seafood: 'https://images.unsplash.com/photo-1534482421-64566f976cfa?q=80&w=800&auto=format&fit=crop',
  perishables: 'https://images.unsplash.com/photo-1610348725531-843dff563e2c?q=80&w=800&auto=format&fit=crop',
  manufacturing: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop',
  'general-cargo': 'https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=800&auto=format&fit=crop',
};

export default async function HomePage() {
  const services = await getAllServices();
  const industries = await getAllIndustries();

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <OrganizationSchema />
      <LocalBusinessSchema />
      <Header />

      <main className="flex-1">
        {/* ========================================================================= */}
        {/* 1. HERO SECTION (Cinematic Staggered Entrance Animation) */}
        {/* ========================================================================= */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#07192D] via-[#0A2540] to-[#0A2540] text-white pt-12 pb-20 lg:pt-20 lg:pb-32">
          {/* Subtle Ambient Background Grids */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              {/* Left Column: Headlines & CTAs */}
              <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                {/* 1. Authority Eyebrow Badge (Appears 1st) */}
                <ScrollReveal effect="fade-down" delay={50} duration={600}>
                  <div className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 border border-sky-400/30 px-4 py-1.5 text-xs font-semibold text-sky-300 backdrop-blur-md">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>DGFT &amp; Customs Authorized EXIM Facilitation</span>
                  </div>
                </ScrollReveal>

                {/* 2. Main Heading (Appears 2nd) */}
                <ScrollReveal effect="fade-up" delay={150} duration={700}>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12]">
                    Connecting Markets.{' '}
                    <span className="text-gradient-sky">
                      Delivering Opportunities.
                    </span>
                  </h1>
                </ScrollReveal>

                {/* 3. 3 Business Pillars Subtitle (Appears 3rd) */}
                <ScrollReveal effect="fade-up" delay={250} duration={650}>
                  <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 text-sm sm:text-base font-bold text-sky-300">
                    <span className="bg-sky-950/60 px-3 py-1 rounded-lg border border-sky-500/30">
                      EXIM Consultancy
                    </span>
                    <span className="text-white/40">•</span>
                    <span className="bg-sky-950/60 px-3 py-1 rounded-lg border border-sky-500/30">
                      Global Logistics
                    </span>
                    <span className="text-white/40">•</span>
                    <span className="bg-sky-950/60 px-3 py-1 rounded-lg border border-sky-500/30">
                      Trade Compliance
                    </span>
                  </div>
                </ScrollReveal>

                {/* 4. Supporting Description (Appears 4th) */}
                <ScrollReveal effect="fade-up" delay={350} duration={700}>
                  <p className="text-base sm:text-lg text-neutral-300 max-w-2xl leading-relaxed mx-auto lg:mx-0">
                    SkyLink Global Services empowers enterprises with strategic foreign trade policy advisory, direct Tier-1 carrier freight forwarding, flawless customs clearance, and GDP-compliant cold chain solutions across all major international trade corridors.
                  </p>
                </ScrollReveal>

                {/* 5. Hero CTAs (Appears 5th) */}
                <ScrollReveal effect="fade-up" delay={450} duration={700}>
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                    <Button
                      href="/request-consultation"
                      variant="secondary"
                      size="lg"
                      rightIcon={<ArrowRight className="w-4 h-4" />}
                      className="w-full sm:w-auto shadow-lg shadow-sky-500/30 hover:scale-[1.02] transition-transform"
                    >
                      Request a Consultation
                    </Button>
                    <Button
                      href="/services"
                      variant="outline"
                      size="lg"
                      className="w-full sm:w-auto text-white border-white/20 hover:bg-white/10"
                    >
                      Explore Our Services
                    </Button>
                  </div>
                </ScrollReveal>

                {/* 6. Quick Trust Highlights (Appears 6th) */}
                <ScrollReveal effect="fade-up" delay={550} duration={700}>
                  <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 text-center lg:text-left">
                    <div>
                      <div className="text-2xl sm:text-3xl font-extrabold text-white">100%</div>
                      <div className="text-xs text-neutral-400">Statutory Compliance</div>
                    </div>
                    <div>
                      <div className="text-2xl sm:text-3xl font-extrabold text-sky-400">20%+</div>
                      <div className="text-xs text-neutral-400">Logistics Cost Savings</div>
                    </div>
                    <div>
                      <div className="text-2xl sm:text-3xl font-extrabold text-white">Zero</div>
                      <div className="text-xs text-neutral-400">Demurrage Focus</div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>

              {/* Right Column: Hero Visual with Real Cargo Vessel & Animated Floating Cards */}
              <div className="lg:col-span-5">
                <HeroVisual />
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2. WHAT SETS US APART / TRUST HIGHLIGHTS (Staggered Cards Reveal) */}
        {/* ========================================================================= */}
        <section className="py-12 bg-neutral-50 border-b border-neutral-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <StaggerContainer
              staggerDelay={70}
              baseDelay={0}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6"
            >
              {[
                { title: 'End-to-End Trade Facilitation', icon: Globe2, desc: 'Single-window operations' },
                { title: 'Strong Manufacturer Network', icon: Building2, desc: 'Direct B2B coordination' },
                { title: 'Multiple Shipping Lines', icon: Ship, desc: 'Tier-1 maritime carriers' },
                { title: 'Competitive Freight Negotiation', icon: Percent, desc: 'All-in transparent rates' },
                { title: 'Regulatory Expertise', icon: Scale, desc: 'DGFT & Customs mastery' },
                { title: 'Global Coordination Desk', icon: Network, desc: '24/7 telemetry monitoring' },
              ].map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div
                    key={idx}
                    className="flex flex-col items-center text-center p-5 rounded-2xl bg-white border border-neutral-200 shadow-xs hover-lift transition-all group h-full"
                  >
                    <div className="w-12 h-12 rounded-xl bg-sky-50 text-[#0284C7] group-hover:bg-[#0284C7] group-hover:text-white flex items-center justify-center mb-3 transition-colors">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-neutral-900 leading-snug">
                      {item.title}
                    </span>
                    <span className="text-[11px] text-neutral-500 mt-1">
                      {item.desc}
                    </span>
                  </div>
                );
              })}
            </StaggerContainer>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. INTRODUCTION: Your Partner in Global Trade (Split Image & Content Reveal) */}
        {/* ========================================================================= */}
        <section className="py-20 sm:py-28 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Image Reveal from Left */}
              <ScrollReveal effect="fade-right" delay={50} duration={800} className="lg:col-span-6">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-neutral-200 bg-neutral-900 group">
                  <Image
                    src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop"
                    alt="International automated cargo port with container gantry cranes and shipping logistics"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07192D]/80 via-transparent to-transparent" />
                  
                  {/* Floating Overlay Badge on Image */}
                  <div className="absolute bottom-6 left-6 right-6 glass-panel-dark p-4 rounded-2xl border border-white/20">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white uppercase tracking-wider">
                          Certified Port Gate Clearance
                        </div>
                        <div className="text-xs text-neutral-300">
                          Rapid ICEGATE clearance with zero demurrage holds
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Right Column: Editorial Copy & Stats Counter Pills */}
              <ScrollReveal effect="fade-left" delay={150} duration={800} className="lg:col-span-6 space-y-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0284C7] bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
                  Strategic Trade Partner
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A2540] tracking-tight">
                  Your Partner in Global Trade
                </h2>
                <p className="text-base text-neutral-600 leading-relaxed">
                  SkyLink Global Services is a trusted partner in international trade facilitation, offering end-to-end EXIM consultancy, global logistics coordination, and statutory compliance management.
                </p>
                <p className="text-base text-neutral-600 leading-relaxed">
                  We bridge the gap between regulatory mandates and commercial logistics, enabling manufacturers, exporters, and importers to navigate complex foreign trade policies, customs classifications, and global freight routes with complete confidence.
                </p>

                {/* 4 Feature Highlights Grid with Stagger */}
                <StaggerContainer staggerDelay={70} className="grid grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                    <div className="text-lg font-bold text-neutral-900">EXIM Expertise</div>
                    <div className="text-xs text-neutral-500 mt-0.5">DGFT, Advance Auth &amp; EPCG</div>
                  </div>
                  <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                    <div className="text-lg font-bold text-neutral-900">Global Network</div>
                    <div className="text-xs text-neutral-500 mt-0.5">Coordinated multi-port desks</div>
                  </div>
                  <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                    <div className="text-lg font-bold text-neutral-900">Logistics Velocity</div>
                    <div className="text-xs text-neutral-500 mt-0.5">Tier-1 carrier vessel bookings</div>
                  </div>
                  <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                    <div className="text-lg font-bold text-neutral-900">Compliance Shield</div>
                    <div className="text-xs text-neutral-500 mt-0.5">100% legal tariff protection</div>
                  </div>
                </StaggerContainer>

                <div className="pt-2">
                  <Button href="/about" variant="primary" size="md">
                    Learn More About Us &rarr;
                  </Button>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. WHO WE ARE: Editorial Split Animation with Overlapping Visuals */}
        {/* ========================================================================= */}
        <section className="py-20 sm:py-28 bg-neutral-50 border-y border-neutral-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              badge="Our Foundation"
              title="Built to Bridge Businesses and Global Markets"
              subtitle="SkyLink operates across DGFT regulations, customs procedures, GST advisory, and multimodal logistics to deliver dependable trade execution."
            />

            {/* Overlapping Visual & 4 Feature Blocks */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-12">
              {/* Left 5 Cols: Overlapping Imagery Reveal */}
              <ScrollReveal effect="fade-right" delay={100} duration={800} className="lg:col-span-5 relative">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-neutral-200">
                  <Image
                    src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=1200&auto=format&fit=crop"
                    alt="Global trade container logistics vessel and multimodal transportation operations"
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover object-center"
                  />
                </div>
                {/* Overlapping Secondary Card */}
                <div className="hidden sm:block absolute -bottom-6 -right-6 w-3/5 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800&auto=format&fit=crop"
                      alt="Air freight logistics and international customs terminal verification"
                      fill
                      sizes="30vw"
                      className="object-cover object-center"
                    />
                  </div>
                </div>
              </ScrollReveal>

              {/* Right 7 Cols: 4 Animated Feature Cards with Stagger */}
              <StaggerContainer
                staggerDelay={90}
                baseDelay={150}
                className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5"
              >
                {[
                  {
                    title: 'Regulatory Expertise',
                    desc: 'DGFT, customs, and GST advisory handled by seasoned statutory trade specialists with decades of combined legal experience.',
                    icon: Scale,
                  },
                  {
                    title: 'Dedicated Team',
                    desc: 'Tailored account managers providing single-point accountability for exporters, manufacturers, and global trading houses.',
                    icon: Users,
                  },
                  {
                    title: 'Global Network',
                    desc: 'Strategic coordination across Tier-1 shipping lines, air cargo carriers, bonded warehouses, and customs brokers worldwide.',
                    icon: Network,
                  },
                  {
                    title: 'Trusted Process',
                    desc: 'Transparent, proactive, and zero-defect execution ensuring full statutory incentive recovery and on-time cargo delivery.',
                    icon: ShieldCheck,
                  },
                ].map((block, idx) => {
                  const IconComp = block.icon;
                  return (
                    <Card key={idx} variant="bordered" className="p-6 bg-white hover-lift h-full">
                      <div className="w-12 h-12 rounded-xl bg-sky-50 text-[#0284C7] flex items-center justify-center mb-4 border border-sky-100">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-bold text-neutral-900">{block.title}</h3>
                      <p className="mt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed">{block.desc}</p>
                    </Card>
                  );
                })}
              </StaggerContainer>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. WHY WE EXIST: Storytelling Animation & Real Risk Analysis */}
        {/* ========================================================================= */}
        <section className="py-20 sm:py-28 bg-[#0A2540] text-white relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <SectionHeading
              badge="Risk Mitigation"
              title="Every Shipment Carries Real Risk"
              subtitle="Without professional EXIM guidance, cross-border operations face severe operational, regulatory, and financial hurdles."
              light
            />

            {/* Sequential 6 Risk Cards Reveal */}
            <StaggerContainer
              staggerDelay={80}
              baseDelay={100}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10"
            >
              {[
                { title: 'Documentation Errors', desc: 'Clerical mistakes resulting in bank query holds and rejection of letter of credit (LC).' },
                { title: 'Shipment Port Delays', desc: 'Customs holds generating severe demurrage, detention, and missed delivery deadlines.' },
                { title: 'Lost Government Incentives', desc: 'Unclaimed or unredeemed RoDTEP, RoSCTL, and duty drawback entitlements.' },
                { title: 'Customs Penalties & Seizures', desc: 'HS code misclassifications triggering severe statutory fines and physical seizures.' },
                { title: 'Cold-Chain Spoilage', desc: 'Thermal breaches during transit ruining temperature-sensitive pharma or perishables.' },
                { title: 'Uninsured Cargo Losses', desc: 'Vessel damage, container loss, or General Average claims without marine indemnity.' },
              ].map((risk, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition-colors h-full"
                >
                  <div className="flex items-center gap-2.5 text-amber-400 mb-2">
                    <AlertTriangle className="w-5 h-5 shrink-0" />
                    <h3 className="text-base font-bold text-white">{risk.title}</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">{risk.desc}</p>
                </div>
              ))}
            </StaggerContainer>

            {/* Our Promise Banner Reveal */}
            <ScrollReveal effect="scale-up" delay={250} duration={800}>
              <div className="mt-14 rounded-3xl bg-gradient-to-r from-[#0284C7] to-[#0369A1] p-8 sm:p-10 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl border border-white/20">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-sky-100 bg-white/10 px-3 py-1 rounded-full border border-white/20">
                    Our Promise
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
                    Compliant, cost-effective, and dependable trade support.
                  </h3>
                  <p className="text-sm text-sky-100 mt-1 max-w-2xl leading-relaxed">
                    So your enterprise expands globally without the hidden liabilities and expenses of navigating international borders alone.
                  </p>
                </div>
                <Button href="/request-consultation" variant="primary" size="lg" className="bg-[#07192D] hover:bg-[#0A2540] shrink-0 text-white shadow-xl">
                  Get Protected Today &rarr;
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 6. WHY CHOOSE US (Staggered 6-Card Grid Reveal) */}
        {/* ========================================================================= */}
        <section className="py-20 sm:py-28 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              badge="The SkyLink Advantage"
              title="Why Businesses Choose SkyLink"
              subtitle="We combine regulatory trade advisory with high-velocity freight management to protect margins and accelerate transit."
            />

            <StaggerContainer
              staggerDelay={90}
              baseDelay={100}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12"
            >
              {[
                {
                  title: 'Compliance Assurance',
                  desc: 'Avoid customs penalties and port delays with direct, authorized regulatory guidance and tariff scrutiny.',
                  icon: ShieldCheck,
                },
                {
                  title: 'Specialized Cold-Chain',
                  desc: 'GDP-certified cold-chain solutions for pharmaceuticals, seafood, and fresh perishables with 24/7 telemetry.',
                  icon: ThermometerSnowflake,
                },
                {
                  title: 'Cost Optimization',
                  desc: 'Maximize government incentives (RoDTEP, Drawbacks) while minimizing ocean and air freight rates.',
                  icon: TrendingDown,
                },
                {
                  title: 'Reliability & Trust',
                  desc: 'Transparent, proactive, and timely execution with complete milestone tracking and zero hidden broker fees.',
                  icon: CheckCircle2,
                },
                {
                  title: 'Global Reach',
                  desc: 'Seamless coordination across premier maritime carriers, air cargo lines, and international port terminals.',
                  icon: Globe2,
                },
                {
                  title: 'Lower Service Charges',
                  desc: 'Direct B2B manufacturer-carrier connections eliminate unnecessary broker markups.',
                  icon: Coins,
                },
              ].map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-7 rounded-2xl bg-neutral-50/70 border border-neutral-200 hover-lift hover-glow-sky group flex flex-col justify-between h-full"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-sky-50 text-[#0284C7] group-hover:bg-[#0284C7] group-hover:text-white flex items-center justify-center shrink-0 border border-sky-100 transition-colors mb-4">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-bold text-neutral-900">{item.title}</h3>
                      <p className="mt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </StaggerContainer>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 7. ALL 9 SERVICES SECTION (Staggered Cards with Image Zoom on Hover) */}
        {/* ========================================================================= */}
        <section className="py-20 sm:py-28 bg-neutral-50 border-t border-neutral-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              badge="Comprehensive Capabilities"
              title="Our End-to-End Trade Services"
              subtitle="From statutory DGFT registrations to refrigerated ocean freight and customs brokerage, we handle every stage of cross-border commerce."
            />

            <StaggerContainer
              staggerDelay={85}
              baseDelay={100}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
            >
              {services.map((srv) => (
                <div
                  key={srv.id}
                  className="rounded-3xl border border-neutral-200 bg-white overflow-hidden hover-lift shadow-sm flex flex-col justify-between group h-full"
                >
                  {/* Top Image Banner */}
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-900">
                    <Image
                      src={serviceImages[srv.slug] || serviceImages['logistics-shipping']}
                      alt={`SkyLink ${srv.title} logistics and EXIM trade solution`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07192D]/80 via-transparent to-transparent" />
                    <span className="absolute bottom-3 left-4 text-[10px] font-mono font-bold uppercase tracking-wider text-sky-300 bg-[#07192D]/80 px-2.5 py-1 rounded-md border border-white/10 backdrop-blur-md">
                      EXIM PRACTICE
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-neutral-900 group-hover:text-[#0284C7] transition-colors">
                        <Link href={`/services/${srv.slug}`}>{srv.title}</Link>
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed line-clamp-3">
                        {srv.shortDescription}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-neutral-100 flex items-center justify-between">
                      <Link
                        href={`/services/${srv.slug}`}
                        className="inline-flex items-center text-xs font-bold text-[#0284C7] hover:text-[#0369A1] gap-1 transition-colors"
                      >
                        <span>Explore Capabilities</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </StaggerContainer>

            <ScrollReveal effect="fade-up" delay={200} className="mt-14 text-center">
              <Button href="/services" variant="primary" size="lg">
                View Full Services Catalog &rarr;
              </Button>
            </ScrollReveal>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 8. GLOBAL LOGISTICS VISUAL MAP SECTION */}
        {/* ========================================================================= */}
        <GlobalRouteMap />

        {/* ========================================================================= */}
        {/* 9. HOW IT WORKS: 6-Step Visual Process Timeline */}
        {/* ========================================================================= */}
        <HowItWorksTimeline />

        {/* ========================================================================= */}
        {/* 10. COLD CHAIN LOGISTICS DEDICATED SECTION (Split Reveal) */}
        {/* ========================================================================= */}
        <section className="py-20 sm:py-28 bg-gradient-to-b from-sky-50 via-white to-sky-50 border-t border-neutral-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left 6 Cols: Cold Chain Content Reveal */}
              <ScrollReveal effect="fade-right" delay={80} duration={800} className="lg:col-span-6 space-y-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0284C7] bg-sky-100 px-3 py-1 rounded-full border border-sky-200">
                  Specialized Cold Chain Infrastructure
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A2540] tracking-tight">
                  GDP &amp; FDA Compliant Temperature-Controlled Logistics
                </h2>
                <p className="text-base text-neutral-600 leading-relaxed">
                  Preserving product efficacy for high-value pharmaceuticals, biologics, active ingredients, and deep-freeze seafood requires uncompromising thermal discipline.
                </p>

                <div className="space-y-3 pt-2">
                  {[
                    'Reefer Containers (-25°C Deep Freeze to +25°C Controlled Room Temp)',
                    'Real-Time IoT Temperature, Humidity & Geofencing Telemetry',
                    'GDP, US FDA, and European Union Regulatory Compliance',
                    'Pre-Arrival Customs Green-Channel Release for Life Sciences',
                  ].map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm text-neutral-800 font-semibold">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-3">
                  <Button href="/services/cold-chain-solutions" variant="secondary" size="md">
                    Explore Cold Chain Capabilities &rarr;
                  </Button>
                </div>
              </ScrollReveal>

              {/* Right 6 Cols: Cold Chain Live Visual Monitor Reveal */}
              <ScrollReveal effect="fade-left" delay={180} duration={800} className="lg:col-span-6 relative">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-sky-200 bg-[#07192D]">
                  <Image
                    src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=1200&auto=format&fit=crop"
                    alt="Refrigerated cold chain cargo container with pharmaceutical temperature control"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07192D]/90 via-[#07192D]/30 to-transparent" />

                  {/* Telemetry Card Floating Inside */}
                  <div className="absolute bottom-6 left-6 right-6 glass-panel-dark p-5 rounded-2xl border border-white/20">
                    <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3">
                      <div className="flex items-center gap-2">
                        <ThermometerSnowflake className="w-5 h-5 text-sky-400 animate-pulse" />
                        <span className="font-bold text-white text-xs sm:text-sm">Active Thermal Stream</span>
                      </div>
                      <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30">
                        GDP VALIDATED
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div>
                        <span className="text-neutral-400 text-[10px]">Pharma Active Range</span>
                        <div className="text-base font-bold text-sky-300 mt-0.5">+2°C to +8°C</div>
                      </div>
                      <div>
                        <span className="text-neutral-400 text-[10px]">Seafood Deep Freeze</span>
                        <div className="text-base font-bold text-sky-300 mt-0.5">-25°C to -40°C</div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 11. INDUSTRIES SHOWCASE (Staggered Industry Cards Reveal) */}
        {/* ========================================================================= */}
        <section className="py-20 sm:py-28 bg-[#07192D] text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              badge="Sector Expertise"
              title="Tailored Solutions for Key Global Industries"
              subtitle="Industry-specific trade compliance, validated cold-chain transit, and project cargo forwarding."
              light
            />

            <StaggerContainer
              staggerDelay={90}
              baseDelay={100}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
            >
              {industries.map((ind) => (
                <div
                  key={ind.id}
                  className="rounded-3xl border border-white/15 bg-[#0A2540]/80 overflow-hidden hover-lift shadow-xl flex flex-col justify-between group h-full"
                >
                  {/* Industry Image Banner */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <Image
                      src={industryImages[ind.slug] || industryImages['manufacturing']}
                      alt={`${ind.title} international trade and logistics solutions`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover object-center group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540] via-transparent to-transparent" />
                    <span className="absolute bottom-3 left-4 text-[10px] font-mono font-bold uppercase tracking-wider text-sky-300 bg-[#07192D]/80 px-2.5 py-1 rounded-md border border-white/10 backdrop-blur-md">
                      VERTICAL
                    </span>
                  </div>

                  {/* Industry Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                        {ind.title}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm text-neutral-300 leading-relaxed line-clamp-3">
                        {ind.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                      <Link
                        href={`/industries#${ind.slug}`}
                        className="inline-flex items-center text-xs font-bold text-sky-400 hover:text-sky-300 gap-1"
                      >
                        <span>Explore Solutions</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 12. VALUE / PERFORMANCE COMPARISON: Traditional Agent vs SkyLink */}
        {/* ========================================================================= */}
        <ValueComparisonSection />

        {/* ========================================================================= */}
        {/* 13. FINAL HIGH-IMPACT HERO CTA (With Scroll Reveal) */}
        {/* ========================================================================= */}
        <section className="relative py-24 sm:py-32 bg-[#07192D] text-white overflow-hidden">
          {/* Background Logistics Image with Deep Navy Overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop"
              alt="Global trade cargo ship navigating international waters"
              fill
              sizes="100vw"
              className="object-cover object-center opacity-25"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#07192D] via-[#0A2540]/90 to-[#07192D]" />
          </div>

          <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <ScrollReveal effect="fade-down" delay={50}>
              <span className="inline-block rounded-full bg-sky-400/20 px-4 py-1 text-xs font-bold uppercase tracking-wider text-sky-300 border border-sky-400/30 backdrop-blur-md">
                Let&apos;s Talk Trade
              </span>
            </ScrollReveal>
            <ScrollReveal effect="fade-up" delay={150}>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
                Ready to simplify your import-export operations?
              </h2>
            </ScrollReveal>
            <ScrollReveal effect="fade-up" delay={250}>
              <p className="text-base sm:text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed">
                Connect with our EXIM consultants today for a comprehensive evaluation of your trade lanes, customs tariffs, and logistics costs.
              </p>
            </ScrollReveal>
            <ScrollReveal effect="scale-up" delay={350}>
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  href="/request-consultation"
                  variant="secondary"
                  size="lg"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                  className="w-full sm:w-auto shadow-2xl shadow-sky-500/40"
                >
                  Request a Consultation
                </Button>
                <Button
                  href="/contact"
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto text-white border-white/20 hover:bg-white/10"
                >
                  Contact Us
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
