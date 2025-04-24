import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Post } from '@/types';
const postsDirectory = path.join(process.cwd(), '_posts');

export function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx');
}

export function getAllPosts() {
  const files = getMDXFiles(postsDirectory);

  const posts = files
    .map((file) => {
      const slug = file.replace('.mdx', '');
      const fileData = fs.readFileSync(
        path.join(postsDirectory, file),
        'utf-8',
      );
      const { data: metadata, content } = matter(fileData);
      return { slug, metadata, content } as Post;
    })
    .sort((a, b) => (a.metadata.date > b.metadata.date ? -1 : 1));

  return posts;
}
