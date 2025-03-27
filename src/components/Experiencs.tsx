import { PINED_EXPERIENCE_DATA } from '@/data/experiences';
import MoreButton from './MoreButton';
import DataCard from './DataCard';

export default function Experiencs() {
  return (
    <>
      <h2 className='font-inter mb-4 font-semibold text-white lg:hidden'>
        Experiences
      </h2>
      <div className='mb-16'>
        <ul className='flex flex-col gap-15'>
          {PINED_EXPERIENCE_DATA.map((exp) => (
            <li key={exp.year}>
              <DataCard data={exp} hover />
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
