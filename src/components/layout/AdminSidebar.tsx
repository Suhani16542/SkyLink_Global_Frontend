import React from 'react';
import Link from 'next/link';
import { siteConfig } from '@/config/site';

export function AdminSidebar() {
  return (
    <aside className="w-64 border-r border-neutral-200 bg-neutral-50 p-4 min-h-screen hidden md:block">
      <div className="mb-6 px-3 py-2">
        <Link href="/admin/dashboard" className="text-lg font-bold text-neutral-900">
          SkyLink Portal
        </Link>
        <span className="block text-xs text-neutral-500">Operations & Compliance</span>
      </div>
      <nav aria-label="Admin Navigation" className="space-y-1">
        {siteConfig.adminNav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block rounded-md px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-200/60 hover:text-neutral-900 transition-colors"
          >
            {item.title}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
