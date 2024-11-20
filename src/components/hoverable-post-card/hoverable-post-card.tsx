import { Heading } from '@solumzy/ui-lib-client-blog';

import { paths } from '@/constants/paths';
import { Link } from '@/i18n/routing';

import { PostByLabel } from '../post-by-label/post-by-label';

import styles from './hoverable-post-card.module.scss';

type HoverablePostCardProps = {
  id: string;
  authorId: string;
  title: string;
  authorName: string;
  date: string;
};

export const HoverablePostCard: React.FC<HoverablePostCardProps> = ({
  id,
  title,
  authorName,
  date,
}) => {
  return (
    <div className={styles.hoverablePostCard}>
      <PostByLabel authorName={authorName} date={date} colorVariant="secondary" />
      <Link href={`${paths.blog}/${id}`} className={styles.link}>
        <Heading level={4} className={styles.title}>
          {title}
        </Heading>
      </Link>
    </div>
  );
};
