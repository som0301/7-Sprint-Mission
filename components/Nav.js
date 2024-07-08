import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from '@/components/Nav.module.css';

function getLinkStyle(currentPath, href) {
  let color = currentPath === href ? '#3692FF' : '#4B5563';
  return {
    textDecoration: 'none',
    color: color,
  };
}

export default function Nav() {
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <div className={styles.navContainer}>
      <div className={styles.navWrapper}>
        <Link className={styles.logoContainer} href='/items'>
          <img
            className={styles.logoImg}
            src='/image/pandaMarketLogo.svg'
            alt='pandaMarket Logo'
          />
          <span className={styles.brandLogo}>판다마켓</span>
        </Link>
        <ul className={styles.menu}>
          <li className={styles.freeBoard}>
            <Link href='/boards' style={getLinkStyle(currentPath, '/boards')}>
              자유게시판
            </Link>
          </li>
          <li className={styles.secondhandMarket}>
            <Link href='/items' style={getLinkStyle(currentPath, '/items')}>
              중고마켓
            </Link>
          </li>
        </ul>
      </div>
      <img src='/image/profileImg.svg' />
    </div>
  );
}
