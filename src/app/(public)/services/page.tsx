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

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h2 className="text-xl font-bold text-neutral-900 group-hover:text-[#0284C7] transition-colors">
                      <Link href={`/services/${service.slug}`}>{service.title}</Link>
                    </h2>
                    <p className="mt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed line-clamp-3">
                      {service.shortDescription}
                    </p>

                    <div className="mt-4 pt-3 border-t border-neutral-100 space-y-1.5">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block mb-1">
                        Core Capabilities
                      </span>
                      {service.features.slice(0, 3).map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-neutral-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#0284C7] shrink-0" />
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-neutral-100 flex items-center justify-between">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0284C7] hover:text-[#0369A1] transition-colors"
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
            <h2 className="text-2xl sm:text-4xl font-bold text-white">
              Need a custom trade package or dedicated EXIM consultation?
            </h2>
          </ScrollReveal>
          <ScrollReveal effect="fade-up" delay={80}>
            <p className="text-sm sm:text-base text-neutral-300">
              Our trade compliance team can structure a tailored proposal for your business requirements.
            </p>
          </ScrollReveal>
          <ScrollReveal effect="scale-up" delay={160} className="pt-4 flex justify-center gap-4">
            <Button href="/request-consultation" variant="secondary" size="md">
              Request Free Proposal
            </Button>
            <Button href="/contact" variant="outline" size="md" className="text-white border-white/20 hover:bg-white/10">
              Contact Support
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
