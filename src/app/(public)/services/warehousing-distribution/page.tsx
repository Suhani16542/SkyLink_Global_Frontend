import type { Metadata } from 'next';
import { getPageMetadata } from '@/lib/seo/metadata';
import WarehousingSolutionsPage from '../warehousing-solutions/page';

export const metadata: Metadata = getPageMetadata('servicesWarehousingDistribution');

export default WarehousingSolutionsPage;
