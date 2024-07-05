import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Header.scss";
import { getLinkStyle } from "../../utils/Utils";
import userImage from "../../assets/images/icons/ic_user.svg";
import logoImg from "../../assets/images/icons/panda-market-logo.svg";
import { useEffect, useState } from "react";

function Header() {
  const location = useLocation();
  const [isAddItemPage, setIsAddItemPage] = useState<boolean>(false);

  useEffect(() => {
    setIsAddItemPage(location.pathname === "/additem");
  }, [location]);

  return (
    <header className="nav">
      <div id="logo-menu">
        <Link to="/">
          <img src={logoImg} alt="판다마켓 로고" />
        </Link>
        <div className="menu-area">
          <div className="menu">
            <h3>
              <NavLink to="/freeboard" style={getLinkStyle}>
                자유게시판
              </NavLink>
            </h3>
          </div>
          <div className="menu">
            <h3>
              <NavLink
                to="/items"
                style={
                  isAddItemPage
                    ? getLinkStyle({ isActive: true })
                    : getLinkStyle
                }
              >
                중고마켓
              </NavLink>
            </h3>
          </div>
        </div>
      </div>
      {!isAddItemPage && (
        <Link to="/login">
          <button className="blue-button button">로그인</button>
        </Link>
      )}
      {isAddItemPage && <img src={userImage} alt="유저 로그인 프로필"></img>}
    </header>
  );
}

export default Header;
