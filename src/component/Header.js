import React from "react";
import "./common.css";
import "./Header.css";
import pandaMarketLogo from "../image/pandaMarketLogo.png";

function Header() {
  return (
    <div className="navbar">
      <div>
        <img src={pandaMarketLogo} alt="판다마켓 로고" />
        <a href="../items" className="pandaMarketLogoTxt">
          판다마켓
        </a>
        <>
          <span className="menuPage">자유게시판</span>
          <span className="menuPage">중고마켓</span>
        </>
      </div>
      <button className="loginBtn">로그인</button>
    </div>
  );
}

export default Header;
