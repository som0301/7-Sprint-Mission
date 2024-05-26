import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import logoImg from "./images/logo-home.png";

function NavBar() {
  return (
    <>
      <div className='navbar'>
        <div className='navbar-logo'>
          <Link to='/'>
            <img src={logoImg} alt='logo' />
          </Link>
        </div>
        <ul className='navbar-links'>
          <li>
            <Link to='/'>자유게시판</Link>
          </li>
          <li>
            <Link to='/about'>중고마켓</Link>
          </li>
        </ul>
        <div className='button'>
          <Link to='/signin'>로그인</Link>
        </div>
      </div>
    </>
  );
}

export default NavBar;
