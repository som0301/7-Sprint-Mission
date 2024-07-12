import { ReactNode } from 'react';
import cx from 'clsx';
import Link from 'next/link';

import styles from './index.module.scss';

interface Props {
  children: ReactNode;
  className?: string;
  link?: string;
  disabled?: boolean;
  onClick?: () => void;
  type?: 'submit' | 'reset' | 'button';
}

const Button = ({
  type,
  link,
  children,
  className,
  disabled,
  onClick,
}: Props) => {
  if (link) {
    return (
      <Link href={link} className={cx(styles.commonButton, className)}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      className={cx(styles.commonButton, className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
