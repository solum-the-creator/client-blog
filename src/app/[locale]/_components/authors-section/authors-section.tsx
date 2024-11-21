import { Heading } from '@solumzy/ui-lib-client-blog';
import { getTranslations } from 'next-intl/server';

import { AuthorCard } from '@/components/author-card/author-card';
import { fetchLimitedAuthors } from '@/lib/api/authors';

import styles from './authors-section.module.scss';

export const AuthorsSection = async () => {
  const authors = await fetchLimitedAuthors(4);
  const t = await getTranslations('HomePage.authorsSection');

  return (
    <section className={styles.authorsSection}>
      <div className={styles.content}>
        <Heading level={2}>{t('title')}</Heading>
        <div className={styles.authorList}>
          {authors.map(({ id, name, position, avatar, socials }) => (
            <AuthorCard
              key={id}
              id={id}
              name={name}
              position={position}
              imageSrc={avatar}
              socials={socials}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
