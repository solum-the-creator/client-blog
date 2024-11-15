import heroImage from '@public/hero-background-home.jpg';
import Image from 'next/image';

import { PostContent } from './post-content/post-content';

import styles from './hero-section.module.scss';

export const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.imageWrapper}>
        <Image
          src={heroImage}
          alt="Hero Image"
          fill={true}
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>
      <PostContent />
    </section>
  );
};