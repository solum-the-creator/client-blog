'use client';

import classNames from 'classnames';
import { useTranslations } from 'next-intl';

import { paths } from '@/constants/paths';
import { Link, usePathname } from '@/i18n/routing';

import styles from './navbar.module.scss';

export const Navbar = () => {
  const pathname = usePathname();
  const t = useTranslations('Navbar');

  const links = [
    { link: paths.home, label: t('home') },
    { link: paths.blog, label: t('blog') },
    { link: paths.about, label: t('about') },
    { link: paths.contact, label: t('contact') },
    { link: paths.privacy, label: t('privacy') },
  ];

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {links.map(({ link, label }) => (
          <li key={link} className={styles.item}>
            <Link
              href={link}
              className={classNames(styles.link, { [styles.active]: pathname === link })}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
