import { redirect } from 'next/navigation';

export default function page() {
  redirect('/blog/1');
  return null;
}
