import './css/CommonButton.css';

export default function CommonButton({ children, onClick, classNames }) {
  return (
    <button
      onClick={onClick}
      className={`common-button ${classNames}`}
      type="button"
    >
      {children}
    </button>
  );
}
