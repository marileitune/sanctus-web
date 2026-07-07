import type { HTMLAttributes } from 'react';
import { cn } from '@/utils/cn';

export function Section({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('py-20 lg:py-28', className)} {...props}>
      {children}
    </div>
  );
}
