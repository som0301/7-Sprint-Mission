import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  text: string;
  color?: 'default' | 'disabled';
  size?: 'large' | 'small';
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  text,
  color = 'primary',
  size = 'large',
  onClick
}) => {
  const buttonClasses = [
    styles.button,
    styles[color],
    styles[size]
  ].join(' ');

  return (
    <button 
      className={buttonClasses}
      onClick={onClick}
      disabled={color === 'disabled'}
    >
      {text}
    </button>
  );
};