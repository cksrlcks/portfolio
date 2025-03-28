import DataCard from './DataCard';
import MoreButton from './MoreButton';
import { PINED_PROJECT_DATA } from '@/data/projects';

export default function Projects() {
  return (
    <>
      <h2 className='font-inter mb-4 font-semibold text-white lg:hidden'>
        Projects
      </h2>
      <div className='mb-16'>
        <ul className='flex flex-col gap-15'>
          {PINED_PROJECT_DATA.map((item, index) => (
            <li key={index}>
              <DataCard data={item} hover />
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
