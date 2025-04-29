'use client';

import { MouseEvent } from 'react';
import { useRouter } from 'next/navigation';
import { PINED_EXPERIENCE_DATA } from '@/data/experiences';
import MoreButton from './MoreButton';
import { ExperienceCard } from './DataCard';

export default function Experiences() {
  const router = useRouter();
  const handleClick = (e: MouseEvent<HTMLLIElement>) => {
    const id = e.currentTarget.dataset.id;
    router.push(`/experiences#${id}`);
  };

  return (
    <>
      <h2 className='font-inter mb-8 font-semibold text-white lg:hidden'>
        Experiences
      </h2>
      <div className='mb-16'>
        <ul className='space-y-10 md:space-y-15'>
          {PINED_EXPERIENCE_DATA.map((experience) => (
            <li
              key={experience.year}
              onClick={handleClick}
              data-id={experience.id}
              className='cursor-pointer'
            >
              <ExperienceCard experience={experience} hover />
            </li>
          ))}
        </ul>
      </div>
      <div>
        <MoreButton href='/experiences'>더 많은 경험 보기</MoreButton>
      </div>
    </>
  );
}
