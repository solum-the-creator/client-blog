import { Heading, Text } from '@solumzy/ui-lib-client-blog';
import { useTranslations } from 'next-intl';

import styles from './privacy.module.scss';

export default function PrivacyPage() {
  const t = useTranslations('PrivacyPage');

  return (
    <section className={styles.privacySection}>
      <header className={styles.header}>
        <Heading level={1}>{t('title')}</Heading>
        <Text>{t('lastUpdated')}</Text>
      </header>
      <article className={styles.content}>
        <Heading level={2}>{t('content.title1')}</Heading>
        <Text>{t('content.text1')}</Text>
        <Heading level={2}>{t('content.title2')}</Heading>
        <Text>{t('content.text2')}</Text>
        <Text>{t('content.text3')}</Text>
      </article>
    </section>
  );
}
