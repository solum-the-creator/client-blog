import { Heading } from '@solumzy/ui-lib-client-blog';
import { useTranslations } from 'next-intl';

import { CategoryList } from '@/components/category-list/category-list';
import { CategoryName } from '@/types/category';

import styles from './categories-section.module.scss';

type CategoriesSectionProps = {
  currentCategory: CategoryName;
};

export const CategoriesSection: React.FC<CategoriesSectionProps> = ({ currentCategory }) => {
  const t = useTranslations('CategoryPage');

  return (
    <section className={styles.categoriesSection}>
      <Heading level={2}>{t('categories')}</Heading>
      <CategoryList mode="vertical" cardMode="horizontal" currentCategory={currentCategory} />
    </section>
  );
};
