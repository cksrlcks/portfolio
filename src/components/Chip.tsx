import { HTMLAttributes, PropsWithChildren } from 'react';
import { cn } from '@/utils/helper';

export default function Chip({
  className,
  children,
}: PropsWithChildren<HTMLAttributes<HTMLSpanElement>>) {
  return (
    <div
      className={cn(
        'bg-primary/16 text-primary font-inter inline-flex h-5 items-center justify-center rounded-full px-2 text-[10px] font-semibold md:h-[30px] md:px-3 md:text-xs',
        className,
      )}
    >
      {children}
    </div>
  );
}
