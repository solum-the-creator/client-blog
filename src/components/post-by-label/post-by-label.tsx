import classnames from 'classnames';
import { useLocale, useTranslations } from 'next-intl';

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
  const locale = useLocale();

  const t = useTranslations('Common');
  const formattedDate = shortFormatDate(date, locale);

  return (
    <div className={styles.postByLabel}>
      {t('by')}{' '}
      <span className={classnames(styles.authorName, styles[colorVariant])}>
        <Link href={'/'}>{authorName}</Link>
      </span>{' '}
      | <span className={styles.date}>{formattedDate}</span>
    </div>
  );
};
