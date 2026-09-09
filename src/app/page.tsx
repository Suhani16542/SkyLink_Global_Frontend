import React from 'react';
import Image from 'next/image';
import type { Metadata } from 'next';
import { getPageMetadata } from '@/lib/seo/metadata';
import { OrganizationSchema } from '@/components/seo/OrganizationSchema';
import { LocalBusinessSchema } from '@/components/seo/LocalBusinessSchema';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { HeroSection } from '@/components/home/HeroSection';
import { StatsCounterSection } from '@/components/home/StatsCounterSection';
import { GlobalTradeFlow } from '@/components/home/GlobalTradeFlow';
import { StrategicPartnerSection } from '@/components/home/StrategicPartnerSection';
import { WhySkyLinkBento } from '@/components/home/WhySkyLinkBento';
import { ServicesBentoGrid } from '@/components/home/ServicesBentoGrid';
import { GlobalRouteMap } from '@/components/home/GlobalRouteMap';
import { HowItWorksTimeline } from '@/components/home/HowItWorksTimeline';
import { LogisticsRiskJourney } from '@/components/home/LogisticsRiskJourney';
import { IndustriesMosaic } from '@/components/home/IndustriesMosaic';
import { BuiltToBridgeSection } from '@/components/home/BuiltToBridgeSection';
import { ScrollReveal } from '@/components/animation/ScrollReveal';
import { getAllServices } from '@/data/services';
import { getAllIndustries } from '@/data/industries';
import { ArrowRight } from 'lucide-react';

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
        {/* 7. STRATEGIC TRADE PARTNER: Editorial Authority & Institutional Pillars */}
        {/* ========================================================================= */}
        <StrategicPartnerSection />

        {/* ========================================================================= */}
        {/* 8. BUILT TO BRIDGE BUSINESSES: Connecting Manufacturers, Freight & Buyers */}
        {/* ========================================================================= */}
        <BuiltToBridgeSection />

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

          <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center space-y-6">
            <ScrollReveal effect="fade-down" delay={50} className="w-full flex justify-center text-center">
              <span className="inline-block rounded-full bg-sky-400/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-sky-300 border border-sky-400/30 backdrop-blur-md shadow-sm">
                Let&apos;s Accelerate Your Trade Operations
              </span>
            </ScrollReveal>
            <ScrollReveal effect="fade-up" delay={150} className="w-full text-center">
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight text-balance text-center mx-auto">
                Ready to optimize your supply chain management and logistics?
              </h2>
            </ScrollReveal>
            <ScrollReveal effect="fade-up" delay={250} className="w-full flex justify-center text-center">
              <p className="text-base sm:text-xl text-neutral-300 max-w-2xl mx-auto text-center leading-relaxed font-normal">
                Connect with our logistics company specialists today for a comprehensive evaluation of your trade corridors, customs tariffs, freight forwarding rates, and warehousing requirements.
              </p>
            </ScrollReveal>
            <ScrollReveal effect="scale-up" delay={350} className="w-full flex justify-center text-center">
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
