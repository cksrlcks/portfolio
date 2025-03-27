import Image from 'next/image';
import { CardData } from '@/types';
import Chip from './Chip';
import ExternalLink from './ExternalLink';

interface CardProps {
  data: Partial<CardData>;
  hover?: boolean;
}
export default function DataCard({ data, hover = false }: CardProps) {
  const {
    thumbnail,
    year,
    title,
    badge,
    description,
    meta,
    contents,
    projects,
    externalLinks,
    tags,
  } = data;
  return (
    <div className='group relative'>
      <div className='relative z-10 flex flex-col gap-4 md:flex-row'>
        <div className='w-[25%]'>{year}</div>
        <div className='flex-1'>
          {thumbnail && (
            <figure className='relative mb-8 aspect-[1.9] overflow-hidden rounded-sm'>
              <Image src={thumbnail} alt={title || 'thumnail'} fill />
            </figure>
          )}

          {badge && (
            <div className='text-primary mb-1 text-sm font-semibold'>
              {badge}
            </div>
          )}

          <h3 className='mb-4 font-semibold text-white'>{title}</h3>

          {meta && (
            <ul className='mb-4 flex flex-col gap-1 text-sm'>
              {meta.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}

          <div className='mb-8 flex flex-col gap-6'>
            <p>{description}</p>

            {contents?.map((content, index) => (
              <div className='text-sm' key={index}>
                <h4 className='mb-2 text-white'>{content.subTitle}</h4>
                <ul className='flex flex-col gap-1'>
                  {content.items.map((task) => (
                    <li key={task}>{task}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {projects && (
            <div className='pt-2'>
              {projects.map((project, index) => (
                <div className='text-sm' key={index}>
                  <ul className='flex flex-col'>
                    <li>
                      <div className='border-gray/20 mb-4 border-b pb-4'>
                        <div className='flex flex-col gap-6 md:flex-row'>
                          <div className='flex-1 pt-1.5 text-white'>
                            {project.name}
                          </div>
                          <div className='flex flex-1 flex-wrap justify-end gap-1.5'>
                            {project.tags.map((tag) => (
                              <Chip key={tag}>{tag}</Chip>
                            ))}
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          )}

          {externalLinks && (
            <div className='mb-6 flex flex-wrap gap-4'>
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

          {tags && (
            <div className='flex flex-wrap gap-1.5'>
              {tags.map((item, index) => (
                <Chip key={index}>{item}</Chip>
              ))}
            </div>
          )}
        </div>
      </div>
      {hover && (
        <span className='bg-muted pointer-events-none absolute top-1/2 left-1/2 h-[calc(100%+60px)] w-[calc(100%+60px)] -translate-x-1/2 -translate-y-1/2 rounded-lg border border-white/4 opacity-0 transition-opacity lg:group-hover:opacity-100'></span>
      )}
    </div>
  );
}
