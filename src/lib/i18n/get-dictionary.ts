import en from './dictionaries/en.json';
import pt from './dictionaries/pt.json';
import es from './dictionaries/es.json';
import type { AppLocale } from './locales';

export type Dictionary = typeof en;

const dictionaries: Record<AppLocale, Dictionary> = { en, pt, es };

export function getDictionary(locale: AppLocale): Dictionary {
  return dictionaries[locale];
}
