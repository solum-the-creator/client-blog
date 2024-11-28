import businessIcon from '@public/icons/business-icon.svg';
import economyIcon from '@public/icons/economy-icon.svg';
import startupIcon from '@public/icons/startup-icon.svg';
import technologyIcon from '@public/icons/technology-icon.svg';

import { Category } from '@/types/category';

export const categoriesList: Category[] = [
  {
    title: 'business',
    link: 'business',
    image: businessIcon,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
  },
  {
    title: 'startup',
    link: 'startup',
    image: startupIcon,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
  },
  {
    title: 'economy',
    link: 'economy',
    image: economyIcon,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
  },
  {
    title: 'technology',
    link: 'technology',
    image: technologyIcon,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
  },
];
