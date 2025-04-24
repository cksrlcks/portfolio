'use client';

import { notFound, useSearchParams } from 'next/navigation';
import { getPaginationItems } from '@/utils/pagination';
import { Post } from '@/types';
import Pagination from './Pagination';
import PostList from './PostList';

type PostsProps = {
  posts: Post[];
};

const GROUP_SIZE = 5;

export default function Blog({ posts }: PostsProps) {
  const pageCount = Math.ceil(posts.length / GROUP_SIZE);
  const searchParams = useSearchParams();
  const page = searchParams.get('page') || '1';
  const currentPage = parseInt(page);

  if (!page || isNaN(currentPage) || currentPage > pageCount) {
    notFound();
  }
  const { items, paginationNumbers } = getPaginationItems(
    posts,
    currentPage,
    GROUP_SIZE,
  );

  return (
    <>
      <PostList posts={items} />
      <Pagination
        pageNumbers={paginationNumbers}
        currentPage={currentPage}
        path='/post'
      />
    </>
  );
}
