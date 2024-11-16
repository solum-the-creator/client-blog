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
    <Link href={paths.blog}>
      <div className={styles.hoverablePostCard}>
        <PostByLabel authorName={author} date={date} colorVariant="secondary" />
        <Heading level={4} className={styles.title}>
          {title}
        </Heading>
      </div>
    </Link>
  );
};
