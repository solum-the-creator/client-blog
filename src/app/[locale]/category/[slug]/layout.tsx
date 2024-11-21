import { notFound } from 'next/navigation';

import { findCategory } from '@/utils/validation-utils';

import { CategoryHeader } from './_components/category-header/category-header';

type CategoryLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
};

export default async function CategoryLayout({ children, params }: CategoryLayoutProps) {
  const { slug: category } = await params;

  const categoryData = findCategory(category);

  if (!categoryData) {
    notFound();
  }

  return (
    <section>
      <CategoryHeader categoryName={categoryData.title} description={categoryData.description} />
      {children}
    </section>
  );
}
