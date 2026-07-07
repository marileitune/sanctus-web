'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { H2 } from '@/components/ui/H2';
import { useT } from '@/lib/i18n/useT';

const WEEK = [true, true, true, true, true, false, false];

export const Streak = () => {
  const t = useT();

  return (
    <Section className="bg-brand-900 text-white">
      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-orac-400 mb-3">
            {t('streak_eyebrow')}
          </span>
          <H2 className="text-white">{t('streak_title')}</H2>
          <p className="text-brand-100 leading-relaxed text-base md:text-lg">
            {t('streak_text')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.15 }}
          viewport={{ once: true }}
          className="bg-white/5 border border-white/10 rounded-[20px] p-6 md:p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <Image
              src="/logo.svg"
              alt=""
              width={40}
              height={40}
              className="w-10 h-10"
              aria-hidden="true"
            />
            <div>
              <div className="text-3xl font-extrabold text-orac-400">5</div>
              <div className="text-xs text-brand-100 uppercase tracking-wide">
                {t('streak_badge')}
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            {WEEK.map((active, i) => (
              <div
                key={i}
                className={`flex-1 h-10 rounded-lg ${active ? 'bg-orac-400' : 'bg-white/10'}`}
                aria-hidden="true"
              />
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
};
