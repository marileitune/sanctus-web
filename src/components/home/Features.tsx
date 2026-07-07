'use client';

import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { H2 } from '@/components/ui/H2';
import { useT } from '@/lib/i18n/useT';
import { FeatureItem } from './FeatureItem';

const features = ['one', 'two', 'three'] as const;

export function Features() {
  const t = useT();

  return (
    <section id="features">
      <Section className="bg-cream">
        <Container className="flex flex-col items-center">
          <div className="text-center">
            <H2 centerAccent>{t('nav_item_features')}</H2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 w-full">
            {features.map((feature, i) => (
              <FeatureItem key={feature} feature={feature} i={i} />
            ))}
          </div>
        </Container>
      </Section>
    </section>
  );
}
