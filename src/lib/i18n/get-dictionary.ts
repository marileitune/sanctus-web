import en from '@/lib/i18n/dictionaries/en.json';
import pt from '@/lib/i18n/dictionaries/pt.json';
import es from '@/lib/i18n/dictionaries/es.json';
import type { AppLocale } from '@/lib/i18n/locales';

export type Dictionary = typeof en;

const dictionaries: Record<AppLocale, Dictionary> = { en, pt, es };

export const getDictionary = (locale: AppLocale): Dictionary =>
  dictionaries[locale];
