import { Heading } from '@solumzy/ui-lib-client-blog';

import { paths } from '@/constants/paths';
import { Link } from '@/i18n/routing';

import { PostByLabel } from '../post-by-label/post-by-label';

import styles from './hoverable-post-card.module.scss';

type HoverablePostCardProps = {
  title: string;
  author: string;
  date: string;
};

export const HoverablePostCard: React.FC<HoverablePostCardProps> = ({ title, author, date }) => {
  return (
    <div className={styles.hoverablePostCard}>
      <PostByLabel authorName={author} date={date} colorVariant="secondary" />
      <Link href={paths.blog}>
        <Heading level={4} className={styles.title}>
          {title}
        </Heading>
      </Link>
    </div>
  );
};
