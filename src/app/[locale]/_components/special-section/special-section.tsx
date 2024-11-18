import specialImage from '@public/started-section-background.jpg';
import { Button, Heading, Text } from '@solumzy/ui-lib-client-blog';
import Image from 'next/image';

import { TextLabel } from '@/components/text-label/text-label';
import { Link } from '@/i18n/routing';

import styles from './special-section.module.scss';

export const SpecialSection = () => {
  return (
    <section className={styles.specialSection}>
      <div className={styles.content}>
        <div className={styles.imageWrapper}>
          <Image src={specialImage} alt="Special Image" className={styles.image} />
        </div>
        <div className={styles.contentBlock}>
          <TextLabel text="Why we started" colorVariant="primary" />
          <Heading level={1} className={styles.title}>
            It started out as a simple idea and evolved into
            <br /> our passion
          </Heading>
          <Text variant="secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip.
          </Text>
          <Link href={'/about'} className={styles.readMore}>
            <Button size="large">Discover our story {'>'}</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
