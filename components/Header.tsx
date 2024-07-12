import Link from "next/link";
import { useRouter } from "next/router";
import Image from 'next/image';
import PCLogo from "../public/images/logo/panda-market-pandalogo.svg";
import MobileLogo from "../public/images/logo/panda-market-logo.svg";
import style from "../styles/Header.module.css";
import { useEffect, useRef } from "react";
import maskIcon from "../public/images/home/maskicon.png"
import useMediaQuery from "@/utils/useMediaQuery";

function Header() {
    const router = useRouter();
    const marketAction = /^(\/items(\/\d+)?|\/additem)$/.test(router.pathname);
    const mask = useRef<HTMLImageElement | null>(null);
    const loginButton = useRef<HTMLButtonElement | null>(null);
    const MobileScreen = useMediaQuery(`(min-width: 400px) and (max-width: 768px)`);

    useEffect(() => {
        if (router.pathname === `/additem`) {
          if (mask.current) {
            mask.current.style.setProperty("display", "block");
          }
          if (loginButton.current) {
            loginButton.current.style.setProperty("display", "none");
          }
        } else {
          if (mask.current) {
            mask.current.style.setProperty("display", "none");
          }
          if (loginButton.current) {
            loginButton.current.style.setProperty("display", "block");
          }
        }
      }, [router.pathname]);

    return (
        <header className={style.header}>
            <nav className={style.nav}>
                <Link href="/" passHref>
                <Image
                  src={MobileScreen ? MobileLogo : PCLogo}
                  className={style.headerLogo}
                  alt="로고"
                  width={MobileScreen ? 81 : 153}
                  height={MobileScreen ? 40 : 51}
                />
                </Link>
                <button className={style.menuList}>자유게시판</button>
                <Link href="/items" className={ marketAction ? "activemenu" : undefined } passHref>
                    <button className={style.menuList}>중고마켓</button>
                </Link>
            </nav>
            <button className={style.loginButton} ref={loginButton}>로그인</button>
            <Image src={maskIcon} className={style.mask} ref={mask} alt="사용자" width={40} height={40} />
        </header>
    );
}

export default Header;