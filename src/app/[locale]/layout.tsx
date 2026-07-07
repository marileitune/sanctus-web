import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import '@/app/globals.css';
import { locales, type AppLocale } from '@/lib/i18n/locales';
import { getDictionary } from '@/lib/i18n/get-dictionary';
import { SITE_URL } from '@/lib/site';
import { NavMenu } from '@/components/home/NavMenu';
import { CookieBanner } from '@/components/CookieConsent';
import { MotionProvider } from '@/components/MotionProvider';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const generateStaticParams = () => locales.map((locale) => ({ locale }));

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ locale: AppLocale }>;
}): Promise<Metadata> => {
  const { locale } = await params;
  const dictionary = getDictionary(locale);
  const path = `/${locale}`;

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: dictionary.meta_title,
      template: `%s · ${dictionary.meta_title}`,
    },
    description: dictionary.meta_description,
    alternates: {
      canonical: path,
      languages: Object.fromEntries(locales.map((l) => [l, `/${l}`])),
    },
    openGraph: {
      type: 'website',
      url: path,
      siteName: dictionary.meta_title,
      title: dictionary.meta_title,
      description: dictionary.meta_description,
      locale,
    },
    twitter: {
      card: 'summary_large_image',
      title: dictionary.meta_title,
      description: dictionary.meta_description,
    },
  };
};

const LocaleLayout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) => {
  const { locale } = await params;
  return (
    <html lang={locale} className={plusJakartaSans.variable}>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-brand-600 focus:text-white focus:rounded-full"
        >
          Skip to content
        </a>
        <MotionProvider>
          <NavMenu />
          {children}
          <CookieBanner />
        </MotionProvider>
      </body>
    </html>
  );
};

export default LocaleLayout;
