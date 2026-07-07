import { LegalPage } from '@/components/legal/LegalPage';
import { getPrivacyPolicyContent } from '@/content/legal/privacy-policy';
import type { AppLocale } from '@/lib/i18n/locales';

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: AppLocale }>;
}) {
  const { locale } = await params;
  return <LegalPage content={getPrivacyPolicyContent(locale)} />;
}
