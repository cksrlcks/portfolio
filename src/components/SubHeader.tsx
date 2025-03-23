import Link from 'next/link';
import { RiArrowLeftLine } from '@remixicon/react';

interface SubHeaderProps {
  title: string;
  desc: string;
}

export default function SubHeader({ title, desc }: SubHeaderProps) {
  return (
    <header>
      <div className='mb-8'>
        <Link
          href='/'
          className='text-primary inline-flex items-center gap-2.5 text-sm font-semibold hover:underline'
        >
          <RiArrowLeftLine size={14} />
          Chanki Kim
        </Link>
      </div>
      <div className='mb-20'>
        <h1 className='font-inter mb-8 text-3xl font-semibold text-white'>
          {title}
        </h1>
        <p>{desc}</p>
      </div>
    </header>
  );
}
