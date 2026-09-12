import type { Metadata } from 'next';
import { getPageMetadata } from '@/lib/seo/metadata';
import { CollaborationEnquiryView } from '@/components/public/CollaborationEnquiryView';

export const metadata: Metadata = getPageMetadata('collaborateEnquiry');

export default function CollaborateEnquiryPage() {
  return <CollaborationEnquiryView />;
}
