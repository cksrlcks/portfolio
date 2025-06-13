import { ProjectData } from '@/types';

export const PROJECT_DATA: ProjectData[] = [
  {
    id: 'pickroad',
    thumbnail: '/projects/pickroad.svg',
    year: '2025',
    projectType: 'Personal',
    title: 'Pick Road',
    description:
      'PickRoad는 블로그, 유튜브 등의 링크를 주제별로 큐레이션해 로드맵 형태로 공유할 수 있는 웹 서비스입니다. Next.js의 Server Action과 SSR을 활용해 서버 중심의 데이터 흐름을 구성하고, Drizzle ORM과 PostgreSQL로 기본적인 데이터 모델링과 CRUD 작업을 직접 구현했습니다.',
    externalLinks: [
      {
        link: 'https://pick-road.com',
        label: 'pick-road.com',
        type: 'link',
      },
      {
        link: 'https://github.com/cksrlcks/pickroad',
        label: 'repo',
        type: 'github',
      },
    ],
    tags: [
      'Next.js',
      'Typescript',
      'Drizzle',
      'Supabase',
      'Zod',
      'React Hook Form',
      'Tailwind CSS',
      'SSR',
    ],
    docs: [
      {
        title: 'React 18 vs 19: useTransition 동작 비교',
        description:
          'React 19에서 useTransition이 async 함수를 지원하면서, 로딩 상태 관리가 어떻게 달라졌는지 React 18과 비교해 정리했습니다.',
        link: '/post/react-transition',
      },
      {
        title: 'unstable_cache 안에서 세션 조회 같은 동작이 지원되지 않는 이유',
        description:
          'Next.js의 unstable_cache는 정적 캐싱을 위해 설계되어 있어서, 세션 조회처럼 요청마다 달라지는 동작은 포함할 수 없다는 제약이 있습니다. 실제로 이 제약에 부딪히며, 공통 데이터는 캐싱하고 사용자별 데이터는 외부에서 처리하는 방식으로 구조를 나누는 방법을 직접 적용해 보았습니다.',
        link: '/post/nextjs-unstable-cache',
      },
      {
        title: 'Next.js App Router에서 쿼리스트링을 통한 상태 변경시 주의할 점',
        description:
          'Next.js App Router에서 쿼리스트링을 통한 상태 변경 시 UI가 멈춘 듯 보이는 이유와 Suspense의 미동작 원인에 대해 분석했습니다.',
        link: '/post/nextjs-filter',
      },
    ],
  },
  {
    id: 'maskit',
    thumbnail: '/projects/maskit.svg',
    year: '2025',
    projectType: 'Personal',
    title: 'Maskit',
    description:
      'Maskit(마스킷)은 이미지에서 민감한 정보를 손쉽게 가릴 수 있는 도구입니다. 마우스로 영역을 선택하거나 이모지를 추가하고, 자동으로 텍스트를 감지해 가려줍니다. 편집한 이미지는 복사하거나 다운로드할 수 있습니다.',

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
    tags: [
      'React',
      'Typescript',
      'Jotai',
      'Tailwind CSS',
      'Shadcn',
      'Canvas',
      'Konva.js',
    ],
    docs: [
      {
        title: 'React에서 Google Drive Picker 사용하기',
        description:
          '마스킷 프로젝트에서 이미지의 입력방식을 다방면으로 확장하기 위해서 구글드라이브와, 드롭박스를 통해 업로드할 수 있게 구현 중에 구글 드라이브 피커 사용 시 문제를 겪게 되어서 정리해 보았습니다.',
        link: '/post/maskit-googledrive',
      },
      {
        title: '이모지 폰트 적용을 통한 UI 일관성 유지',
        description:
          '모든 이모지를 이미지로 제공하기 어려워 기본 이모지 폰트를 사용하려 했지만, macOS에서는 SVG 형식이 아닌 이모지가 사용되어 호환 이슈가 발생했습니다. 이를 해결하기 위해 Noto Color Emoji 웹폰트를 적용했습니다.',
        link: '/post/maskit-emoji',
      },
      // {
      //   title: '기능과 관리하는 상태가 많아진 canvas context를 개선',
      //   description:
      //     'Canvas 관련 기능들을 context로 통합했지만, 관리해야 할 상태가 많아지면서 기능 추가 시 복잡도가 높아졌습니다. 이를 해결하기 위해 상태를 하나의 객체로 묶고, Jotai를 도입해 보다 효율적으로 상태를 관리했습니다.',
      //   link: '#작성중',
      // },
      {
        title:
          'iOS에서 ClipboardItem으로 canvas 이미지 복사가 실패하는 이유와 해결 방법',
        description:
          'iOS에서 ClipboardItem에 Blob을 직접 전달했을 때 클립보드 복사가 실패하는 원인을 분석하고, 이를 모든 브라우저에서 동작하도록 개선한 과정을 정리했습니다.',
        link: '/post/maskit-clipboard',
      },
    ],
  },
  {
    id: 'epigram',
    thumbnail: '/projects/epigram.svg',
    year: '2025',
    projectType: 'Team',
    title: 'Epigram',
    description:
      '에피그램은 명언을 공유하고 사람들과 댓글로 소통하며, 나의 감정을 기록하고 통계로 시각화하여 감정 변화를 한눈에 확인할 수 있는 커뮤니티 플랫폼입니다.',
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
    tags: [
      'Next.js',
      'Storybook',
      'Jest',
      'Zustand',
      'Zod',
      'React Hook Form',
      'React Query',
      'Tailwind CSS',
      'Motion',
    ],
    roles: [
      {
        title: '스토리북 배포 설정',
        description:
          'PR이 제출되거나 main 브랜치에 머지될 때마다, 자동으로 Storybook 프리뷰 링크가 생성되도록 GitHub Actions를 설정하였습니다.',
      },
      {
        title: 'middleware 및 API proxy, axios 설정',
        description:
          'Next.js middleware로 인증이 필요한 페이지는 세션이 없을 경우 로그인 페이지로 리다이렉트되며, API 요청은 catch-all 라우트를 통해 서버에서 토큰을 자동으로 포함해 백엔드로 전달되도록 구성했습니다.',
      },
      {
        title: '소셜 로그인 구현',
        description:
          '소셜 로그인 후 프론트엔드에서 받은 인가코드를 백엔드로 전달하기 위해, NextAuth의 Custom Credentials Provider를 활용해 인증 플로우를 커스터마이징했습니다.',
      },
      {
        title: '감정차트 및 공용 컴포넌트 작업',
        description:
          '감정 데이터를 시각화하는 차트를 구현하고, 프로젝트 전반에서 재사용 가능한 공용 컴포넌트를 개발했습니다.',
      },
      {
        title: '도메인 기반으로 서비스 레이어 분리 및 API 추상화 설계',
        description:
          '각 도메인별로 service, types, queries 파일을 구조화하여 API 호출 로직과 타입, 쿼리를 모듈화하고 재사용성과 유지보수성을 높였습니다.',
      },
    ],
    docs: [
      {
        title: 'NextAuth Crendentials SignIn과 Postman 연동',
        description:
          'NextAuth에서 HTTPOnly 쿠키로 저장된 accessToken을 Postman에서 효율적으로 활용하기 위한 방법을 정리했습니다.',
        link: '/post/nextauth-postman',
      },
      {
        title: 'NextAuth Crendentials Provider Custom',
        description:
          'Oauth 로그인후 전달받은 인가코드를 백앤드API로 전송하여, 유저정보를 가져오는 상황에서 Nextauth의 Credentials Provider로 효율적으로 accessToken과 Session을 관리하는 방법을 정리했습니다.',
        link: '/post/nextauth-custom',
      },
      {
        title: 'Opengraph image를 다이나믹하게 제공하기',
        description:
          'API로부터 받아온 데이터를 활용하여, 서버에서 직접 Opengraph image를 생성하여 제공하는 과정중에 겪은 문제점을 정리했습니다.',
        link: '/post/nextjs-opengraph',
      },
      {
        title: '고급 프로젝트 회고',
        description:
          '코드잇 스프린트 마지막 프로젝트를 마무리후 회고를 작성했습니다.',
        link: '/post/sprint-final-project',
      },
    ],
  },
  {
    id: 'taskify',
    thumbnail: '/projects/taskify.svg',
    year: '2024',
    projectType: 'Team',
    title: 'Taskify',
    description:
      'Taskify는 일정 관리 기능을 지원하는 웹 애플리케이션입니다. 초대 기능을 활용하여 다른 사용자와 일정 관리를 공유할 수 있습니다. 다른 사람들과 일정을 공유하여 성공적으로 Task를 해결할 수 있습니다.',
    externalLinks: [
      {
        link: 'https://taskify-lab.vercel.app',
        label: 'taskify-lab.vercel.app',
        type: 'link',
      },
      {
        link: 'https://github.com/ToKyun02/Taskify',
        label: 'repo',
        type: 'github',
      },
    ],
    tags: [
      'Next.js',
      'Zustand',
      'Zod',
      'React Hook Form',
      'React Query',
      'Tailwind CSS',
      'Motion',
    ],
    roles: [
      {
        title: '랜딩페이지 작업',
        description:
          'Lottie와 Motion 라이브러리를 활용해 스크롤에 반응하는 인터랙티브한 애니메이션을 구현했습니다.',
      },
      {
        title: '입력 및 버튼 공용 컴포넌트 작업',
        description:
          '여러 화면에서 공통으로 사용되는 UI를 효율적으로 관리하기 위해 공용 컴포넌트를 만들었고, 다양한 상황에서도 잘 작동하도록 props와 스타일을 유연하게 설계하는 데 신경 썼습니다.',
      },
      {
        title: '공용 모달 컴포넌트 작업',
        description:
          '자주 사용되는 모달을 더 효율적으로 관리하기 위해, 명령형 제어 방식을 도입하고 useImperativeHandle로 ref를 통해 모달을 열고 닫을 수 있게 구현했습니다.',
      },
    ],
    docs: [
      {
        title: '페이지 전환 시 prefetch로 인해 middleware가 동작하지 않는 문제',
        description:
          '페이지 렌더링 시 발생하는 prefetch로 인해 middleware를 거치지 않고 페이지가 전환되는 문제를 겪었고, 이를 해결하며 클라이언트 사이드 라우트 캐시를 어떻게 제어할 수 있는지에 대해 정리했습니다.',
        link: '/post/nextjs-prefetch',
      },
      {
        title: '랜덤처럼 보이지만 랜덤이 아닌 색상코드',
        description:
          'API의 한계로 태그 색상과 기본 아바타 배경색을 저장할 수 없어, 매번 달라 보이지 않도록 일정한 규칙 기반의 색상 매칭 로직을 구현해 일관성을 유지했습니다.',
        link: '/post/sprint-second-color',
      },
      {
        title: '중급 프로젝트 회고',
        description:
          '코드잇 스프린트 중급 프로젝트를 마무리후 회고를 작성했습니다.',
        link: '/post/sprint-second-project',
      },
    ],
  },
];

export const PINED_PROJECT_DATA = PROJECT_DATA.map((item) => {
  const filtered = { ...item };
  delete filtered.roles;
  delete filtered.docs;

  return filtered;
}).slice(0, 3);
