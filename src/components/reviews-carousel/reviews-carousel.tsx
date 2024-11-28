'use client';

import { useState } from 'react';
import { Text } from '@solumzy/ui-lib-client-blog';

import { AuthorProfile } from '../author-profile/author-profile';

import styles from './reviews-carousel.module.scss';

type CarouselItem = {
  message: string;
  author: string;
};

type ReviewsCarouselProps = {
  items: CarouselItem[];
};

export const ReviewsCarousel: React.FC<ReviewsCarouselProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex < items.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <div className={styles.carousel}>
      <div className={styles.trackWrapper}>
        <div
          className={styles.track}
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: 'transform 0.5s ease-in-out',
          }}
        >
          {items.map((item, index) => (
            <div className={styles.slide} key={index}>
              <Text size="large" className={styles.message}>
                {item.message}
              </Text>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.footer}>
        <AuthorProfile
          authorId="1"
          imageSrc="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
          name={items[currentIndex].author}
          address="New York, USA"
        />
        <div className={styles.navigation}>
          <button disabled={currentIndex === 0} onClick={prevSlide} className={styles.button}>
            <span className={styles.icon}>&#8592;</span>
          </button>
          <button
            disabled={currentIndex === items.length - 1}
            onClick={nextSlide}
            className={styles.button}
          >
            <span className={styles.icon}>&#8594;</span>
          </button>
        </div>
      </div>
    </div>
  );
};
