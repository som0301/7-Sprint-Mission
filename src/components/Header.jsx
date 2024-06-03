import { Link, NavLink } from "react-router-dom";
import logoImage from "../images/logo/logo.svg";
import mobileLogoImage from "../images/logo/mobile-logo.svg";
import "../styles/Header.css";

function Header() {
  return (
    <header className="header-container">
      <h1>
        <Link to="/">
          <picture>
            <source media="(max-width: 767px)" srcSet={mobileLogoImage} />
            <img className="header-logo" src={logoImage} alt="판다마켓" />
          </picture>
        </Link>
      </h1>
      <div className="header-list-wrapper">
        <NavLink to="/comunity" className="header-list">
          자유게시판
        </NavLink>
        <NavLink to="/items" className="header-list header-list-market">
          중고마켓
        </NavLink>
      </div>
      <NavLink to="/login" className="header-login-button">
        로그인
      </NavLink>
    </header>
  );
}

export default Header;
