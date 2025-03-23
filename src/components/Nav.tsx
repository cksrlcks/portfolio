'use client';

import Link from 'next/link';
import { cn } from '@/utils/helper';
import { sections } from '@/types';
import { useScroll } from '@/context/ScrollProvider';

export default function Nav() {
  const { activeSection } = useScroll();

  return (
    <nav className='hidden lg:block'>
      <ul className='flex flex-col gap-3'>
        {sections.map((item) => {
          const isActive = activeSection === item;
          return (
            <li key={item}>
              <Link
                href={`#${item}`}
                className={cn(
                  'font-inter flex items-center gap-6 text-sm capitalize',
                  isActive && 'font-semibold text-white',
                )}
              >
                <div className='w-8'>
                  <span
                    className={cn(
                      'bg-gray block h-0.5 w-4 transition-all',
                      isActive && 'w-8 bg-white',
                    )}
                  ></span>
                </div>
                {item}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
