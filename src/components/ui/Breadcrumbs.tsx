import React from 'react';
import Link from 'next/link';
import type { BreadcrumbItem } from '@/types';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  return (
    <>
      <BreadcrumbSchema items={items} />
      <nav aria-label="Breadcrumb" className={`mb-6 flex items-center text-xs text-neutral-500 ${className}`}>
        <ol className="flex items-center flex-wrap gap-1.5">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={`${item.item}-${index}`} className="flex items-center gap-1.5">
                {index > 0 && <span className="text-neutral-400">/</span>}
                {isLast ? (
                  <span className="font-semibold text-neutral-900 line-clamp-1" aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <Link href={item.item} className="hover:text-[#0284C7] transition-colors">
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
