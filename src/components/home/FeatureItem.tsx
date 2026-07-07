'use client';

import { motion } from 'framer-motion';
import { H3 } from '@/components/ui/H3';
import { useT } from '@/lib/i18n/useT';
import {
  LightBulbIcon,
  PrayingHandsIcon,
  BooksIcon,
} from '@/components/home/FeatureIcons';

const FEATURE_STYLES = {
  one: { icon: LightBulbIcon, bg: 'bg-litu-50' },
  two: { icon: PrayingHandsIcon, bg: 'bg-orac-50' },
  three: { icon: BooksIcon, bg: 'bg-vers-50' },
} as const;

export const FeatureItem = ({
  feature,
  i,
}: {
  feature: keyof typeof FEATURE_STYLES;
  i: number;
}) => {
  const t = useT();
  const { icon: Icon, bg } = FEATURE_STYLES[feature];

  return (
    <motion.div
      className="bg-white rounded-2xl p-8 shadow-card hover:shadow-elev transition-shadow duration-300 flex flex-col"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.15 * i, ease: 'easeOut' }}
    >
      <div
        className={`w-14 h-14 rounded-xl ${bg} flex items-center justify-center mb-6 shrink-0`}
      >
        <Icon className="w-9 h-9" />
      </div>
      <H3 className="mb-3">{t(`features_${feature}_title`)}</H3>
      <p className="text-ink-secondary leading-relaxed text-sm md:text-base">
        {t(`features_${feature}_text`)}
      </p>
    </motion.div>
  );
};
