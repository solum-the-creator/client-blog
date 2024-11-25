import { Heading } from '@solumzy/ui-lib-client-blog';
import { getTranslations } from 'next-intl/server';

import { StandardPostCard } from '@/components/standard-post-card/standard-post-card';
import { fetchPostsByAuthor } from '@/lib/api/posts';

import styles from './posts-section.module.scss';

type PostsSectionProps = {
  authorId: string;
};

export const PostsSection: React.FC<PostsSectionProps> = async ({ authorId }) => {
  const posts = await fetchPostsByAuthor(authorId);
  const t = await getTranslations('AuthorPage');

  return (
    <section className={styles.postsSection}>
      <div className={styles.content}>
        <Heading level={2}>{t('myPosts')}</Heading>
        <div className={styles.postsList}>
          {posts.map((post) => (
            <StandardPostCard key={post.id} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
};
