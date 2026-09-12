import type { Metadata } from 'next';
import { getPageMetadata } from '@/lib/seo/metadata';
import { AboutView } from '@/components/public/AboutView';

export const metadata: Metadata = getPageMetadata('about');

export default function AboutPage() {
  return <AboutView />;
}
