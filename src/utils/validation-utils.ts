import { categoriesList } from '@/constants/categories';
import { Category } from '@/types/category';

export const findCategory = (category: string): Category | undefined => {
  return categoriesList.find((c) => c.link === category);
};
