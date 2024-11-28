import { Heading, Text } from '@solumzy/ui-lib-client-blog';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { SocialLinks } from '@/components/social-links/social-links';
import { Author } from '@/types/authors';

import styles from './author-section.module.scss';

type AuthorSectionProps = {
  author: Author;
};

export const AuthorSection: React.FC<AuthorSectionProps> = ({ author }) => {
  const t = useTranslations('AuthorPage');

  return (
    <section className={styles.authorSection}>
      <div className={styles.content}>
        <div className={styles.imageWrapper}>
          <Image src={author.avatar} alt={author.name} className={styles.image} fill={true} />
        </div>
        <div className={styles.authorInfo}>
          <Heading level={1} className={styles.title}>
            {t('welcomeText', { name: author.name })}
          </Heading>
          <Text variant="secondary" className={styles.description}>
            {author.profileDescription}
          </Text>
          <SocialLinks socials={author.socials} layout="horizontal" />
        </div>
      </div>
    </section>
  );
};
