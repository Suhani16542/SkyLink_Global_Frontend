import React from 'react';
import type { Metadata } from 'next';
import { getPageMetadata } from '@/lib/seo/metadata';
import { ServiceDetailView } from '@/components/services/ServiceDetailView';
import { ServiceSchema } from '@/components/seo/ServiceSchema';
import { Receipt, FileSpreadsheet, RefreshCw, Calculator, FileCheck, Scale } from 'lucide-react';

export const metadata: Metadata = getPageMetadata('servicesTaxGstCompliance');


const serviceData = {
  badge: 'Tax & GST Compliance Practice',
  title: 'Tax Advisory: GST Refunds, LUT Filing & ITC Reconciliation',
  intro:
    'Tax advisory is a critical service for exporters, ensuring compliance with GST regulations while optimizing cash flow. As an export consultant, the focus is on simplifying procedures, securing refunds, and maintaining accurate reconciliation.',
  bgImage: '/images/services/tax-gst-compliance.jpg',
  slug: 'tax-gst-compliance',
  highlights: [
    { label: 'Regulatory Framework', value: 'GST & Customs Aligned' },
    { label: 'Refund Turnaround', value: 'Expedited Processing' },
    { label: 'Reconciliation', value: 'GSTR-2B & Invoice Matched' },
    { label: 'Advisory Mode', value: 'Direct Authority Liaison' },
  ],
  sections: [
    {
      number: '01',
      title: 'GST Refunds',
      icon: Receipt,
      points: [
        'Assisting exporters in filing claims for GST refunds on zero-rated supplies.',
        'Ensuring proper documentation (invoices, shipping bills, bank realization certificates) to avoid rejection.',
        'Liaison with GST authorities for timely processing and release of funds.',
      ],
    },
    {
      number: '02',
      title: 'LUT (Letter of Undertaking) Filing',
      icon: FileCheck,
      points: [
        'Guiding exporters in filing LUT to enable duty-free exports without upfront tax payment.',
        'Annual renewal and compliance monitoring to prevent lapses.',
        'Advisory on conditions and eligibility for LUT submission.',
      ],
    },
    {
      number: '03',
      title: 'ITC (Input Tax Credit) Reconciliation',
      icon: RefreshCw,
      points: [
        'Matching purchase invoices with GSTR-2B to ensure accurate ITC claims.',
        'Identifying mismatches, pending credits, and supplier non-compliance.',
        'Maintaining reconciled records to safeguard against penalties and audit issues.',
      ],
    },
  ],
  conclusion:
    'Tax advisory services—covering GST refunds, LUT filing, and ITC reconciliation—help exporters maintain compliance, improve liquidity, and avoid disputes. Consultants act as a bridge between businesses and tax authorities, ensuring smooth operations in international trade.',
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
      'Expedited GST refund processing and working capital optimization',
      'Duty-free exports under compliant Letter of Undertaking (LUT)',
      'Accurate GSTR-2B ITC reconciliation safeguarding against audit penalties',
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
