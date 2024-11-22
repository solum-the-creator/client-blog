'use client';

import { useState } from 'react';
import { Button } from '@solumzy/ui-lib-client-blog';
import { useTranslations } from 'next-intl';

import { StandardPostCard } from '@/components/standard-post-card/standard-post-card';
import { Post } from '@/types/post';

import styles from './paginated-posts.module.scss';

type PaginatedPostsProps = {
  posts: Post[];
};

export const PaginatedPosts: React.FC<PaginatedPostsProps> = ({ posts }) => {
  const t = useTranslations('BlogPage');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  const totalPages = Math.ceil(posts.length / postsPerPage);
  const currentPosts = posts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };
  const prevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  return (
    <div className={styles.paginatedPosts}>
      <div className={styles.posts}>
        {currentPosts.map((post) => (
          <StandardPostCard key={post.id} {...post} />
        ))}
      </div>
      <div className={styles.pagination}>
        <Button
          onClick={prevPage}
          size="small"
          variant="secondary"
          disabled={currentPage === 1}
          className={styles.paginationButton}
        >
          {'<'} {t('prev')}
        </Button>
        <Button
          onClick={nextPage}
          size="small"
          variant="secondary"
          disabled={currentPage === totalPages}
          className={styles.paginationButton}
        >
          {t('next')} {'>'}
        </Button>
      </div>
    </div>
  );
};
