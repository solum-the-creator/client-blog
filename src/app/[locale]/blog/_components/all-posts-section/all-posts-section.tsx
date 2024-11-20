import { Heading } from '@solumzy/ui-lib-client-blog';

import { Post } from '@/types/post';

import { PaginatedPosts } from './paginated-posts/paginated-posts';

import styles from './all-posts-section.module.scss';

const fetchAllPosts = async (): Promise<Post[]> => {
  const response = await fetch('https://673665a2aafa2ef22230699e.mockapi.io/api/v1/posts');
  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }
  return response.json();
};

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
