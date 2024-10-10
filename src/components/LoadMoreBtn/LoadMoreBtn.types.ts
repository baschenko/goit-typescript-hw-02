import { ReactNode } from 'react';

export interface LoadMoreBtnProps {
  children: ReactNode;
  onClick: () => void;
  disabled: boolean;
}
