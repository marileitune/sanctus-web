import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { H3 } from '@/components/ui/H3';
import { LegalBlock } from '@/components/legal/LegalBlock';
import type { LegalContent } from '@/content/legal/types';

export const LegalPage = ({ content }: { content: LegalContent }) => (
  <Section
    className="bg-white text-ink-secondary min-h-screen"
    style={{ paddingTop: 'calc(var(--navbar-h) + 3rem)' }}
  >
    <Container className="max-w-2xl">
      <h1 className="text-2xl font-bold text-center text-ink">
        {content.title}
      </h1>
      <div className="text-sm text-ink-muted text-center mt-2">
        {content.updatedAt}
      </div>
      {content.intro?.map((paragraph, i) => (
        <p key={i} className={i === 0 ? 'mt-8' : 'mt-2'}>
          {paragraph}
        </p>
      ))}
      {content.sections.map((section) => (
        <div key={section.heading} className="mt-8">
          <H3>{section.heading}</H3>
          {section.blocks.map((block, i) => (
            <LegalBlock key={i} block={block} />
          ))}
        </div>
      ))}
    </Container>
  </Section>
);
