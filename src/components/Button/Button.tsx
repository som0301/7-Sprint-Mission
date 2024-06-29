import React from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  text: string;
  color?: "default" | "disabled";
  size?: "large" | "small";
  width?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  text,
  color = "default",
  size = "large",
  width = "100%",
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
    <button
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      style={{ width }}
    >
      {text}
    </button>
  );
};
