import { ReactNode, MouseEvent } from 'react';
import cx from 'clsx';
import Link from 'next/link';

import styles from './index.module.scss';

interface Props {
  children: ReactNode;
  className?: string;
  link?: string;
  disabled?: boolean;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  type?: 'submit' | 'reset' | 'button';
  skin?: 'skyBlue' | 'emerald';
}

const Button = ({
  children,
  link,
  className,
  disabled,
  onClick,
  type,
  skin,
}: Props) => {
  if (link) {
    return (
      <Link
        href={link}
        className={cx(styles.commonButton, className, styles[skin ?? ''])}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      className={cx(styles.commonButton, className, styles[skin ?? ''])}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
