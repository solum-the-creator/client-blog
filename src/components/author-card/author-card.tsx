import { Heading, Text } from '@solumzy/ui-lib-client-blog';

import { paths } from '@/constants/paths';
import { Link } from '@/i18n/routing';
import { Social } from '@/types/social';

import { AvatarMask } from '../avatar-mask/avatar-mask';
import { SocialLinks } from '../social-links/social-links';

import styles from './author-card.module.scss';

type AuthorCardProps = {
  id: string;
  name: string;
  position: string;
  imageSrc: string;
  socials?: Social[];
};

export const AuthorCard: React.FC<AuthorCardProps> = ({
  id,
  name,
  position,
  imageSrc,
  socials = [],
}) => {
  return (
    <div className={styles.authorCard}>
      <Link
        href={`${paths.author}/${id}`}
        className={styles.authorLink}
        aria-label={`Visit ${name}'s page`}
      />

      <div className={styles.imageWrapper}>
        <AvatarMask src={imageSrc} alt={name} size="large" />
      </div>
      <div className={styles.content}>
        <Heading level={3}>{name}</Heading>
        <Text as="span" size="small" variant="secondary">
          {position}
        </Text>
      </div>

      <div className={styles.socials}>
        <SocialLinks socials={socials} layout="horizontal" />
      </div>
    </div>
  );
};
