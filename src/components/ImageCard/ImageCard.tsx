import { FC } from 'react';
import s from './ImageCard.module.css';
import { ImageCardProps } from './ImageCard.types';

const ImageCard: FC<ImageCardProps> = ({
  urlImg,
  title,
  color,
  openModal,
  user,
}) => {
  return (
    <div
      className={s.thumb}
      style={{ backgroundColor: color, borderColor: color }}
    >
      <img
        src={urlImg.small}
        alt={title}
        onClick={() => {
          openModal(urlImg.regular, title, user);
        }}
      />
    </div>
  );
};

export default ImageCard;
