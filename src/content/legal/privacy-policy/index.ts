import en from '@/content/legal/privacy-policy/en';
import pt from '@/content/legal/privacy-policy/pt';
import es from '@/content/legal/privacy-policy/es';
import { createLegalContentGetter } from '@/content/legal/get-legal-content';

export const getPrivacyPolicyContent = createLegalContentGetter({ en, pt, es });
