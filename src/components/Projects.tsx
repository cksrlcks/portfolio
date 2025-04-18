'use client';

import { MouseEvent } from 'react';
import { useRouter } from 'next/navigation';
import DataCard from './DataCard';
import MoreButton from './MoreButton';
import { PINED_PROJECT_DATA } from '@/data/projects';

export default function Projects() {
  const router = useRouter();
  const handleClick = (e: MouseEvent<HTMLLIElement>) => {
    const id = e.currentTarget.dataset.id;
    router.push(`/projects#${id}`);
  };

  return (
    <>
      <h2 className='font-inter mb-4 font-semibold text-white lg:hidden'>
        Projects
      </h2>
      <div className='mb-16'>
        <ul className='flex flex-col gap-15'>
          {PINED_PROJECT_DATA.map((project, index) => (
            <li
              key={index}
              onClick={handleClick}
              data-id={project.id}
              className='cursor-pointer'
            >
              <DataCard data={project} hover />
            </li>
          ))}
        </ul>
      </div>
      <div>
        <MoreButton href='/projects'>더 많은 프로젝트 보기</MoreButton>
      </div>
    </>
  );
}
