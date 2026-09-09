import React from 'react';
import Link from 'next/link';
import type { BreadcrumbItem } from '@/types';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
  theme?: 'light' | 'dark';
}

export function Breadcrumbs({ items, className = '', theme }: BreadcrumbsProps) {
  // If theme is dark or className contains text-white / text-neutral-300/400, treat as dark mode background
  const isDark = theme === 'dark' || className.includes('text-white') || className.includes('text-neutral-300') || className.includes('text-neutral-400');

  return (
    <>
      <BreadcrumbSchema items={items} />
      <nav
        aria-label="Breadcrumb"
        className={`mb-6 flex items-center text-xs ${isDark ? 'text-neutral-300' : 'text-neutral-500'} ${className}`}
      >
        <ol className="flex items-center flex-wrap gap-1.5">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={`${item.item}-${index}`} className="flex items-center gap-1.5">
                {index > 0 && (
                  <span className={isDark ? 'text-white/40' : 'text-neutral-400'}>/</span>
                )}
                {isLast ? (
                  <span
                    className={`font-semibold line-clamp-1 ${isDark ? 'text-white' : 'text-neutral-900'}`}
                    aria-current="page"
                  >
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.item}
                    className={`${isDark ? 'text-neutral-300 hover:text-white' : 'text-neutral-500 hover:text-[#0284C7]'} transition-colors`}
                  >
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
