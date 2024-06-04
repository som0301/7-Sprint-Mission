function Button({ children, onClick }) {
  return (
    <button className='bg-transparent border-none p-0' onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
