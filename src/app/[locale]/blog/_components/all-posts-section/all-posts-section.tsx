import { Heading } from '@solumzy/ui-lib-client-blog';
import { getTranslations } from 'next-intl/server';

import { fetchAllPosts } from '@/lib/api/posts';

import { PaginatedPosts } from './paginated-posts/paginated-posts';

import styles from './all-posts-section.module.scss';

export const AllPostsSection: React.FC = async () => {
  const posts = await fetchAllPosts();
  const t = await getTranslations('BlogPage');

  return (
    <section className={styles.allPostsSection}>
      <div className={styles.content}>
        <div className={styles.titleBlock}>
          <Heading level={1}>{t('allPosts')}</Heading>
        </div>
        <PaginatedPosts posts={posts} />
      </div>
    </section>
  );
};
