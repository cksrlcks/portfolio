import { Suspense } from 'react';
import { getAllPosts } from '@/utils/posts';
import PostList from '@/components/Blog';
import { RiLoader4Line } from '@remixicon/react';

export default function BlogListPage() {
  const posts = getAllPosts();

  return (
    <div className='mx-auto max-w-3xl'>
      <div className='mb-8 text-sm'>
        전체 <b className='text-white'>{posts.length}</b>
      </div>
      <Suspense
        fallback={
          <div className='flex items-center justify-center p-4'>
            <RiLoader4Line className='mr-3 h-6 w-6 animate-spin' />
          </div>
        }
      >
        <PostList posts={posts} />
      </Suspense>
    </div>
  );
}
