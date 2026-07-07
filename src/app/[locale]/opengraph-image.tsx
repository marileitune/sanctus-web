import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';
import { getDictionary } from '@/lib/i18n/get-dictionary';
import type { AppLocale } from '@/lib/i18n/locales';

export const runtime = 'nodejs';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const FONTS_DIR = join(process.cwd(), 'src/assets/fonts');

const OpengraphImage = async ({
  params,
}: {
  params: Promise<{ locale: AppLocale }>;
}) => {
  const { locale } = await params;
  const dictionary = getDictionary(locale);

  const [semiBold, bold] = await Promise.all([
    readFile(join(FONTS_DIR, 'PlusJakartaSans-SemiBold.woff')),
    readFile(join(FONTS_DIR, 'PlusJakartaSans-Bold.woff')),
  ]);

  return new ImageResponse(
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3c3489',
        backgroundImage: 'linear-gradient(135deg, #26215c 0%, #534ab7 100%)',
        fontFamily: 'Plus Jakarta Sans',
      }}
    >
      <svg width="160" height="160" viewBox="0 0 130 130" fill="none">
        <path
          d="M65 18 C65 18, 80 40, 80 52 C80 62, 74 68, 65 68 C56 68, 50 62, 50 52 C50 40, 65 18, 65 18Z"
          fill="url(#f)"
        />
        <path
          d="M65 36 C65 36, 72 46, 72 52 C72 57, 69 60, 65 60 C61 60, 58 57, 58 52 C58 46, 65 36, 65 36Z"
          fill="#fff"
          opacity={0.4}
        />
        <path
          d="M20 80 C20 68, 30 62, 40 66 C44 68, 48 70, 52 72 C56 74, 60 78, 62 84 C64 90, 58 100, 48 104 C36 108, 20 100, 20 80Z"
          fill="url(#hl)"
          opacity={0.85}
        />
        <path
          d="M110 80 C110 68, 100 62, 90 66 C86 68, 82 70, 78 72 C74 74, 70 78, 68 84 C66 90, 72 100, 82 104 C94 108, 110 100, 110 80Z"
          fill="url(#hr)"
          opacity={0.85}
        />
        <defs>
          <linearGradient
            id="f"
            x1="65"
            y1="18"
            x2="65"
            y2="68"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#FAEEDA" />
            <stop offset="0.5" stopColor="#EF9F27" />
            <stop offset="1" stopColor="#D85A30" />
          </linearGradient>
          <linearGradient
            id="hl"
            x1="20"
            y1="62"
            x2="62"
            y2="104"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#AFA9EC" />
            <stop offset="1" stopColor="#7F77DD" />
          </linearGradient>
          <linearGradient
            id="hr"
            x1="110"
            y1="62"
            x2="68"
            y2="104"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#AFA9EC" />
            <stop offset="1" stopColor="#7F77DD" />
          </linearGradient>
        </defs>
      </svg>
      <div
        style={{
          marginTop: 28,
          fontSize: 104,
          fontWeight: 800,
          color: '#FFFFFF',
          letterSpacing: '-0.03em',
        }}
      >
        Sanctus
      </div>
      <div
        style={{
          marginTop: 4,
          fontSize: 28,
          fontWeight: 600,
          color: '#CECBF6',
          textTransform: 'uppercase',
          letterSpacing: '0.15em',
        }}
      >
        {dictionary.main_subtitle}
      </div>
    </div>,
    {
      ...size,
      fonts: [
        {
          name: 'Plus Jakarta Sans',
          data: semiBold,
          weight: 600,
          style: 'normal',
        },
        { name: 'Plus Jakarta Sans', data: bold, weight: 800, style: 'normal' },
      ],
    },
  );
};

export default OpengraphImage;
