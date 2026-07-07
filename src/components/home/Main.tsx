'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { H1 } from '@/components/ui/H1';
import { Button } from '@/components/ui/Button';
import { useT } from '@/lib/i18n/useT';
import { STORE_URL } from '@/lib/constants';

export const Main = () => {
  const t = useT();

  return (
    <section id="home">
      <Section
        className="bg-gradient-to-b from-brand-50 via-brand-25 to-white flex flex-col w-full min-h-[100dvh] items-center justify-center"
        style={{ paddingTop: 'calc(var(--navbar-h) + 2rem)' }}
      >
        <Container className="flex flex-col items-center gap-y-6 md:gap-y-8">
          <motion.div
            className="relative flex items-center justify-center w-40 h-40 md:w-56 md:h-56 mb-2"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div
              className="absolute inset-0 rounded-full bg-brand-100 blur-3xl opacity-70"
              aria-hidden="true"
            />
            <Image
              src="/logo.svg"
              alt=""
              aria-hidden="true"
              width={144}
              height={144}
              priority
              className="relative w-24 h-24 md:w-36 md:h-36"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
          >
            <H1 className="text-brand-900 text-center">Sanctus</H1>
          </motion.div>
          <motion.p
            className="text-base md:text-lg text-center text-ink-secondary tracking-widest uppercase"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            {t('main_subtitle')}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          >
            <Button size="lg" onClick={() => window.open(STORE_URL, '_blank')}>
              {t('main_btn')}
              <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </Container>
      </Section>
    </section>
  );
};
