import React from 'react';
import { generateWebSiteSchema } from '@/lib/seo/schema';
import { JsonLd } from './JsonLd';

export function WebSiteSchema() {
  const schema = generateWebSiteSchema();
  return <JsonLd data={schema} />;
}
