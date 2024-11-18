import classNames from 'classnames';

import { categoriesList } from '@/constants/categories';

import { CategoryCard } from '../category-card/category-card';

import styles from './category-list.module.scss';

type CategoryListProps = {
  mode: 'vertical' | 'horizontal';
  cardMode?: 'vertical' | 'horizontal';
};

export const CategoryList: React.FC<CategoryListProps> = ({ mode, cardMode }) => {
  return (
    <div className={classNames(styles.categoryList, styles[mode])}>
      {categoriesList.map((category) => (
        <CategoryCard key={category.link} {...category} mode={cardMode} />
      ))}
    </div>
  );
};
