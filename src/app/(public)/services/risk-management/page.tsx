import React from 'react';
import type { Metadata } from 'next';
import { getPageMetadata } from '@/lib/seo/metadata';
import { ServiceDetailView } from '@/components/services/ServiceDetailView';
import { ServiceSchema } from '@/components/seo/ServiceSchema';
import {
  ShieldAlert,
  ShieldCheck,
  LifeBuoy,
  FileCheck2,
  Compass,
} from 'lucide-react';

export const metadata: Metadata = getPageMetadata('servicesRiskManagement');


const serviceData = {
  badge: 'Trade Risk Management & Insurance Practice',
  title: 'Risk Management in Exports: Marine Insurance, Contingency Planning & Claims Support',
  intro:
    'Effective trade risk management is essential for exporters to safeguard international cargo through comprehensive marine insurance, proactive contingency planning, and dedicated claims support.',
  bgImage: '/images/services/risk-management.jpg',
  imageAlt:
    'Risk management in exports - marine cargo insurance, cargo insurance, contingency planning, and export insurance | SkyLink Global',
  slug: 'risk-management',
  highlights: [
    { label: 'Insurance Scope', value: 'Marine Cargo Insurance & Cover' },
    { label: 'Contingency Model', value: 'Contingency Planning & Backups' },
    { label: 'Cargo Protection', value: 'Export Insurance & Claims Support' },
    { label: 'Risk Advisory', value: 'Trade Risk Management Protocols' },
  ],
  sections: [
    {
      number: '01',
      title: 'Marine Cargo Insurance & Cargo Insurance Coverage',
      icon: ShieldCheck,
      points: [
        'Structured marine cargo insurance policies protecting shipments against physical damage, theft, or general average declarations during international transit.',
        'Tailored cargo insurance and marine transit insurance endorsements designed for temperature-sensitive commodities, high-value machinery, and project cargo.',
        'Comprehensive freight insurance and shipment insurance advisory ensuring seamless policy coverage across ocean, air, and multimodal transport corridors.',
      ],
    },
    {
      number: '02',
      title: 'Contingency Planning & Supply Chain Continuity',
      icon: Compass,
      points: [
        'Developing robust contingency planning frameworks with alternate carriers, backup corridors, and secondary logistics hubs to minimize disruption.',
        'Scenario evaluations assessing geopolitical fluctuations, port congestion risks, and trade lane liabilities.',
        'Proactive operational mitigation strategies that reduce transit downtime and maintain contractual delivery schedules under disciplined trade risk management.',
      ],
    },
    {
      number: '03',
      title: 'Export Credit Insurance, Export Insurance & Claims Support',
      icon: LifeBuoy,
      points: [
        'Advising trading enterprises on export credit insurance and export insurance frameworks to mitigate buyer payment defaults and commercial insolvency risks.',
        'End-to-end documentation support—including shipping bills, commercial invoices, and survey reports—for accelerated insurance claims processing.',
        'Direct assistance in negotiating settlements with underwriters to protect cash flow and sustain business continuity under marine insurance contracts.',
      ],
    },
  ],
  conclusion:
    'By combining marine insurance, marine cargo insurance, freight insurance, export credit insurance, and proactive contingency planning, SkyLink Global delivers comprehensive trade risk management to protect exporters against transit losses and financial disruptions.',
};

export default function RiskManagementPage() {
  const schemaService = {
    id: serviceData.slug,
    title: serviceData.title,
    slug: serviceData.slug,
    shortDescription: serviceData.intro,
    description: serviceData.intro,
    features: serviceData.sections.flatMap((s) => s.points),
    benefits: [
      'Comprehensive marine cargo insurance and tailored cargo insurance coverage',
      'Disruption mitigation through proactive contingency planning and backup logistics',
      'Dedicated claims support and export credit insurance advisory',
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
