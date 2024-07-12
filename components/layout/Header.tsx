import React from "react";
import Link from "next/link";
import userImage from "@/public/images/icons/ic_user.svg";
import logoImg from "@/public/images/icons/panda-market-logo.svg";

import { useEffect } from "react";
import { useRouter } from "next/router";
import NavLink from "./NavLink";

const Header: React.FC = () => {
  const router = useRouter();
  const isLogin = true;
  const isLoginOrSignupPage =
    router.pathname === "/login" || router.pathname === "/signup";

  useEffect(() => {}, [router]);

  return (
    <>
      {!isLoginOrSignupPage && (
        <header className="nav">
          <div id="logo-menu">
            <Link href="/">
              <img src={logoImg.src} alt="판다마켓 로고" />
            </Link>
            <div className="menu-area">
              <div className="menu">
                <h3>
                  <NavLink href="/freeboard">자유게시판</NavLink>
                </h3>
              </div>
              <div className="menu">
                <h3>
                  <NavLink href="/items">중고마켓</NavLink>
                </h3>
              </div>
            </div>
          </div>
          {!isLogin && (
            <Link href="/login">
              <button className="blue-button button">로그인</button>
            </Link>
          )}
          {isLogin && <img src={userImage.src} alt="유저 로그인 프로필"></img>}
        </header>
      )}
    </>
  );
};

export default Header;
