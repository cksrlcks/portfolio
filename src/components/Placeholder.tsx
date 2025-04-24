import { PropsWithChildren } from 'react';

export default function Placeholder({ children }: PropsWithChildren) {
  return <div className='flex items-center justify-center p-6'>{children}</div>;
}
