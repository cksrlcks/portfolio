'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/utils/helper';
import { RiGithubLine, RiSearchLine } from '@remixicon/react';

const MENU = [
  {
    id: 1,
    href: '/',
    label: 'about',
  },
  {
    id: 2,
    href: '/experiences',
    label: 'experiences',
  },
  {
    id: 3,
    href: '/projects',
    label: 'project',
  },
  {
    id: 4,
    href: '/post',
    label: 'blog',
  },
];

const isActivePath = (href: string, currentPathname: string) => {
  if (href === '/') {
    return currentPathname === '/';
  }

  return currentPathname.startsWith(href);
};

export default function RootNav() {
  const pathname = usePathname();
  return (
    <nav className='mb-16 flex items-center justify-between'>
      <ul className='flex items-center gap-4'>
        {MENU.map((item) => (
          <li key={item.id}>
            <Link
              href={item.href}
              className={cn(
                'font-medium capitalize',
                isActivePath(item.href, pathname) && 'text-white',
              )}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className='flex items-center gap-4'>
        <Link
          href='/search'
          className={cn(pathname.startsWith('/search') && 'text-white')}
        >
          <RiSearchLine className='w-5' />
          <span className='sr-only'>검색</span>
        </Link>
        <a
          href='https://github.com/cksrlcks'
          target='_blank'
          rel='noopener noreferrer'
          className='text-primary flex items-center gap-1.5 font-semibold hover:underline'
        >
          <RiGithubLine className='w-5' />
          <span className='sr-only'>github</span>
        </a>
      </div>
    </nav>
  );
}
