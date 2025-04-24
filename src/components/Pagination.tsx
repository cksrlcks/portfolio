import Link from 'next/link';

type PaginationProps = {
  pageNumbers: number[];
  currentPage: number;
  path: string;
};

export default function Pagination({
  pageNumbers,
  currentPage,
  path,
}: PaginationProps) {
  return (
    <ul className='flex items-center justify-center gap-0.5'>
      {pageNumbers.map((item) => {
        const searchParams = new URLSearchParams();
        searchParams.append('page', String(item));

        const href = `${path}?${searchParams.toString()}`;

        return (
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
                href={href}
                className='flex h-full w-full items-center justify-center'
              >
                {item}
              </Link>
            )}
          </li>
        );
      })}
    </ul>
  );
}
