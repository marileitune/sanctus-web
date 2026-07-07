'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useT } from '@/lib/i18n/useT';

export const Footer = () => {
  const t = useT();
  const { locale } = useParams<{ locale: string }>();

  return (
    <footer className="bg-brand-900 text-brand-100 text-sm py-6 px-4">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span>
          © {new Date().getFullYear()} Sanctus. {t('footer_rights')}
        </span>
        <div className="flex items-center gap-4">
          <Link
            href={`/${locale}/privacy`}
            className="hover:text-white transition-colors duration-200"
          >
            {t('footer_privacy')}
          </Link>
          <Link
            href={`/${locale}/terms`}
            className="hover:text-white transition-colors duration-200"
          >
            {t('footer_terms')}
          </Link>
        </div>
        <span>
          {t('footer_made_by')} <span aria-hidden="true">✦</span>{' '}
          <a
            href="https://include.agency"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-semibold hover:text-brand-400 transition-colors duration-200"
          >
            Include
          </a>
        </span>
      </div>
    </footer>
  );
};
