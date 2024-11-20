import { Heading } from '@solumzy/ui-lib-client-blog';

import { StandardPostCard } from '@/components/standard-post-card/standard-post-card';
import { fetchSimilarPostsWithAuthors } from '@/lib/api/posts';

import styles from './similar-posts-section.module.scss';

type SimilarPostsSectionProps = {
  postId: string;
  category: string;
};

export const SimilarPostsSection: React.FC<SimilarPostsSectionProps> = async ({
  postId,
  category,
}) => {
  const posts = await fetchSimilarPostsWithAuthors(category, postId);

  return (
    <section className={styles.similarPostsSection}>
      <div className={styles.content}>
        <Heading level={2}>What to read next</Heading>
        <div className={styles.similarPosts}>
          {posts.map(({ id, author, category, description, imageSrc, title, createdAt }) => (
            <StandardPostCard
              key={id}
              category={category}
              id={id}
              imageSrc={imageSrc}
              title={title}
              description={description}
              author={author}
              createdAt={createdAt}
              layout="vertical"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
