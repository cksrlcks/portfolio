import MoreButton from '../ui/MoreButton';

const EXPERIENCE_DATA = [
  {
    year: '2025',
    title: '코드잇 스프린트 프론트엔드 12기 수료',
    period: '2024.10 ~ 2025.04',
    description:
      '유시스에서 근무할 때부터 개발에 관심을 가져 혼자 공부하며 프로젝트를 진행해왔습니다. 이후 협업 경험과 부족한 지식을 보완하기 위해 코드잇 스프린트를 수료하며 최신 웹 개발 트렌드와 기초 지식을 학습해 프론트엔드 역량을 강화하였습니다.',
    highlights: [
      '팀프로젝트 Epigram 진행',
      '팀프로젝트 Taskify 진행',
      '리액트 및 자바스크립트 학습',
    ],
  },
  {
    year: '2024',
    title: '(주)유시스',
    position: 'UXUI팀 과장',
    period: '2019.02 ~ 2024.08',
    description:
      '웹·모바일 서비스의 디자인 및 퍼블리싱을 담당하였고, 웹 접근성 인증 및 다수의 디자인 어워드를 수상하였습니다. 키오스크, 웹 관제, 태블릿 업무 시스템, 앱 디자인 등 다양한 분야의 프로젝트 경험을 통해 폭넓은 경험을 쌓았습니다. 고객의 요구사항을 정확히 파악하고 이를 반영한 디자인 및 퍼블리싱을 성공적으로 수행하였습니다.',
    tasks: ['UXUI 디자인', '퍼블리싱 및 UI개발', '웹접근성 인증 마크 획득'],
    highlights: [
      '20년 부산인디커넥트 페스티벌 GDWEB GRAND PRIZE 수상',
      '19년 공유마을 어플리케이션 부산국제디자인어워드(ibda) 수상',
    ],
  },
  {
    year: '2018',
    title: '현대미포조선',
    position: '생산관리 대리',
    period: '2013.11 ~ 2018.11',
    description:
      '조선해양공학부를 졸업한 후 첫 근무지로 현대미포조선에서 근무하였습니다. 생산공정관리 및 서비스 엔지니어 파견 업무를 통해 체계적인 일정 관리와 문제 해결 능력을 기르게 되었습니다. 이때의 경험은 이후 프로젝트의 공정 관리를 체계적으로 수행하는 데 큰 도움이 되고 있습니다.',
    tasks: ['생산공정관리', '서비스 엔지니어 파견'],
  },
];

export function Experiencs() {
  return (
    <>
      <h2 className='font-inter mb-4 font-semibold text-white lg:hidden'>
        Experiences
      </h2>
      <div className='mb-16'>
        <ul className='flex flex-col gap-15'>
          {EXPERIENCE_DATA.map((exp) => (
            <li key={exp.year}>
              <div className='group relative'>
                <div className='relative z-10 flex gap-4'>
                  <div className='w-[25%]'>{exp.year}</div>
                  <div className='flex-1'>
                    <h3 className='mb-4 font-semibold text-white'>
                      {exp.title}
                    </h3>
                    <ul className='mb-4 flex flex-col gap-1 text-sm'>
                      {exp.position && <li>{exp.position}</li>}
                      <li>{exp.period}</li>
                    </ul>

                    <div className='flex flex-col gap-6'>
                      <p>{exp.description}</p>

                      {exp.tasks && (
                        <div className='text-sm'>
                          <h4 className='mb-2 text-white'>주요업무</h4>
                          <ul className='flex flex-col gap-1'>
                            {exp.tasks.map((task) => (
                              <li key={task}>{task}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {exp.highlights && (
                        <div className='text-sm'>
                          <h4 className='mb-2 text-white'>주요성과</h4>
                          <ul className='flex flex-col gap-1'>
                            {exp.highlights.map((highlight) => (
                              <li key={highlight}>{highlight}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <span className='bg-muted pointer-events-none absolute top-1/2 left-1/2 h-[calc(100%+60px)] w-[calc(100%+60px)] -translate-x-1/2 -translate-y-1/2 rounded-lg border border-white/4 opacity-0 transition-opacity lg:group-hover:opacity-100'></span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <MoreButton href='/experiencs'>더 많은 경험 보기</MoreButton>
      </div>
    </>
  );
}
