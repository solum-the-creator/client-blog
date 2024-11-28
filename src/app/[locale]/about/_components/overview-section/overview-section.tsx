import overviewImage from '@public/about-overview-bg.jpg';
import { Heading, Text } from '@solumzy/ui-lib-client-blog';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import styles from './overview-section.module.scss';

export const OverviewSection = () => {
  const t = useTranslations('AboutPage.overviewSection');

  return (
    <section className={styles.stats}>
      <Image src={overviewImage} alt="Background" loading="lazy" className={styles.statsImage} />
      <div className={styles.yellowBlock} />
      <div className={styles.purpleBlock} />
      <div className={styles.statsRow}>
        <div className={styles.statsBlock}>
          <Heading variant="display" className={styles.statsTitle}>
            12+
          </Heading>
          <Text className={styles.statsText}>{t('blogs')}</Text>
        </div>
        <div className={styles.statsBlock}>
          <Heading variant="display" className={styles.statsTitle}>
            18K+
          </Heading>
          <Text className={styles.statsText}>{t('views')}</Text>
        </div>
        <div className={styles.statsBlock}>
          <Heading variant="display" className={styles.statsTitle}>
            30K+
          </Heading>
          <Text className={styles.statsText}>{t('users')}</Text>
        </div>
      </div>
    </section>
  );
};
