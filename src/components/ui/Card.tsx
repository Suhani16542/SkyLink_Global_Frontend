import React from 'react';
import { cn } from '@/lib/utils/cn';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'bordered' | 'elevated' | 'glass' | 'dark';
  hoverEffect?: boolean;
}

export function Card({
  children,
  className,
  variant = 'bordered',
  hoverEffect = false,
  ...props
}: CardProps) {
  const baseStyles = 'rounded-xl transition-all duration-300';

  const variants = {
    default: 'bg-white',
    bordered: 'bg-white border border-neutral-200/90 shadow-sm',
    elevated: 'bg-white border border-neutral-100 shadow-md shadow-neutral-100/50',
    glass: 'bg-white/80 backdrop-blur-md border border-neutral-200/80 shadow-sm',
    dark: 'bg-[#0A2540] text-white border border-white/10 shadow-lg',
  };

  const hoverStyles = hoverEffect
    ? 'hover:-translate-y-1 hover:shadow-lg hover:border-[#0284C7]/40'
    : '';

  return (
    <div className={cn(baseStyles, variants[variant], hoverStyles, className)} {...props}>
      {children}
    </div>
  );
}

export function CardHeader({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('p-6 pb-3', className)} {...props}>
      {children}
    </div>
  );
}

export function CardContent({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('p-6 pt-0', className)} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('p-6 pt-3 border-t border-neutral-100 flex items-center justify-between', className)}
      {...props}
    >
      {children}
    </div>
  );
}
