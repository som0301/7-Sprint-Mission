function Button({ className, children, onClick }) {
  return (
    <button
      className={`bg-transparent border-none p-0 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
