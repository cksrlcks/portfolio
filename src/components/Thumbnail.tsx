import Image from 'next/image';

interface ThumbnailProps {
  src?: string;
  alt?: string;
}

export default function Thumbnail({ src, alt }: ThumbnailProps) {
  if (!src) return null;

  return (
    <figure className='relative mb-8 aspect-[1.9] overflow-hidden rounded-sm'>
      <Image src={src} alt={alt || 'thumnail'} fill className='object-cover' />
    </figure>
  );
}
