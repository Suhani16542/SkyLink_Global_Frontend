import React from 'react';
import type { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo/metadata';
import { AdminLayoutShell } from '@/components/admin/AdminLayoutShell';

export const metadata: Metadata = constructMetadata({
  title: 'Operations Portal | SkyLink Global Services',
  description: 'SkyLink internal operations desk and trade compliance dashboard.',
  noIndex: true,
  path: '/admin',
});

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AdminLayoutShell>{children}</AdminLayoutShell>;
}
