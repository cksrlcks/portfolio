import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), '_posts');

export type Metadata = {
  title: string;
  description: string;
  date: string;
};

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
      return { slug, metadata, content } as {
        slug: string;
        metadata: Metadata;
        content: string;
      };
    })
    .sort((a, b) => (a.metadata.date > b.metadata.date ? -1 : 1));

  return posts;
}

export function getPaginationItems<T>(
  allItems: T[],
  pageNumber: number,
  pageSize: number,
) {
  const totalPage = Math.ceil(allItems.length / pageSize);
  const chunkedItems = Array.from({ length: totalPage }, (_, index) =>
    allItems.slice(index * pageSize, index * pageSize + pageSize),
  );
  const paginationNumbers = Array.from(
    { length: totalPage },
    (_, index) => index + 1,
  );

  return {
    items: chunkedItems[pageNumber - 1],
    pageNumber,
    paginationNumbers,
  };
}
