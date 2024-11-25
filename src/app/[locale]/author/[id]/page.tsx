import { notFound } from 'next/navigation';

import { fetchAuthorById } from '@/lib/api/authors';

import { AuthorSection } from './_components/author-section/author-section';
import { PostsSection } from './_components/posts-section/posts-section';

type AuthorPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function AuthorPage({ params }: AuthorPageProps) {
  const { id } = await params;
  const author = await fetchAuthorById(id);

  if (!author) {
    notFound();
  }

  return (
    <>
      <AuthorSection author={author} />
      <PostsSection authorId={id} />
    </>
  );
}
