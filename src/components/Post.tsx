import path from 'path';
import Image from 'next/image';
import Link from 'next/link';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import { imageSizeFromFile } from 'image-size/fromFile';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { Post } from '@/types';
import '@/assets/css/github-dark.css';

const MAX_IMAGE_WIDTH = 768;

type PostHeaderProps = {
  post: Post;
};

export function PostHeader({ post }: PostHeaderProps) {
  return (
    <header className='border-gray/20 mb-10 border-b'>
      <h1 className='mb-2 text-3xl font-semibold'>{post.metadata.title}</h1>
      <p className='text-xs'>{post.metadata.date}</p>
    </header>
  );
}

type PostBodyProps = {
  post: Post;
};

export function PostBody({ post }: PostBodyProps) {
  return (
    <div className='mb-20'>
      <MDXRemote
        source={post.content}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [rehypeHighlight],
            format: 'mdx',
          },
        }}
        components={{
          h2: (props) => <h2 {...props} className='text-xl font-semibold' />,
          h3: (props) => <h3 {...props} className='text-lg font-semibold' />,
          img: async (props: { src: string; alt: string }) => {
            const { src, alt } = props;
            const originSize = await imageSizeFromFile(
              path.join(process.cwd(), 'public', src),
            );
            const width = Math.min(originSize.width, MAX_IMAGE_WIDTH);
            const height = (width / originSize.width) * originSize.height;

            return <Image src={src} alt={alt} width={width} height={height} />;
          },
        }}
      />
    </div>
  );
}

export function PostFooter() {
  return (
    <footer className='text-center'>
      <Link href='/post'>리스트로 돌아가기</Link>
    </footer>
  );
}
