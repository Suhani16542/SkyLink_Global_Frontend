import React from 'react';
import type { Metadata } from 'next';
import { getPageMetadata } from '@/lib/seo/metadata';
import { ServiceDetailView } from '@/components/services/ServiceDetailView';
import { ServiceSchema } from '@/components/seo/ServiceSchema';
import {
  Ship,
  Route,
  Boxes,
  Scale,
  ShieldAlert,
  TrendingDown,
} from 'lucide-react';

export const metadata: Metadata = getPageMetadata('servicesLogisticsShipping');


const serviceData = {
  badge: 'Global Freight & Multimodal Logistics',
  title:
    'Logistics & Shipping: Freight Negotiation, Cost Optimization, Route Analytics, Consolidations & Marine Insurance',
  intro:
    'Strong logistics and shipping management ensures exporters achieve freight cost optimization, timely delivery, and comprehensive risk protection in global trade.',
  bgImage: '/images/services/logistics-shipping.jpg',
  slug: 'logistics-shipping',
  highlights: [
    { label: 'Carrier Network', value: 'Direct Ocean & Air Contracts' },
    { label: 'Cost Reduction', value: '15%–25% Average Savings' },
    { label: 'Container Space', value: 'Guaranteed Allocation' },
    { label: 'Incoterms Rules', value: 'FOB, CIF, DDP, EXW' },
    { label: 'Statutory Claims', value: 'RoDTEP, RoSCTL & Drawback' },
    { label: 'Cargo Protection', value: 'Comprehensive Marine Cover' },
  ],
  sections: [
    {
      number: '01',
      title: 'Freight Negotiation & Rate Benchmarking',
      icon: Ship,
      points: [
        'Securing competitive volume-contracted rates directly with tier-1 ocean carriers and air freighters.',
        'Balancing cost with delivery timelines across sea, air, and multimodal transport corridors.',
        'Long-term carrier contracts and global freight rate benchmarking to eliminate intermediary markups.',
      ],
    },
    {
      number: '02',
      title: 'Freight Cost Optimization & Tariff Advisory',
      icon: TrendingDown,
      points: [
        'Optimizing container load factor and cubic meter utilization to reduce overall shipping costs by 15%–25%.',
        'Detention, demurrage, and bunker fuel adjustment factor (BAF) mitigation through proactive port planning.',
        'Maximizing statutory export remissions and duty drawbacks across RoDTEP, RoSCTL, Advance Authorisation, and EPCG schemes.',
      ],
    },
    {
      number: '03',
      title: 'Route Optimization & Corridor Analytics',
      icon: Route,
      points: [
        'Identifying the most efficient multimodal shipping routes to minimize transit time and port dwell costs.',
        'Using real-time telemetry and supply chain analytics for continuous route tracking and contingency rerouting.',
        'Bypassing port congestion points by leveraging alternate regional transshipment hubs.',
      ],
    },
    {
      number: '04',
      title: 'Consolidations & Space Allocations',
      icon: Boxes,
      points: [
        'Combining smaller LCL shipments into full container loads (FCL) for substantial cost savings.',
        'Guaranteed vessel space and equipment allocation during peak trade seasons and holiday surges.',
        'Strategic partnerships with inland container depots (ICD) and CFS facilities for seamless handling.',
      ],
    },
    {
      number: '05',
      title: 'Incoterms & Contract Advisory',
      icon: Scale,
      points: [
        'Expert guidance on international commercial terms (FOB, CIF, CFR, DDP, EXW, FCA).',
        'Ensuring clear demarcation of freight responsibility, risk transfer point, and marine insurance liabilities.',
        'Aligning international sales contracts with global ICC standard guidelines to prevent disputes.',
      ],
    },
    {
      number: '06',
      title: 'Marine Cargo Insurance & Risk Protection',
      icon: ShieldAlert,
      points: [
        'Comprehensive marine cargo insurance coverage against transit loss, damage, theft, or general average declaration.',
        'Specialized policies and endorsements for high-value machinery, perishables, and GDP-compliant cold chain goods.',
        'Dedicated on-ground claims documentation and negotiation support ensuring expedited settlement.',
      ],
    },
  ],
  conclusion:
    'By integrating freight negotiation, freight cost optimization, route analytics, consolidations, Incoterms advisory, and marine insurance, exporters streamline supply chains, reduce logistics spend, and eliminate cross-border risks—enhancing long-term international competitiveness.',
};

export default function LogisticsShippingPage() {
  const schemaService = {
    id: serviceData.slug,
    title: serviceData.title,
    slug: serviceData.slug,
    shortDescription: serviceData.intro,
    description: serviceData.intro,
    features: serviceData.sections.flatMap((s) => s.points),
    benefits: [
      'Competitive ocean and air freight rates via direct carrier negotiation',
      'Minimised transit times and congestion bypass through route optimization',
      'Complete risk indemnification through specialized marine insurance and Incoterms clarity',
    ],
    faqs: [],
    seoTitle: metadata.title as string,
    seoDescription: metadata.description as string,
  };

  return (
    <>
      <ServiceSchema service={schemaService} />
      <ServiceDetailView
        badge={serviceData.badge}
        title={serviceData.title}
        intro={serviceData.intro}
        bgImage={serviceData.bgImage}
        sections={serviceData.sections}
        conclusion={serviceData.conclusion}
        highlights={serviceData.highlights}
        slug={serviceData.slug}
      />
    </>
  );
}
