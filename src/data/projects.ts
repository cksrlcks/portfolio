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
    background:
      '특정 주제에 대한 다양한 링크(블로그, 유튜브, 자료 등)를 한곳에 모아 보기 좋게 정리하고 공유하고 싶을 때, 매번 새 글을 작성하는 번거로움을 줄이고자 했습니다. 링크만으로도 큐레이션된 공유 페이지를 만들 수 있는 도구의 필요성을 느껴 개발했습니다.\n기술적인 측면에서는 Next.js Server Action 및 SSR 실습하면서, 실제 서비스 수준의 데이터 흐름을 구현하며 React Query 없이 모든 데이터 흐름을 SSR과 서버액션 기반으로 처리하여 서버 중심 아키텍처 경험을 쌓는 것을 목표로 했습니다.',
    content: [
      {
        title: 'Server Actions 기반의 로드맵 CRUD',
        description:
          'Next.js의 App Router 환경에서 서버 액션을 활용해 로드맵의 생성, 수정, 삭제 기능을 구현했습니다. API 라우트를 별도로 두지 않고, 클라이언트에서 직접 서버 함수를 호출하는 구조로 간결하고 일관된 데이터 흐름을 만들었습니다.\nNext.js SSR과 쿼리스트링 연동 시 발생하는 UX적 부자연스러움을 해결하기 위해 프레임워크 렌더링 과정을 분석하고, React의 useTransition, useOptimistic 등 최신 Hook을 학습하고 활용했습니다.',
      },
      {
        title: '사용자 경험을 고려한 정렬 가능한 동적 링크 입력 폼 구현',
        description:
          '링크를 입력시 서버 액션으로 Open Graph 메타데이터를 수집한 뒤, 자동으로 링크 입력 필드를 추가합니다.  이 동적 폼은 react-hook-form의 useFieldArray로 구성되며, 생성/삭제뿐만 아니라 순서 변경까지 지원합니다. 정렬은 DnDKit과 Motion을 사용하여 드래그 시 자연스러운 애니메이션으로 처리했습니다.',
      },
      {
        title:
          '서버사이드 용량 제한을 우회하기 위한 Presigned URL 기반 이미지 업로드',
        description:
          '서버 액션을 통해 Presigned URL을 발급하고, 클라이언트에서 해당 URL로 직접 업로드하도록 구성했습니다. 이를 통해 서버 사이드에서의 업로드 용량 제한을 피하면서, Cloudflare R2로 안정적으로 파일을 전송할 수 있는 구조를 구현했습니다.',
      },
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
    results: [
      'React Query와 같은 클라이언트 상태 관리 라이브러리 없이, 서버 중심의 데이터 흐름을 구현',
      'useTransition, useOptimistic과 같은 최신 React Hook을 실제 문제 해결에 적용하며 사용자 경험을 개선',
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
    background:
      '온라인에 이미지를 공유하는 일이 많아진 요즘, 의도치 않게 개인정보나 민감한 내용이 노출되는 경우도 잦아졌습니다.  Maskit(마스킷)은 이런 상황에서 간단하게 민감한 영역을 가릴 수 있는 도구가 있었으면 좋겠다는 생각에서 출발한 프로젝트입니다.\n복잡한 UI를 구현할 때 DOM 상태를 직접 제어하는 방식에 한계를 느꼈고, 상태 기반으로 UI를 선언적으로 구성할 수 있는 React의 방식에 매력을 느껴 이를 실제로 적용해 보기 위해 프로젝트를 시작하게 되었습니다. ',
    content: [
      {
        title: '직관적 이미지 마스킹을 위한 Canvas 도구 구현',
        description:
          '사용자가 업로드한 이미지를 Canvas에 렌더링한 후, 드래그 마스킹 또는 이모지를 이용해 시각적으로 가릴 수 있도록 구현했습니다. 마스킹된 결과는 이미지 형태로 다시 추출할 수 있도록 처리했습니다.',
      },
      {
        title: '복잡한 Canvas의 상태 관리를 위한 구조화 설계',
        description:
          '복잡한 Canvas 조작 상태를 Jotai로 체계적으로 분리해 관리함으로써, 동작 흐름을 간결하게 구성했습니다.',
      },
      {
        title: '클라우드 이미지 선택 기능 구현',
        description:
          'Google Drive, Dropbox 클라우드 서비스와 연동하여, 사용자가 저장된 이미지를 선택해 불러올 수 있도록 구현했습니다.',
      },
      {
        title: '사용자 편의를 위한 기능 개발',
        description:
          '다국어 처리, 단축키 지원, 복사 및 붙여넣기 등의 사용자 편의 기능을 구현했습니다.',
      },
      {
        title: '텍스트 자동 인식을 통한 마스킹 보조 기능 구현',
        description:
          'Tesseract.js가 반환하는 텍스트 인식 결과(좌표)를 활용해, 위치와 스케일 보정을 거쳐 캔버스에 정확하게 시각화했습니다.',
      },
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
    results: [
      '복잡한 상태 조작이 필요한 인터랙티브 UI를 상태 관리 도구를 활용해 효과적으로 구성하는 방법을 익혔습니다.',
      '다국어 처리를 직접 적용해 보며, 실제 서비스에서 다양한 언어를 지원하기 위한 기본적인 구조와 처리 방식을 배울 수 있었습니다.',
      '외부 클라우드 서비스(Google Drive, Dropbox 등)와의 연동 및 인증 처리 흐름을 이해하고 구현했습니다.',
      '설정값 및 텍스트의 상수화를 통해 환경별, 언어별 대응이 쉬운 구조로 설계하는 경험을 쌓았습니다.',
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
        title: '스토리북 셋팅 및 CI/CD 구성',
        description:
          'Storybook을 도입하여 UI 컴포넌트를 독립적으로 테스트하고 문서화할 수 있는 환경을 구축하고, GitHub Actions를 통해 CI 워크플로우 자동화를 구성',
      },
      {
        title: 'POSTMAN을 활용한 API 테스트 환경 구축',
        description:
          'API 테스트를 위한 Postman 세팅 및 Nextauth와 연동 구현 및 팀원들을 위한 가이드문서 작성',
      },
      {
        title: 'middleware 및 인증 로직 구현',
        description:
          '로그인 여부에 따라 보호 페이지 접근을 제어하기 위해 NextAuth와 Next.js Middleware를 함께 활용한 인증 로직 구현',
      },
      {
        title: 'API proxy, axios 설정',
        description:
          '브라우저에서 백엔드 API로 직접 요청하지 않고 인증 흐름을 일관되게 처리하기 위해, Next.js의 Catch-all Segment와 Route Handler를 활용해 프록시 구조를 구성하고, axios interceptor로 요청 시 토큰 자동 주입 및 만료 시 재발급 처리까지 구현함.',
      },
      {
        title: '소셜 로그인 플로우 구현',
        description:
          'Nextauth의 Kakao Provider를 사용할 수 없는 환경에 대응하기 위해, 인가 코드를 활용한 credentials 기반 소셜 로그인 플로우를 직접 구현',
      },
      {
        title: '콘텐츠를 기반으로한 Opengraph 이미지 생성',
        description:
          '게시글 콘텐츠를 기반으로 OG 이미지를 서버 측에서 실시간 생성하여, 링크 공유 시 콘텐츠의 핵심이 잘 드러나도록 시각적 정보를 제공함',
      },
      {
        title: '감정 데이터 시각화',
        description:
          '감정 데이터를 시각화하는 차트를 구현하고, 프로젝트 전반에서 재사용 가능한 공용 컴포넌트를 개발했습니다.',
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
        title: '랜딩 페이지 애니메이션 구현',
        description:
          '사용자에게 시각적 몰입감을 주기 위해, Motion 라이브러리를 활용한 스크롤 기반 랜딩 페이지 애니메이션 구현',
      },
      {
        title: '공용 UI 컴포넌트 설계 및 구현',
        description:
          '컴포넌트의 재사용성과 확장성을 높이기 위한 Tailwind CSS와 class variants를 조합한 공용 UI 컴포넌트 설계 및 구현',
      },
      {
        title: '공용 모달 컴포넌트 구현',
        description:
          '명령형 제어 방식 도입을 통해 더 직관적인 개발 흐름을 만들기 위해, useImperativeHandle을 활용한 공용 모달 컴포넌트 구현',
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

export const PINED_PROJECT_DATA = PROJECT_DATA.slice(0, 3);
