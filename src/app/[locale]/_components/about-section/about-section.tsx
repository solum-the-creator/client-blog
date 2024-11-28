import { Heading, Text } from '@solumzy/ui-lib-client-blog';
import { useTranslations } from 'next-intl';

import { TextLabel } from '@/components/text-label/text-label';
import { paths } from '@/constants/paths';
import { Link } from '@/i18n/routing';

import styles from './about-section.module.scss';

export const AboutSection = () => {
  const t = useTranslations('HomePage.aboutSection');

  return (
    <section className={styles.aboutSection}>
      <div className={styles.content}>
        <div className={styles.decorationBlock}>
          <div className={styles.decorationLine} />
          <div className={styles.decorationLine} />
          <div className={styles.decorationLine} />
        </div>
        <div className={styles.contentBlock}>
          <div className={styles.column}>
            <TextLabel text={t('labelAbout')} colorVariant="primary" />
            <div className={styles.columnText}>
              <Heading level={2}>{t('titleAbout')}</Heading>
              <Text>{t('textAbout')}</Text>
              <div>
                <Link href={paths.about} className={styles.readMore} data-testid="read-more-about">
                  {t('readMore')} {'>'}
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.column}>
            <TextLabel text={t('labelMission')} colorVariant="primary" />
            <div className={styles.columnText}>
              <Heading level={3}>{t('titleMission')}</Heading>
              <Text>{t('textMission')}</Text>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
