'use client';

import { useParams } from 'next/navigation';
import { getDictionary, type Dictionary } from '@/lib/i18n/get-dictionary';
import type { AppLocale } from '@/lib/i18n/locales';

export const useT = () => {
  const params = useParams<{ locale: AppLocale }>();
  const dictionary = getDictionary(params.locale);

  return (key: keyof Dictionary) => dictionary[key];
};
