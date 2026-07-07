'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { useT } from '@/lib/i18n/useT';

const STATS = [
  { value: 'stat_rating_value', label: 'reviews_one_subtitle' },
  { value: 'stat_reviews_value', label: 'reviews_two_subtitle' },
  { value: 'stat_downloads_value', label: 'reviews_three_subtitle' },
] as const;

export const Stats = () => {
  const t = useT();

  return (
    <div className="bg-white border-y border-border py-10">
      <Container className="grid grid-cols-3 gap-4 text-center">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.value}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 * i, ease: 'easeOut' }}
          >
            <div className="text-3xl md:text-4xl font-extrabold text-brand-600">
              {t(stat.value)}
            </div>
            <div className="mt-1 text-sm text-ink-muted uppercase tracking-wide">
              {t(stat.label)}
            </div>
          </motion.div>
        ))}
      </Container>
    </div>
  );
};
