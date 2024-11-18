import { Button, Heading, Text } from '@solumzy/ui-lib-client-blog';

import styles from './join-our-team-section.module.scss';

export const JoinOurTeamSection = () => {
  return (
    <section className={styles.joinOurTeamSection}>
      <div className={styles.content}>
        <div className={styles.textBlock}>
          <Heading level={2} className={styles.title}>
            Join our team to be a part of our story
          </Heading>
          <Text variant="secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt.
          </Text>
        </div>
        <div>
          <Button size="large">Join Now</Button>
        </div>
      </div>
    </section>
  );
};
