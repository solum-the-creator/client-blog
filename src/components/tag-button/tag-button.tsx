import classNames from 'classnames';

import { TagName } from '@/types/post';

import styles from './tag-button.module.scss';

type TagButtonProps = {
  tagName: TagName;
  isSelected?: boolean;
  onClick?: () => void;
};

export const TagButton: React.FC<TagButtonProps> = ({ tagName, isSelected, onClick }) => {
  return (
    <button
      className={classNames({ [styles.selected]: isSelected }, styles.tagButton)}
      onClick={onClick}
      data-testid="tag-button"
    >
      {tagName}
    </button>
  );
};
