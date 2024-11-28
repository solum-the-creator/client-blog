import { Post } from '@/types/post';

import { filterPostsByTags, getTagsByQuery } from '../filter-utils';

const mockPosts: Post[] = [
  {
    id: '1',
    title: 'Tech Innovations',
    description: 'Advancements in technology',
    category: 'technology',
    tags: ['technology', 'innovation'],
    authorId: '1',
    createdAt: '2024-11-26',
    imageSrc: 'image1.jpg',
  },
  {
    id: '2',
    title: 'Startup Growth',
    description: 'How startups grow',
    category: 'business',
    tags: ['startup', 'business', 'innovation'],
    authorId: '2',
    createdAt: '2024-11-25',
    imageSrc: 'image2.jpg',
  },
  {
    id: '3',
    title: 'Life Experiences',
    description: 'Life stories and lessons',
    category: 'business',
    tags: ['life', 'experience'],
    authorId: '3',
    createdAt: '2024-11-24',
    imageSrc: 'image3.jpg',
  },
];

describe('filterPostsByTags', () => {
  it('returns all posts when no tags are selected', () => {
    const result = filterPostsByTags(mockPosts, []);
    expect(result).toEqual(mockPosts);
  });

  it('filters posts by a single tag', () => {
    const result = filterPostsByTags(mockPosts, ['technology']);
    expect(result).toEqual([mockPosts[0]]);
  });

  it('filters posts by multiple tags', () => {
    const result = filterPostsByTags(mockPosts, ['innovation', 'startup']);
    expect(result).toEqual([mockPosts[1]]);
  });

  it('returns an empty array if no posts match the selected tags', () => {
    const result = filterPostsByTags(mockPosts, ['future']);
    expect(result).toEqual([]);
  });
});

describe('getTagsByQuery', () => {
  it('returns matching tags based on the search term', () => {
    const result = getTagsByQuery('tech', []);
    expect(result).toEqual(['technology']);
  });

  it('excludes already selected tags from the results', () => {
    const result = getTagsByQuery('tech', ['technology']);
    expect(result).toEqual([]);
  });

  it('is case-insensitive when matching tags', () => {
    const result = getTagsByQuery('LIFE', []);
    expect(result).toEqual(['life']);
  });

  it('returns multiple matching tags if available', () => {
    const result = getTagsByQuery('in', []);
    expect(result).toEqual(['business', 'innovation', 'marketing']);
  });

  it('returns an empty array if no matching tags are found', () => {
    const result = getTagsByQuery('unknown', []);
    expect(result).toEqual([]);
  });
});
