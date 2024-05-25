import React from 'react';
import logo from './assets/logo.svg';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const activeStyle = {
    color: '#3692ff',
  };

  return (
    <header>
      <div className="nav-container">
        <button type="button" className="logo">
          <Link to="/">
            <img src={logo} alt="판다마켓로고" width="153" height="51" />
          </Link>
        </button>
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
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                중고마켓
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <button type="button" className="login-btn">
          로그인
        </button>
      </div>
    </header>
  );
};

export default Header;
