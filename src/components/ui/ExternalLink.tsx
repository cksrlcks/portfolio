import { RiGithubFill, RiLink } from '@remixicon/react';

interface ExternalLink {
  href?: string;
  label: string;
  type?: 'link' | 'github';
}

export default function ExternalLink({
  href = '#',
  type = 'link',
  label,
}: ExternalLink) {
  return (
    <a
      href={href}
      target='_blank'
      className='font-inter inline-flex items-center gap-2.5 text-sm font-semibold text-white hover:underline'
    >
      {type === 'link' ? <RiLink size={14} /> : <RiGithubFill size={14} />}
      {label}
    </a>
  );
}
