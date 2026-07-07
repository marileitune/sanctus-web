import type { ReactNode } from 'react';
import { cn } from '@/utils/cn';

export const H1 = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <h1
    className={cn(
      'font-extrabold tracking-tight text-5xl md:text-7xl lg:text-8xl',
      className,
    )}
  >
    {children}
  </h1>
);
