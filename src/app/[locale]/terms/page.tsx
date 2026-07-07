import type { Metadata } from 'next';
import { LegalPage } from '@/components/legal/LegalPage';
import { getTermsOfServiceContent } from '@/content/legal/terms-of-service';
import { locales, type AppLocale } from '@/lib/i18n/locales';

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ locale: AppLocale }>;
}): Promise<Metadata> => {
  const { locale } = await params;
  const content = getTermsOfServiceContent(locale);

  return {
    title: content.title,
    alternates: {
      canonical: `/${locale}/terms`,
      languages: Object.fromEntries(locales.map((l) => [l, `/${l}/terms`])),
    },
  };
};

const TermsPage = async ({
  params,
}: {
  params: Promise<{ locale: AppLocale }>;
}) => {
  const { locale } = await params;
  return <LegalPage content={getTermsOfServiceContent(locale)} />;
};

export default TermsPage;
