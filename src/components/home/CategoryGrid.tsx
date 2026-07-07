'use client';

import { motion } from 'framer-motion';
import { useT } from '@/lib/i18n/useT';

const CATEGORIES = [
  { key: 'orac', bg: 'bg-orac-50', fg: 'text-orac-400', dot: 'bg-orac-400' },
  { key: 'terc', bg: 'bg-terc-50', fg: 'text-terc-400', dot: 'bg-terc-400' },
  { key: 'nove', bg: 'bg-nove-50', fg: 'text-nove-400', dot: 'bg-nove-400' },
  { key: 'litu', bg: 'bg-litu-50', fg: 'text-litu-400', dot: 'bg-litu-400' },
  { key: 'vers', bg: 'bg-vers-50', fg: 'text-vers-400', dot: 'bg-vers-400' },
  { key: 'sant', bg: 'bg-sant-50', fg: 'text-sant-400', dot: 'bg-sant-400' },
] as const;

export function CategoryGrid() {
  const t = useT();

  return (
    <div className="bg-white rounded-[20px] border border-border shadow-card p-6 md:p-8 w-full">
      <div className="grid grid-cols-2 gap-3 md:gap-4">
        {CATEGORIES.map((category, i) => (
          <motion.div
            key={category.key}
            className={`flex items-center gap-3 rounded-2xl px-4 py-3 ${category.bg}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 * i, ease: 'easeOut' }}
          >
            <span
              className={`w-2.5 h-2.5 rounded-full shrink-0 ${category.dot}`}
              aria-hidden="true"
            />
            <span className={`text-sm font-semibold ${category.fg}`}>
              {t(`category_${category.key}` as 'category_orac')}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
