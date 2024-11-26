import { Heading, Text } from '@solumzy/ui-lib-client-blog';
import { useTranslations } from 'next-intl';

import { TextLabel } from '@/components/text-label/text-label';

import styles from './mission-section.module.scss';

export const MissionSection = () => {
  const t = useTranslations('AboutPage.missionSection');

  return (
    <section className={styles.missionSection}>
      <div className={styles.column}>
        <TextLabel text={t('labelMission')} colorVariant="primary" className={styles.label} />
        <Heading level={3}>{t('titleMission')}</Heading>
        <Text>{t('textMission')}</Text>
      </div>
      <div className={styles.column}>
        <TextLabel text={t('labelVision')} colorVariant="primary" className={styles.label} />
        <Heading level={3}>{t('titleVision')}</Heading>
        <Text>{t('textVision')}</Text>
      </div>
    </section>
  );
};
