import { notFound } from 'next/navigation';

import { fetchPostsByCategory } from '@/lib/api/posts';
import { findCategory } from '@/utils/validation-utils';

import { CategorySection } from './_components/category-section/category-section';

import styles from './category-page.module.scss';

type CategoryPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug: category } = await params;

  const currentCategory = findCategory(category);

  if (!currentCategory) {
    notFound();
  }

  const posts = await fetchPostsByCategory(currentCategory.title);

  return (
    <div className={styles.categoryPage}>
      <CategorySection currentCategory={currentCategory.title} posts={posts} />
    </div>
  );
}
