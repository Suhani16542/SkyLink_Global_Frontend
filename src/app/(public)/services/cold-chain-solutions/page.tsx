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

export const metadata: Metadata = getPageMetadata('servicesColdChainSolutions', {
  title: 'Cold Chain Solutions: GDP Reefer Logistics & IoT Telemetry | SkyLink Global',
  description:
    'End-to-end temperature-controlled cold chain logistics for pharmaceuticals, seafood, and perishables with real-time IoT monitoring and priority port release.',
});

const serviceData = {
  badge: 'GDP-Compliant Temperature-Controlled Logistics',
  title: 'Cold Chain Solutions for Pharma & Perishables',
  intro:
    'Unbroken temperature control (-25°C to +25°C) powered by satellite IoT telemetry, GDP-validated cold storage, guaranteed terminal shore-power plug-in, and expedited green-channel customs clearance.',
  bgImage: '/images/services/cold-chain-solutions.jpg',
  slug: 'cold-chain-solutions',
  highlights: [
    { label: 'Thermal Range', value: '-25°C to +25°C Precision' },
    { label: 'Telemetry', value: '24/7 Satellite IoT & Shock' },
    { label: 'Compliance', value: 'WHO & GDP Certified' },
    { label: 'Port Advantage', value: 'Guaranteed Shore-Power & DPD' },
  ],
  sections: [
    {
      number: '01',
      title: 'Multi-Zone Precision Temperature Control',
      icon: ThermometerSnowflake,
      points: [
        'Dedicated thermal regimes for biologics, vaccines (+2°C to +8°C), frozen seafood (-20°C to -40°C), and controlled room temperature pharma (+15°C to +25°C).',
        'State-of-the-art active reefer fleets and Phase Change Material (PCM) passive packaging for seamless intermodal transfers.',
        'Continuous calibration and thermal mapping preventing warm spots and cold shocks across every corridor.',
      ],
    },
    {
      number: '02',
      title: 'Real-Time Satellite IoT & Shock Telemetry',
      icon: Radio,
      points: [
        'Live cellular/satellite data-loggers streaming temperature, humidity, door-open events, and route GPS directly to client portals.',
        'Automated early-warning triggers and instant SMS/email alerts for proactive intervention before temperature deviations occur.',
        'Downloadable, audit-proof chain-of-custody data logs compliant with US FDA 21 CFR Part 11 and EU GDP norms.',
      ],
    },
    {
      number: '03',
      title: 'Port Ramp, Shore-Power & Zero-Dwell Priority',
      icon: Zap,
      points: [
        'Guaranteed immediate reefer terminal plug-in and shore-power monitoring upon port gate-in to eliminate temperature spikes.',
        'Priority Direct Port Delivery (DPD) clearance reducing port dwell times from days to hours.',
        'Dedicated 24/7 port operational marshals ensuring uninterrupted power during container staging and vessel loading.',
      ],
    },
    {
      number: '04',
      title: 'Statutory Health & Customs Clearance (ADC / EIA / FSSAI)',
      icon: ShieldCheck,
      points: [
        'Pre-arrival electronic filing and expedited sampling liaison with Assistant Drug Controller (ADC), CDSCO, and EIA authorities.',
        'Zero-delay customs clearance under green-channel protocols eliminating costly demurrage and risk of cargo spoilage.',
        'Expert tariff classification and specialized temperature-sensitive handling documentation support.',
      ],
    },
  ],
  conclusion:
    'SkyLink Cold Chain Solutions eliminate thermal risks in cross-border trade. Combining active IoT telemetry, GDP-validated cold infrastructure, and single-window statutory customs coordination, we protect your high-value cargo from factory floor to global destination.',
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
      'Unbroken temperature control (-25°C to +25°C) with 24/7 IoT satellite telemetry',
      'Guaranteed port shore-power plug-in and direct port delivery',
      'Priority green-channel customs clearance with ADC, EIA, and FSSAI agencies',
      'Complete GDP and US FDA audit-ready temperature log certificates',
    ],
    faqs: [
      {
        question: 'What temperature ranges do SkyLink Cold Chain Solutions handle?',
        answer:
          'We provide active cooling from deep-freeze (-40°C to -20°C) for seafood and biologics, chilled (+2°C to +8°C) for vaccines and pharmaceuticals, to controlled ambient (+15°C to +25°C).',
      },
      {
        question: 'How does SkyLink safeguard against power failure during port delays?',
        answer:
          'We secure priority terminal plug-in with continuous voltage telemetry, backup clip-on gensets, and dedicated port desk coordinators on-site 24/7.',
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
        sections={serviceData.sections}
        conclusion={serviceData.conclusion}
        highlights={serviceData.highlights}
        slug={serviceData.slug}
      />
    </>
  );
}
