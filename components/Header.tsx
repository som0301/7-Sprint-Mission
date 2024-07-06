import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import Logo from "/public/images/logo/logo.svg";
import LogoText from "/public/images/logo/logo-text.svg";

const Header = () => {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleButtonClick = (url: string) => () => {
    router.push(url);
  };

  const isHome = router.pathname === "/";

  return (
    <nav className='bg-white border-b'>
      <div className='container mx-auto flex justify-between items-center p-4'>
        <Link href='/' legacyBehavior>
          <a className='flex items-center'>
            <Image
              src={isMobile ? LogoText : Logo}
              alt='logo-img'
              width={isMobile ? 153 : 80}
            />
          </a>
        </Link>
        {!isHome && (
          <ul className='flex space-x-4'>
            <li>
              <Link href='/board' legacyBehavior>
                <a
                  className={
                    router.pathname === "/boards" ? "text-blue-500" : ""
                  }
                >
                  자유게시판
                </a>
              </Link>
            </li>
            <li>
              <Link href='/items' legacyBehavior>
                <a
                  className={
                    router.pathname === "/items" ? "text-blue-500" : ""
                  }
                >
                  중고마켓
                </a>
              </Link>
            </li>
          </ul>
        )}
        <div>
          <button
            className='bg-blue-500 text-white px-4 py-2 rounded'
            onClick={handleButtonClick("/login")}
          >
            로그인
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
