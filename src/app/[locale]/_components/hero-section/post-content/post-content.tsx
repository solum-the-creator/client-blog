import { Button, Heading, Text } from '@solumzy/ui-lib-client-blog';

import { PostByLabel } from '@/components/post-by-label/post-by-label';

import styles from './post-content.module.scss';

export const PostContent = () => {
  return (
    <div className={styles.postWrapper}>
      <div className={styles.postCategory}>
        POSTED ON <span className={styles.category}>STARTUP</span>
      </div>
      <Heading variant="display" colorVariant="light">
        Step-by-step guide to choosing great font pairs
      </Heading>
      <div className={styles.postBody}>
        <PostByLabel authorName="John Doe" date="May 20, 2023" />
        <Text variant="light" className={styles.description}>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident.
        </Text>
      </div>
      <div className={styles.buttonWrapper}>
        <Button size="large">Read More {'>'}</Button>
      </div>
    </div>
  );
};
