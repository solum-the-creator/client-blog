'use client';

import { useCallback, useMemo, useState } from 'react';

import { CategoryName } from '@/types/category';
import { Post, TagName } from '@/types/post';
import { filterPostsByTags } from '@/utils/filter-utils';

import { CategorySidebar } from '../category-sidebar/category-sidebar';
import { PostsSection } from '../posts-section/posts-section';

import styles from './category-section.module.scss';

type CategorySectionProps = {
  posts: Post[];
  currentCategory: CategoryName;
};

export const CategorySection: React.FC<CategorySectionProps> = ({ posts, currentCategory }) => {
  const [selectedTags, setSelectedTags] = useState<TagName[]>([]);

  const filteredPosts = useMemo(
    () => filterPostsByTags(posts, selectedTags),
    [posts, selectedTags],
  );

  const toggleTag = useCallback((tag: TagName) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
  }, []);

  return (
    <section className={styles.categorySection}>
      <PostsSection posts={filteredPosts} />
      <CategorySidebar
        currentCategory={currentCategory}
        selectedTags={selectedTags}
        onTagToggle={toggleTag}
      />
    </section>
  );
};
