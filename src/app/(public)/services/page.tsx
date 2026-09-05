import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo/metadata';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/animation/ScrollReveal';
import { StaggerContainer } from '@/components/animation/StaggerContainer';
import { getAllServices } from '@/data/services';
import {
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

export const metadata: Metadata = constructMetadata({
  title: 'EXIM Consultancy & Global Logistics Services | SkyLink Global Services',
  description:
    'Comprehensive directory of SkyLink services: DGFT licensing, export incentives (RoDTEP, EPCG), customs compliance, ocean/air shipping, cold chain, tax advisory, and trade risk management.',
  path: '/services',
});

const serviceImages: Record<string, string> = {
  'logistics-shipping': '/images/services/logistics-shipping.jpg',
  'warehousing-solutions': '/images/services/warehousing-solutions.jpg',
  'warehousing-distribution': '/images/services/warehousing-solutions.jpg',
  'cold-chain-solutions': '/images/services/cold-chain-solutions.jpg',
  'export-incentives': '/images/services/export-incentives.jpg',
  'tax-gst-compliance': '/images/services/tax-gst-compliance.jpg',
  'tax-gst-advisory': '/images/services/tax-gst-compliance.jpg',
  'documentation-liaison': '/images/services/documentation-liaison.jpg',
  'risk-management': '/images/services/risk-management.jpg',
  'trade-risk-management': '/images/services/risk-management.jpg',
  'customs-compliance': '/images/services/risk-management.jpg',
  'licensing-registrations': '/images/services/documentation-liaison.jpg',
};

export default async function ServicesPage() {
  const services = await getAllServices();

  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section className="bg-[#0A2540] text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs
            items={[
              { name: 'Home', item: '/' },
              { name: 'Services', item: '/services' },
            ]}
            className="text-neutral-400"
          />
          <div className="max-w-3xl space-y-4">
            <ScrollReveal effect="fade-down" delay={0}>
              <span className="text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-400/10 px-3 py-1 rounded-full border border-sky-400/30">
                End-to-End Capabilities
              </span>
            </ScrollReveal>
            <ScrollReveal effect="fade-up" delay={80}>
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
                EXIM Consultancy &amp; Global Logistics Services
              </h1>
            </ScrollReveal>
            <ScrollReveal effect="fade-up" delay={160}>
              <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
                Comprehensive foreign trade facilitation, statutory licensing, carrier negotiations, customs brokerage, and specialized temperature-controlled supply chain solutions.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services Grid with Real Imagery & Staggered Reveal */}
      <section className="py-20 sm:py-28 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Full Service Catalog"
            title="Strategic Services for Exporters & Importers"
            subtitle="Explore our specialized trade capabilities designed to eliminate border friction and maximize international profitability."
          />

          <StaggerContainer
            staggerDelay={80}
            baseDelay={100}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
          >
            {services.map((service) => (
              <div
                key={service.id}
                className="rounded-3xl border border-neutral-200 bg-white overflow-hidden hover-lift shadow-sm flex flex-col justify-between group h-full"
              >
                {/* Visual Thumbnail */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-900">
                  <Image
                    src={serviceImages[service.slug] || serviceImages['logistics-shipping']}
                    alt={`SkyLink ${service.title}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07192D]/80 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-4 text-[10px] font-mono font-bold uppercase tracking-wider text-sky-300 bg-[#07192D]/80 px-2.5 py-1 rounded-md border border-white/10 backdrop-blur-md">
                    TRADE PRACTICE
                  </span>
                </div>

                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 group-hover:text-[#0284C7] transition-colors">
                      <Link href={`/services/${service.slug}`}>{service.title}</Link>
                    </h2>
                    <p className="mt-2.5 text-sm sm:text-[15px] text-neutral-600 leading-relaxed font-normal line-clamp-3">
                      {service.shortDescription}
                    </p>

                    <div className="mt-4 pt-3 border-t border-neutral-100 space-y-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 block mb-1">
                        Core Capabilities
                      </span>
                      {service.features.slice(0, 3).map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-neutral-700 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#0284C7] shrink-0" />
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-neutral-100 flex items-center justify-between">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0284C7] hover:text-[#0369A1] transition-colors"
                    >
                      <span>Detailed Specifications</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-[#07192D] text-white text-center">
        <div className="mx-auto max-w-4xl px-4 space-y-4">
          <ScrollReveal effect="fade-up" delay={0}>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Need a custom trade package or dedicated EXIM consultation?
            </h2>
          </ScrollReveal>
          <ScrollReveal effect="fade-up" delay={80}>
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-normal">
              Our trade compliance team can structure a tailored proposal for your business requirements.
            </p>
          </ScrollReveal>
          <ScrollReveal effect="scale-up" delay={160} className="pt-4 flex flex-wrap justify-center gap-4">
            <Button href="/request-consultation" variant="secondary" size="lg" className="font-semibold">
              Request Free Proposal
            </Button>
            <Button href="/contact" variant="outline-light" size="lg" className="font-semibold">
              Contact Support
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
