import { Heading } from '@solumzy/ui-lib-client-blog';

import { fetchAllPosts } from '@/lib/api/posts';

import { PaginatedPosts } from './paginated-posts/paginated-posts';

import styles from './all-posts-section.module.scss';

export const AllPostsSection: React.FC = async () => {
  const posts = await fetchAllPosts();

  return (
    <section className={styles.allPostsSection}>
      <div className={styles.content}>
        <div className={styles.titleBlock}>
          <Heading level={1}>All Posts</Heading>
        </div>
        <PaginatedPosts posts={posts} />
      </div>
    </section>
  );
};
