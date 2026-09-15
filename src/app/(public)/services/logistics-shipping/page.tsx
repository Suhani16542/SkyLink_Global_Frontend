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
  badge: 'International Freight Forwarding & Logistics Practice',
  title:
    'International Freight Forwarding Services: Multimodal Transportation & Global Shipping',
  intro:
    'Comprehensive international freight forwarding services and end-to-end logistics solutions supporting ocean freight, air freight, multimodal transportation, and cargo protection for global trade.',
  bgImage: '/images/services/logistics-shipping.jpg',
  imageAlt:
    'International freight forwarding services - ocean freight services, air freight logistics, and multimodal transportation | SkyLink Global',
  slug: 'logistics-shipping',
  highlights: [
    { label: 'Carrier Network', value: 'Ocean & Air Freight Services' },
    { label: 'Transport Modes', value: 'Sea, Air, Road & Rail Freight' },
    { label: 'Container Planning', value: 'FCL & LCL Cargo Transportation' },
    { label: 'Incoterms Rules', value: 'FOB, CIF, DDP & EXW Guidance' },
    { label: 'Statutory Remissions', value: 'RoDTEP, RoSCTL & Drawback Support' },
    { label: 'Cargo Security', value: 'Marine Insurance & Risk Advisory' },
  ],
  sections: [
    {
      number: '01',
      title: 'Ocean Freight Services & Air Freight Forwarding',
      icon: Ship,
      points: [
        'Negotiating direct carrier contracts across primary ocean freight services and scheduled air freight services.',
        'Structuring reliable freight forwarding services across sea, air, and multimodal trade lanes.',
        'International freight rate benchmarking to optimize shipping budgets across major trade corridors.',
      ],
    },
    {
      number: '02',
      title: 'Multimodal Transportation & Road Freight Services',
      icon: TrendingDown,
      points: [
        'Coordinating multimodal transportation across sea corridors, rail lines, and road freight services.',
        'Managing detention, demurrage, and bunker adjustment factors through proactive port staging and scheduling.',
        'Assisting trading enterprises with statutory export remission claims across RoDTEP, RoSCTL, and Duty Drawback.',
      ],
    },
    {
      number: '03',
      title: 'Shipment Tracking and Visibility & Route Analytics',
      icon: Route,
      points: [
        'Utilizing continuous telemetry for comprehensive shipment tracking and visibility from origin to destination.',
        'Analyzing shipping corridors to minimize transit times, port dwell costs, and transshipment delays.',
        'Implementing contingency routing around congested terminals to maintain reliable delivery milestones.',
      ],
    },
    {
      number: '04',
      title: 'Consolidations & Cargo Transportation Services',
      icon: Boxes,
      points: [
        'Combining smaller LCL consignments into full container loads (FCL) to optimize cargo transportation services.',
        'Structured container equipment and space planning for peak shipping cycles.',
        'Coordinating with inland container depots (ICD) and container freight stations (CFS) for cargo handling.',
      ],
    },
    {
      number: '05',
      title: 'Incoterms, Contracts & Customs Clearance Support',
      icon: Scale,
      points: [
        'Providing commercial terms advisory (FOB, CIF, CFR, DDP, EXW, FCA) to clarify trade responsibilities.',
        'Ensuring accurate documentation alignment to facilitate smooth customs clearance support.',
        'Aligning cross-border trade contracts with international standard practices to eliminate operational disputes.',
      ],
    },
    {
      number: '06',
      title: 'Marine Cargo Insurance & Shipment Risk Protection',
      icon: ShieldAlert,
      points: [
        'Marine cargo insurance advisory protecting shipments against transit damage, loss, or general average declarations.',
        'Specialized coverage policies tailored for industrial machinery, perishable commodities, and general cargo.',
        'End-to-end documentation coordination for insurance claim filing and settlement support.',
      ],
    },
  ],
  conclusion:
    'By combining international freight forwarding services, multimodal transportation, shipment tracking and visibility, and customs clearance support, SkyLink Global delivers end-to-end logistics solutions that strengthen global supply chain solutions and protect cross-border shipments.',
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
      'Comprehensive ocean freight services and scheduled air freight services via carrier contracts',
      'Optimized transit times and reduced port dwell through multimodal route analytics',
      'End-to-end shipment tracking and visibility and customs clearance support',
      'Structured cargo protection through marine insurance advisory and Incoterms clarity',
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
        imageAlt={serviceData.imageAlt}
        sections={serviceData.sections}
        conclusion={serviceData.conclusion}
        highlights={serviceData.highlights}
        slug={serviceData.slug}
      />
    </>
  );
}
