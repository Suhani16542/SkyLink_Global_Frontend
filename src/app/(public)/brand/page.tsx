import type { Metadata } from 'next';
import { getPageMetadata } from '@/lib/seo/metadata';
import { BrandIdentityView } from '@/components/public/BrandIdentityView';

export const metadata: Metadata = getPageMetadata('brand');

export default function BrandPage() {
  return <BrandIdentityView />;
}
