'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/utils/helper';
import {
  RiCloseLine,
  RiGithubLine,
  RiMenuLine,
  RiSearchLine,
} from '@remixicon/react';
import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

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
    label: 'projects',
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className='mb-8 flex items-center justify-between md:mb-16'>
        <div className='-ml-2 flex items-center gap-2 md:hidden'>
          <button
            className='flex h-8 w-8 cursor-pointer items-center justify-center'
            onClick={() => setIsMenuOpen(true)}
          >
            <RiMenuLine className='w-5' />
          </button>
        </div>
        <ul className='hidden items-center md:flex md:gap-4'>
          {MENU.map((item) => (
            <li key={item.id}>
              <Link
                href={item.href}
                className={cn(
                  'text-sm font-medium capitalize md:text-[16px]',
                  isActivePath(item.href, pathname) && 'text-white',
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className='-mr-2 flex items-center gap-1'>
          <Link
            href='/search'
            className={cn(
              'flex h-8 w-8 items-center justify-center',
              pathname.startsWith('/search') && 'text-white',
            )}
          >
            <RiSearchLine className='w-5' />
            <span className='sr-only'>검색</span>
          </Link>
          <a
            href='https://github.com/cksrlcks'
            target='_blank'
            rel='noopener noreferrer'
            className='text-primary flex h-8 w-8 items-center justify-center gap-1.5 font-semibold hover:underline'
          >
            <RiGithubLine className='w-5' />
            <span className='sr-only'>github</span>
          </a>
        </div>
      </nav>
      <AnimatePresence mode='wait'>
        {isMenuOpen && (
          <motion.div
            className='fixed top-0 left-0 z-50 h-dvh w-full bg-black/60 md:hidden'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { delay: 0.2 } }}
            onClick={() => setIsMenuOpen(false)}
          >
            <motion.div
              className='absolute top-0 h-full w-[60%] min-w-[220px] bg-black'
              initial={{ x: '-100%', transition: { delay: 0.2 } }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className='border-line-100 flex h-13 items-center px-4'>
                <button
                  className='-mr-2 ml-auto flex h-8 w-8 cursor-pointer items-center justify-center'
                  onClick={() => setIsMenuOpen(false)}
                >
                  <RiCloseLine className='w-6' />
                  <span className='sr-only'>메뉴닫기</span>
                </button>
              </div>
              <ul>
                {MENU.map((item) => (
                  <li key={item.id}>
                    <Link
                      className={cn(
                        'block px-5 py-2 text-sm font-medium capitalize',
                        isActivePath(item.href, pathname) && 'text-white',
                      )}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
