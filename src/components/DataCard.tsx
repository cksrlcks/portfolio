import Image from 'next/image';
import Chip from './Chip';
import { cn } from '@/utils/helper';
import { BaseData, ExperienceData, ProjectData } from '@/types';
import { PropsWithChildren } from 'react';
import ExternalLink from './ExternalLink';
import Link from 'next/link';
import { RiLink } from '@remixicon/react';

type BaseCardProps = PropsWithChildren & {
  baseData: BaseData;
  hover?: boolean;
  mode?: 'list' | 'detail';
};

export default function BaseCard({ baseData, hover, children }: BaseCardProps) {
  const { year } = baseData;

  return (
    <div className='group relative'>
      <div className='relative z-10 flex flex-col gap-4 md:flex-row'>
        <div className='w-[25%]'>{year}</div>
        <div className='flex-1'>
          <div className='space-y-8 text-sm'>{children}</div>
        </div>
      </div>
      {hover && (
        <span className='pointer-events-none absolute top-1/2 left-1/2 h-[calc(100%+60px)] w-[calc(100%+60px)] -translate-x-1/2 -translate-y-1/2 rounded-lg border border-white/4 bg-white/4 opacity-0 backdrop-blur-xl transition-opacity lg:group-hover:opacity-100'></span>
      )}
    </div>
  );
}

type ExperienceCardProps = Omit<BaseCardProps, 'baseData'> & {
  experience: ExperienceData;
};

export function ExperienceCard({
  experience,
  hover = false,
  mode = 'list',
}: ExperienceCardProps) {
  const { title, description, position, period, tasks, results, projects } =
    experience;

  return (
    <BaseCard baseData={experience} mode={mode} hover={hover}>
      <div className='space-y-4'>
        <h3 className='text-[16px] font-semibold text-white'>{title}</h3>
        <div className='space-y-1'>
          <p>{position}</p>
          <p>{period}</p>
        </div>
        <p className='text-[16px]'>{description}</p>
      </div>

      {/* 주요업무 */}
      {tasks && (
        <div>
          <h4 className='mb-2.5 text-white'>주요업무</h4>
          <ul className='flex flex-col gap-1'>
            {tasks.map((task, index) => (
              <li key={index}>{task.title}</li>
            ))}
          </ul>
        </div>
      )}

      {/* 주요성과 */}
      {results && (
        <div>
          <h4 className='mb-2.5 text-white'>주요성과</h4>
          <ul className='flex flex-col gap-1'>
            {results.map((result, index) => (
              <li key={index}>{result.title}</li>
            ))}
          </ul>
        </div>
      )}

      {projects && (
        <ul className='mt-16 flex flex-col'>
          {projects.map((project, index) => (
            <li key={index}>
              <div className='border-gray/20 mb-5 border-b pb-5'>
                <div className='flex flex-col gap-6 md:flex-row'>
                  <div className='flex-1 pt-1.5 text-white'>
                    {project.title}
                  </div>
                  <div className='flex flex-1 flex-wrap justify-end gap-1.5'>
                    {project.tags.map((tag) => (
                      <Chip key={tag}>{tag}</Chip>
                    ))}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </BaseCard>
  );
}

type ProjectCardProps = Omit<BaseCardProps, 'baseData'> & {
  project: ProjectData;
};

export function ProjectCard({
  project,
  hover,
  mode = 'list',
}: ProjectCardProps) {
  const {
    thumbnail,
    projectType,
    title,
    description,
    externalLinks,
    tags,
    roles,
    docs,
  } = project;
  return (
    <BaseCard baseData={project} mode={mode} hover={hover}>
      <div
        className={cn(
          mode === 'detail' && 'md:flex md:flex-row-reverse md:gap-10',
          'mb-10',
        )}
      >
        <div className={cn('w-full', mode === 'detail' && 'w-full md:w-[30%]')}>
          {thumbnail && (
            <figure className='relative mb-8 aspect-[1.9] overflow-hidden rounded-sm'>
              <Image src={thumbnail} alt={title || 'thumbnail'} fill />
            </figure>
          )}
        </div>

        <div className='flex-1 space-y-4'>
          <div className='space-y-4'>
            <div className='text-primary mb-1 text-sm font-semibold'>
              {projectType}
            </div>
            <h3 className='text-[16px] font-semibold text-white'>{title}</h3>
            <p className='text-[16px]'>{description}</p>
          </div>

          {/* 외부링크 */}
          {externalLinks && (
            <div className='flex gap-4'>
              {externalLinks.map((item, index) => (
                <ExternalLink
                  key={index}
                  href={item.link}
                  label={item.label}
                  type={item.type}
                />
              ))}
            </div>
          )}

          {/* 태그 */}
          {tags && (
            <div className='flex flex-wrap gap-1.5'>
              {tags.map((item, index) => (
                <Chip key={index}>{item}</Chip>
              ))}
            </div>
          )}
        </div>
      </div>

      {roles && (
        <div>
          <h4 className='mb-4 text-white'>주요 역할</h4>
          <ul className='flex flex-col gap-1'>
            {roles.map((item, index) => (
              <li key={index} className='border-gray/20 mb-5 border-b pb-5'>
                <h5 className='mb-1.5 text-white'>{item.title}</h5>
                <div className='mb-2'>{item.description}</div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {docs && (
        <div>
          <h4 className='mb-4 text-white'>회고 및 문서</h4>
          <ul className='flex flex-col gap-1'>
            {docs.map((item, index) => (
              <li key={index} className='border-gray/20 mb-5 border-b pb-5'>
                <h5 className='mb-1.5 text-white'>{item.title}</h5>
                <div className='mb-2'>{item.description}</div>
                <Link
                  href={item.link || '#'}
                  className='inline-flex items-center gap-2 hover:underline'
                  target='_blank'
                >
                  <RiLink size={14} />
                  포스트 보기
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </BaseCard>
  );
}
