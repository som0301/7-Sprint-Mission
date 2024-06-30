import React from "react";
import logo from "../images/logo.svg";
import logoMobile from "../images/logo_m.svg";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./header.css";

const Header = () => {
  const activeStyle = {
    color: "#3692ff",
  };

  const location = useLocation();

  return (
    <header>
      <div className="nav-container">
        <Link to="/">
          <button type="button" className="logo">
            <img
              src={logo}
              alt="판다마켓로고"
              width="153"
              height="51"
              className="logo-pt"
            />
            <img
              src={logoMobile}
              alt="판다마켓로고"
              width="81"
              height="27"
              className="logo-m"
            />
          </button>
        </Link>
        <nav>
          <ul>
            <li>
              <NavLink
                to="/community"
                className="link"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                자유게시판
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/items"
                className="link"
                style={({ isActive }) =>
                  isActive || location.pathname === "/additem"
                    ? activeStyle
                    : undefined
                }
              >
                중고마켓
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <Link to="/login">
          <button type="button" className="login-btn">
            로그인
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
