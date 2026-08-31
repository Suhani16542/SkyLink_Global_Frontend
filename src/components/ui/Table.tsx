import React from 'react';
import { cn } from '@/lib/utils/cn';

export function Table({
  children,
  className,
  ...props
}: React.TableHTMLAttributes<HTMLTableElement>) {
  return (
    <div className="w-full overflow-x-auto rounded-xl border border-neutral-200 bg-white">
      <table className={cn('w-full text-left text-sm text-neutral-600', className)} {...props}>
        {children}
      </table>
    </div>
  );
}

export function TableHeader({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLTableSectionElement>) {
  return (
    <thead className={cn('border-b border-neutral-200 bg-neutral-50/80 text-xs uppercase font-semibold text-neutral-600', className)} {...props}>
      {children}
    </thead>
  );
}

export function TableBody({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLTableSectionElement>) {
  return (
    <tbody className={cn('divide-y divide-neutral-100 bg-white', className)} {...props}>
      {children}
    </tbody>
  );
}

export function TableRow({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLTableRowElement>) {
  return (
    <tr className={cn('hover:bg-neutral-50/60 transition-colors', className)} {...props}>
      {children}
    </tr>
  );
}

export function TableHead({
  children,
  className,
  ...props
}: React.ThHTMLAttributes<HTMLTableCellElement>) {
  return (
    <th className={cn('px-4 py-3.5 font-semibold text-neutral-700 tracking-wider', className)} {...props}>
      {children}
    </th>
  );
}

export function TableCell({
  children,
  className,
  ...props
}: React.TdHTMLAttributes<HTMLTableCellElement>) {
  return (
    <td className={cn('px-4 py-3.5 text-neutral-800', className)} {...props}>
      {children}
    </td>
  );
}
