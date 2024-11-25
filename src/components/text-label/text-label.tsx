import classnames from 'classnames';

import { LabelColorVariant } from '@/types/colors';

import styles from './text-label.module.scss';

type TextLabelProps = {
  text: string;
  colorVariant?: LabelColorVariant;
  className?: string;
};

export const TextLabel: React.FC<TextLabelProps> = ({
  text,
  colorVariant = 'primary',
  className,
}) => {
  return (
    <span className={classnames(styles.textLabel, styles[colorVariant], className)}>{text}</span>
  );
};
