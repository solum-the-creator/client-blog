import { Social } from './social';

export type Author = {
  id: string;
  name: string;
  avatar: string;
  company: string;
  createdAt: string;
  profileDescription: string;
  position: string;
  socials: Social[];
};
