'use client';

import {
  createContext,
  PropsWithChildren,
  RefObject,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { SectionType } from '@/types';

interface ScrollContextProps {
  activeSection: SectionType;
  observerRefs: RefObject<(HTMLElement | null)[]>;
}

const ScrollContext = createContext<ScrollContextProps | null>(null);

export const useScroll = () => {
  const ctx = useContext(ScrollContext);

  if (!ctx) {
    throw new Error('scroll context는 scroll provider 내부에서 사용해주세요');
  }
  return ctx;
};

export default function ScrollProvider({ children }: PropsWithChildren) {
  const [activeSection, setActiveSection] = useState<SectionType | null>(null);
  const observerRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const currentRefs = observerRefs.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id as SectionType;
            setActiveSection(id);
          }
        });
      },
      { threshold: 0.5 },
    );

    currentRefs.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      currentRefs.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const value = {
    activeSection,
    observerRefs,
  };

  return (
    <ScrollContext.Provider value={value}>{children}</ScrollContext.Provider>
  );
}
