import { Heading, Text } from '@solumzy/ui-lib-client-blog';
import classnames from 'classnames';
import Image from 'next/image';

import { paths } from '@/constants/paths';
import { Link } from '@/i18n/routing';

import styles from './category-card.module.scss';

type CategoryCardProps = {
  title: string;
  image: string;
  link: string;
  mode?: 'vertical' | 'horizontal';
  variant?: 'default' | 'flat';
  description?: string;
  isActive?: boolean;
};

export const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
  image,
  link,
  description,
  isActive = false,
  variant = 'default',
  mode = 'vertical',
}) => {
  const isVertical = mode === 'vertical';
  const showDescription = isVertical && description;

  return (
    <Link
      href={`${paths.category}/${link}`}
      className={classnames(styles.link, styles[variant], { [styles.active]: isActive })}
    >
      <div className={classnames(styles.categoryCard, styles[mode], styles[variant])}>
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
