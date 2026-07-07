export interface LegalParagraphBlock {
  type: 'paragraph';
  text: string;
}

export interface LegalListBlock {
  type: 'list';
  items: string[];
}

export type LegalBlock = LegalParagraphBlock | LegalListBlock;

export interface LegalSection {
  heading: string;
  blocks: LegalBlock[];
}

export interface LegalContent {
  title: string;
  updatedAt: string;
  intro?: string[];
  sections: LegalSection[];
}

export function p(text: string): LegalParagraphBlock {
  return { type: 'paragraph', text };
}

export function list(items: string[]): LegalListBlock {
  return { type: 'list', items };
}
