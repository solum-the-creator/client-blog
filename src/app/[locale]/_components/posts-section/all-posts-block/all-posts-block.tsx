import { Heading } from '@solumzy/ui-lib-client-blog';

import { HoverablePostCard } from '@/components/hoverable-post-card/hoverable-post-card';
import { paths } from '@/constants/paths';
import { Link } from '@/i18n/routing';

import styles from './all-posts-block.module.scss';

export const AllPostsBlock = () => {
  const posts = [
    {
      id: '1',
      title: '8 Figma design systems that you can download for free today.',
      author: 'John Doe',
      date: 'May 20, 2023',
    },
    {
      id: '2',
      title: '8 Figma design systems that you can download for free today.',
      author: 'John Doe',
      date: 'May 20, 2023',
    },
    {
      id: '3',
      title: '8 Figma design systems that you can download for free today.',
      author: 'John Doe',
      date: 'May 20, 2023',
    },
    {
      id: '4',
      title: '8 Figma design systems that you can download for free today.',
      author: 'John Doe',
      date: 'May 20, 2023',
    },
  ];

  return (
    <div className={styles.allPostsBlock}>
      <div className={styles.header}>
        <Heading level={2}>All Posts</Heading>
        <Link href={paths.blog} className={styles.viewAll}>
          View All
        </Link>
      </div>
      <div className={styles.postsList}>
        {posts.map((post) => (
          <HoverablePostCard
            key={post.id}
            title={post.title}
            author={post.author}
            date={post.date}
          />
        ))}
      </div>
    </div>
  );
};
