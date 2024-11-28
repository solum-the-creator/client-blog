'use client';

import { useState } from 'react';
import classNames from 'classnames';

import { Navbar } from '../navbar/navbar';

import styles from './burger-menu.module.scss';

export const BurgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.burgerMenu} data-testid="burger-menu">
      <button
        onClick={toggleMenu}
        className={classNames(styles.burgerIcon, { [styles.open]: isOpen })}
      >
        <span />
        <span />
        <span />
      </button>

      {isOpen && (
        <div className={styles.menu}>
          <Navbar />
        </div>
      )}
    </div>
  );
};
