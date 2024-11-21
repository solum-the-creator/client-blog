import classNames from 'classnames';

import { categoriesList } from '@/constants/categories';
import { CategoryName } from '@/types/category';

import { CategoryCard } from '../category-card/category-card';

import styles from './category-list.module.scss';

type CategoryListProps = {
  mode: 'vertical' | 'horizontal';
  cardMode?: 'vertical' | 'horizontal';
  currentCategory?: CategoryName;
};

export const CategoryList: React.FC<CategoryListProps> = ({ mode, cardMode, currentCategory }) => {
  return (
    <div className={classNames(styles.categoryList, styles[mode])}>
      {categoriesList.map((category) => (
        <CategoryCard
          key={category.link}
          {...category}
          mode={cardMode}
          isActive={category.title === currentCategory}
        />
      ))}
    </div>
  );
};
