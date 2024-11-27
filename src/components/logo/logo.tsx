import { Heading } from '@solumzy/ui-lib-client-blog';
import { getTranslations } from 'next-intl/server';

import { paths } from '@/constants/paths';
import { Link } from '@/i18n/routing';

import styles from './logo.module.scss';

export const Logo: React.FC = async () => {
  const t = await getTranslations('Logo');

  return (
    <Link href={paths.home} className={styles.logoLink} data-testid="logo">
      <Heading level={4} colorVariant="light">
        {t('title')}
      </Heading>
    </Link>
  );
};
