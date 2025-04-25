'use client';

import { ChangeEvent, useEffect, useMemo, useRef, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Fuse from 'fuse.js';
import { useDebounce } from '@/hooks/useDebounce';
import { Post } from '@/types';
import { cn } from '@/utils/helper';
import { getPaginationItems } from '@/utils/pagination';
import { RiLoader4Line } from '@remixicon/react';
import Pagination from './Pagination';
import PostList from './PostList';
import Placeholder from './Placeholder';

type SearchProps = {
  posts: Post[];
};

const GROUP_SIZE = 5;
const MIN_SEARCH_LENGTH = 2;

export default function Search({ posts }: SearchProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const keyword = searchParams.get('keyword') || '';
  const page = searchParams.get('page') || '1';
  const currentPage = parseInt(page);
  const inputRef = useRef<HTMLInputElement>(null);

  const [value, setValue] = useState(keyword);
  const { debouncedValue, isLoading } = useDebounce(value);
  const [searchResult, setSearchResult] = useState<Post[]>([]);

  const fuse = useMemo(
    () =>
      new Fuse(posts, {
        keys: ['metadata.title', 'metadata.description'],
        includeMatches: true,
        minMatchCharLength: MIN_SEARCH_LENGTH,
        threshold: 0.5,
      }),
    [posts],
  );

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    const result = debouncedValue.length > 1 ? fuse.search(value) : [];
    setSearchResult(result.map((fuseResult) => fuseResult.item));

    if (debouncedValue) {
      router.replace(`/search?keyword=${debouncedValue}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue, router]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const { items, paginationNumbers } = getPaginationItems(
    searchResult,
    currentPage,
    GROUP_SIZE,
  );

  const renderResult = () => {
    if (!keyword || !debouncedValue) {
      return <Placeholder>블로그 글을 검색할 수 있어요</Placeholder>;
    }

    if (searchResult.length === 0) {
      return (
        <Placeholder>
          <b>{debouncedValue}</b>로 검색된 결과가 없어요
        </Placeholder>
      );
    }

    return (
      <>
        <div className={cn(isLoading && 'animate-pulse')}>
          <PostList posts={items} />
        </div>

        <Pagination pageNumbers={paginationNumbers} currentPage={currentPage} />
      </>
    );
  };

  return (
    <div className='mx-auto max-w-3xl space-y-10'>
      <header>
        <div className='flex h-12 items-center gap-4 rounded-md border border-white/30 focus-within:border-white/100'>
          <input
            ref={inputRef}
            value={value}
            onChange={handleChange}
            className='h-full w-full flex-1 px-3 text-white focus-visible:outline-none'
            placeholder='검색어를 입력해주세요'
          />

          {isLoading && <RiLoader4Line className='mr-3 h-4 w-4 animate-spin' />}
        </div>
      </header>
      {renderResult()}
    </div>
  );
}
