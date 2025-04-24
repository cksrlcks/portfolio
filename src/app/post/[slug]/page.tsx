import { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllPosts } from '@/utils/posts';
import { PostBody, PostFooter, PostHeader } from '@/components/Post';

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getAllPosts().find((post) => post.slug === slug);

  if (!post) notFound();

  return (
    <div className='prose prose-invert text-gray mx-auto max-w-3xl'>
      <PostHeader post={post} />
      <PostBody post={post} />
      <PostFooter />
    </div>
  );
}

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata(
  {
    params,
  }: {
    params: Promise<{ slug: string }>;
  },
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { slug } = await params;
  const post = getAllPosts().find((post) => post.slug === slug)!;

  const title = `${post.metadata.title} | 프론트앤드 개발자 김찬기의 블로그입니다.`;
  const description =
    `${post.metadata.description}` ||
    '프론트앤드 개발자 김찬기의 블로그입니다.';
  const images = (await parent).openGraph?.images;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images,
    },
  };
}

export const dynamicParams = false;
