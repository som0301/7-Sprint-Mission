import "./Button.css";

function Button({ className = "small", children = "" }) {
  const classNames = `Button ${className}`;
  return <button className={classNames}>{children}</button>;
}

export default Button;
