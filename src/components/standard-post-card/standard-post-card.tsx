import { Heading, Text } from '@solumzy/ui-lib-client-blog';
import classNames from 'classnames';
import Image from 'next/image';

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
  imageSrc,
  title,
  description,
  category,
  className,
}) => {
  return (
    <div className={classNames(styles.standardPostCard, className)}>
      <div className={styles.imageWrapper}>
        <div className={styles.imageContainer}>
          <Image src={imageSrc} alt={title} fill={true} className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <TextLabel text={category} colorVariant="secondary" />
        <Heading level={2}>{title}</Heading>
        <Text variant="secondary">{description}</Text>
      </div>
    </div>
  );
};
