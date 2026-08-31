import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils/cn';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, leftIcon, rightIcon, className, id, ...props }, ref) => {
    const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

    return (
      <div className="w-full">
        {label && (
          <label htmlFor={inputId} className="block text-xs font-semibold text-neutral-800 mb-1.5">
            {label}
          </label>
        )}
        <div className="relative flex items-center">
          {leftIcon && (
            <div className="absolute left-3 text-neutral-400 pointer-events-none">{leftIcon}</div>
          )}
          <input
            id={inputId}
            ref={ref}
            className={cn(
              'w-full rounded-lg border bg-white px-3.5 py-2 text-sm text-neutral-900 placeholder:text-neutral-400 transition-colors',
              'focus:outline-none focus:ring-2 focus:ring-[#0284C7]/20 focus:border-[#0284C7]',
              leftIcon ? 'pl-10' : '',
              rightIcon ? 'pr-10' : '',
              error ? 'border-red-400 focus:border-red-500 focus:ring-red-200' : 'border-neutral-300',
              'disabled:bg-neutral-50 disabled:text-neutral-400 disabled:cursor-not-allowed',
              className
            )}
            {...props}
          />
          {rightIcon && <div className="absolute right-3 text-neutral-400">{rightIcon}</div>}
        </div>
        {error && <p className="mt-1 text-xs text-red-600 font-medium">{error}</p>}
        {helperText && !error && <p className="mt-1 text-xs text-neutral-500">{helperText}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';
