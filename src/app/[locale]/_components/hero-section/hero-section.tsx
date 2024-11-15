import heroImage from '@public/hero-background-home.jpg';
import Image from 'next/image';

import styles from './hero-section.module.scss';

export const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.imageWrapper}>
        <Image src={heroImage} alt="Hero Image" />
      </div>
      <h1>Hero Section</h1>
    </section>
  );
};
