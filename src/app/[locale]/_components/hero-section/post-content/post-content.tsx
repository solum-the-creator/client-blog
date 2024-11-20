import React from 'react';
import { Button, Heading, Text } from '@solumzy/ui-lib-client-blog';

import { PostByLabel } from '@/components/post-by-label/post-by-label';
import { paths } from '@/constants/paths';
import { Link } from '@/i18n/routing';
import { Author } from '@/types/authors';
import { Post } from '@/types/post';
import { shortFormatDate } from '@/utils/date-formatter';

import styles from './post-content.module.scss';

type PostContentProps = {
  post: Post;
  author: Author;
};

export const PostContent: React.FC<PostContentProps> = ({ post, author }) => {
  const formatedDate = shortFormatDate(post.createdAt);

  return (
    <div className={styles.postWrapper}>
      <div className={styles.postCategory}>
        POSTED ON <span className={styles.category}>{post.category}</span>
      </div>
      <Heading variant="display" colorVariant="light">
        {post.title}
      </Heading>
      <div className={styles.postBody}>
        <PostByLabel authorName={author.name} date={formatedDate} />
        <Text variant="light" className={styles.description}>
          {post.description}
        </Text>
      </div>
      <div className={styles.buttonWrapper}>
        <Link href={`${paths.blog}/${post.id}`}>
          <Button size="large">Read More {'>'}</Button>
        </Link>
      </div>
    </div>
  );
};
