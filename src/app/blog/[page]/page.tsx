import { getAllPosts, getPaginationItems } from '@/utils/posts';
import { RiPencilFill } from '@remixicon/react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const GROUP_SIZE = 5;
const posts = getAllPosts();
const pageCount = Math.ceil(posts.length / GROUP_SIZE);

export const generateStaticParams = () => {
  return Array.from({ length: pageCount }, (_, i) => ({ page: String(i + 1) }));
};

export default async function BlogListPage({
  params,
}: {
  params: Promise<{ page?: string }>;
}) {
  const { page } = await params;
  const currentPage = Number(page);

  if (!page || isNaN(currentPage) || currentPage > pageCount) {
    notFound();
  }

  const { items, paginationNumbers } = getPaginationItems(
    posts,
    page ? Number(page) : 1,
    GROUP_SIZE,
  );

  return (
    <div className='mx-auto max-w-3xl'>
      <ul>
        {items.map((post) => (
          <li
            key={`${post.metadata.title}${post.metadata.date}`}
            className='border-gray/20 mb-5 border-b pb-5 last:border-none'
          >
            <Link href={`/blog/post/${post.slug}`}>
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

      <div>
        <ul className='flex items-center justify-center gap-0.5'>
          {paginationNumbers.map((item) => (
            <li
              key={item}
              className='h-8 w-8 rounded-sm transition-all hover:bg-gray-900'
            >
              {currentPage === item ? (
                <span className='flex h-full w-full items-center justify-center font-semibold text-white'>
                  {item}
                </span>
              ) : (
                <Link
                  href={`/blog/${item}`}
                  className='flex h-full w-full items-center justify-center'
                >
                  {item}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
