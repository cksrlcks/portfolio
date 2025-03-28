import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='text-center'>
      <div className='mb-6'>존재하지 않는 페이지 입니다.</div>
      <div>
        <Link
          href='/'
          className='text-primary text-sm font-semibold hover:underline'
        >
          처음으로
        </Link>
      </div>
    </div>
  );
}
