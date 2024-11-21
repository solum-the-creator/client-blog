import { StandardPostCard } from '@/components/standard-post-card/standard-post-card';
import { Post } from '@/types/post';

import styles from './posts-section.module.scss';

type PostsSectionProps = {
  posts: Post[];
};

export const PostsSection: React.FC<PostsSectionProps> = ({ posts }) => {
  return (
    <section className={styles.postsSection}>
      {posts.map((post) => (
        <StandardPostCard key={post.id} {...post} />
      ))}
    </section>
  );
};
