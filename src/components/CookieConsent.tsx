'use client';

import CookieConsent from 'react-cookie-consent';
import { useParams } from 'next/navigation';
import { useT } from '@/lib/i18n/useT';

export function CookieBanner() {
  const t = useT();
  const { locale } = useParams<{ locale: string }>();

  return (
    <CookieConsent
      location="bottom"
      buttonText={t('cookie_accept')}
      declineButtonText={t('cookie_decline')}
      enableDeclineButton
      cookieName="cookie-consent"
      style={{
        background: '#ffffff',
        color: 'var(--color-ink)',
        fontSize: '0.875rem',
        alignItems: 'center',
        boxShadow: 'var(--shadow-elev)',
      }}
      buttonStyle={{
        background: 'var(--color-brand-600)',
        color: '#ffffff',
        fontSize: '0.875rem',
        fontWeight: 700,
        padding: '10px 20px',
        borderRadius: '9999px',
        cursor: 'pointer',
      }}
      declineButtonStyle={{
        background: 'transparent',
        color: 'var(--color-ink)',
        fontSize: '0.875rem',
        fontWeight: 700,
        padding: '10px 20px',
        borderRadius: '9999px',
        border: '1px solid var(--color-border)',
        cursor: 'pointer',
      }}
    >
      {t('cookie_message')}{' '}
      <a
        href={`/${locale}/privacy`}
        style={{ color: 'inherit', textDecoration: 'underline' }}
      >
        {t('cookie_learn_more')}
      </a>
    </CookieConsent>
  );
}
