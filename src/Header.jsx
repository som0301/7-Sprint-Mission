import React from 'react';
import logo from './assets/logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
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
            <li>자유게시판</li>
            <li>
              <Link to="/items" className="link">
                중고마켓
              </Link>
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
