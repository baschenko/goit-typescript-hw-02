import s from './ErrorMessage.module.css';
import errorImage from '../error.jpg';
import { FC } from 'react';
import { ErrorMessageProps } from './ErrorMessage.types';

export const ErrorMessage: FC<ErrorMessageProps> = ({ children }) => {
  return (
    <div className={s.container}>
      <img src={errorImage} width="300" alt="button oops" />
      <h2>{children}</h2>
    </div>
  );
};
