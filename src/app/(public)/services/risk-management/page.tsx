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
  badge: 'Trade Defense & Risk Advisory',
  title: 'Risk Management in Exports: Insurance, Contingency Planning & Claims Support',
  intro:
    'Effective risk management is essential for exporters to safeguard against financial losses, shipment delays, and unforeseen disruptions.',
  bgImage: '/images/services/risk-management.jpg',
  slug: 'risk-management',
  highlights: [
    { label: 'Insurance Advisory', value: 'Marine & Specialized Policies' },
    { label: 'Contingency Model', value: 'Scenario Planning & Backups' },
    { label: 'Claims Recovery', value: 'Timely Settlement Support' },
    { label: 'Liquidity Protection', value: 'Zero Financial Disruption' },
  ],
  sections: [
    {
      number: '01',
      title: 'Insurance Coverage',
      icon: ShieldCheck,
      points: [
        'Marine cargo insurance protects goods against theft, damage, or loss during transit.',
        'Specialized policies (e.g., cold chain insurance, political risk insurance) provide coverage for sensitive cargo and high-risk destinations.',
        'Adequate insurance ensures exporters can recover costs and maintain business continuity.',
      ],
    },
    {
      number: '02',
      title: 'Contingency Planning',
      icon: Compass,
      points: [
        'Developing backup logistics arrangements (alternate carriers, routes, or warehouses) minimizes disruption during strikes, port congestion, or natural disasters.',
        'Risk assessments and scenario planning help exporters prepare for currency fluctuations, regulatory changes, or geopolitical instability.',
        'Contingency plans reduce downtime and safeguard contractual obligations.',
      ],
    },
    {
      number: '03',
      title: 'Claims Support',
      icon: LifeBuoy,
      points: [
        'Proper documentation (shipping bills, invoices, insurance certificates) is critical for smooth claims processing.',
        'Consultants assist exporters in filing claims, negotiating settlements, and ensuring timely compensation.',
        'Efficient claims handling prevents liquidity crunch and sustains trust with overseas buyers.',
      ],
    },
  ],
  conclusion:
    'By combining insurance coverage, proactive contingency planning, and strong claims support, exporters can mitigate risks, protect their financial interests, and maintain reliability in global trade.',
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
      'Comprehensive marine and specialized cargo insurance coverage',
      'Backup logistics and scenario contingency reducing shipment downtime',
      'End-to-end documentation and negotiation for accelerated claims settlement',
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
