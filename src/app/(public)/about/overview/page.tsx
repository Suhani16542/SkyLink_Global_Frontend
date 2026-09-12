import type { Metadata } from 'next';
import { getPageMetadata } from '@/lib/seo/metadata';
import { AboutOverviewView } from '@/components/public/AboutOverviewView';

export const metadata: Metadata = getPageMetadata('aboutOverview');

export default function AboutOverviewPage() {
  return <AboutOverviewView />;
}
