import React from 'react';
import type { Metadata } from 'next';
import { getPageMetadata } from '@/lib/seo/metadata';
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

export const metadata: Metadata = getPageMetadata('servicesWarehousingSolutions');


const serviceData = {
  badge: 'Warehousing and Logistics Practice',
  title:
    'Warehousing Solutions for Exporters: Bonded Warehouse Storage & Inventory Management',
  intro:
    'Comprehensive warehousing solutions and warehouse logistics for exporters, providing bonded warehouse storage, advanced inventory management, and WMS integration.',
  bgImage: '/images/services/warehousing-solutions.jpg',
  imageAlt:
    'Warehousing solutions for exporters - bonded warehouse storage, WMS inventory management, and warehouse logistics | SkyLink Global',
  slug: 'warehousing-solutions',
  highlights: [
    { label: 'Storage Model', value: 'Bonded Warehouse & Storage' },
    { label: 'Inventory Tech', value: 'WMS & Inventory Management' },
    { label: 'Operations Scope', value: 'Warehousing and Logistics' },
    { label: 'Distribution Link', value: 'Export Warehouse Logistics' },
  ],
  sections: [
    {
      number: '01',
      title: 'Bonded Warehouse & Warehouse Storage Solutions',
      icon: Warehouse,
      points: [
        'Operating bonded warehouse facilities that permit duty-deferred warehouse storage until goods are cleared for export, optimizing working capital.',
        'Providing secure non-bonded warehousing facilities for domestic cargo staging, consolidation, and pre-shipment preparation.',
        'Guiding exporters in selecting appropriate warehouse storage options aligned with product specifications, customs regulations, and volume requirements.',
      ],
    },
    {
      number: '02',
      title: 'Inventory Management & WMS Tracking Systems',
      icon: Boxes,
      points: [
        'Deploying an automated warehouse management system (WMS) for real-time stock visibility and accurate inventory management.',
        'Utilizing barcode and RFID tracking to support rigorous warehouse management and regulatory audit readiness.',
        'Aligning digital inventory records with customs, GST, and statutory export documentation requirements.',
      ],
    },
    {
      number: '03',
      title: 'Value-Added Services & Warehouse Management',
      icon: Layers,
      points: [
        'Export packaging, labeling, kitting, and palletization executed under disciplined warehouse management protocols.',
        'Pre-dispatch quality checks and cargo verification ensuring compliance with buyer and destination country standards.',
        'Cargo consolidation and de-consolidation operations designed to streamline outbound warehouse logistics.',
      ],
    },
    {
      number: '04',
      title: 'Warehousing and Logistics Integration & Distribution',
      icon: Truck,
      points: [
        'Integrating warehousing and logistics operations with freight forwarders for smooth cargo movement to gateway ports.',
        'Coordinating transportation routes and dispatch schedules to optimize regional warehouse logistics.',
        'Establishing contingency storage arrangements to mitigate supply chain disruptions and protect shipment delivery timelines.',
      ],
    },
  ],
  conclusion:
    'Strategic warehousing solutions form a critical link in the export supply chain. By combining bonded warehouse storage, an automated warehouse management system (WMS), precise inventory management, and integrated warehousing and logistics, exporters optimize costs and maintain reliable international delivery.',
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
      'Duty-deferred storage in bonded warehouse facilities easing cash flow',
      'Real-time inventory management and tracking via an advanced warehouse management system (WMS)',
      'Value-added packaging, palletization, and export warehouse logistics integration',
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
