import { getAllPosts } from '@/utils/posts';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import remarkGfm from 'remark-gfm';
import { imageSizeFromFile } from 'image-size/fromFile';
import path from 'path';
import Image from 'next/image';

const MAX_IMAGE_WIDTH = 768;

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getAllPosts().find((post) => post.slug === slug);

  if (!post) notFound();

  const { metadata, content } = post;

  return (
    <div className='prose prose-invert mx-auto max-w-3xl'>
      <header className='border-gray/20 mb-10 border-b'>
        <h1 className='mb-2 text-3xl font-semibold'>{metadata.title}</h1>
        <p className='text-xs'>{metadata.date}</p>
      </header>

      <MDXRemote
        source={content}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [],
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

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export const dynamicParams = false;
