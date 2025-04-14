import DataCard from '@/components/DataCard';
import SubHeader from '@/components/SubHeader';
import { PROJECT_DATA } from '@/data/projects';

export default function ProjectsPage() {
  return (
    <>
      <SubHeader
        title='Projects'
        desc='성공적인 프로젝트 경험을 통해 문제 해결 능력과 협업 역량을 키워왔습니다.'
      />

      <div>
        <div className='border-gray/20 mb-14 hidden gap-4 border-b py-6 text-left font-semibold text-white md:flex'>
          <div className='w-[25%]'>년도</div>
          <div>내용</div>
        </div>

        <ul className='flex flex-col gap-15'>
          {PROJECT_DATA.map((project) => (
            <li key={project.id} id={project.id} className='scroll-m-10'>
              <DataCard data={project} detail />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
