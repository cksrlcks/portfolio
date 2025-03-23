import Link from 'next/link';
import { RiGithubFill } from '@remixicon/react';

export default function Profile() {
  return (
    <>
      <Link href='/' className='mb-8 inline-flex'>
        <h1 className='text-3xl font-semibold text-white lg:text-4xl'>
          김찬기
        </h1>
      </Link>
      <div className='mb-4 text-white'>프론트앤드 개발자</div>
      <p className='mb-6'>
        당연한 일도 다른 시각으로 바라보며 새로운 가능성을 찾습니다. 경험을
        소중히 여기며, 늘 궁금해하고 배워가며 성장합니다.
      </p>
      <div className='font-inter flex gap-4 text-sm lg:mb-14'>
        <a
          href='https://github.com/cksrlcks'
          target='_blank'
          rel='noopener noreferrer'
          className='text-primary flex items-center gap-1.5 font-semibold hover:underline'
        >
          <RiGithubFill size={16} />
          GITHUB
        </a>
        <a
          href='mailto:chanki.kim89@gmail.com'
          className='transition-colors hover:text-white'
        >
          chanki.kim89@gmail.com
        </a>
      </div>
    </>
  );
}
