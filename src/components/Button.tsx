import styles from '../styles/Button.module.scss';
import { ReactNode } from 'react';
import { MouseEvent } from 'react';

interface Props {
  className?: string;
  children?: ReactNode;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

function Button({ className, children, onClick }: Props) {
  return (
    <button className={`${styles['Button']} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
