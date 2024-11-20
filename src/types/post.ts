export type PostContent =
  | { type: 'heading'; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'list'; items: string[] };

export type CategoryName = 'technology' | 'business' | 'economy' | 'startup';

export type TagName =
  | 'technology'
  | 'life'
  | 'startup'
  | 'business'
  | 'experience'
  | 'economy'
  | 'marketing'
  | 'innovation'
  | 'future';

export type Post = {
  id: string;
  title: string;
  description: string;
  category: CategoryName;
  tags: TagName[];
  authorId: string;
  createdAt: string;
  imageSrc: string;
};

export type PostWithContent = Post & { content: PostContent[] };
