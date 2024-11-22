import { Breadcrumbs, Heading, Text } from '@solumzy/ui-lib-client-blog';
import { useTranslations } from 'next-intl';

import { paths } from '@/constants/paths';
import { Link } from '@/i18n/routing';
import { CategoryName } from '@/types/category';

import styles from './category-header.module.scss';

type CategoryHeaderProps = {
  categoryName: CategoryName;
  description: string;
};

export const CategoryHeader: React.FC<CategoryHeaderProps> = ({ categoryName, description }) => {
  const t = useTranslations('Navbar');

  return (
    <section className={styles.categoryHeader}>
      <div className={styles.content}>
        <div className={styles.categoryText}>
          <Heading variant="display" className={styles.title}>
            {categoryName}
          </Heading>
          <Text variant="secondary" className={styles.description}>
            {description}
          </Text>
        </div>
        <Breadcrumbs
          className={styles.breadcrumbs}
          items={[
            <Link key="home" href={paths.home}>
              {t('home')}
            </Link>,
            <Link key="blog" href={paths.blog}>
              {t('blog')}
            </Link>,
            categoryName,
          ]}
        />
      </div>
    </section>
  );
};
