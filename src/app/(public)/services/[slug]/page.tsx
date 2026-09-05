import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getAllServices, getServiceBySlug } from '@/data/services';
import { constructServiceMetadata } from '@/lib/seo/metadata';
import { ServiceSchema } from '@/components/seo/ServiceSchema';
import { ServiceDetailView } from '@/components/services/ServiceDetailView';
import {
  Ship,
  Warehouse,
  Snowflake,
  TrendingDown,
  Calculator,
  FileText,
  ShieldAlert,
  FileCheck2,
} from 'lucide-react';

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

const serviceImages: Record<string, string> = {
  'logistics-shipping': '/images/services/logistics-shipping.jpg',
  'warehousing-solutions': '/images/services/warehousing-solutions.jpg',
  'warehousing-distribution': '/images/services/warehousing-solutions.jpg',
  'cold-chain-solutions': '/images/services/cold-chain-solutions.jpg',
  'export-incentives': '/images/services/export-incentives.jpg',
  'tax-gst-compliance': '/images/services/tax-gst-compliance.jpg',
  'tax-gst-advisory': '/images/services/tax-gst-compliance.jpg',
  'documentation-liaison': '/images/services/documentation-liaison.jpg',
  'risk-management': '/images/services/risk-management.jpg',
  'trade-risk-management': '/images/services/risk-management.jpg',
  'customs-compliance': '/images/services/risk-management.jpg',
  'licensing-registrations': '/images/services/documentation-liaison.jpg',
};

const serviceIcons: Record<string, React.ElementType> = {
  'logistics-shipping': Ship,
  'warehousing-solutions': Warehouse,
  'warehousing-distribution': Warehouse,
  'cold-chain-solutions': Snowflake,
  'export-incentives': TrendingDown,
  'tax-gst-compliance': Calculator,
  'tax-gst-advisory': Calculator,
  'documentation-liaison': FileText,
  'risk-management': ShieldAlert,
  'trade-risk-management': ShieldAlert,
  'customs-compliance': ShieldAlert,
  'licensing-registrations': FileCheck2,
};

export async function generateStaticParams() {
  const services = await getAllServices();
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service) {
    return {
      title: 'Service Not Found | SkyLink Global Services',
    };
  }

  return constructServiceMetadata(service);
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const bgImage = serviceImages[service.slug] || serviceImages['logistics-shipping'];
  const DefaultIcon = serviceIcons[service.slug] || FileCheck2;

  // Transform features into structured sections if not already provided
  const sections = service.features.map((feat, idx) => {
    const parts = feat.split(':');
    const secTitle = parts.length > 1 ? parts[0].trim() : `Capability Module ${idx + 1}`;
    const pointText = parts.length > 1 ? parts.slice(1).join(':').trim() : feat;

    return {
      number: String(idx + 1).padStart(2, '0'),
      title: secTitle,
      icon: DefaultIcon,
      points: [pointText],
    };
  });

  return (
    <>
      <ServiceSchema service={service} />
      <ServiceDetailView
        badge="SkyLink Trade Practice"
        title={service.title}
        intro={service.shortDescription || service.description}
        bgImage={bgImage}
        sections={sections}
        conclusion={
          service.description ||
          'SkyLink Global Services acts as a strategic bridge between businesses, carriers, and statutory authorities, delivering compliant, cost-effective cross-border trade operations.'
        }
        slug={service.slug}
      />
    </>
  );
}
