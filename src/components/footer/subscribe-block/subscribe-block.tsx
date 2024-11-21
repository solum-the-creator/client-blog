import { Button, Heading, Input } from '@solumzy/ui-lib-client-blog';
import { useTranslations } from 'next-intl';

import styles from './subscribe-block.module.scss';

export const SubscribeBlock = () => {
  const t = useTranslations('Footer.subscribeBlock');

  return (
    <div className={styles.subscribeBlock}>
      <Heading level={2} colorVariant="light" className={styles.title}>
        {t('title')}
      </Heading>
      <div className={styles.form}>
        <Input placeholder={t('inputPlaceholder')} type="email" fullWidth={true} />
        <Button size="large" type="submit" className={styles.button}>
          {t('buttonText')}
        </Button>
      </div>
    </div>
  );
};
