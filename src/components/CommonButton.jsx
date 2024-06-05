import '../styles/CommonButton.css';

export default function CommonButton({
  children,
  onClick,
  onSubmit,
  className,
  path,
  type = 'button',
  isActive = true,
}) {
  return (
    <button
      disabled={!isActive}
      onClick={onClick}
      onSubmit={onSubmit}
      className="flex justify-center items-center w-[128px] h-12 bg-blue hover:bg-blue-600 disabled:bg-gray-400
       rounded-lg text-white-text font-semibold text-base md:text-xl"
      type={type}
    >
      {children}
    </button>
  );
}
