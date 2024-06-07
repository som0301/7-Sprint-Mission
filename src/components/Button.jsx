import styles from '../styles/Button.module.scss';

function Button({ className, children, onClick }) {
  return (
    <button className={`${styles['Button']} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
