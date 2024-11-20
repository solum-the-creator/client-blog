import { Heading } from '@solumzy/ui-lib-client-blog';

import { StandardPostCard } from '@/components/standard-post-card/standard-post-card';
import { Post } from '@/types/post';

import styles from './similar-posts-section.module.scss';

const fetchSimilarPosts = async (category: string, excludedId: string): Promise<Post[]> => {
  const response = await fetch(
    `https://673665a2aafa2ef22230699e.mockapi.io/api/v1/posts?page=1&limit=4&category=${category}`,
  );

  if (!response.ok) {
    throw new Error('Failed to fetch similar posts');
  }

  const posts: Post[] = await response.json();

  return posts.filter((post) => post.id !== excludedId).slice(0, 3);
};

type SimilarPostsSectionProps = {
  postId: string;
  category: string;
};

export const SimilarPostsSection: React.FC<SimilarPostsSectionProps> = async ({
  postId,
  category,
}) => {
  const posts = await fetchSimilarPosts(category, postId);

  return (
    <section className={styles.similarPostsSection}>
      <div className={styles.content}>
        <Heading level={2}>What to read next</Heading>
        <div className={styles.similarPosts}>
          {posts.map((post) => (
            <StandardPostCard key={post.id} {...post} author="John Doe" layout="vertical" />
          ))}
        </div>
      </div>
    </section>
  );
};
