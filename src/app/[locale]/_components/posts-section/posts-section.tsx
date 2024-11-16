import { AllPostsBlock } from './all-posts-block/all-posts-block';
import { FeaturedPostBlock } from './featured-post-block/featured-post-block';

import styles from './posts-section.module.scss';

export const PostsSection = () => {
  return (
    <section className={styles.postsSection}>
      <FeaturedPostBlock />
      <AllPostsBlock />
    </section>
  );
};
