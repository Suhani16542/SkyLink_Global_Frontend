import React from 'react';
import type { Metadata } from 'next';
import { getPageMetadata } from '@/lib/seo/metadata';
import { ServiceDetailView } from '@/components/services/ServiceDetailView';
import { ServiceSchema } from '@/components/seo/ServiceSchema';
import {
  Snowflake,
  ThermometerSnowflake,
  Radio,
  ShieldCheck,
  Zap,
  Building2,
  CheckCircle2,
  FileCheck2,
} from 'lucide-react';

export const metadata: Metadata = getPageMetadata('servicesColdChainSolutions');

const serviceData = {
  badge: 'Temperature Controlled Logistics & Cold Chain Solutions',
  title:
    'Cold Chain Logistics & Temperature Controlled Logistics: Cold Chain Solutions for Pharma & Perishables',
  intro:
    'Comprehensive cold chain logistics and temperature controlled logistics designed for pharmaceutical cold chain logistics and perishable cargo, integrating cold chain transportation with active cold chain monitoring.',
  bgImage: '/images/services/cold-chain-solutions.jpg',
  imageAlt:
    'Cold chain logistics and cold chain solutions - temperature controlled logistics and pharmaceutical logistics | SkyLink Global',
  slug: 'cold-chain-solutions',
  highlights: [
    { label: 'Logistics Scope', value: 'Cold Chain Logistics & Solutions' },
    { label: 'Monitoring Tech', value: 'Cold Chain Monitoring & Telemetry' },
    { label: 'Transport Network', value: 'Cold Storage Transport & Reefer Fleet' },
    { label: 'Pharma Practice', value: 'Pharmaceutical Cold Chain Logistics' },
  ],
  sections: [
    {
      number: '01',
      title: 'Temperature Controlled Logistics & Multi-Zone Management',
      icon: ThermometerSnowflake,
      points: [
        'Dedicated multi-zone thermal regimes supporting pharmaceutical logistics, biologics, vaccines (+2°C to +8°C), and frozen perishable goods.',
        'Deploying active reefer fleets and specialized insulation materials to ensure dependable cold storage transport across corridors.',
        'Continuous calibration and thermal mapping to maintain unbroken temperature controlled logistics from origin to destination.',
      ],
    },
    {
      number: '02',
      title: 'Cold Chain Monitoring & Telemetry Systems',
      icon: Radio,
      points: [
        'Real-time data-loggers and telemetry providing continuous cold chain monitoring of temperature, humidity, and transit GPS.',
        'Threshold alert protocols enabling timely intervention to maintain product integrity across the entire cold chain supply chain.',
        'Downloadable temperature records and audit-ready data logs ensuring full chain-of-custody compliance for sensitive cargo.',
      ],
    },
    {
      number: '03',
      title: 'Cold Chain Transportation & Port Handling',
      icon: Zap,
      points: [
        'Coordinating cold chain transportation with priority terminal shore-power plug-in to eliminate temperature spikes during port staging.',
        'Direct port delivery workflows designed to expedite cold storage transport and reduce container dwell times.',
        'On-ground operational coordinators supporting uninterrupted equipment power during staging and vessel loading.',
      ],
    },
    {
      number: '04',
      title: 'Cold Storage and Distribution & Regulatory Clearance',
      icon: ShieldCheck,
      points: [
        'Integrated cold storage and distribution facilities offering bonded and non-bonded climate-controlled staging.',
        'Pre-arrival documentation and regulatory agency liaison tailored for pharmaceutical cold chain logistics and perishable products.',
        'Specialized handling procedures and documentation support for temperature-sensitive customs appraisal and health inspections.',
      ],
    },
  ],
  conclusion:
    'SkyLink Global delivers end-to-end cold chain solutions and temperature controlled logistics. Combining cold chain transportation, continuous cold chain monitoring, pharmaceutical logistics, and integrated cold storage and distribution, we protect sensitive cargo across the global cold chain supply chain.',
};

export default function ColdChainSolutionsPage() {
  const schemaService = {
    id: serviceData.slug,
    title: serviceData.title,
    slug: serviceData.slug,
    shortDescription: serviceData.intro,
    description: serviceData.intro,
    features: serviceData.sections.flatMap((s) => s.points),
    benefits: [
      'Multi-zone temperature controlled logistics and active cold chain monitoring',
      'Coordinated cold chain transportation and priority port shore-power plug-in',
      'Expedited statutory regulatory liaison for pharmaceutical cold chain logistics',
      'Reliable cold storage and distribution network across global trade corridors',
    ],
    faqs: [
      {
        question: 'What temperature ranges are supported under SkyLink cold chain logistics?',
        answer:
          'We manage multi-zone temperature regimes ranging from deep freeze (-25°C to -40°C) for seafood/biologics, chilled (+2°C to +8°C) for vaccines and pharmaceutical logistics, to controlled ambient (+15°C to +25°C).',
      },
      {
        question: 'How does cold chain monitoring protect temperature sensitive cargo?',
        answer:
          'Through real-time telemetry, continuous data logging, and automated threshold alerts, our cold chain monitoring system provides full chain-of-custody visibility across the cold chain supply chain.',
      },
    ],
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
