import { cn } from '@/utils/cn';
import type { HTMLAttributes } from 'react';

export const Container = ({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn('mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8', className)}
    {...props}
  >
    {children}
  </div>
);
