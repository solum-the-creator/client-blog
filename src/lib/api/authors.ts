import { Author } from '@/types/authors';

const BASE_URL = 'https://673665a2aafa2ef22230699e.mockapi.io/api/v1';

export const fetchAuthorById = async (id: string): Promise<Author | null> => {
  try {
    const response = await fetch(`${BASE_URL}/authors/${id}`);
    if (response.status === 404) {
      return null;
    }
    if (!response.ok) {
      throw new Error(`Failed to fetch author with ID: ${id}`);
    }
    return await response.json();
  } catch {
    return null;
  }
};

export const fetchAllAuthors = async (): Promise<Author[]> => {
  const response = await fetch(`${BASE_URL}/authors`);
  if (!response.ok) {
    throw new Error('Failed to fetch authors');
  }
  return response.json();
};

export const fetchLimitedAuthors = async (limit: number): Promise<Author[]> => {
  const response = await fetch(`${BASE_URL}/authors?page=1&limit=${limit}`);
  if (!response.ok) {
    throw new Error('Failed to fetch authors');
  }
  return response.json();
};
