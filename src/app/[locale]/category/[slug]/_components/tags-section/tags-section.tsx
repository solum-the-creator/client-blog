import { Heading } from '@solumzy/ui-lib-client-blog';
import { useTranslations } from 'next-intl';

import { TagButton } from '@/components/tag-button/tag-button';
import { tagList } from '@/constants/tags';
import { TagName } from '@/types/post';

import styles from './tags-section.module.scss';

type TagsSectionProps = {
  selectedTags: TagName[];
  onTagToggle: (tag: TagName) => void;
};

export const TagsSection: React.FC<TagsSectionProps> = ({ selectedTags, onTagToggle }) => {
  const t = useTranslations('CategoryPage');

  const handleTagClick = (tag: TagName) => () => {
    onTagToggle(tag);
  };

  return (
    <section className={styles.tagsSection}>
      <Heading level={2}>{t('tags')}</Heading>
      <div className={styles.tags}>
        {tagList.map((tag) => (
          <div key={tag} className={styles.tag}>
            <TagButton
              tagName={tag}
              isSelected={selectedTags.includes(tag)}
              onClick={handleTagClick(tag)}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
