interface SubHeaderProps {
  title: string;
  desc: string;
}

export default function SubHeader({ title, desc }: SubHeaderProps) {
  return (
    <header>
      <div className='mb-20'>
        <h1 className='font-inter mb-6 text-3xl font-semibold text-white'>
          {title}
        </h1>
        <p>{desc}</p>
      </div>
    </header>
  );
}
