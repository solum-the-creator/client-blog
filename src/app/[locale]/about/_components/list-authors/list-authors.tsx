import { Heading } from '@solumzy/ui-lib-client-blog';
import { getTranslations } from 'next-intl/server';

import { AuthorCard } from '@/components/author-card/author-card';
import { fetchAllAuthors } from '@/lib/api/authors';

import styles from './list-authors.module.scss';

export const ListAuthors = async () => {
  const authors = await fetchAllAuthors();
  const t = await getTranslations('AboutPage');

  return (
    <section className={styles.authorsSection}>
      <Heading level={2}>{t('listAuthors')}</Heading>
      <div className={styles.authorsList}>
        {authors.map((author) => (
          <div key={author.id} className={styles.authorItem}>
            <AuthorCard
              id={author.id}
              position={author.position}
              imageSrc={author.avatar}
              name={author.name}
              socials={author.socials}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
