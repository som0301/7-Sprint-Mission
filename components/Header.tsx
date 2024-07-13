"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Logo from "/assets/images/logo/logo.svg";
import LogoText from "/assets/images/logo/logo-text.svg";
import Button from "./Button";
import useResize from "@/hooks/useResize";

const Header = () => {
  const pathname = usePathname();
  const windowWidth = useResize();
  const isMobile = windowWidth <= 640;

  return (
    <nav className='flex justify-center items-center py-[10px] px-5 border-b border-gray-200'>
      <div className='flex items-center w-full'>
        <Link href='/'>
          <Image
            src={isMobile ? LogoText : Logo}
            alt='logo-img'
            width={!isMobile ? 153 : 80}
          />
        </Link>
        <ul className='flex list-none m-0 p-0 ml-3 md:ml-7'>
          <li className='ml-3 md:ml-7'>
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
          <li className='ml-3 md:ml-7'>
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
