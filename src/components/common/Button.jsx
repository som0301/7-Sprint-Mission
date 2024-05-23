import "/src/styles/Button.css";

function Button({ className, children }) {
  console.log(className);
  return <button className={className}>{children}</button>;
}

export default Button;
