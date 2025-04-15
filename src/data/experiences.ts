import { CardData } from '@/types';

export const EXPERIENCE_DATA: (Partial<CardData> & Pick<CardData, 'id'>)[] = [
  {
    id: 'codeit',
    year: 2025,
    title: '코드잇 스프린트 프론트엔드 12기 수료',
    meta: ['2024.10 ~ 2025.04'],
    description:
      '유시스에서 근무할 때부터 개발에 관심을 가져 혼자 공부하며 프로젝트를 진행해왔습니다. 이후 협업 경험과 부족한 지식을 보완하기 위해 코드잇 스프린트를 수료하며 최신 웹 개발 트렌드와 기초 지식을 학습해 프론트엔드 역량을 강화하였습니다.',
    contents: [],
  },
  {
    id: 'uxis',
    year: 2024,
    title: '(주)유시스',
    meta: ['UXUI팀 과장', '2019.02 ~ 2024.08'],
    description:
      '웹·모바일 서비스의 디자인 및 퍼블리싱을 담당하였고, 웹 접근성 인증 및 다수의 디자인 어워드를 수상하였습니다. 키오스크, 웹 관제, 태블릿 업무 시스템, 앱 디자인 등 다양한 분야의 프로젝트 경험을 통해 폭넓은 경험을 쌓았습니다. 고객의 요구사항을 정확히 파악하고 이를 반영한 디자인 및 퍼블리싱을 성공적으로 수행하였습니다.',

    contents: [
      {
        subTitle: '주요업무',
        items: ['UXUI 디자인', '퍼블리싱 및 UI개발', '웹접근성 인증 마크 획득'],
      },
      {
        subTitle: '주요성과',
        items: [
          '20년 부산인디커넥트 페스티벌 GDWEB GRAND PRIZE 수상',
          '19년 공유마을 어플리케이션 부산국제디자인어워드(ibda) 수상',
        ],
      },
    ],

    projects: [
      {
        name: 'LH주거복지정보 홈페이지 리뉴얼 ',
        tags: ['UX/UI'],
      },
      {
        name: '오토닉스 회사소개 리뉴얼',
        tags: ['UX/UI', 'Publishing'],
      },
      {
        name: '부산일포유 홈페이지 구축',
        tags: ['UX/UI', 'Publishing'],
      },
      {
        name: '아이오티플랙스 포가드 관제시스템',
        tags: ['UX/UI', 'Publishing', 'React'],
      },
      {
        name: '삼성바이오로직스 협력사 안전포탈 구축 ',
        tags: ['UX/UI', 'Publishing'],
      },
      {
        name: '보딩리스트 예약플랫폼 홈페이지 및 업무시스템, 키오스크 구축',
        tags: ['UX/UI', 'Publishing'],
      },
      {
        name: '20년~24년 부산인디커넥트 페스티벌 홈페이지 구축 및 운영',
        tags: ['UX/UI', 'Publishing'],
      },
      {
        name: '유디저브 플랫폼 구축',
        tags: ['UX/UI', 'Publishing'],
      },
      {
        name: '강원도/충북/제주 교육청 학교조직진단시스템 구축 ',
        tags: ['UX/UI', 'Publishing'],
      },
      {
        name: '20년~24년 부산경제진흥원 홈페이지 리뉴얼 및 웹접근성 인증 ',
        tags: ['UX/UI', 'Publishing', 'Web Accessbility'],
      },
      {
        name: '부산은행 태블릿 업무 시스템 구축',
        tags: ['UX/UI'],
      },
      {
        name: '신안산대학교 입학처 홈페이지 구축 및 웹접근성 인증',
        tags: ['UX/UI', 'Publishing', 'Web Accessbility'],
      },
      {
        name: '북방경제도시협의회 홈페이지 홈페이지 구축 ',
        tags: ['UX/UI', 'Publishing'],
      },
      {
        name: '울산공공보건의료지원단 설문조사 사이트 ‘울팸’ 구축',
        tags: ['UX/UI', 'Publishing'],
      },
      {
        name: '부산일보 지면보기 어플리케이션 디자인',
        tags: ['UX/UI'],
      },
      {
        name: '부산시설공단 홈페이지 리뉴얼 및 웹접근성 인증',
        tags: ['UX/UI', 'Publishing', 'Web Accessbility'],
      },
    ],
  },
  {
    id: 'mipo',
    year: 2018,
    title: '현대미포조선',
    meta: ['생산관리 대리', '2013.11 ~ 2018.11'],
    description:
      '조선해양공학부를 졸업한 후 첫 근무지로 현대미포조선에서 근무하였습니다. 생산공정관리 및 서비스 엔지니어 파견 업무를 통해 체계적인 일정 관리와 문제 해결 능력을 기르게 되었습니다. 이때의 경험은 이후 프로젝트의 공정 관리를 체계적으로 수행하는 데 큰 도움이 되고 있습니다.',
    contents: [
      {
        subTitle: '주요업무',
        items: ['생산공정관리', '서비스 엔지니어 파견'],
      },
    ],
  },
  {
    id: 'univercity',
    year: 2013,
    title: '울산대학교 조선해양공학부 졸업',
    meta: ['학사', '2008.03 ~ 2014.02'],
  },
];

export const PINED_EXPERIENCE_DATA = EXPERIENCE_DATA.map((item) => {
  const filtered = { ...item };
  delete filtered.projects;

  return filtered;
}).slice(0, 3);
