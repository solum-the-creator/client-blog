import classnames from 'classnames';
import { useLocale, useTranslations } from 'next-intl';

import { paths } from '@/constants/paths';
import { Link } from '@/i18n/routing';
import { LabelColorVariant } from '@/types/colors';
import { shortFormatDate } from '@/utils/date-formatter';

import styles from './post-by-label.module.scss';

type PostByLabelProps = {
  authorName: string;
  authorId: string;
  date: string;
  colorVariant?: LabelColorVariant;
};

export const PostByLabel: React.FC<PostByLabelProps> = ({
  authorName,
  authorId,
  date,
  colorVariant = 'accent',
}) => {
  const locale = useLocale();

  const t = useTranslations('Common');
  const formattedDate = shortFormatDate(date, locale);

  return (
    <div className={styles.postByLabel}>
      {t('by')}{' '}
      <span className={classnames(styles.authorName, styles[colorVariant])}>
        <Link href={`${paths.author}/${authorId}`}>{authorName}</Link>
      </span>{' '}
      | <span className={styles.date}>{formattedDate}</span>
    </div>
  );
};
