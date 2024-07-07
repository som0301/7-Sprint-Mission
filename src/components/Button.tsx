import styles from '../styles/Button.module.scss';
import { ReactNode, MouseEvent } from 'react';

interface Props {
  name?: string;
  className?: string;
  children?: ReactNode;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

function Button({ name, className, children, onClick }: Props) {
  return (
    <button
      name={name}
      className={`${styles['Button']} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
