import React from 'react';
import Image from 'next/image';
import type { Metadata } from 'next';
import { getPageMetadata } from '@/lib/seo/metadata';
import { OrganizationSchema } from '@/components/seo/OrganizationSchema';
import { LocalBusinessSchema } from '@/components/seo/LocalBusinessSchema';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { HeroSection } from '@/components/home/HeroSection';
import { StatsCounterSection } from '@/components/home/StatsCounterSection';
import { GlobalTradeFlow } from '@/components/home/GlobalTradeFlow';
import { StrategicPartnerSection } from '@/components/home/StrategicPartnerSection';
import { WhySkyLinkBento } from '@/components/home/WhySkyLinkBento';
import { ServicesBentoGrid } from '@/components/home/ServicesBentoGrid';
import { IncotermsMatrix } from '@/components/home/IncotermsMatrix';
import { GlobalRouteMap } from '@/components/home/GlobalRouteMap';
import { HowItWorksTimeline } from '@/components/home/HowItWorksTimeline';
import { LogisticsRiskJourney } from '@/components/home/LogisticsRiskJourney';
import { IndustriesMosaic } from '@/components/home/IndustriesMosaic';
import { ValueComparisonSection } from '@/components/home/ValueComparisonSection';
import { ScrollReveal } from '@/components/animation/ScrollReveal';
import { StaggerContainer } from '@/components/animation/StaggerContainer';
import { getAllServices } from '@/data/services';
import { getAllIndustries } from '@/data/industries';
import {
  ArrowRight,
  ShieldCheck,
  Users,
  Network,
  Scale,
} from 'lucide-react';

export const metadata: Metadata = getPageMetadata('home');

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
        {/* 1. HERO SECTION (Editorial Authority + Interactive Live Maritime Telemetry) */}
        {/* ========================================================================= */}
        <HeroSection />

        {/* ========================================================================= */}
        {/* 2. GLOBAL IMPACT STATISTICS SECTION (Large Typography & Whitespace) */}
        {/* ========================================================================= */}
        <StatsCounterSection />

        {/* ========================================================================= */}
        {/* 3. HOW SKYLINK CONNECTS GLOBAL TRADE (Continuous Open Trade Flow - NO CARDS) */}
        {/* ========================================================================= */}
        <GlobalTradeFlow />

        {/* ========================================================================= */}
        {/* 4. WHY US: The SkyLink Advantage & Single-Window Governance */}
        {/* ========================================================================= */}
        <WhySkyLinkBento />

        {/* ========================================================================= */}
        {/* 5. FULL SERVICES DIRECTORY: All 9 Core Commercial Practices Bento Grid */}
        {/* ========================================================================= */}
        <ServicesBentoGrid services={services} />

        {/* ========================================================================= */}
        {/* 6. COLD CHAIN SOLUTIONS & SECTOR-SPECIFIC VERTICALS (Cinematic Mosaic) */}
        {/* ========================================================================= */}
        <IndustriesMosaic industries={industries} />

        {/* ========================================================================= */}
        {/* 7. IMPORTANCE OF INCOTERMS: Incoterms® Risk & Responsibility Matrix */}
        {/* ========================================================================= */}
        <IncotermsMatrix />

        {/* ========================================================================= */}
        {/* 8. STRATEGIC TRADE PARTNER: Editorial Authority & Institutional Pillars */}
        {/* ========================================================================= */}
        <StrategicPartnerSection />

        {/* ========================================================================= */}
        {/* 9. WHO WE ARE: Foundation & 4 Institutional Pillars */}
        {/* ========================================================================= */}
        <section className="py-20 sm:py-28 bg-gradient-to-b from-neutral-50 via-white to-neutral-50 border-y border-neutral-200 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <SectionHeading
              badge="Our Institutional Foundation"
              title="Built to Bridge Businesses and Global Markets"
              subtitle="As a dedicated logistics company, SkyLink integrates freight forwarding, customs clearance, warehousing, and international supply chain management to deliver dependable trade execution."
            />

            {/* Overlapping Visual & 4 Elevated Institutional Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mt-14">
              {/* Left 5 Cols: Layered Multi-Modal Imagery */}
              <ScrollReveal effect="fade-right" delay={100} duration={800} className="lg:col-span-5 relative">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-neutral-200/80 bg-neutral-900 group">
                  <Image
                    src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=1200&auto=format&fit=crop"
                    alt="International logistics vessel delivering cargo transportation across global trade routes"
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07192D]/70 via-transparent to-transparent" />
                </div>
                {/* Overlapping Floating Secondary Badge Card */}
                <div className="hidden sm:block absolute -bottom-6 -right-6 w-3/5 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800&auto=format&fit=crop"
                      alt="Air freight forwarding and cargo logistics terminal operations"
                      fill
                      sizes="30vw"
                      className="object-cover object-center"
                    />
                    <div className="absolute bottom-2 left-2 right-2 glass-panel-dark px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold text-white text-center">
                      GLOBAL FREIGHT DESK
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Right 7 Cols: 4 Elevated Feature Pillar Cards */}
              <StaggerContainer
                staggerDelay={90}
                baseDelay={150}
                className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5"
              >
                {[
                  {
                    title: 'Regulatory & Trade Compliance',
                    desc: 'DGFT, customs clearance, and GST advisory handled by seasoned statutory trade specialists with decades of combined legal experience.',
                    icon: Scale,
                    tag: 'Statutory Core',
                  },
                  {
                    title: 'Dedicated Logistics Provider Desk',
                    desc: 'Tailored account managers providing single-point accountability for exporters, manufacturers, and global enterprises.',
                    icon: Users,
                    tag: 'Single SLA',
                  },
                  {
                    title: 'Freight Forwarding & Warehousing Network',
                    desc: 'Strategic coordination across ocean shipping lines, air cargo carriers, bonded warehousing facilities, and 3PL logistics networks worldwide.',
                    icon: Network,
                    tag: 'Direct Capacity',
                  },
                  {
                    title: 'End-to-End Cargo Transportation',
                    desc: 'Transparent, proactive, and audit-proof execution by certified cargo freight forwarders ensuring zero delay and on-time delivery.',
                    icon: ShieldCheck,
                    tag: '100% Verified',
                  },
                ].map((block, idx) => {
                  const IconComp = block.icon;
                  return (
                    <div
                      key={idx}
                      className="p-6 rounded-3xl bg-white border border-neutral-200/80 shadow-xs hover:shadow-xl hover:border-sky-300 hover-lift sheen-card transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
                    >
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0284C7] to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0A2540] to-[#0284C7] text-white flex items-center justify-center shadow-md shadow-sky-500/20 group-hover:scale-110 group-hover:rotate-1 transition-all duration-300">
                            <IconComp className="w-5 h-5" />
                          </div>
                          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-2.5 py-1 rounded-full border border-sky-200/60">
                            {block.tag}
                          </span>
                        </div>
                        <h3 className="text-base sm:text-lg font-bold text-[#0A2540] group-hover:text-[#0284C7] transition-colors">
                          {block.title}
                        </h3>
                        <p className="mt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                          {block.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </StaggerContainer>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 10. SHIPMENT RISK PIPELINE: Interactive Visual Supply Chain Flow */}
        {/* ========================================================================= */}
        <LogisticsRiskJourney />

        {/* ========================================================================= */}
        {/* 11. GLOBAL CONNECTIVITY: Active Trade Corridors & Route Map */}
        {/* ========================================================================= */}
        <GlobalRouteMap />

        {/* ========================================================================= */}
        {/* 12. HOW SKYLINK MANAGES GLOBAL TRADE: 6-Stage Process Timeline */}
        {/* ========================================================================= */}
        <HowItWorksTimeline />

        {/* ========================================================================= */}
        {/* 13. VALUE / PERFORMANCE COMPARISON: Traditional Agent vs SkyLink */}
        {/* ========================================================================= */}
        <ValueComparisonSection />

        {/* ========================================================================= */}
        {/* 15. FINAL HIGH-IMPACT HERO CTA: Trade Launchpad */}
        {/* ========================================================================= */}
        <section className="relative py-24 sm:py-32 bg-[#07192D] text-white overflow-hidden">
          {/* Background Logistics Image with Deep Navy Overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop"
              alt="Global shipping company vessel navigating international trade routes"
              fill
              sizes="100vw"
              className="object-cover object-center opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#07192D] via-[#0A2540]/90 to-[#07192D]" />
          </div>

          <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <ScrollReveal effect="fade-down" delay={50}>
              <span className="inline-block rounded-full bg-sky-400/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-sky-300 border border-sky-400/30 backdrop-blur-md shadow-sm">
                Let&apos;s Accelerate Your Trade Operations
              </span>
            </ScrollReveal>
            <ScrollReveal effect="fade-up" delay={150}>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
                Ready to optimize your supply chain management and logistics?
              </h2>
            </ScrollReveal>
            <ScrollReveal effect="fade-up" delay={250}>
              <p className="text-base sm:text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed">
                Connect with our logistics company specialists today for a comprehensive evaluation of your trade corridors, customs tariffs, freight forwarding rates, and warehousing requirements.
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
                  variant="outline-light"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Contact Our Logistics Desk
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
