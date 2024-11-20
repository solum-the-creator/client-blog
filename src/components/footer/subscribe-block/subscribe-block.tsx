import { Button, Heading, Input } from '@solumzy/ui-lib-client-blog';

import styles from './subscribe-block.module.scss';

export const SubscribeBlock = () => {
  return (
    <div className={styles.subscribeBlock}>
      <Heading level={2} colorVariant="light" className={styles.title}>
        Subscribe to our news letter to get latest updates and news
      </Heading>
      <div className={styles.form}>
        <Input placeholder="Enter your email" type="email" fullWidth={true} />
        <Button size="large" type="submit" className={styles.button}>
          Subscribe
        </Button>
      </div>
    </div>
  );
};
