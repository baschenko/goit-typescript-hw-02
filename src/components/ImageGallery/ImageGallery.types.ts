import { Image, User } from '../App.types';

export interface ImageGalleryProps {
  photos: Image[];
  openModal: (regular: string, title: string, user: User) => void;
}
