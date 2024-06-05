export default function RoundButton({
  children,
  type = 'button',
  onClick = null,
  onSubmit = null,
  disabled = false,
  className = '',
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      onSubmit={onSubmit}
      disabled={disabled}
      className={`'flex justify-center items-center relative h-12 md:h-14 bg-blue hover:bg-blue-600 disabled:bg-gray-400
      rounded-full text-white-text font-semibold text-base md:text-xl' ${className}`}
    >
      {children}
    </button>
  );
}
