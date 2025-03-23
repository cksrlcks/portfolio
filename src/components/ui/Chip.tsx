import { cn } from '@/utils/helper';
import { HTMLAttributes, PropsWithChildren } from 'react';

export function Chip({
  className,
  children,
}: PropsWithChildren<HTMLAttributes<HTMLSpanElement>>) {
  return (
    <div
      className={cn(
        'bg-primary/16 text-primary font-inter inline-flex h-[30px] items-center justify-center rounded-full px-3 text-xs font-semibold',
        className,
      )}
    >
      {children}
    </div>
  );
}
