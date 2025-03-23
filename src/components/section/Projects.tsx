import Image from 'next/image';
import MoreButton from '../ui/MoreButton';
import ExternalLink from '../ui/ExternalLink';
import { Chip } from '../ui';

export function Projects() {
  return (
    <>
      <h2 className='font-inter mb-4 font-semibold text-white lg:hidden'>
        Projects
      </h2>
      <div className='mb-16'>
        <ul className='flex flex-col gap-15'>
          <li>
            <div className='group relative'>
              <div className='relative z-10 flex gap-4'>
                <div className='w-[25%]'>2025</div>
                <div className='flex-1'>
                  <figure className='relative mb-8 aspect-[1.9] overflow-hidden rounded-sm'>
                    <Image src='/projects/maskit.svg' alt='maskit' fill />
                  </figure>
                  <div className='text-primary mb-1 text-sm font-semibold'>
                    Personal
                  </div>
                  <h3 className='mb-4 font-semibold text-white'>Maskit</h3>

                  <div className='flex flex-col gap-6'>
                    <p>
                      Maskit(마스킷)은 이미지에서 민감한 정보를 손쉽게 가릴 수
                      있는 도구입니다. 마우스로 영역을 선택하거나 이모지를
                      추가하고, 자동으로 텍스트를 감지해 가려줍니다. 편집한
                      이미지는 복사하거나 다운로드할 수 있습니다.
                    </p>

                    <div className='flex flex-wrap gap-4'>
                      <ExternalLink
                        href='https://maskit.kr'
                        label='maskit.kr'
                      />
                      <ExternalLink
                        href='https://github.com/cksrlcks/maskit'
                        label='repo'
                        type='github'
                      />
                    </div>

                    <div className='flex flex-wrap gap-1.5'>
                      <Chip>React</Chip>
                      <Chip>Jotai</Chip>
                      <Chip>Canvas</Chip>
                    </div>
                  </div>
                </div>
              </div>
              <span className='bg-muted pointer-events-none absolute top-1/2 left-1/2 h-[calc(100%+60px)] w-[calc(100%+60px)] -translate-x-1/2 -translate-y-1/2 rounded-lg border border-white/4 opacity-0 transition-opacity lg:group-hover:opacity-100'></span>
            </div>
          </li>
          <li>
            <div className='group relative'>
              <div className='relative z-10 flex gap-4'>
                <div className='w-[25%]'>2025</div>
                <div className='flex-1'>
                  <figure className='relative mb-8 aspect-[1.9] overflow-hidden rounded-sm'>
                    <Image src='/projects/epigram.svg' alt='Epigram' fill />
                  </figure>
                  <div className='text-primary mb-1 text-sm font-semibold'>
                    Team
                  </div>
                  <h3 className='mb-4 font-semibold text-white'>Epigram</h3>

                  <div className='flex flex-col gap-6'>
                    <p>
                      에피그램은 명언을 공유하고 사람들과 댓글로 소통하며, 나의
                      감정을 기록하고 통계로 시각화하여 감정 변화를 한눈에
                      확인할 수 있는 커뮤니티 플랫폼입니다.
                    </p>

                    <div className='flex flex-wrap gap-4'>
                      <ExternalLink
                        href='https://epigram-gilv.vercel.app/'
                        label='epigram'
                      />
                      <ExternalLink
                        href='https://github.com/kss761036/Epigram?tab=readme-ov-file'
                        label='repo'
                        type='github'
                      />
                    </div>

                    <div className='flex flex-wrap gap-1.5'>
                      <Chip>Next.js</Chip>
                      <Chip>Storybook</Chip>
                      <Chip>Jest</Chip>
                      <Chip>Zustand</Chip>
                      <Chip>Zod</Chip>
                      <Chip>React Hook Form</Chip>
                    </div>
                  </div>
                </div>
              </div>
              <span className='bg-muted pointer-events-none absolute top-1/2 left-1/2 h-[calc(100%+60px)] w-[calc(100%+60px)] -translate-x-1/2 -translate-y-1/2 rounded-lg border border-white/4 opacity-0 transition-opacity lg:group-hover:opacity-100'></span>
            </div>
          </li>
        </ul>
      </div>
      <div>
        <MoreButton href='/projects'>더 많은 프로젝트 보기</MoreButton>
      </div>
    </>
  );
}
