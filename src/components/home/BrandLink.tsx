'use client';

import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import { BrandIcon } from '@/components/home/BrandIcon';

export const BrandLink = () => {
  const pathname = usePathname();
  const { locale } = useParams<{ locale: string }>();
  const isLegalPage =
    pathname.includes('/privacy') || pathname.includes('/terms');

  if (isLegalPage) {
    return (
      <Link href={`/${locale}`} className="cursor-pointer">
        <BrandIcon />
      </Link>
    );
  }

  return (
    <a href="#home" className="cursor-pointer">
      <BrandIcon />
    </a>
  );
};
