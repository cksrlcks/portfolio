'use client';

import { useState } from 'react';
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from 'motion/react';
import { RiArrowUpLine } from '@remixicon/react';

export default function ScrollTopButton() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 0);
  });

  const handleGoTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className='fixed right-10 bottom-10 z-50 hidden md:block'>
      <AnimatePresence>
        {isScrolled && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 20,
              duration: 0.3,
            }}
            layout
          >
            <button
              className='bg-primary flex h-10 w-10 cursor-pointer items-center justify-center rounded-full'
              onClick={handleGoTop}
            >
              <RiArrowUpLine className='w-4 text-black' />
              <span className='sr-only'>상단으로</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
