import { Heading, Text } from '@solumzy/ui-lib-client-blog';

import { ReviewsCarousel } from '@/components/reviews-carousel/reviews-carousel';
import { TextLabel } from '@/components/text-label/text-label';
import { reviews } from '@/constants/reviews';

import styles from './testimonials-section.module.scss';

export const TestimonialsSection = () => {
  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.content}>
        <div className={styles.leftBlock}>
          <TextLabel text="Testimonials" colorVariant="primary" />
          <Heading level={2}>What people say about our blog</Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
          </Text>
        </div>
        <div className={styles.decorationLine} />
        <div className={styles.rightBlock}>
          <ReviewsCarousel items={reviews} />
        </div>
      </div>
    </section>
  );
};
