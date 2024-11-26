import whyStartImage from '@public/three-persons-sitting.jpg';
import { Heading, Text } from '@solumzy/ui-lib-client-blog';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import styles from './why-start-section.module.scss';

export const WhyStartSection = () => {
  const t = useTranslations('AboutPage.whyStartSection');

  return (
    <section className={styles.whyStartSection}>
      <div className={styles.imageWrapper}>
        <Image
          src={whyStartImage}
          alt="Three persons sitting"
          fill={true}
          loading="lazy"
          className={styles.image}
        />
      </div>
      <div className={styles.textBlock}>
        <Heading level={2}>{t('title')}</Heading>
        <Heading level={4}>{t('secondaryTitle')}</Heading>
        <Text>{t('text')}</Text>
      </div>
    </section>
  );
};
