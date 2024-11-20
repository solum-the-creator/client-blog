import { notFound } from 'next/navigation';

import { JoinOurTeamSection } from '@/components/join-our-team-section/join-our-team-section';
import { fetchAuthorById } from '@/lib/api/authors';
import { fetchPostById } from '@/lib/api/posts';

import { Post } from './_components/post/post';
import { SimilarPostsSection } from './_components/similar-posts-section/similar-posts-section';

type PostPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function PostPage({ params }: PostPageProps) {
  const { id } = await params;
  const post = await fetchPostById(id);

  if (!post) {
    notFound();
  }

  const author = await fetchAuthorById(post.authorId);

  if (!author) {
    notFound();
  }

  return (
    <>
      <Post post={post} author={author} />
      <SimilarPostsSection postId={id} category={post.category} />
      <JoinOurTeamSection />
    </>
  );
}
