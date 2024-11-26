import aboutTeamImage from '@public/ground-group-growth-hands.jpg';
import { Heading, Text } from '@solumzy/ui-lib-client-blog';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import styles from './about-team-section.module.scss';

export const AboutTeamSection = () => {
  const t = useTranslations('AboutPage.aboutTeamSection');

  return (
    <section className={styles.aboutTeamSection}>
      <div className={styles.textBlock}>
        <Heading level={2}>{t('title')}</Heading>
        <Heading level={4}>{t('secondaryTitle')}</Heading>
        <Text>{t('text')}</Text>
      </div>
      <div className={styles.imageWrapper}>
        <Image
          src={aboutTeamImage}
          alt="Ground Group Growth Hands"
          fill={true}
          loading="lazy"
          className={styles.image}
        />
      </div>
    </section>
  );
};
