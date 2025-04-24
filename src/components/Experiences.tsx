'use client';

import { MouseEvent } from 'react';
import { useRouter } from 'next/navigation';
import { PINED_EXPERIENCE_DATA } from '@/data/experiences';
import MoreButton from './MoreButton';
import DataCard from './DataCard';

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
        <ul className='flex flex-col md:gap-15'>
          {PINED_EXPERIENCE_DATA.map((exp) => (
            <li
              key={exp.year}
              onClick={handleClick}
              data-id={exp.id}
              className='cursor-pointer'
            >
              <DataCard data={exp} hover />
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
