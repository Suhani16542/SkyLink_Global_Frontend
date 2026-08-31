import React from 'react';
import { generateLocalBusinessSchema } from '@/lib/seo/schema';
import { JsonLd } from './JsonLd';

export function LocalBusinessSchema() {
  const schema = generateLocalBusinessSchema();
  return <JsonLd data={schema} />;
}
