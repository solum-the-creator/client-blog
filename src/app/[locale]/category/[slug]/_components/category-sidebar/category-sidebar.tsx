import { CategoryName } from '@/types/category';

import { CategoriesSection } from './categories-section/categories-section';

import styles from './category-sidebar.module.scss';

type CategorySidebarProps = {
  currentCategory: CategoryName;
};

export const CategorySidebar: React.FC<CategorySidebarProps> = ({ currentCategory }) => {
  return (
    <aside className={styles.categorySidebar}>
      <CategoriesSection currentCategory={currentCategory} />
    </aside>
  );
};
