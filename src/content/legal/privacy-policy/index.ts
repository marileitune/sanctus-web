import en from './en';
import pt from './pt';
import es from './es';
import type { AppLocale } from '@/lib/i18n/locales';
import type { LegalContent } from '../types';

const content: Record<AppLocale, LegalContent> = { en, pt, es };

export function getPrivacyPolicyContent(locale: AppLocale): LegalContent {
  return content[locale];
}
