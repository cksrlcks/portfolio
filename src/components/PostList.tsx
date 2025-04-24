import Link from 'next/link';
import { RiPencilFill } from '@remixicon/react';
import { Post } from '@/types';

type PostListProps = {
  posts: Post[];
};

export default function PostList({ posts }: PostListProps) {
  return (
    <ul>
      {posts.map((post) => (
        <li
          key={`${post.metadata.title}${post.metadata.date}`}
          className='border-gray/20 mb-8 border-b pb-8 last:border-none'
        >
          <Link href={`/post/${post.slug}`}>
            <h2 className='mb-2 font-medium text-white'>
              {post.metadata.title}
            </h2>
            <p className='mb-2 text-sm'>{post.metadata.description}</p>
            <time className='flex items-center gap-2 text-xs'>
              <RiPencilFill className='w-3' /> {post.metadata.date}
            </time>
          </Link>
        </li>
      ))}
    </ul>
  );
}
