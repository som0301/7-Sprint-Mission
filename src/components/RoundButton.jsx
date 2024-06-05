export default function RoundButton({ children }) {
  return (
    <button
      type="button"
      className="flex justify-center items-center relative w-[154px] md:w-[355px] h-12 md:h-14 bg-blue hover:bg-blue-600 disabled:bg-gray-400
      rounded-full text-white-text font-semibold text-base md:text-xl"
    >
      {children}
    </button>
  );
}
