import { cn } from '@/utils/cn';
import type { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  full?: boolean;
}

const sizes = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-5 text-sm',
  lg: 'h-13 px-6 text-base',
};

export function Button({
  variant = 'primary',
  size = 'md',
  full = false,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-full font-bold tracking-tight transition-colors disabled:opacity-50 disabled:cursor-not-allowed',
        sizes[size],
        variant === 'primary' && 'bg-brand-600 text-white hover:bg-brand-800',
        variant === 'secondary' &&
          'bg-brand-50 text-brand-800 hover:bg-brand-100',
        variant === 'outline' &&
          'border border-border text-ink bg-transparent hover:bg-cream',
        variant === 'ghost' &&
          'text-brand-600 bg-transparent hover:bg-brand-50',
        full && 'w-full',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
