import { Button, Heading, Text } from '@solumzy/ui-lib-client-blog';
import { useTranslations } from 'next-intl';

import { paths } from '@/constants/paths';
import { Link } from '@/i18n/routing';

import styles from './join-our-team-section.module.scss';

export const JoinOurTeamSection = () => {
  const t = useTranslations('JoinOurTeamSection');

  return (
    <section className={styles.joinOurTeamSection}>
      <div className={styles.content}>
        <div className={styles.textBlock}>
          <Heading level={2} className={styles.title}>
            {t('title')}
          </Heading>
          <Text variant="secondary">{t('text')}</Text>
        </div>
        <div>
          <Link href={paths.contact} className={styles.readMore}>
            <Button size="large">{t('buttonText')}</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
