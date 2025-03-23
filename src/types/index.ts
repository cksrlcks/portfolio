export const sections = ['about', 'experiencs', 'projects'] as const;
export type SectionType = (typeof sections)[number] | null;
