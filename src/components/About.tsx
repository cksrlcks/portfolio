export default function About() {
  return (
    <>
      <h2 className='font-inter mb-4 font-semibold text-white lg:hidden'>
        About
      </h2>
      <div className='space-y-8'>
        <div className='flex flex-col gap-6'>
          <p>
            저는 <b>사용자 경험을 최우선</b>으로 생각하는 프론트엔드
            개발자입니다. 단순한 기능 구현을 넘어, 사용자의 행동과 니즈를 깊이
            이해하고 직관적이고 효율적인 인터페이스를 설계하는 데 집중합니다.
          </p>

          <p>
            익숙한 것에 의문을 던지고, 새로운 관점에서 문제를 바라보며 더 나은
            해결책을 모색합니다. 다양한 경험에서 얻은 통찰은 사용자 중심의
            개발에 큰 도움이 되었고, 앞으로도 끊임없이 탐구하며 더 나은 디지털
            경험을 만들어가는 개발자로 성장하겠습니다.
          </p>
        </div>
        <div>
          <h3 className='mb-2 text-white'>핵심역량</h3>
          <ul className='space-y-2'>
            <li>
              요구사항에 맞춰 목적에 적합한 컴포넌트를 설계하고 구현할 수
              있습니다.
            </li>
            <li>
              다양한 UI 구현 경험을 통해 사용자 행동 흐름과 인터렉션에 대한
              감각이 뛰어납니다.
            </li>
            <li>
              기획, 디자인, 마케팅 등 타 직군과의 원활한 협업 경험이 풍부하며,
              서비스의 흐름을 빠르게 이해하고 기획 의도를 반영한 UI/UX 구현이
              가능합니다.
            </li>
            <li>
              접근성과 사용성을 고려하여 UI 컴포넌트를 구현할 수 있습니다.
            </li>
          </ul>
        </div>
        <div>
          <h3 className='mb-2 text-white'>기술스택</h3>
          <ul className='space-y-2'>
            <li>React, Next.js, TypeScript, JavaScript, HTML, CSS</li>
            <li>Tailwind CSS, Styled Components</li>
            <li>Git, GitHub</li>
            <li>Figma, Adobe XD, Photoshop, Zeplin</li>
          </ul>
        </div>
      </div>
    </>
  );
}
