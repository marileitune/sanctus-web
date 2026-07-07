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

export const p = (text: string): LegalParagraphBlock => ({
  type: 'paragraph',
  text,
});

export const list = (items: string[]): LegalListBlock => ({
  type: 'list',
  items,
});
