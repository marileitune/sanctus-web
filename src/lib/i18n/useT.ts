'use client';

import { useParams } from 'next/navigation';
import { getDictionary, type Dictionary } from './get-dictionary';
import type { AppLocale } from './locales';

export function useT() {
  const params = useParams<{ locale: AppLocale }>();
  const dictionary = getDictionary(params.locale);

  return (key: keyof Dictionary) => dictionary[key];
}
