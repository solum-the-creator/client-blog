import { notFound } from 'next/navigation';

import { JoinOurTeamSection } from '@/components/join-our-team-section/join-our-team-section';
import { PostWithContent } from '@/types/post';

import { Post } from './_components/post/post';

type PostPageProps = {
  params: Promise<{
    id: string;
  }>;
};

const fetchPostById = async (id: string): Promise<PostWithContent | null> => {
  const response = await fetch(`https://673665a2aafa2ef22230699e.mockapi.io/api/v1/posts/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch post');
  }
  return response.json();
};

export default async function PostPage({ params }: PostPageProps) {
  const { id } = await params;
  const post = await fetchPostById(id);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Post post={post} />
      <JoinOurTeamSection />
    </>
  );
}
