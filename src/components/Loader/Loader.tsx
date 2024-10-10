import { ColorRing } from 'react-loader-spinner';
import s from './Loader.module.css';
import { FC } from 'react';

export const Loader: FC = () => {
  return (
    <div className={s.container}>
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
      />
    </div>
  );
};
