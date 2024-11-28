import { Heading, Text } from '@solumzy/ui-lib-client-blog';
import { useTranslations } from 'next-intl';

import { TextLabel } from '@/components/text-label/text-label';

import { ContactForm } from '../contact-form/contact-form';

import styles from './contact-section.module.scss';

export const ContactSection = () => {
  const t = useTranslations('ContactPage');

  return (
    <section className={styles.contactSection}>
      <div className={styles.content}>
        <div className={styles.heading}>
          <div className={styles.headingBlock}>
            <TextLabel text={t('heading.label')} className={styles.label} />
            <Heading level={1} className={styles.title}>
              {t('heading.title')}
            </Heading>
          </div>
          <Text variant="secondary" className={styles.description}>
            {t('heading.description')}
          </Text>
        </div>

        <div className={styles.contactInfo}>
          <div className={styles.column}>
            <Heading level={6} className={styles.columnTitle}>
              {t('contactInfo.workingHours')}
            </Heading>
            <div className={styles.columnText}>
              <Text variant="light" className={styles.primaryText}>
                {t('contactInfo.mondayToFriday')}
              </Text>
              <Text variant="light" className={styles.primaryText}>
                {t('contactInfo.mondayToFridayTime')}
              </Text>
              <Text variant="secondary" className={styles.secondaryText}>
                {t('contactInfo.supportTime')}
              </Text>
            </div>
          </div>
          <div className={styles.column}>
            <Heading level={6} className={styles.columnTitle}>
              {t('contactInfo.contactUs')}
            </Heading>
            <div className={styles.columnText}>
              <Text variant="light" className={styles.primaryText}>
                020 7993 2905
              </Text>
              <Text variant="secondary" className={styles.secondaryText}>
                hello@finsweet.com
              </Text>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
};
