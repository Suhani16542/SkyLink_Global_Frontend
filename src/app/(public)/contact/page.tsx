import type { Metadata } from 'next';
import { getPageMetadata } from '@/lib/seo/metadata';
import { ContactView } from '@/components/public/ContactView';

export const metadata: Metadata = getPageMetadata('contact');

export default function ContactPage() {
  return <ContactView />;
}
