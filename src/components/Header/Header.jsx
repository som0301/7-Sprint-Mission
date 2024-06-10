import React from "react";
import "./Header.css";
import { pandaMarketLogoImage } from "../../assets/images";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const getLinkStyle = ({ isActive }) => {
    return {
      color: isActive ? "var(--blue)" : undefined,
    };
  };
  return (
    <header className="header-wrapper">
      <nav className="gnb">
        <div className="gnb-left">
          <Link to="/">
            <img
              className="gnb-logo"
              src={pandaMarketLogoImage}
              alt="판다마켓로고 이미지"
            />
          </Link>
          <Link>자유게시판</Link>
          <NavLink to="/items" style={getLinkStyle}>
            중고마켓
          </NavLink>
        </div>
        <NavLink to="/Login" className="gnb-right gnb-login">
          로그인
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
