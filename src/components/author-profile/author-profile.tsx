import { Heading, Text } from '@solumzy/ui-lib-client-blog';

import { AvatarMask } from '../avatar-mask/avatar-mask';

import styles from './author-profile.module.scss';

type AuthorProfileProps = {
  imageSrc: string;
  name: string;
  address: string;
};

export const AuthorProfile: React.FC<AuthorProfileProps> = ({ imageSrc, name, address }) => {
  return (
    <div className={styles.authorProfile}>
      <div className={styles.imageWrapper}>
        <AvatarMask src={imageSrc} alt={name} size="small" />
      </div>
      <div className={styles.content}>
        <Heading level={4} className={styles.name}>
          {name}
        </Heading>
        <Text as="span">{address}</Text>
      </div>
    </div>
  );
};
