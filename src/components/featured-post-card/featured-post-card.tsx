import { Button, Heading, Text } from '@solumzy/ui-lib-client-blog';
import classnames from 'classnames';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { paths } from '@/constants/paths';
import { Link } from '@/i18n/routing';

import { PostByLabel } from '../post-by-label/post-by-label';
import { TextLabel } from '../text-label/text-label';

import styles from './featured-post-card.module.scss';

type FeaturedPostCardProps = {
  id: string;
  imageSrc: string;
  imagePosition?: 'top' | 'side';
  withFeaturedText?: boolean;
  title: string;
  author: string;
  authorId: string;
  date: string;
  description: string;
  className?: string;
};

export const FeaturedPostCard: React.FC<FeaturedPostCardProps> = ({
  id,
  imageSrc,
  imagePosition = 'top',
  withFeaturedText,
  title,
  author,
  authorId,
  date,
  description,
  className,
}) => {
  const t = useTranslations();
  const isHorizontal = imagePosition === 'side';

  return (
    <div
      className={classnames(styles.featuredPostCard, styles[`image-${imagePosition}`], className)}
    >
      <Link href={`${paths.blog}/${id}`} className={styles.imageWrapper}>
        <Image src={imageSrc} alt={title} fill={true} className={styles.image} />
      </Link>

      <div className={styles.content}>
        {withFeaturedText && <TextLabel text={t('Post.featured')} colorVariant="primary" />}
        {!isHorizontal && (
          <PostByLabel
            authorName={author}
            authorId={authorId}
            date={date}
            colorVariant="secondary"
          />
        )}

        <Link href={`${paths.blog}/${id}`} className={styles.title}>
          <Heading
            level={2}
            className={classnames(styles.title, { [styles.vertical]: !isHorizontal })}
          >
            {title}
          </Heading>
        </Link>

        {isHorizontal && (
          <PostByLabel
            authorName={author}
            authorId={authorId}
            date={date}
            colorVariant="secondary"
          />
        )}
        <Text className={styles.description}>{description}</Text>
        <div className={styles.buttonWrapper}>
          <Link href={`${paths.blog}/${id}`}>
            <Button size="large">
              {t('Buttons.readMore')} {'>'}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
