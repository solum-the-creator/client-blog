import { FeaturedPostCard } from '@/components/featured-post-card/featured-post-card';
import { fetchPostAndAuthorById } from '@/lib/api/posts';
import { shortFormatDate } from '@/utils/date-formatter';

import styles from './featured-post-section.module.scss';

export const FeaturedPostSection = async () => {
  const { post, author } = await fetchPostAndAuthorById('3');

  const formatedDate = shortFormatDate(post.createdAt);

  return (
    <section className={styles.featuredPostSection}>
      <div className={styles.container}>
        <FeaturedPostCard
          id={post.id}
          imageSrc={post.imageSrc}
          title={post.title}
          description={post.description}
          author={author.name}
          authorId={author.id}
          date={formatedDate}
          imagePosition="side"
          withFeaturedText={true}
        />
      </div>
    </section>
  );
};
