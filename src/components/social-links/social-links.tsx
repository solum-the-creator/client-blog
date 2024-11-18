import facebookIcon from '@public/icons/facebook-icon.svg';
import instagramIcon from '@public/icons/instagram-icon.svg';
import linkedInIcon from '@public/icons/linkedin-icon.svg';
import twitterIcon from '@public/icons/twitter-icon.svg';
import classNames from 'classnames';
import Image from 'next/image';

import { Social } from '@/types/social';

import styles from './social-links.module.scss';

const iconMap: Record<Social['name'], string> = {
  twitter: twitterIcon,
  linkedin: linkedInIcon,
  facebook: facebookIcon,
  instagram: instagramIcon,
};

type SocialLinksProps = {
  socials: Social[];
  layout?: 'horizontal' | 'vertical';
  color?: 'primary' | 'secondary';
  className?: string;
};

export const SocialLinks: React.FC<SocialLinksProps> = ({
  socials,
  layout = 'horizontal',
  color = 'primary',
  className,
}) => {
  return (
    <ul className={classNames(styles.socialLinks, styles[layout], styles[color], className)}>
      {socials.map(({ name, link }) => (
        <li key={name} className={styles.socialItem}>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <Image src={iconMap[name]} alt={name} className={styles.icon} />
          </a>
        </li>
      ))}
    </ul>
  );
};
