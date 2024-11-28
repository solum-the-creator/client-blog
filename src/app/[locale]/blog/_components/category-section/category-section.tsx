import { Heading } from '@solumzy/ui-lib-client-blog';
import { useTranslations } from 'next-intl';

import { CategoryList } from '@/components/category-list/category-list';

import styles from './category-section.module.scss';

export const CategorySection = () => {
  const t = useTranslations('BlogPage');

  return (
    <section className={styles.categorySection}>
      <div className={styles.content}>
        <Heading level={2}>{t('allCategories')}</Heading>
        <CategoryList mode="horizontal" cardMode="vertical" />
      </div>
    </section>
  );
};
