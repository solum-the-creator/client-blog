import { Heading } from '@solumzy/ui-lib-client-blog';

import { AuthorCard } from '@/components/author-card/author-card';
import { authors } from '@/constants/authors';

import styles from './authors-section.module.scss';

export const AuthorsSection = () => {
  return (
    <section className={styles.authorsSection}>
      <div className={styles.content}>
        <Heading level={2}>List of Authors</Heading>
        <div className={styles.authorList}>
          {authors.map((author) => (
            <AuthorCard key={author.name} {...author} />
          ))}
        </div>
      </div>
    </section>
  );
};
