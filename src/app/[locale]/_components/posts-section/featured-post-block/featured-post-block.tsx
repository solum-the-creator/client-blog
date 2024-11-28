import { Heading } from '@solumzy/ui-lib-client-blog';
import { getTranslations } from 'next-intl/server';

import { FeaturedPostCard } from '@/components/featured-post-card/featured-post-card';
import { fetchPostAndAuthorById } from '@/lib/api/posts';
import { shortFormatDate } from '@/utils/date-formatter';

import styles from './featured-post-block.module.scss';

export const FeaturedPostBlock = async () => {
  const { post, author } = await fetchPostAndAuthorById('3');
  const t = await getTranslations('Post');

  const formatedDate = shortFormatDate(post.createdAt);

  return (
    <div className={styles.featuredPostBlock}>
      <Heading level={2}>{t('featured')}</Heading>
      <div className={styles.featuredPostCardWrapper}>
        <FeaturedPostCard
          id={post.id}
          author={author.name}
          authorId={author.id}
          date={formatedDate}
          description={post.description}
          title={post.title}
          imageSrc={post.imageSrc}
        />
      </div>
    </div>
  );
};
