import { Heading } from '@solumzy/ui-lib-client-blog';

import { CategoryList } from '@/components/category-list/category-list';

import styles from './category-section.module.scss';

export const CategorySection = () => {
  return (
    <section className={styles.categorySection}>
      <div className={styles.content}>
        <Heading level={2}>All Categories</Heading>
        <CategoryList mode="horizontal" cardMode="vertical" />
      </div>
    </section>
  );
};
