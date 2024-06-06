import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";
import Logo from "../images/logo-home.png";

function NavBar() {
  return (
    <>
      <div className='navbar'>
        <div className='navbar-box'>
          <Link to='/' className='navbar-logo'>
            <img src={Logo} alt='logo' width='153px' />
          </Link>
        </div>
        <ul className='navbar-links'>
          <li>
            <Link to='/'>자유게시판</Link>
          </li>
          <li>
            <Link
              to='/items'
              style={{
                color:
                  useLocation().pathname === "/items" ? "#3692ff" : "#4b5563",
              }}
            >
              중고마켓
            </Link>
          </li>
        </ul>
        <div className='button-login'>
          <Link to='/signin'>로그인</Link>
        </div>
      </div>
    </>
  );
}

export default NavBar;
