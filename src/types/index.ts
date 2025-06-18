export const sections = ['about', 'experiences', 'projects'] as const;
export type SectionType = (typeof sections)[number] | null;

export type BaseData = {
  id: string;
  year: string;
  title: string;
  description?: string;
  thumbnail?: string;
};

export type BaseDoc = {
  title: string;
  description?: string;
  link?: string;
};

export type ExperienceData = BaseData & {
  position?: string;
  period: string;
  tasks?: BaseDoc[];
  results?: BaseDoc[];
  projects?: (BaseDoc & {
    tags: string[];
  })[];
};

export type ProjectData = BaseData & {
  projectType: 'Personal' | 'Team';
  externalLinks: {
    label: string;
    link: string;
    type: 'link' | 'github';
  }[];
  tags: string[];
  roles?: BaseDoc[];
  docs?: BaseDoc[];
  background?: string;
  content?: BaseDoc[];
  results?: string[];
};

export type Metadata = {
  title: string;
  description: string;
  date: string;
};

export type Post = {
  slug: string;
  metadata: Metadata;
  content: string;
};
