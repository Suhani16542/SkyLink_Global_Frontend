import React from 'react';
import type { Metadata } from 'next';
import { getPageMetadata } from '@/lib/seo/metadata';
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

export const metadata: Metadata = getPageMetadata('servicesDocumentationLiaison');


const serviceData = {
  badge: 'Export Documentation & Regulatory Liaison',
  title:
    'Export Documentation & Shipping Documentation: Commercial Invoice, Shipping Bill & Certificate of Origin',
  intro:
    'Comprehensive export documentation and import export documentation services, managing commercial invoice preparation, shipping bill processing, bill of lading coordination, and regulatory liaison.',
  bgImage: '/images/services/documentation-liaison.jpg',
  imageAlt:
    'Export documentation and shipping documentation - commercial invoice, shipping bill, bill of lading, and certificate of origin | SkyLink Global',
  slug: 'documentation-liaison',
  highlights: [
    { label: 'Document Standard', value: 'Export Documentation Review' },
    { label: 'Port Customs', value: 'ICEGATE Shipping Bill & Filings' },
    { label: 'Trade Verification', value: 'Certificate of Origin & IEC Code' },
    { label: 'Cargo Papers', value: 'Shipping Documentation Support' },
  ],
  sections: [
    {
      number: '01',
      title: 'Commercial Invoice & Customs Invoice Preparation',
      icon: FileText,
      points: [
        'Drafting statutory custom invoices aligned with destination customs requirements and foreign trade regulations.',
        'Preparing accurate commercial invoice documentation meeting buyer, bank, and statutory compliance standards.',
        'Providing end-to-end shipping documentation consistency across invoices, packing lists, and cargo declarations.',
      ],
    },
    {
      number: '02',
      title: 'Shipping Bill & Bill of Entry Processing',
      icon: FileSpreadsheet,
      points: [
        'Electronic filing of shipping bill documents for export clearance and bill of entry documents for import clearance.',
        'Correct HS code classification and proper linkage with statutory export remission schemes.',
        'Coordinating with customs brokers and CHA partners for seamless export documentation clearance.',
      ],
    },
    {
      number: '03',
      title: 'Certificate of Origin & Preferential Trade Pacts',
      icon: Globe2,
      points: [
        'Assisting exporters in obtaining an official certificate of origin from authorized chambers and government agencies.',
        'Ensuring preferential origin compliance under Free Trade Agreements (FTA) and Preferential Trade Agreements (PTA).',
        'Supporting electronic certificate of origin submissions and validation across global trade corridors.',
      ],
    },
    {
      number: '04',
      title: 'ICEGATE Shipping Bill Filings & e-SANCHIT',
      icon: Server,
      points: [
        'Facilitating electronic filings and tracking every icegate shipping bill on the Indian Customs Electronic Gateway.',
        'Uploading commercial invoices, packing lists, and supporting papers via e-SANCHIT for digital customs appraisal.',
        'Monitoring customs status and resolving queries for complete import export documentation readiness.',
      ],
    },
    {
      number: '05',
      title: 'IEC Code, AD Code & Bill of Lading Coordination',
      icon: KeyRound,
      points: [
        'Assisting new and expanding trading businesses with iec code registration and customs branch linking.',
        'Guiding Authorized Dealer (AD) Code registration with customs for foreign exchange remittances.',
        'Ensuring carrier bill of lading (BL) instructions and sea waybills strictly match export invoice records.',
      ],
    },
    {
      number: '06',
      title: 'Inspection Agency Liaison & Regulatory Approvals',
      icon: ClipboardCheck,
      points: [
        'Delivering structured regulatory liaison services with pre-shipment inspection agencies and certifying authorities.',
        'Coordinating destination-country product quality and safety standard certifications.',
        'Integrating official test reports and inspection certificates into the master export documentation dossier.',
      ],
    },
  ],
  conclusion:
    'By managing commercial invoice preparation, shipping bill and bill of entry filings, bill of lading alignment, IEC code linking, certificate of origin issuance, and icegate shipping bill submissions, SkyLink Global delivers comprehensive import export documentation and shipping documentation support for cross-border commerce.',
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
      'Comprehensive export documentation and shipping documentation review',
      'Full tariff concessions under trade agreements via certified Certificate of Origin',
      'Electronic icegate shipping bill, bill of entry, and bill of lading alignment',
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
