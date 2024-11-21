import { tagList } from '@/constants/tags';
import { Post, TagName } from '@/types/post';

export const filterPostsByTags = (posts: Post[], selectedTags: TagName[]): Post[] => {
  return selectedTags.length
    ? posts.filter((post) => selectedTags.every((tag) => post.tags.includes(tag)))
    : posts;
};

export const getTagsByQuery = (searchTerm: string, selectedTags: TagName[]): TagName[] => {
  return tagList.filter(
    (tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()) && !selectedTags.includes(tag),
  );
};
