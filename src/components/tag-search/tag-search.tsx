'use client';

import { useState } from 'react';
import { Input } from '@solumzy/ui-lib-client-blog';
import { useTranslations } from 'next-intl';

import { TagName } from '@/types/post';
import { getTagsByQuery } from '@/utils/filter-utils';

import styles from './tag-search.module.scss';

type TagSearchProps = {
  selectedTags: TagName[];
  onTagSelect: (tag: TagName) => void;
};

export const TagSearch: React.FC<TagSearchProps> = ({ selectedTags, onTagSelect }) => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState<TagName[]>([]);
  const t = useTranslations('CategoryPage');

  const handleSearch = (searchTerm: string) => {
    setQuery(searchTerm);

    if (!searchTerm) {
      setSearchResults([]);
      return;
    }

    const results = getTagsByQuery(searchTerm, selectedTags);
    setSearchResults(results);
  };

  const handleSelectTag = (tag: TagName) => () => {
    onTagSelect(tag);
    setQuery('');
    setSearchResults([]);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleSearch(e.target.value);
  };

  return (
    <div className={styles.tagSearch}>
      <Input
        type="text"
        value={query}
        onChange={handleChange}
        fullWidth={true}
        sizeVariant="medium"
        placeholder={t('searchPlaceholder')}
        className={styles.searchInput}
        data-testid="tag-search-input"
      />
      {searchResults.length > 0 && (
        <ul className={styles.resultsList} data-testid="tag-search-result">
          {searchResults.map((tag) => (
            <li key={tag} className={styles.resultItem}>
              <button onClick={handleSelectTag(tag)} className={styles.resultButton}>
                {tag}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
