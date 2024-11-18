import businessIcon from '@public/icons/business-icon.svg';
import economyIcon from '@public/icons/economy-icon.svg';
import startupIcon from '@public/icons/startup-icon.svg';
import technologyIcon from '@public/icons/technology-icon.svg';

type Category = {
  title: string;
  link: string;
  image: string;
  description: string;
};

export const categoriesList: Category[] = [
  {
    title: 'Business',
    link: 'business',
    image: businessIcon,
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
  },
  {
    title: 'Startup',
    link: 'startup',
    image: economyIcon,
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
  },
  {
    title: 'Economy',
    link: 'economy',
    image: startupIcon,
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
  },
  {
    title: 'Technology',
    link: 'technology',
    image: technologyIcon,
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
  },
];
