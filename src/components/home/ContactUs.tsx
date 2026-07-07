'use client';

import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { H2 } from '@/components/ui/H2';
import { useT } from '@/lib/i18n/useT';
import { ContactEmail } from '@/components/home/ContactEmail';
import { SocialIcons } from '@/components/home/SocialIcons';
import { StoreBadges } from '@/components/home/StoreBadges';

export const ContactUs = () => {
  const t = useT();

  return (
    <section id="contact">
      <Section className="bg-gradient-to-b from-brand-50 to-white">
        <Container className="flex flex-col items-center text-center gap-4">
          <H2 centerAccent>{t('nav_item_contact')}</H2>
          <ContactEmail />
          <SocialIcons />
          <StoreBadges />
        </Container>
      </Section>
    </section>
  );
};
