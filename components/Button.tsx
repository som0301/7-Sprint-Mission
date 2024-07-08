import React from "react";
import styles from "./Button.module.css";
import { ComponentPropsWithoutRef } from "react";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  text: string;
  color?: "default" | "disabled";
  size?: "large" | "small";
  width?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  color = "default",
  size = "large",
  width,
  onClick,
  disabled = false,
  ...props
}) => {
  const buttonClasses = [styles.button, styles[color], styles[size]].join(" ");

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      style={{ width }}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
