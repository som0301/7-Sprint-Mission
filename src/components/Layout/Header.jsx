import { Link, NavLink, useLocation } from "react-router-dom";
import "./Header.css";
import { getLinkStyle } from "../../utils/Utils";
import userImage from "../../assets/images/icons/ic_user.svg";

import logoImg from "../../assets/images/logo/panda-market-logo.svg";
import { useEffect, useState } from "react";

function Header() {
  const location = useLocation();
  const [isAddItemPage, setIsAddItemPage] = useState(false);

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
        <button className="blue-button button">
          <Link to="/login">로그인</Link>
        </button>
      )}
      {isAddItemPage && <img src={userImage} alt="유저 로그인 프로필"></img>}
    </header>
  );
}

export default Header;
