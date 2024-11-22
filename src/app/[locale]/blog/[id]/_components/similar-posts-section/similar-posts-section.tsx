import { Heading } from '@solumzy/ui-lib-client-blog';
import { getTranslations } from 'next-intl/server';

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
  const t = await getTranslations('BlogPostPage');

  return (
    <section className={styles.similarPostsSection}>
      <div className={styles.content}>
        <Heading level={2}>{t('readNext')}</Heading>
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
