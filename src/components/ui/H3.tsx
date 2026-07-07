import type { ReactNode } from 'react';
import { cn } from '@/utils/cn';

export function H3({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h3
      className={cn(
        'font-semibold tracking-tight text-lg lg:text-xl',
        className,
      )}
    >
      {children}
    </h3>
  );
}
