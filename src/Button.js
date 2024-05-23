import './css/Button.css';

export default function Button({ children, onClick, classNames = '' }) {
  const btnClassNames = `btn ${classNames}`;
  return (
    <button onClick={onClick} className={btnClassNames} type="button">
      {children}
    </button>
  );
}
