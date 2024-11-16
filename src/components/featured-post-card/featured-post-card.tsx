'use client';

import { Button, Heading, Text } from '@solumzy/ui-lib-client-blog';
import classnames from 'classnames';
import Image from 'next/image';

import { PostByLabel } from '../post-by-label/post-by-label';
import { TextLabel } from '../text-label/text-label';

import styles from './featured-post-card.module.scss';

type FeaturedPostCardProps = {
  imageSrc: string;
  imagePosition?: 'top' | 'side';
  withFeaturedText?: boolean;
  title: string;
  author: string;
  date: string;
  description: string;
  className?: string;
};

export const FeaturedPostCard: React.FC<FeaturedPostCardProps> = ({
  imageSrc,
  imagePosition = 'top',
  withFeaturedText,
  title,
  author,
  date,
  description,
  className,
}) => {
  const isHorizontal = imagePosition === 'side';

  return (
    <div
      className={classnames(styles.featuredPostCard, styles[`image-${imagePosition}`], className)}
    >
      <div className={styles.imageWrapper}>
        <Image src={imageSrc} alt={title} fill={true} className={styles.image} />
      </div>

      <div className={styles.content}>
        {withFeaturedText && <TextLabel text="Featured Post" colorVariant="primary" />}
        {!isHorizontal && <PostByLabel authorName={author} date={date} colorVariant="secondary" />}

        <Heading
          level={2}
          className={classnames(styles.title, { [styles.vertical]: !isHorizontal })}
        >
          {title}
        </Heading>

        {isHorizontal && <PostByLabel authorName={author} date={date} colorVariant="secondary" />}
        <Text className={styles.description}>{description}</Text>
        <div className={styles.buttonWrapper}>
          <Button size="large">Read More {'>'}</Button>
        </div>
      </div>
    </div>
  );
};
