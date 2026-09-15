import React from 'react';
import type { Metadata } from 'next';
import { getPageMetadata } from '@/lib/seo/metadata';
import { ServiceDetailView } from '@/components/services/ServiceDetailView';
import { ServiceSchema } from '@/components/seo/ServiceSchema';
import { Receipt, FileSpreadsheet, RefreshCw, Calculator, FileCheck, Scale } from 'lucide-react';

export const metadata: Metadata = getPageMetadata('servicesTaxGstCompliance');


const serviceData = {
  badge: 'Customs Clearance & Trade Compliance Practice',
  title: 'Customs Clearance Services: Trade Compliance & Tax Advisory',
  intro:
    'Comprehensive customs clearance services and trade compliance advisory ensuring seamless customs documentation, export GST refunds, LUT filings, and accurate ITC reconciliation for international trade.',
  bgImage: '/images/services/tax-gst-compliance.jpg',
  imageAlt:
    'Customs clearance services - trade compliance services and import export customs documentation | SkyLink Global',
  slug: 'tax-gst-compliance',
  highlights: [
    { label: 'Regulatory Scope', value: 'GST & Customs Clearance Aligned' },
    { label: 'Advisory Mode', value: 'Customs Clearance Support Desk' },
    { label: 'Reconciliation', value: 'GSTR-2B & Invoice Matched' },
    { label: 'Trade Governance', value: 'LUT Filings & EXIM Compliance' },
  ],
  sections: [
    {
      number: '01',
      title: 'Customs Clearance Support & Export GST Advisory',
      icon: Receipt,
      points: [
        'Assisting trading enterprises in filing claims for GST refunds on zero-rated supplies with verified customs documentation.',
        'Coordinating import export customs clearance paperwork—including shipping bills, commercial invoices, and e-BRC—to avoid regulatory delays.',
        'Direct liaison with tax and customs authorities providing proactive customs clearance support for timely refund processing.',
      ],
    },
    {
      number: '02',
      title: 'LUT Filing & Trade Compliance Services',
      icon: FileCheck,
      points: [
        'Guiding exporters in filing Letters of Undertaking (LUT) to enable duty-free exports without upfront tax payments.',
        'Annual renewal monitoring and regulatory updates maintaining continuous import export compliance.',
        'Structured trade compliance services aligning cross-border shipments with statutory customs declaration requirements.',
      ],
    },
    {
      number: '03',
      title: 'Customs Documentation & Compliance Reconciliation',
      icon: RefreshCw,
      points: [
        'Matching procurement invoices against GSTR-2B ledgers to ensure accurate Input Tax Credit (ITC) reconciliation.',
        'Reviewing customs documentation and import declarations to resolve discrepancies, supplier mismatches, and compliance gaps.',
        'Maintaining audit-ready records to deliver robust customs compliance services across import customs clearance operations.',
      ],
    },
  ],
  conclusion:
    'Our customs clearance services and trade compliance advisory—spanning customs documentation review, LUT filings, ITC reconciliation, and export refund coordination—help businesses maintain complete import export compliance, protect working capital, and avoid cross-border regulatory disputes.',
};

export default function TaxGstCompliancePage() {
  const schemaService = {
    id: serviceData.slug,
    title: serviceData.title,
    slug: serviceData.slug,
    shortDescription: serviceData.intro,
    description: serviceData.intro,
    features: serviceData.sections.flatMap((s) => s.points),
    benefits: [
      'Structured customs clearance support and expedited export GST refund advisory',
      'Duty-free exports under compliant Letter of Undertaking (LUT) filings',
      'Accurate GSTR-2B ITC reconciliation and customs compliance verification',
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
