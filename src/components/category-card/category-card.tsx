import { Heading, Text } from '@solumzy/ui-lib-client-blog';
import classnames from 'classnames';
import Image from 'next/image';

import { Link } from '@/i18n/routing';

import styles from './category-card.module.scss';

type CategoryCardProps = {
  title: string;
  image: string;
  link: string;
  mode?: 'vertical' | 'horizontal';
  description?: string;
};

export const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
  image,
  link,
  description,
  mode = 'vertical',
}) => {
  const isVertical = mode === 'vertical';
  const showDescription = isVertical && description;

  return (
    <Link href={link} className={styles.link}>
      <div className={classnames(styles.categoryCard, styles[mode])}>
        <Image src={image} alt={title} className={styles.image} />
        <div className={styles.content}>
          <Heading className={styles.title} level={3}>
            {title}
          </Heading>
          {showDescription && <Text className={styles.description}>{description}</Text>}
        </div>
      </div>
    </Link>
  );
};
