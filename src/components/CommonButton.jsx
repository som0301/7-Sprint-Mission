import '../styles/CommonButton.css';

export default function CommonButton({ children, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`common-button ${className}`}
      type="button"
    >
      {children}
    </button>
  );
}
