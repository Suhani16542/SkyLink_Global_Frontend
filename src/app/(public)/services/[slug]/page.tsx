import React from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getAllServices, getServiceBySlug } from '@/data/services';
import { constructServiceMetadata } from '@/lib/seo/metadata';
import { ServiceSchema } from '@/components/seo/ServiceSchema';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { CheckCircle2, ShieldCheck, HelpCircle } from 'lucide-react';

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

const serviceImages: Record<string, string> = {
  'licensing-registrations': 'https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=1200&auto=format&fit=crop',
  'export-incentives': 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop',
  'documentation-liaison': 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop',
  'logistics-shipping': 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?q=80&w=1200&auto=format&fit=crop',
  'customs-compliance': 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1200&auto=format&fit=crop',
  'warehousing-distribution': 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop',
  'cold-chain-solutions': 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=1200&auto=format&fit=crop',
  'tax-gst-advisory': 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop',
  'trade-risk-management': 'https://images.unsplash.com/photo-1505705694340-019e1e335916?q=80&w=1200&auto=format&fit=crop',
};

export async function generateStaticParams() {
  const services = await getAllServices();
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service) {
    return {
      title: 'Service Not Found | SkyLink Global Services',
    };
  }

  return constructServiceMetadata(service);
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const bgImage = serviceImages[service.slug] || serviceImages['logistics-shipping'];

  return (
    <div className="bg-white">
      <ServiceSchema service={service} />

      {/* Hero Header with Background Visual */}
      <section className="relative bg-[#0A2540] text-white py-16 sm:py-24 overflow-hidden">
        {/* Background Logistics Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={bgImage}
            alt={service.title}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07192D] via-[#0A2540]/95 to-[#07192D]" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs
            items={[
              { name: 'Home', item: '/' },
              { name: 'Services', item: '/services' },
              { name: service.title, item: `/services/${service.slug}` },
            ]}
            className="text-neutral-400"
          />

          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-400/10 px-3 py-1 rounded-full border border-sky-400/30">
              Specialized Service Practice
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              {service.title}
            </h1>
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
              {service.shortDescription}
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <Button href="/request-consultation" variant="secondary" size="md">
                Request Service Proposal
              </Button>
              <Button href="/contact" variant="outline" size="md" className="text-white border-white/20 hover:bg-white/10">
                Speak with a Consultant
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left / Center 8 Cols */}
          <div className="lg:col-span-8 space-y-12">
            {/* Visual Overview Card */}
            <div className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-xl border border-neutral-200 bg-neutral-900">
              <Image
                src={bgImage}
                alt={`${service.title} operational execution`}
                fill
                sizes="(max-width: 768px) 100vw, 65vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07192D]/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 glass-panel-dark p-4 rounded-2xl border border-white/20">
                <span className="text-[10px] uppercase font-bold text-sky-400 block tracking-wider">
                  SkyLink Verified Protocol
                </span>
                <span className="text-xs sm:text-sm font-bold text-white">
                  Statutory DGFT &amp; Customs Authorized Execution
                </span>
              </div>
            </div>

            {/* Detailed Description */}
            <section aria-labelledby="service-overview-heading">
              <h2 id="service-overview-heading" className="text-2xl sm:text-3xl font-bold text-neutral-900">
                Service Overview &amp; Strategic Scope
              </h2>
              <div className="mt-4 text-base text-neutral-700 leading-relaxed space-y-4">
                <p>{service.description}</p>
                <p>
                  At SkyLink Global Services, we integrate deep regulatory intelligence with operational execution to ensure this service delivers measurable cost optimization, legal protection, and transit acceleration for your enterprise.
                </p>
              </div>
            </section>

            {/* Core Capabilities */}
            {service.features.length > 0 && (
              <section aria-labelledby="capabilities-heading" className="border-t border-neutral-200 pt-8">
                <h2 id="capabilities-heading" className="text-2xl font-bold text-neutral-900">
                  Key Service Capabilities
                </h2>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="rounded-2xl border border-neutral-200 bg-neutral-50/70 p-5 flex items-start gap-3 hover-lift transition-all"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#0284C7] shrink-0 mt-0.5" />
                      <span className="text-sm font-bold text-neutral-800 leading-snug">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Business Benefits */}
            {service.benefits.length > 0 && (
              <section aria-labelledby="benefits-heading" className="border-t border-neutral-200 pt-8">
                <h2 id="benefits-heading" className="text-2xl font-bold text-neutral-900">
                  Commercial Benefits for Your Enterprise
                </h2>
                <div className="mt-6 space-y-3">
                  {service.benefits.map((benefit, idx) => (
                    <div
                      key={idx}
                      className="rounded-2xl bg-sky-50/60 border border-sky-100 p-4.5 flex items-start gap-3"
                    >
                      <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-sm text-neutral-800 font-semibold leading-relaxed">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Step-by-Step Execution Framework */}
            <section aria-labelledby="process-heading" className="border-t border-neutral-200 pt-8">
              <h2 id="process-heading" className="text-2xl font-bold text-neutral-900">
                How SkyLink Executes This Service
              </h2>
              <div className="mt-6 space-y-4">
                {[
                  {
                    step: 'Stage 1',
                    title: 'Requirement Scoping & Documentation Audit',
                    desc: 'We review existing product catalogs, HS codes, shipping schedules, and statutory licenses to detect bottlenecks.',
                  },
                  {
                    step: 'Stage 2',
                    title: 'Statutory Structuring & Tariff Optimization',
                    desc: 'We map eligible incentive schemes (RoDTEP, EPCG, Advance Authorisation) and establish zero-error compliance templates.',
                  },
                  {
                    step: 'Stage 3',
                    title: 'Direct Carrier & Port Coordination',
                    desc: 'We execute vessel bookings, container stuffing, customs green-channel filings, and telemetry monitoring.',
                  },
                  {
                    step: 'Stage 4',
                    title: 'Post-Shipment Realization & Closure',
                    desc: 'We reconcile e-BRC realization, finalize duty drawdowns, and deliver complete audit-ready records.',
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col sm:flex-row items-start sm:items-center gap-4 rounded-2xl border border-neutral-200 p-5 bg-white shadow-xs hover-lift"
                  >
                    <span className="rounded-lg bg-[#0A2540] px-3.5 py-1.5 text-xs font-bold text-sky-400 shrink-0">
                      {item.step}
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-neutral-900">{item.title}</h3>
                      <p className="mt-1 text-xs sm:text-sm text-neutral-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQs */}
            {service.faqs && service.faqs.length > 0 && (
              <section aria-labelledby="faqs-heading" className="border-t border-neutral-200 pt-8">
                <h2 id="faqs-heading" className="text-2xl font-bold text-neutral-900 flex items-center gap-2">
                  <HelpCircle className="w-6 h-6 text-[#0284C7]" />
                  Frequently Asked Questions
                </h2>
                <div className="mt-6 space-y-4">
                  {service.faqs.map((faq, idx) => (
                    <Card key={idx} variant="bordered" className="p-6 bg-neutral-50/50">
                      <h3 className="text-base font-bold text-neutral-900">{faq.question}</h3>
                      <p className="mt-2 text-sm text-neutral-600 leading-relaxed">{faq.answer}</p>
                    </Card>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Right 4 Cols: Sticky Inquiry Card */}
          <div className="lg:col-span-4 space-y-6">
            <div className="sticky top-24 space-y-6">
              {/* Consultation Card */}
              <Card variant="bordered" className="p-6 bg-gradient-to-b from-[#0A2540] to-[#07192D] text-white shadow-xl rounded-3xl">
                <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
                  Dedicated Support
                </span>
                <h3 className="text-xl font-bold text-white mt-1">
                  Need assistance with {service.title}?
                </h3>
                <p className="mt-2 text-xs text-neutral-300 leading-relaxed">
                  Speak directly with an EXIM trade specialist to evaluate your trade lanes and statutory documentation.
                </p>

                <div className="mt-6 space-y-3">
                  <Button
                    href="/request-consultation"
                    variant="secondary"
                    size="md"
                    className="w-full justify-center shadow-lg shadow-sky-500/20"
                  >
                    Request Consultation
                  </Button>
                  <Button
                    href="/contact"
                    variant="outline"
                    size="md"
                    className="w-full justify-center text-white border-white/20 hover:bg-white/10"
                  >
                    Contact Trade Desk
                  </Button>
                </div>
              </Card>

              {/* Trust Badge Card */}
              <Card variant="bordered" className="p-5 bg-neutral-50 border-neutral-200 text-xs text-neutral-600 space-y-3 rounded-2xl">
                <div className="flex items-center gap-2 text-neutral-900 font-bold">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>The SkyLink Guarantee</span>
                </div>
                <p className="leading-relaxed">
                  Every trade advisory and freight assignment is backed by licensed customs brokerage and verified statutory liaison.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
