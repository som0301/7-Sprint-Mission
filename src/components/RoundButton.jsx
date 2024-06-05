export default function RoundButton({ children, className = '' }) {
  return (
    <button
      type="button"
      className={`'flex justify-center items-center relative h-12 md:h-14 bg-blue hover:bg-blue-600 disabled:bg-gray-400
      rounded-full text-white-text font-semibold text-base md:text-xl' ${className}`}
    >
      {children}
    </button>
  );
}
