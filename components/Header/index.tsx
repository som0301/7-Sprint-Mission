import styles from './index.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import cx from 'clsx';
import { IconUserProfile, ImageLogoSmall, ImageLogoLetter } from '@/public';
import ResponsiveImage from '@/components/ResponsiveImage';
import { useRouter } from 'next/router';
import Button from '@/components/Button';

const Header = () => {
  const { route } = useRouter();
  return (
    <div className={styles.topNavigationWrapper}>
      <div className={styles.topNavigation}>
        <div className={styles.linkSection}>
          <Link href='/'>
            <ResponsiveImage
              desktopImg={{
                width: 154,
                height: 51,
                src: ImageLogoSmall,
              }}
              tabletImg={{
                width: 154,
                height: 51,
                src: ImageLogoSmall,
              }}
              mobileImg={{
                width: 109,
                height: 51,
                src: ImageLogoLetter,
              }}
              alt='판다마켓 로고'
              unoptimized={false}
            />
          </Link>
          <div className={styles.linkList}>
            <Button
              link='/board'
              className={cx(route === '/board' && styles.pageFocus)}
            >
              자유게시판
            </Button>
            <Button
              link='/items'
              className={cx(route === '/items' && styles.pageFocus)}
            >
              중고마켓
            </Button>
          </div>
        </div>
        <button className={styles.btnProfile}>
          <Image src={IconUserProfile} alt='기본 사용자 프로필' unoptimized />
        </button>
      </div>
    </div>
  );
};

export default Header;
