import { Button } from '@solumzy/ui-lib-client-blog';
import { getTranslations } from 'next-intl/server';

import { Logo } from '../logo/logo';
import { Navbar } from '../navbar/navbar';

import styles from './header.module.scss';

export const Header: React.FC = async () => {
  const t = await getTranslations('Buttons');

  return (
    <header className={styles.header}>
      <Logo />
      <div className={styles.right}>
        <Navbar />
        <Button type="button" variant="secondary">
          {t('video')}
        </Button>
      </div>
    </header>
  );
};
