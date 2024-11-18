import classNames from 'classnames';
import Image from 'next/image';

import styles from './avatar-mask.module.scss';

type AvatarMaskProps = {
  src: string;
  alt: string;
  size?: 'small' | 'medium' | 'large' | 'max';
  shape?: 'circle' | 'square';
  className?: string;
};

export const AvatarMask: React.FC<AvatarMaskProps> = ({
  src,
  alt,
  size = 'medium',
  shape = 'circle',
  className,
}) => {
  return (
    <div className={classNames(styles.avatarMask, styles[size], styles[shape], className)}>
      <Image src={src} alt={alt} fill={true} className={styles.image} />
    </div>
  );
};
