import type { Metadata } from 'next';
import { getPageMetadata } from '@/lib/seo/metadata';
import TaxGstCompliancePage from '../tax-gst-compliance/page';

export const metadata: Metadata = getPageMetadata('servicesTaxGstAdvisory');

export default TaxGstCompliancePage;
