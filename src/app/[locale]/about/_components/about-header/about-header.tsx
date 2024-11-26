import { Heading, Text } from '@solumzy/ui-lib-client-blog';
import { useTranslations } from 'next-intl';

import { TextLabel } from '@/components/text-label/text-label';

import styles from './about-header.module.scss';

export const AboutHeader = () => {
  const t = useTranslations('AboutPage.headerSection');

  return (
    <section className={styles.header}>
      <div className={styles.titleBlock}>
        <TextLabel text={t('label')} colorVariant="primary" />
        <Heading level={1}>{t('title')}</Heading>
      </div>

      <div className={styles.textBlock}>
        <Text>{t('text')}</Text>
      </div>
    </section>
  );
};
