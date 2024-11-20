import classnames from 'classnames';

import { Link } from '@/i18n/routing';
import { LabelColorVariant } from '@/types/colors';
import { shortFormatDate } from '@/utils/date-formatter';

import styles from './post-by-label.module.scss';

type PostByLabelProps = {
  authorName: string;
  date: string;
  colorVariant?: LabelColorVariant;
};

export const PostByLabel: React.FC<PostByLabelProps> = ({
  authorName,
  date,
  colorVariant = 'accent',
}) => {
  const formattedDate = shortFormatDate(date);

  return (
    <div className={styles.postByLabel}>
      By{' '}
      <span className={classnames(styles.authorName, styles[colorVariant])}>
        <Link href={'/'}>{authorName}</Link>
      </span>{' '}
      | <span className={styles.date}>{formattedDate}</span>
    </div>
  );
};
