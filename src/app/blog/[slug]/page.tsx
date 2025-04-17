import { getAllPosts } from '@/utils/posts';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import remarkGfm from 'remark-gfm';

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
    <div className='prose prose-invert'>
      <header>
        <h1>{metadata.title}</h1>
        <p>{metadata.date}</p>
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
      />
    </div>
  );
}

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export const dynamicParams = false;
