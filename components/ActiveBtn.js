import styles from '@/components/ActiveBtn.module.css';

export default function ActiveBtn({ children, className }) {
  return (
    <button className={`${styles.activeBtn} ${className}`}>{children}</button>
  );
}
