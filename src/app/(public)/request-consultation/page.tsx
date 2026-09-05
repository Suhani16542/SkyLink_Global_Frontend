import type { Metadata } from 'next';
import { getPageMetadata } from '@/lib/seo/metadata';
import { RequestConsultationView } from '@/components/public/RequestConsultationView';

export const metadata: Metadata = getPageMetadata('requestConsultation');

export default function RequestConsultationPage() {
  return <RequestConsultationView />;
}
