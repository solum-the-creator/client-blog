import { useTranslations } from 'next-intl';

import { paths } from '@/constants/paths';
import { Link } from '@/i18n/routing';

import styles from './navbar.module.scss';

export const Navbar: React.FC = () => {
  const t = useTranslations('Navbar');

  return (
    <nav className={styles.navbar}>
      <Link href={paths.home}>{t('home')}</Link>
      <Link href={paths.blog}>{t('blog')}</Link>
      <Link href={paths.about}>{t('about')}</Link>
      <Link href={paths.contact}>{t('contact')}</Link>
    </nav>
  );
};
