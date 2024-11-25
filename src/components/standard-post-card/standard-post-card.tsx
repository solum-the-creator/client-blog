import { Heading, Text } from '@solumzy/ui-lib-client-blog';
import classNames from 'classnames';
import Image from 'next/image';

import { paths } from '@/constants/paths';
import { Link } from '@/i18n/routing';
import { Author } from '@/types/authors';

import { PostByLabel } from '../post-by-label/post-by-label';
import { TextLabel } from '../text-label/text-label';

import styles from './standard-post-card.module.scss';

type StandardPostCardProps = {
  id: string;
  imageSrc: string;
  title: string;
  description: string;
  category: string;
  createdAt: string;
  author?: Author;
  layout?: 'vertical' | 'horizontal';
  className?: string;
};

export const StandardPostCard: React.FC<StandardPostCardProps> = ({
  id,
  imageSrc,
  title,
  description,
  category,
  layout = 'horizontal',
  createdAt,
  author,
  className,
}) => {
  const isVertical = layout === 'vertical';

  return (
    <div className={classNames(styles.standardPostCard, styles[layout], className)}>
      <Link href={`${paths.blog}/${id}`} className={styles.imageWrapper}>
        <div className={styles.imageContainer}>
          <Image src={imageSrc} alt={title} fill={true} className={styles.image} />
        </div>
      </Link>
      <div className={styles.content}>
        {!isVertical && (
          <Link href={`${paths.category}/${category}`}>
            <TextLabel text={category} colorVariant="secondary" />
          </Link>
        )}
        {author && (
          <PostByLabel
            authorName={author.name}
            authorId={author.id}
            date={createdAt}
            colorVariant="secondary"
          />
        )}

        <Link href={`${paths.blog}/${id}`}>
          <Heading level={2} className={styles.title}>
            {title}
          </Heading>
        </Link>
        <Text variant="secondary">{description}</Text>
      </div>
    </div>
  );
};
