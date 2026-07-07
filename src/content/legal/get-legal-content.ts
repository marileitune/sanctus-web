import type { AppLocale } from '@/lib/i18n/locales';
import type { LegalContent } from '@/content/legal/types';

export const createLegalContentGetter =
  (content: Record<AppLocale, LegalContent>) =>
  (locale: AppLocale): LegalContent =>
    content[locale];
