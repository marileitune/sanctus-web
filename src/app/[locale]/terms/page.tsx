import { LegalPage } from '@/components/legal/LegalPage';
import { getTermsOfServiceContent } from '@/content/legal/terms-of-service';
import type { AppLocale } from '@/lib/i18n/locales';

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: AppLocale }>;
}) {
  const { locale } = await params;
  return <LegalPage content={getTermsOfServiceContent(locale)} />;
}
