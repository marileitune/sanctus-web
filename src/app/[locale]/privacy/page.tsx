import type { Metadata } from 'next';
import { LegalPage } from '@/components/legal/LegalPage';
import { getPrivacyPolicyContent } from '@/content/legal/privacy-policy';
import { locales, type AppLocale } from '@/lib/i18n/locales';

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ locale: AppLocale }>;
}): Promise<Metadata> => {
  const { locale } = await params;
  const content = getPrivacyPolicyContent(locale);

  return {
    title: content.title,
    alternates: {
      canonical: `/${locale}/privacy`,
      languages: Object.fromEntries(locales.map((l) => [l, `/${l}/privacy`])),
    },
  };
};

const PrivacyPage = async ({
  params,
}: {
  params: Promise<{ locale: AppLocale }>;
}) => {
  const { locale } = await params;
  return <LegalPage content={getPrivacyPolicyContent(locale)} />;
};

export default PrivacyPage;
