import { getAllPosts } from '@/utils/posts';
import Link from 'next/link';

export default function BlogListPage() {
  const posts = getAllPosts();

  return (
    <div className='mx-auto max-w-3xl'>
      {posts.map((post) => (
        <Link
          key={`${post.metadata.title}${post.metadata.date}`}
          href={`/blog/${post.slug}`}
        >
          <h2>{post.metadata.title}</h2>
          <p>{post.metadata.date}</p>
        </Link>
      ))}
    </div>
  );
}
