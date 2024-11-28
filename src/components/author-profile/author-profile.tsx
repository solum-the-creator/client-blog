import { Heading, Text } from '@solumzy/ui-lib-client-blog';
import classNames from 'classnames';
import { useTranslations } from 'next-intl';

import { paths } from '@/constants/paths';
import { Link } from '@/i18n/routing';
import { formatDate } from '@/utils/date-formatter';

import { AvatarMask } from '../avatar-mask/avatar-mask';

import styles from './author-profile.module.scss';

type AuthorProfileProps = {
  authorId: string;
  imageSrc: string;
  name: string;
  address?: string;
  date?: string;
  colorVariant?: 'primary' | 'secondary' | 'accent' | 'purple';
};

export const AuthorProfile: React.FC<AuthorProfileProps> = ({
  authorId,
  imageSrc,
  name,
  address,
  date,
  colorVariant = 'primary',
}) => {
  const t = useTranslations('Common');
  const formattedDate = date && formatDate(date);

  return (
    <div className={styles.authorProfile}>
      <Link href={`${paths.author}/${authorId}`} className={styles.link}>
        <div className={styles.imageWrapper}>
          <AvatarMask src={imageSrc} alt={name} size="small" />
        </div>
      </Link>
      <div className={styles.content}>
        <Heading level={4} className={classNames(styles.name, styles[colorVariant])}>
          <Link href={`${paths.author}/${authorId}`}>{name}</Link>
        </Heading>

        {address && <Text as="span">{address}</Text>}
        {date && (
          <Text as="span">
            {t('postedOn')} {formattedDate}
          </Text>
        )}
      </div>
    </div>
  );
};
