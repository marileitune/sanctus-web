'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { H2 } from '@/components/ui/H2';
import { useT } from '@/lib/i18n/useT';
import { CategoryGrid } from '@/components/home/CategoryGrid';

export const AboutUs = () => {
  const t = useT();

  return (
    <section id="about">
      <Section className="bg-white">
        <Container className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <H2>{t('nav_item_about')}</H2>
            <p className="text-ink-secondary leading-relaxed text-base md:text-lg">
              {t('about_text')}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.15 }}
            viewport={{ once: true }}
          >
            <CategoryGrid />
          </motion.div>
        </Container>
      </Section>
    </section>
  );
};
