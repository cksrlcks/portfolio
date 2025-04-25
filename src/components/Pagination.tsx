import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

type PaginationProps = {
  pageNumbers: number[];
  currentPage: number;
};

export default function Pagination({
  pageNumbers,
  currentPage,
}: PaginationProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const createQueryParams = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', String(pageNumber));
    return params.toString();
  };

  return (
    <ul className='flex items-center justify-center gap-0.5'>
      {pageNumbers.map((item) => {
        const href = `${pathname}?${createQueryParams(item)}`;

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
