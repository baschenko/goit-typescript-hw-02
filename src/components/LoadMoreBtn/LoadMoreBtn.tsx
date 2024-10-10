import { FC } from 'react';
import s from './LoadMoreBtn.module.css';
import { LoadMoreBtnProps } from './LoadMoreBtn.types';

export const LoadMoreBtn: FC<LoadMoreBtnProps> = ({
  children,
  onClick,
  disabled,
}) => {
  return (
    <div className={s.container}>
      <button
        type="button"
        onClick={onClick}
        disabled={disabled}
        className={s.btn}
      >
        {children}
      </button>
    </div>
  );
};
