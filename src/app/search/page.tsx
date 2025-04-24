import { Suspense } from 'react';
import { getAllPosts } from '@/utils/posts';
import Search from '@/components/Search';
import { RiLoader4Line } from '@remixicon/react';

export default function SearchPage() {
  const posts = getAllPosts();

  return (
    <div className='mx-auto max-w-2xl'>
      <Suspense
        fallback={
          <div className='flex items-center justify-center p-4'>
            <RiLoader4Line className='mr-3 h-6 w-6 animate-spin' />
          </div>
        }
      >
        <Search posts={posts} />
      </Suspense>
    </div>
  );
}
