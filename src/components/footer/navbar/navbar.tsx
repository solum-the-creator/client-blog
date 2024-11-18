import Link from 'next/link';

import { paths } from '@/constants/paths';

import styles from './navbar.module.scss';

export const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link href={paths.home}>{'Home'}</Link>
        </li>
        <li className={styles.item}>
          <Link href={paths.blog}>{'Blog'}</Link>
        </li>
        <li className={styles.item}>
          <Link href={paths.about}>{'About us'}</Link>
        </li>
        <li className={styles.item}>
          <Link href={paths.contact}>{'Contact us'}</Link>
        </li>
        <li className={styles.item}>
          <Link href={paths.privacy}>{'Privacy Policy'}</Link>
        </li>
      </ul>
    </nav>
  );
};
