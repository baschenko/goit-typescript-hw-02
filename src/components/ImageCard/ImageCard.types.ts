import { User } from '../App.types';

export interface ImageCardProps {
  urlImg: { small: string; regular: string };
  title: string;
  color: string;
  openModal: (regular: string, title: string, user: User) => void;
  user: User;
}
