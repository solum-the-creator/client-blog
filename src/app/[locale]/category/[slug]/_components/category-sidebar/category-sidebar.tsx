import { memo } from 'react';

import { TagSearch } from '@/components/tag-search/tag-search';
import { CategoryName } from '@/types/category';
import { TagName } from '@/types/post';

import { TagsSection } from '../tags-section/tags-section';

import { CategoriesSection } from './categories-section/categories-section';

import styles from './category-sidebar.module.scss';

type CategorySidebarProps = {
  currentCategory: CategoryName;
  selectedTags: TagName[];
  onTagToggle: (tag: TagName) => void;
};

export const CategorySidebar: React.FC<CategorySidebarProps> = memo(
  ({ currentCategory, selectedTags, onTagToggle }) => {
    return (
      <aside className={styles.categorySidebar}>
        <TagSearch selectedTags={selectedTags} onTagSelect={onTagToggle} />
        <CategoriesSection currentCategory={currentCategory} />
        <TagsSection selectedTags={selectedTags} onTagToggle={onTagToggle} />
      </aside>
    );
  },
);

CategorySidebar.displayName = 'CategorySidebar';
