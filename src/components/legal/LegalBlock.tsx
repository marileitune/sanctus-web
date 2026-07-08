import type { LegalBlock as LegalBlockType } from '@/content/legal/types';

export const LegalBlock = ({ block }: { block: LegalBlockType }) => {
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
};
