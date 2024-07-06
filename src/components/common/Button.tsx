import { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';
import '@assets/styles/Color.css';

interface SizeType {
  [key: string]: {
    borderRadius: string;
    padding: string;
    fontSize: string;
  };
}

const SIZES: SizeType = {
  small: { borderRadius: '8', padding: '12px 23px', fontSize: '16' },
  medium: { borderRadius: '40', padding: '12px 71px', fontSize: '18' },
  large: { borderRadius: '40', padding: '16px 124px', fontSize: '20' },
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button({
  className,
  onClick,
  children,
  disabled,
}: ButtonProps) {
  return (
    <button className={className} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}

export const StyledButton = styled.button<{ size: string }>`
  background-color: rgba(0, 0, 0, 0);
  border: none;

  color: #ffffff;
  font-weight: 600;
  font-size: ${({ size }) =>
    SIZES[size].fontSize ?? SIZES['medium'].fontSize}px;
  background-color: ${({ disabled }) =>
    disabled ? 'var(--gray-400)' : 'var(--main-color)'};

  padding: ${({ size }) => SIZES[size].padding ?? SIZES['medium'].padding};
  border-radius: ${({ size }) =>
    SIZES[size].borderRadius ?? SIZES['medium'].borderRadius}px;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
    background-color: #1967d6;
  }

  &:active {
    background-color: #1251aa;
  }

  &:disabled {
    cursor: default;
    background-color: var(--gray-400);
  }

  &.back {
    display: flex;
    gap: 10px;
  }
`;
