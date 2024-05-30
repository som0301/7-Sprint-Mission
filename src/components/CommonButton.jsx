import { Link } from 'react-router-dom';
import '../styles/CommonButton.css';

export default function CommonButton({
  children,
  onClick,
  onSubmit,
  className,
  path,
  type = 'button',
}) {
  return (
    <Link to={path}>
      <button
        onClick={onClick}
        onSubmit={onSubmit}
        className={`common-button ${className}`}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
}
