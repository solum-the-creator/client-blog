import { Heading, Text } from '@solumzy/ui-lib-client-blog';
import classNames from 'classnames';

import { formatDate } from '@/utils/date-formatter';

import { AvatarMask } from '../avatar-mask/avatar-mask';

import styles from './author-profile.module.scss';

type AuthorProfileProps = {
  imageSrc: string;
  name: string;
  address?: string;
  date?: string;
  colorVariant?: 'primary' | 'secondary' | 'accent' | 'purple';
};

export const AuthorProfile: React.FC<AuthorProfileProps> = ({
  imageSrc,
  name,
  address,
  date,
  colorVariant = 'primary',
}) => {
  const formattedDate = date && formatDate(date);

  return (
    <div className={styles.authorProfile}>
      <div className={styles.imageWrapper}>
        <AvatarMask src={imageSrc} alt={name} size="small" />
      </div>
      <div className={styles.content}>
        <Heading level={4} className={classNames(styles.name, styles[colorVariant])}>
          {name}
        </Heading>
        {address && <Text as="span">{address}</Text>}
        {date && <Text as="span">Posted {formattedDate}</Text>}
      </div>
    </div>
  );
};
