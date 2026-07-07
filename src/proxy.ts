import { NextRequest, NextResponse } from 'next/server';
import { defaultLocale, locales } from '@/lib/i18n/locales';

function detectLocale(request: NextRequest): string {
  const cookieLocale = request.cookies.get('locale')?.value;
  if (
    cookieLocale &&
    locales.includes(cookieLocale as (typeof locales)[number])
  ) {
    return cookieLocale;
  }

  const acceptLanguage = request.headers.get('accept-language');
  if (acceptLanguage) {
    const preferred = acceptLanguage
      .split(',')
      .map((part) => part.split(';')[0].trim().split('-')[0]);

    for (const lang of preferred) {
      if (locales.includes(lang as (typeof locales)[number])) {
        return lang;
      }
    }
  }

  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  const locale = detectLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ['/((?!_next|api|.*\\..*).*)'],
};
