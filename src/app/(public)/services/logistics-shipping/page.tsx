import React from 'react';
import type { Metadata } from 'next';
import { getPageMetadata } from '@/lib/seo/metadata';
import { ServiceDetailView } from '@/components/services/ServiceDetailView';
import { ServiceSchema } from '@/components/seo/ServiceSchema';
import {
  Ship,
  Route,
  Boxes,
  Scale,
  ShieldAlert,
} from 'lucide-react';

export const metadata: Metadata = getPageMetadata('servicesLogisticsShipping');


const serviceData = {
  badge: 'Global Freight & Multimodal Logistics',
  title:
    'Logistics & Shipping: Freight Negotiation, Route Optimization, Consolidations, Incoterms Advisory & Marine Insurance',
  intro:
    'Strong logistics and shipping management ensures exporters achieve cost efficiency, timely delivery, and risk protection in global trade.',
  bgImage: '/images/services/logistics-shipping.jpg',
  slug: 'logistics-shipping',
  highlights: [
    { label: 'Carrier Network', value: 'Direct Ocean & Air Contracts' },
    { label: 'Container Space', value: 'Guaranteed Allocation' },
    { label: 'Incoterms Rules', value: 'FOB, CIF, DDP, EXW' },
    { label: 'Cargo Protection', value: 'Comprehensive Marine Cover' },
  ],
  sections: [
    {
      number: '01',
      title: 'Freight Negotiation',
      icon: Ship,
      points: [
        'Securing competitive rates with carriers and forwarders.',
        'Balancing cost with delivery timelines across sea, air, and multimodal transport.',
        'Long-term contracts and rate benchmarking to reduce overheads.',
      ],
    },
    {
      number: '02',
      title: 'Route Optimization',
      icon: Route,
      points: [
        'Identifying the most efficient shipping routes to minimize transit time and costs.',
        'Using technology and analytics for real-time tracking and route planning.',
        'Avoiding congestion points and leveraging alternate ports or hubs.',
      ],
    },
    {
      number: '03',
      title: 'Consolidations',
      icon: Boxes,
      points: [
        'Combining smaller shipments into full container loads (FCL) for cost savings.',
        'Reducing freight charges and improving efficiency through cargo consolidation.',
        'Strategic partnerships with freight forwarders to maximize space utilization.',
      ],
    },
    {
      number: '04',
      title: 'Incoterms Advisory',
      icon: Scale,
      points: [
        'Guidance on international commercial terms (FOB, CIF, DDP, EXW, etc.).',
        'Ensuring clarity on responsibilities, risk transfer, and insurance obligations.',
        'Preventing disputes by aligning contracts with global standards.',
      ],
    },
    {
      number: '05',
      title: 'Marine Insurance',
      icon: ShieldAlert,
      points: [
        'Coverage against loss, damage, or delay during transit.',
        'Specialized policies for sensitive cargo (e.g., cold chain, hazardous goods).',
        'Claims support to ensure timely compensation and business continuity.',
      ],
    },
  ],
  conclusion:
    'By integrating freight negotiation, route optimization, consolidations, Incoterms advisory, and marine insurance, exporters can streamline supply chains, reduce costs, and safeguard against risks—enhancing competitiveness in international markets.',
};

export default function LogisticsShippingPage() {
  const schemaService = {
    id: serviceData.slug,
    title: serviceData.title,
    slug: serviceData.slug,
    shortDescription: serviceData.intro,
    description: serviceData.intro,
    features: serviceData.sections.flatMap((s) => s.points),
    benefits: [
      'Competitive ocean and air freight rates via direct carrier negotiation',
      'Minimised transit times and congestion bypass through route optimization',
      'Complete risk indemnification through specialized marine insurance and Incoterms clarity',
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
