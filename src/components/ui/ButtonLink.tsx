import { cn } from '@/utils/cn';
import Link, { type LinkProps } from 'next/link';
import type { AnchorHTMLAttributes } from 'react';

interface ButtonLinkProps
  extends LinkProps, Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
}

export function ButtonLink({
  variant = 'primary',
  className,
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={cn(
        'inline-flex items-center justify-center gap-2 h-11 px-5 rounded-full text-sm font-bold tracking-tight transition-colors',
        variant === 'primary' && 'bg-brand-600 text-white hover:bg-brand-800',
        variant === 'secondary' &&
          'bg-brand-50 text-brand-800 hover:bg-brand-100',
        variant === 'outline' &&
          'border border-border text-ink bg-transparent hover:bg-cream',
        variant === 'ghost' &&
          'text-brand-600 bg-transparent hover:bg-brand-50',
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
