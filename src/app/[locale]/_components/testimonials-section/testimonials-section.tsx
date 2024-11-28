import { Heading, Text } from '@solumzy/ui-lib-client-blog';
import { useTranslations } from 'next-intl';

import { ReviewsCarousel } from '@/components/reviews-carousel/reviews-carousel';
import { TextLabel } from '@/components/text-label/text-label';
import { reviews } from '@/constants/reviews';

import styles from './testimonials-section.module.scss';

export const TestimonialsSection = () => {
  const t = useTranslations('HomePage.testimonialsSection');

  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.content}>
        <div className={styles.leftBlock}>
          <TextLabel text={t('label')} colorVariant="primary" />
          <Heading level={2}>{t('title')}</Heading>
          <Text>{t('text')}</Text>
        </div>
        <div className={styles.decorationLine} />
        <div className={styles.rightBlock}>
          <ReviewsCarousel items={reviews} />
        </div>
      </div>
    </section>
  );
};
