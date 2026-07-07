import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { H3 } from '@/components/ui/H3';
import type { LegalBlock, LegalContent } from '@/content/legal/types';

function Block({ block }: { block: LegalBlock }) {
  if (block.type === 'list') {
    return (
      <ul className="mt-2 list-disc pl-5 space-y-1">
        {block.items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    );
  }

  return <p className="mt-2">{block.text}</p>;
}

export function LegalPage({ content }: { content: LegalContent }) {
  return (
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
              <Block key={i} block={block} />
            ))}
          </div>
        ))}
      </Container>
    </Section>
  );
}
