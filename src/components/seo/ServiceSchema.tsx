import React from 'react';
import type { Service } from '@/types';
import { generateServiceSchema } from '@/lib/seo/schema';
import { JsonLd } from './JsonLd';

interface ServiceSchemaProps {
  service: Service;
}

export function ServiceSchema({ service }: ServiceSchemaProps) {
  const schema = generateServiceSchema(service);
  return <JsonLd data={schema} />;
}
