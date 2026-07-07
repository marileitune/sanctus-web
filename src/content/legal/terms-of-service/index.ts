import en from '@/content/legal/terms-of-service/en';
import pt from '@/content/legal/terms-of-service/pt';
import es from '@/content/legal/terms-of-service/es';
import { createLegalContentGetter } from '@/content/legal/get-legal-content';

export const getTermsOfServiceContent = createLegalContentGetter({
  en,
  pt,
  es,
});
