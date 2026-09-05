import React from 'react';
import type { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo/metadata';
import { ServiceDetailView } from '@/components/services/ServiceDetailView';
import { ServiceSchema } from '@/components/seo/ServiceSchema';
import {
  Warehouse,
  Boxes,
  Layers,
  Truck,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';

export const metadata: Metadata = constructMetadata({
  title: 'Warehousing Solutions for Exporters | SkyLink Global Services',
  description:
    'As an export consultant, warehousing is not just about storage—it is a strategic function that supports compliance, efficiency, and cost optimization in global trade.',
  path: '/services/warehousing-solutions',
});

const serviceData = {
  badge: 'Strategic Warehousing & Distribution',
  title: 'Warehousing Solutions for Exporters',
  intro:
    'As an export consultant, warehousing is not just about storage—it is a strategic function that supports compliance, efficiency, and cost optimization in global trade.',
  bgImage: '/images/services/warehousing-solutions.jpg',
  slug: 'warehousing-solutions',
  highlights: [
    { label: 'Facility Types', value: 'Bonded & Non-Bonded' },
    { label: 'Inventory Tech', value: 'WMS & RFID/Barcode' },
    { label: 'Value-Addition', value: 'Kitting, Labeling & QC' },
    { label: 'Logistics Link', value: 'Port & Forwarder Integrated' },
  ],
  sections: [
    {
      number: '01',
      title: 'Bonded & Non-Bonded Warehouses',
      icon: Warehouse,
      points: [
        'Bonded warehouses allow duty-free storage until goods are cleared for export, easing cash-flow pressure.',
        'Non-bonded warehouses provide secure domestic storage before shipment.',
        'Consultants help exporters choose the right facility based on product type and regulatory requirements.',
      ],
    },
    {
      number: '02',
      title: 'Inventory & Compliance Management',
      icon: Boxes,
      points: [
        'Implementation of Warehouse Management Systems (WMS) for real-time stock visibility.',
        'Ensuring compliance with customs, GST, and export documentation requirements.',
        'RFID/barcode tracking for accuracy and audit readiness.',
      ],
    },
    {
      number: '03',
      title: 'Value-Added Services',
      icon: Layers,
      points: [
        'Packaging, labeling, palletization tailored to buyer and country-specific standards.',
        'Quality checks and certifications before dispatch.',
        'Consolidation and de-consolidation services to optimize freight costs.',
      ],
    },
    {
      number: '04',
      title: 'Distribution & Logistics Integration',
      icon: Truck,
      points: [
        'Coordination with freight forwarders for smooth cargo movement to ports.',
        'Route planning and last-mile delivery support.',
        'Contingency arrangements for alternate storage or dispatch in case of disruptions.',
      ],
    },
  ],
  conclusion:
    'Warehousing solutions form a critical link in the export supply chain. By leveraging bonded facilities, advanced inventory systems, and value-added services, exporters can reduce costs, ensure compliance, and maintain reliability in international markets.',
};

export default function WarehousingSolutionsPage() {
  const schemaService = {
    id: serviceData.slug,
    title: serviceData.title,
    slug: serviceData.slug,
    shortDescription: serviceData.intro,
    description: serviceData.intro,
    features: serviceData.sections.flatMap((s) => s.points),
    benefits: [
      'Duty-free storage in bonded facilities easing cash-flow pressure',
      'Real-time inventory visibility via advanced WMS tracking',
      'Country-specific packaging, palletization, and quality compliance',
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
