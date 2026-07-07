import type { ReactNode } from 'react';
import { cn } from '@/utils/cn';

export const H3 = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <h3
    className={cn('font-semibold tracking-tight text-lg lg:text-xl', className)}
  >
    {children}
  </h3>
);
