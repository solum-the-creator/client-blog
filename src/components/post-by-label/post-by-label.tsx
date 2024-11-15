import classnames from 'classnames';

import { Link } from '@/i18n/routing';

import styles from './post-by-label.module.scss';

type PostByLabelProps = {
  authorName: string;
  date: string;
  colorVariant?: 'accent' | 'primary';
};

export const PostByLabel: React.FC<PostByLabelProps> = ({
  authorName,
  date,
  colorVariant = 'accent',
}) => {
  return (
    <div className={styles.postByLabel}>
      By{' '}
      <span className={classnames(styles.authorName, styles[colorVariant])}>
        <Link href={'/'}>{authorName}</Link>
      </span>{' '}
      | <span className={styles.date}>{date}</span>
    </div>
  );
};
