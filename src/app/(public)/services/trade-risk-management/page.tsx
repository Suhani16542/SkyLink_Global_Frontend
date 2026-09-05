import type { Metadata } from 'next';
import { getPageMetadata } from '@/lib/seo/metadata';
import RiskManagementPage from '../risk-management/page';

export const metadata: Metadata = getPageMetadata('servicesTradeRiskManagement');

export default RiskManagementPage;
