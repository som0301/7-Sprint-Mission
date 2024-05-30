import { Link } from 'react-router-dom';
import '../styles/CommonButton.css';

export default function CommonButton({ children, onClick, className, path }) {
  return (
    <Link to={path}>
      <button
        onClick={onClick}
        className={`common-button ${className}`}
        type="button"
      >
        {children}
      </button>
    </Link>
  );
}
