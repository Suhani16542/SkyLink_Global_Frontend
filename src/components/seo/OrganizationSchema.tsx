import React from 'react';
import { generateOrganizationSchema } from '@/lib/seo/schema';
import { JsonLd } from './JsonLd';

export function OrganizationSchema() {
  const schema = generateOrganizationSchema();
  return <JsonLd data={schema} />;
}
