import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import { getLinkStyle } from "../../utils/Utils";

import logoImg from "../../assets/images/logo/panda-market-logo.svg";

function Header() {
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
              <NavLink to="/usedmarket" style={getLinkStyle}>
                중고마켓
              </NavLink>
            </h3>
          </div>
        </div>
      </div>
      <button className="blue-button button">로그인</button>
    </header>
  );
}

export default Header;
