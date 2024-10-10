import { FC } from 'react';
import ImageCard from '../ImageCard/ImageCard';
import s from './ImageGallery.module.css';
import { ImageGalleryProps } from './ImageGallery.types';

export const ImageGallery: FC<ImageGalleryProps> = ({ photos, openModal }) => {
  return (
    <div>
      <ul className={s.list}>
        {/* Набір елементів списку із зображеннями */}
        {photos.map(({ id, urls, alt_description, color, user }) => {
          return (
            <li key={id} className={s.item}>
              <ImageCard
                urlImg={urls}
                title={alt_description}
                color={color}
                user={user}
                openModal={openModal}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
