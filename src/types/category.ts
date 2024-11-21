export type CategoryName = 'technology' | 'business' | 'economy' | 'startup';

export type Category = {
  title: CategoryName;
  link: string;
  image: string;
  description: string;
};
