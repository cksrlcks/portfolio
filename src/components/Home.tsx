import { PropsWithChildren } from 'react';

export function HomeWrapper({ children }: PropsWithChildren) {
  return (
    <div className='flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between'>
      {children}
    </div>
  );
}

export function HomeHeader({ children }: PropsWithChildren) {
  return (
    <div className='flex-col lg:sticky lg:top-32 lg:left-0 lg:w-[33.333%]'>
      {children}
    </div>
  );
}

export function HomeContent({ children }: PropsWithChildren) {
  return <div className='lg:w-[50%]'>{children}</div>;
}
