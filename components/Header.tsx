"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Logo from "/assets/images/logo/logo.svg";
import LogoText from "/assets/images/logo/logo-text.svg";
import Button from "./Button";

const Header = () => {
  const pathname = usePathname();
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

  return (
    <nav className='flex justify-center items-center p-2 border-b border-gray-200'>
      <div className='flex items-center px-[200px] w-full'>
        <Link href='/'>
          <Image
            src={isMobile ? LogoText : Logo}
            alt='logo-img'
            width={!isMobile ? 153 : 80}
          />
        </Link>
        <ul className='flex text-base list-none m-0 p-0 ml-7'>
          <li className='ml-7'>
            <Link
              href='/boards'
              className={
                pathname === "/boards"
                  ? "text-blue-500 font-bold"
                  : "text-gray-600 font-bold"
              }
            >
              자유게시판
            </Link>
          </li>
          <li className='ml-7'>
            <Link
              href='/items'
              className={
                pathname === "/items"
                  ? "text-blue-500 font-bold"
                  : "text-gray-600 font-bold"
              }
            >
              중고마켓
            </Link>
          </li>
        </ul>
        <div className='ml-auto'>
          <Button text='로그인' color='default' size='small' />
        </div>
      </div>
    </nav>
  );
};

export default Header;
