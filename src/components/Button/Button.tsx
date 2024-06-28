import React from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  text: string;
  color?: "default" | "disabled";
  size?: "large" | "small";
  onClick?: () => void;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  text,
  color = "primary",
  size = "large",
  onClick,
  disabled = false,
}) => {
  const buttonClasses = [
    styles.button,
    styles[color],
    styles[size],
    disabled ? styles.disabled : "",
  ].join(" ");

  return (
    <button className={buttonClasses} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};
