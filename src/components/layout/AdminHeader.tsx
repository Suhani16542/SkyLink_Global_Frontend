import React from 'react';
import Link from 'next/link';

export function AdminHeader() {
  return (
    <header className="h-16 border-b border-neutral-200 bg-white px-6 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <span className="text-sm font-semibold text-neutral-800">Admin Workspace</span>
      </div>
      <div className="flex items-center gap-4 text-xs text-neutral-600">
        <Link href="/" className="hover:text-neutral-900 underline underline-offset-2">
          View Public Site
        </Link>
      </div>
    </header>
  );
}
