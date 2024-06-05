export default function InputErrorMessage({ children }) {
  return (
    <div className="mt-2 mb-6 ml-4 font-semibold text-base text-red-700">
      {children}
    </div>
  );
}
