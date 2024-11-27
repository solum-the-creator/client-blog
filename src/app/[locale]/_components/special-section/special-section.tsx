import specialImage from '@public/started-section-background.jpg';
import { Button, Heading, Text } from '@solumzy/ui-lib-client-blog';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { TextLabel } from '@/components/text-label/text-label';
import { paths } from '@/constants/paths';
import { Link } from '@/i18n/routing';

import styles from './special-section.module.scss';

export const SpecialSection = () => {
  const t = useTranslations('HomePage.specialSection');

  return (
    <section className={styles.specialSection}>
      <div className={styles.content}>
        <div className={styles.imageWrapper}>
          <Image src={specialImage} alt="Special Image" className={styles.image} />
        </div>
        <div className={styles.contentBlock}>
          <TextLabel text={t('label')} colorVariant="primary" />
          <Heading level={1} className={styles.title}>
            {t('title')}
          </Heading>
          <Text variant="secondary">{t('text')}</Text>
          <Link
            href={paths.about}
            className={styles.readMore}
            data-testid="discover-our-story-button"
          >
            <Button size="large">{t('buttonText')}</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
