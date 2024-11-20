import { Author } from '@/types/authors';
import { Post, PostWithContent } from '@/types/post';

const BASE_URL = 'https://673665a2aafa2ef22230699e.mockapi.io/api/v1';

export const fetchPostById = async (id: string): Promise<PostWithContent | null> => {
  const response = await fetch(`${BASE_URL}/posts/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch post');
  }

  return response.json();
};

export const fetchPostAndAuthorById = async (
  id: string,
): Promise<{ post: Post; author: Author }> => {
  const response = await fetch(`${BASE_URL}/posts/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch post');
  }

  const post = await response.json();

  const authorId = post.authorId;

  const authorResponse = await fetch(`${BASE_URL}/authors/${authorId}`);
  if (!authorResponse.ok) {
    throw new Error('Failed to fetch author');
  }

  const author = await authorResponse.json();

  return {
    post,
    author,
  };
};

export const fetchAllPosts = async (): Promise<Post[]> => {
  const response = await fetch(`${BASE_URL}/posts`);
  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }
  return response.json();
};

export const fetchSimilarPosts = async (category: string, excludedId: string): Promise<Post[]> => {
  const response = await fetch(`${BASE_URL}/posts?page=1&limit=4&category=${category}`);

  if (!response.ok) {
    throw new Error('Failed to fetch similar posts');
  }

  const posts: Post[] = await response.json();

  return posts.filter((post) => post.id !== excludedId).slice(0, 3);
};

export const fetchSimilarPostsWithAuthors = async (
  category: string,
  excludedId: string,
): Promise<(Post & { author: Author })[]> => {
  const response = await fetch(`${BASE_URL}/posts?page=1&limit=4&category=${category}`);

  if (!response.ok) {
    throw new Error('Failed to fetch similar posts');
  }

  const posts: Post[] = await response.json();

  const filteredPosts = posts.filter((post) => post.id !== excludedId).slice(0, 3);

  const authorIds = [...new Set(filteredPosts.map((post) => post.authorId))];

  const authors = await Promise.all(
    authorIds.map(async (id) => {
      const authorResponse = await fetch(`${BASE_URL}/authors/${id}`);
      if (!authorResponse.ok) {
        throw new Error(`Failed to fetch author with id ${id}`);
      }
      return authorResponse.json() as Promise<Author>;
    }),
  );

  const authorMap = new Map(authors.map((author) => [author.id, author]));

  const postsWithAuthors = filteredPosts.map((post) => ({
    ...post,
    author: authorMap.get(post.authorId.toString())!,
  }));

  return postsWithAuthors;
};

export const fetchLimitedPostsWithAuthors = async (
  limit: number,
): Promise<{ post: Post; author: Author }[]> => {
  const response = await fetch(`${BASE_URL}/posts?page=1&limit=${limit}`);

  if (!response.ok) {
    throw new Error('Failed to fetch similar posts');
  }

  const posts: Post[] = await response.json();

  const authorIds = [...new Set(posts.map((post) => post.authorId))];

  const authors = await Promise.all(
    authorIds.map(async (id) => {
      const authorResponse = await fetch(`${BASE_URL}/authors/${id}`);
      if (!authorResponse.ok) {
        throw new Error(`Failed to fetch author with id ${id}`);
      }
      return authorResponse.json() as Promise<Author>;
    }),
  );

  const authorMap = new Map(authors.map((author) => [author.id, author]));

  const postsWithAuthors = posts.map((post) => ({
    post,
    author: authorMap.get(post.authorId.toString())!,
  }));

  return postsWithAuthors;
};
