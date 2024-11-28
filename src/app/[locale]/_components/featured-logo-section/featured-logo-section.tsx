import logoIcon1 from '@public/icons/logo1-icon.svg';
import logoIcon2 from '@public/icons/logo2-icon.svg';
import logoIcon3 from '@public/icons/logo3-icon.svg';
import logoIcon4 from '@public/icons/logo4-icon.svg';
import logoIcon5 from '@public/icons/logo5-icon.svg';
import { Heading, Text } from '@solumzy/ui-lib-client-blog';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import styles from './featured-logo-section.module.scss';

export const FeaturedLogoSection = () => {
  const t = useTranslations('HomePage.featuredLogoSection');

  return (
    <section className={styles.featuredLogoSection}>
      <div className={styles.content}>
        <div className={styles.featuredBlock}>
          <Text as="span" size="small" variant="secondary">
            {t('label')}
          </Text>
          <Heading level={4} className={styles.title}>
            {t('title')}
          </Heading>
        </div>
        <Image src={logoIcon1} alt="Logo 1" className={styles.logo} />
        <Image src={logoIcon2} alt="Logo 2" className={styles.logo} />
        <Image src={logoIcon3} alt="Logo 3" className={styles.logo} />
        <Image src={logoIcon4} alt="Logo 4" className={styles.logo} />
        <Image src={logoIcon5} alt="Logo 5" className={styles.logo} />
      </div>
    </section>
  );
};
