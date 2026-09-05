import React from 'react';
import type { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo/metadata';
import { ServiceDetailView } from '@/components/services/ServiceDetailView';
import { ServiceSchema } from '@/components/seo/ServiceSchema';
import {
  FileText,
  FileSpreadsheet,
  Globe2,
  Server,
  KeyRound,
  ClipboardCheck,
} from 'lucide-react';

export const metadata: Metadata = constructMetadata({
  title:
    'Documentation & Liaison: Custom Invoice, Commercial Invoice, Shipping Bills, CoO, ICEGATE, AD Code & Inspection Agency Liaison | SkyLink Global Services',
  description:
    'Accurate documentation and effective liaison with authorities are vital for exporters to ensure compliance, avoid delays, and secure incentives. End-to-end support in preparing, validating, and coordinating essential paperwork.',
  path: '/services/documentation-liaison',
});

const serviceData = {
  badge: 'Documentation & Regulatory Liaison',
  title:
    'Documentation & Liaison: Custom Invoice, Commercial Invoice, Shipping Bills, CoO, ICEGATE, AD Code & Inspection Agency Liaison',
  intro:
    'Accurate documentation and effective liaison with authorities are vital for exporters to ensure compliance, avoid delays, and secure incentives. As an export consultant, the role encompasses end-to-end support in preparing, validating, and coordinating essential paperwork.',
  bgImage: '/images/services/documentation-liaison.jpg',
  slug: 'documentation-liaison',
  highlights: [
    { label: 'Documentation Standard', value: 'Zero-Discrepancy' },
    { label: 'Customs Gateway', value: 'ICEGATE & e-SANCHIT' },
    { label: 'Trade Agreements', value: 'FTA / PTA Compliant' },
    { label: 'Agency Liaison', value: 'Authorized Chambers & CHA' },
  ],
  sections: [
    {
      number: '01',
      title: 'Custom & Commercial Invoices',
      icon: FileText,
      points: [
        'Drafting Custom Invoices aligned with statutory requirements for customs clearance.',
        'Preparing Commercial Invoices that meet buyer, bank, and regulatory standards.',
        'Ensuring consistency across invoices, packing lists, and shipping documents.',
      ],
    },
    {
      number: '02',
      title: 'Shipping Bills',
      icon: FileSpreadsheet,
      points: [
        'Filing Shipping Bills electronically through customs portals.',
        'Correct HS code classification and linkage with duty drawback/incentive schemes.',
        'Liaison with Customs House Agents (CHA) for smooth clearance.',
      ],
    },
    {
      number: '03',
      title: 'Certificate of Origin (CoO)',
      icon: Globe2,
      points: [
        'Assisting exporters in obtaining CoO from authorized chambers/agencies.',
        'Ensuring compliance with Free Trade Agreements (FTA) and Preferential Trade Agreements (PTA).',
        'Supporting electronic CoO submissions where applicable.',
      ],
    },
    {
      number: '04',
      title: 'ICEGATE Filings',
      icon: Server,
      points: [
        'Facilitating filings on ICEGATE (Indian Customs Electronic Gateway).',
        'Uploading invoices, packing lists, and supporting documents via e-SANCHIT.',
        'Monitoring clearance status and resolving customs queries.',
      ],
    },
    {
      number: '05',
      title: 'AD Code Registration',
      icon: KeyRound,
      points: [
        'Guiding exporters in registering Authorized Dealer (AD) Code with customs.',
        'Linking AD Code with ports of export for seamless foreign exchange remittance.',
        'Coordinating with banks and customs authorities for compliance.',
      ],
    },
    {
      number: '06',
      title: 'Liaison with Inspection Agencies',
      icon: ClipboardCheck,
      points: [
        'Coordinating with agencies for pre-shipment inspection and certification.',
        'Ensuring compliance with destination country quality and safety standards.',
        'Managing inspection reports and integrating them into export documentation.',
      ],
    },
  ],
  conclusion:
    'By managing invoices, shipping bills, CoO, ICEGATE filings, AD Code registration, and inspection agency liaison, export consultants provide comprehensive compliance support. This ensures exporters avoid penalties, claim incentives, and maintain credibility in international trade.',
};

export default function DocumentationLiaisonPage() {
  const schemaService = {
    id: serviceData.slug,
    title: serviceData.title,
    slug: serviceData.slug,
    shortDescription: serviceData.intro,
    description: serviceData.intro,
    features: serviceData.sections.flatMap((s) => s.points),
    benefits: [
      'Zero documentation discrepancy and eliminated bank / customs delays',
      'Full tariff concessions under Free Trade Agreements via certified Certificate of Origin',
      'Seamless foreign exchange remittance via authorized AD Code registration',
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
