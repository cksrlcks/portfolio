import { CardData } from '@/types';

export const PROJECT_DATA: Partial<CardData>[] = [
  {
    thumbnail: '/projects/maskit.svg',
    year: 2025,
    badge: 'Personal',
    title: 'Maskit',
    description:
      'Maskit(마스킷)은 이미지에서 민감한 정보를 손쉽게 가릴 수 있는 도구입니다. 마우스로 영역을 선택하거나 이모지를 추가하고, 자동으로 텍스트를 감지해 가려줍니다. 편집한 이미지는 복사하거나 다운로드할 수 있습니다.',
    contents: [],
    externalLinks: [
      {
        link: 'https://maskit.kr',
        label: 'maskit.kr',
        type: 'link',
      },
      {
        link: 'https://github.com/cksrlcks/maskit',
        label: 'repo',
        type: 'github',
      },
    ],
    tags: ['React', 'Jotai', 'Canvas'],
  },
  {
    thumbnail: '/projects/epigram.svg',
    year: 2025,
    badge: 'Team',
    title: 'Epigram',
    description:
      '에피그램은 명언을 공유하고 사람들과 댓글로 소통하며, 나의 감정을 기록하고 통계로 시각화하여 감정 변화를 한눈에 확인할 수 있는 커뮤니티 플랫폼입니다.',
    contents: [],
    externalLinks: [
      {
        link: 'https://epigram-gilv.vercel.app/',
        label: 'epigram',
        type: 'link',
      },
      {
        link: 'https://github.com/kss761036/Epigram',
        label: 'repo',
        type: 'github',
      },
    ],
    tags: ['Next.js', 'Storybook', 'Jest', 'Zustand', 'Zod', 'React Hook Form'],
  },
];
