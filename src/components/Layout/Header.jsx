import { useState } from "react";
import "./Header.css";

import logoImg from "../../assets/images/logo/panda-market-logo.svg";

function Header() {
  return (
    <header className="nav">
      <div id="logo-menu">
        <img src={logoImg} alt="로고 이미지" />
        <div className="menu-area">
          <div className="menu">
            <h3>자유게시판</h3>
          </div>
          <div className="menu">
            <h3>중고마켓</h3>
          </div>
        </div>
      </div>
      <button className="blue-button button">로그인</button>
    </header>
  );
}

export default Header;
