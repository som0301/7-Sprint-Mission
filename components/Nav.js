import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/components/Nav.module.css';
import profileImg from '@/assets/images/profileImg.svg';

function getLinkStyle(currentPath, href) {
  const isActive =
    currentPath === href ||
    (currentPath.startsWith('/board') && href === '/boards');
  const color = isActive ? '#3692FF' : '#4B5563';
  return {
    textDecoration: 'none',
    color: color,
  };
}

export default function Nav() {
  const router = useRouter();
  const currentPath = router.pathname;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 743);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={styles.navContainer}>
      <div className={styles.navWrapper}>
        <Link className={styles.logoContainer} href='/'>
          {isMobile ? (
            <Image
              className={styles.logoImg}
              src='/image/pandaMarketLogoMobile.png'
              width={81}
              height={40}
              alt='PandaMarket logo in mobile'
            />
          ) : (
            <Image
              className={styles.logoImg}
              src='/image/pandaMarketLogo.png'
              width={153}
              height={51}
              alt='PandaMarket logo in desktop and tablet'
              priority
            />
          )}
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
      <Image src={profileImg} width={40} height={40} alt='my profile image' />
    </div>
  );
}
