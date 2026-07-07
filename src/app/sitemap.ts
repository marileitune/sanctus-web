import type { MetadataRoute } from 'next';
import { locales } from '@/lib/i18n/locales';
import { SITE_URL } from '@/lib/site';

const routes = ['', '/privacy', '/terms'];

const sitemap = (): MetadataRoute.Sitemap => {
  const lastModified = new Date();

  return routes.flatMap((route) =>
    locales.map((locale) => ({
      url: `${SITE_URL}/${locale}${route}`,
      lastModified,
      changeFrequency: (route === '' ? 'monthly' : 'yearly') as
        | 'monthly'
        | 'yearly',
      priority: route === '' ? 1 : 0.5,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [l, `${SITE_URL}/${l}${route}`]),
        ),
      },
    })),
  );
};

export default sitemap;
