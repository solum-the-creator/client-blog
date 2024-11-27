import { Heading } from '@solumzy/ui-lib-client-blog';
import { getTranslations } from 'next-intl/server';

import { HoverablePostCard } from '@/components/hoverable-post-card/hoverable-post-card';
import { paths } from '@/constants/paths';
import { Link } from '@/i18n/routing';
import { fetchLimitedPostsWithAuthors } from '@/lib/api/posts';

import styles from './all-posts-block.module.scss';

export const AllPostsBlock = async () => {
  const posts = await fetchLimitedPostsWithAuthors(4);
  const t = await getTranslations('Post');

  return (
    <div className={styles.allPostsBlock}>
      <div className={styles.header}>
        <Heading level={2}>{t('allPosts')}</Heading>
        <Link href={paths.blog} className={styles.viewAll} data-testid="view-all-posts">
          {t('viewAll')}
        </Link>
      </div>
      <div className={styles.postsList}>
        {posts.map(({ post, author }) => (
          <HoverablePostCard
            key={post.id}
            id={post.id}
            authorId={author.id}
            title={post.title}
            authorName={author.name}
            date={post.createdAt}
          />
        ))}
      </div>
    </div>
  );
};
