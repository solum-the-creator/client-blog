import { Heading, Text } from '@solumzy/ui-lib-client-blog';
import classNames from 'classnames';
import Image from 'next/image';

import { paths } from '@/constants/paths';
import { Link } from '@/i18n/routing';

import { TextLabel } from '../text-label/text-label';

import styles from './standard-post-card.module.scss';

type StandardPostCardProps = {
  id: string;
  imageSrc: string;
  title: string;
  description: string;
  category: string;
  className?: string;
};

export const StandardPostCard: React.FC<StandardPostCardProps> = ({
  id,
  imageSrc,
  title,
  description,
  category,
  className,
}) => {
  return (
    <div className={classNames(styles.standardPostCard, className)}>
      <Link href={`${paths.blog}/${id}`} className={styles.imageWrapper}>
        <div className={styles.imageContainer}>
          <Image src={imageSrc} alt={title} fill={true} className={styles.image} />
        </div>
      </Link>
      <div className={styles.content}>
        <TextLabel text={category} colorVariant="secondary" />
        <Link href={`${paths.blog}/${id}`}>
          <Heading level={2}>{title}</Heading>
        </Link>
        <Text variant="secondary">{description}</Text>
      </div>
    </div>
  );
};
