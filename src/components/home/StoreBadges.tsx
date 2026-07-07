'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { CLOUDINARY_BASE_URL, STORE_URL } from '@/lib/constants';
import { useT } from '@/lib/i18n/useT';

const GOOGLE_PLAY_BADGE_URL = `${CLOUDINARY_BASE_URL}v1628619914/sanctus/play_store_badge.png`;
const APP_STORE_BADGE_URL =
  'https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg';

export const StoreBadges = () => {
  const t = useT();

  return (
    <div className="mt-4 flex flex-col items-center gap-4">
      <motion.a
        href={STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1.6 }}
      >
        <Image
          src={GOOGLE_PLAY_BADGE_URL}
          alt="Get it on Google Play"
          width={160}
          height={62}
          className="w-40"
        />
      </motion.a>

      <motion.div
        className="relative cursor-not-allowed"
        role="img"
        aria-label={`App Store — ${t('contact_store_badge')}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2 }}
      >
        <Image
          src={APP_STORE_BADGE_URL}
          alt=""
          aria-hidden="true"
          width={160}
          height={53}
          className="w-40 grayscale opacity-40 blur-[1.5px] select-none"
          draggable={false}
        />
        <div
          className="absolute inset-0 flex items-center justify-center"
          aria-hidden="true"
        >
          <span className="bg-black/60 text-white text-xs font-semibold px-2 py-1 rounded-full tracking-wide uppercase">
            {t('contact_store_badge')}
          </span>
        </div>
      </motion.div>
    </div>
  );
};
