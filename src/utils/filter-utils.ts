import { Post, TagName } from '@/types/post';

export const filterPostsByTags = (posts: Post[], selectedTags: TagName[]): Post[] => {
  return selectedTags.length
    ? posts.filter((post) => selectedTags.every((tag) => post.tags.includes(tag)))
    : posts;
};
