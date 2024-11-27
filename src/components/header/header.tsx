import { Suspense } from 'react';
import { Button } from '@solumzy/ui-lib-client-blog';
import { useTranslations } from 'next-intl';

import { Link } from '@/i18n/routing';

import { BurgerMenu } from '../burger-menu/burger-menu';
import { Logo } from '../logo/logo';
import { ModalVideo } from '../modal-video/modal-video';
import { Navbar } from '../navbar/navbar';

import styles from './header.module.scss';

export const Header: React.FC = () => {
  const t = useTranslations('Buttons');

  return (
    <header className={styles.header}>
      <Logo />
      <div className={styles.right}>
        <div className={styles.navbar}>
          <Navbar />
          <Link href={'?showModal=true'} data-testid="video-modal-trigger">
            <Button type="button" variant="secondary" className={styles.videoButton}>
              {t('video')}
            </Button>
          </Link>
          <Suspense>
            <ModalVideo videoUrl="https://www.youtube.com/embed/zRp4NS_eeGc?autoplay=1" />
          </Suspense>
        </div>

        <BurgerMenu />
      </div>
    </header>
  );
};
