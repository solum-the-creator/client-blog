import { notFound } from 'next/navigation';

import { fetchPostsByCategory } from '@/lib/api/posts';
import { findCategory } from '@/utils/validation-utils';

import { CategorySidebar } from './_components/category-sidebar/category-sidebar';
import { PostsSection } from './_components/posts-section/posts-section';

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
      <div className={styles.content}>
        <PostsSection posts={posts} />
        <CategorySidebar currentCategory={currentCategory.title} />
      </div>
    </div>
  );
}
