import { AnchorHTMLAttributes, PropsWithChildren } from 'react';
import Link from 'next/link';
import { RiArrowRightLine } from '@remixicon/react';

export default function MoreButton({
  href = '#',
  children,
}: PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>) {
  return (
    <Link
      href={href}
      className='inline-flex items-center gap-2.5 text-sm font-semibold text-white hover:underline'
    >
      {children}
      <RiArrowRightLine size={14} />
    </Link>
  );
}
