import postImage from '@public/post-image.jpg';
import { Heading } from '@solumzy/ui-lib-client-blog';

import { FeaturedPostCard } from '@/components/featured-post-card/featured-post-card';

import styles from './featured-post-block.module.scss';

export const FeaturedPostBlock = () => {
  return (
    <div className={styles.featuredPostBlock}>
      <Heading level={2}>Featured Post</Heading>
      <div className={styles.featuredPostCardWrapper}>
        <FeaturedPostCard
          author="John Doe"
          date="May 20, 2023"
          description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
          title="Step-by-step guide to choosing great font pairs"
          imageSrc={postImage.src}
        />
      </div>
    </div>
  );
};
