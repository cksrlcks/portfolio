import DataCard from '@/components/DataCard';
import SubHeader from '@/components/SubHeader';
import { EXPERIENCE_DATA } from '@/data/experiences';

export default function ExperiencesPage() {
  return (
    <>
      <SubHeader
        title='Experiences'
        desc='다양한 분야에서의 폭넓은 경험을 바탕으로 성장해온 개발자입니다.'
      />
      <div>
        <div className='border-gray/20 mb-14 hidden gap-4 border-b py-6 text-left font-semibold text-white md:flex'>
          <div className='w-[25%]'>년도</div>
          <div>내용</div>
        </div>

        <ul className='flex flex-col gap-15'>
          {EXPERIENCE_DATA.map((exp) => (
            <li key={exp.id} id={exp.id} className='scroll-m-10'>
              <DataCard data={exp} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
