import { Heading, Text } from '@solumzy/ui-lib-client-blog';
import Image from 'next/image';

import { AuthorProfile } from '@/components/author-profile/author-profile';
import { CategoryCard } from '@/components/category-card/category-card';
import { categoriesList, Category } from '@/constants/categories';
import { PostWithContent } from '@/types/post';

import styles from './post.module.scss';

type PostProps = {
  post: PostWithContent;
};

export const Post: React.FC<PostProps> = ({ post }) => {
  const { title, imageSrc, content, category: postCategory } = post;

  const postContent = content.map((item, index) => {
    switch (item.type) {
      case 'heading':
        return (
          <Heading key={item.text} level={3} className={styles.heading}>
            {item.text}
          </Heading>
        );
      case 'paragraph':
        return (
          <Text key={item.text} variant="secondary" className={styles.paragraph}>
            {item.text}
          </Text>
        );
      case 'list':
        return (
          <ul key={index} className={styles.list}>
            {item.items.map((item) => (
              <li key={item} className={styles.listItem}>
                {item}
              </li>
            ))}
          </ul>
        );
      default:
        return null;
    }
  });

  const categoryItem = categoriesList.find(
    (category) => category.title === postCategory,
  ) as Category;

  return (
    <article className={styles.postArticle}>
      <div className={styles.post}>
        <header className={styles.postHeader}>
          <AuthorProfile
            imageSrc="https://images.pexels.com/photos/373076/pexels-photo-373076.jpeg"
            name="John Doe"
            colorVariant="purple"
            date={post.createdAt}
          />
          <Heading level={1}>{title}</Heading>
          <div className={styles.category}>
            <CategoryCard
              title={categoryItem.title}
              image={categoryItem.image}
              link={categoryItem.link}
              mode="horizontal"
              variant="flat"
            />
          </div>
        </header>

        <section className={styles.postImage}>
          <Image src={imageSrc} alt={title} fill={true} className={styles.image} />
        </section>
        <section className={styles.postContent}>{postContent}</section>
      </div>
    </article>
  );
};
