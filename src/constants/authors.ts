import authorImg from '@public/author.jpg';

import { Social } from '@/types/social';

export type Author = {
  name: string;
  position: string;
  imageSrc: string;
  socials: Social[];
};

export const authors: Author[] = [
  {
    name: 'John Doe',
    position: 'CEO',
    imageSrc: authorImg.src,
    socials: [
      { name: 'twitter', link: 'https://twitter.com' },
      { name: 'linkedin', link: 'https://linkedin.com' },
      { name: 'facebook', link: 'https://facebook.com' },
      { name: 'instagram', link: 'https://instagram.com' },
    ],
  },
  {
    name: 'Jane Doe',
    position: 'CTO',
    imageSrc: authorImg.src,
    socials: [
      { name: 'twitter', link: 'https://twitter.com' },
      { name: 'linkedin', link: 'https://linkedin.com' },
      { name: 'facebook', link: 'https://facebook.com' },
      { name: 'instagram', link: 'https://instagram.com' },
    ],
  },
  {
    name: 'Floyd Miles',
    position: 'Content Writer @Company',
    imageSrc: authorImg.src,
    socials: [
      { name: 'twitter', link: 'https://twitter.com' },
      { name: 'linkedin', link: 'https://linkedin.com' },
      { name: 'facebook', link: 'https://facebook.com' },
    ],
  },
  {
    name: 'Leslie Alexander',
    position: 'Content Writer @Company',
    imageSrc: authorImg.src,
    socials: [
      { name: 'twitter', link: 'https://twitter.com' },
      { name: 'linkedin', link: 'https://linkedin.com' },
      { name: 'facebook', link: 'https://facebook.com' },
    ],
  },
];
