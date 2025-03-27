export const sections = ['about', 'experiencs', 'projects'] as const;
export type SectionType = (typeof sections)[number] | null;

export type CardData = {
  thumbnail: string;
  year: number;
  badge: string;
  title: string;
  description: string;
  meta: string[];
  contents: {
    subTitle: string;
    items: string[];
  }[];
  projects: {
    name: string;
    tags: string[];
  }[];
  externalLinks: {
    link: string;
    label: string;
    type: 'github' | 'link';
  }[];
  tags: string[];
};
