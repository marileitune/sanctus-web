import type { ReactNode } from 'react';
import { cn } from '@/utils/cn';

export const H2 = ({
  children,
  className,
  centerAccent = false,
}: {
  children: ReactNode;
  className?: string;
  centerAccent?: boolean;
}) => (
  <div className="mb-8 lg:mb-12">
    <h2
      className={cn(
        'font-bold tracking-tight text-2xl md:text-3xl lg:text-4xl',
        className,
      )}
    >
      {children}
    </h2>
    <div
      className={cn(
        'mt-3 w-12 h-[3px] rounded-full bg-brand-600',
        centerAccent && 'mx-auto',
      )}
    />
  </div>
);
