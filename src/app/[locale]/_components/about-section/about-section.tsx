import { Heading, Text } from '@solumzy/ui-lib-client-blog';

import { TextLabel } from '@/components/text-label/text-label';
import { Link } from '@/i18n/routing';

import styles from './about-section.module.scss';

export const AboutSection = () => {
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
            <TextLabel text="About Us" colorVariant="primary" />
            <div className={styles.columnText}>
              <Heading level={2}>
                We are a community of content writers who share their learnings
              </Heading>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </Text>
              <div>
                <Link href={'/about'} className={styles.readMore}>
                  Read More {'>'}
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.column}>
            <TextLabel text="Our mission" colorVariant="primary" />
            <div className={styles.columnText}>
              <Heading level={3}>
                Creating valuable content for creatives all around the world
              </Heading>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </Text>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
