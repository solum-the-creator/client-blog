import { Text } from '@solumzy/ui-lib-client-blog';

import { Social } from '@/types/social';

import { Logo } from '../logo/logo';
import { SocialLinks } from '../social-links/social-links';

import { Navbar } from './navbar/navbar';
import { SubscribeBlock } from './subscribe-block/subscribe-block';

import styles from './footer.module.scss';

export const Footer = () => {
  const socials: Social[] = [
    { name: 'twitter', link: 'https://twitter.com' },
    { name: 'linkedin', link: 'https://linkedin.com' },
    { name: 'facebook', link: 'https://facebook.com' },
    { name: 'instagram', link: 'https://instagram.com' },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.row}>
          <Logo />
          <Navbar />
        </div>
        <SubscribeBlock />
        <div className={styles.row}>
          <div className={styles.contact}>
            <Text variant="secondary">Finstreet 118 2561 Fintown</Text>
            <Text variant="secondary">Hello@finsweet.com 020 7993 2905</Text>
          </div>
          <SocialLinks socials={socials} layout="horizontal" color="secondary" />
        </div>
      </div>
    </footer>
  );
};
