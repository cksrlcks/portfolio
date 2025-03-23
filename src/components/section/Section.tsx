'use client';

import { HTMLAttributes, RefAttributes } from 'react';
import { useScroll } from '@/context/ScrollProvider';

interface SectionProps
  extends HTMLAttributes<HTMLDivElement>,
    RefAttributes<HTMLDivElement> {}

export function Section({ id, children }: SectionProps) {
  const { observerRefs } = useScroll();

  return (
    <section
      id={id}
      className='mb-24 lg:mb-35 lg:scroll-m-20'
      ref={(el) => {
        observerRefs.current.push(el);
      }}
    >
      {children}
    </section>
  );
}
