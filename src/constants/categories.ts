import businessIcon from '@public/icons/business-icon.svg';
import economyIcon from '@public/icons/economy-icon.svg';
import startupIcon from '@public/icons/startup-icon.svg';
import technologyIcon from '@public/icons/technology-icon.svg';

import { CategoryName } from '@/types/post';

export type Category = {
  title: CategoryName;
  link: string;
  image: string;
  description: string;
};

export const categoriesList: Category[] = [
  {
    title: 'business',
    link: 'business',
    image: businessIcon,
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
  },
  {
    title: 'business',
    link: 'startup',
    image: economyIcon,
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
  },
  {
    title: 'economy',
    link: 'economy',
    image: startupIcon,
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
  },
  {
    title: 'technology',
    link: 'technology',
    image: technologyIcon,
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
  },
];
