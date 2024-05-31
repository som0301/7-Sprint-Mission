import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../images/logo.svg";
import user from "../images/user.svg";
import "./AddItemHeader.css";

function getLinkstyle(pathname) {
  return { color: pathname === "/additem" ? "#3692FF" : "#4b5563" };
}

function Header() {
  const location = useLocation();

  return (
    <header>
      {window.innerWidth >= 768 && (
        <div className="header-top">
          <h1>
            <Link to="/" className="link">
              <img src={logo} alt="로고" width={"153px"} height={"51px"} />
            </Link>
            <div className="header-tab">
              <h2>
                <NavLink
                  to="/board"
                  className="link additem"
                >
                  자유게시판
                </NavLink>
              </h2>
              <h2>
                <NavLink
                  to="/items"
                  className="link"
                  style={getLinkstyle(location.pathname)}
                >
                  중고마켓
                </NavLink>
              </h2>
            </div>
          </h1>
          <button className="user">
            <img src={user} alt="사용자" width={"40px"} height={"40px"}/>
          </button>
        </div>
      )}
      {window.innerWidth >= 375 && window.innerWidth <= 767 && (
        <div className="header-top">
          <h1>
            <Link to="/" className="link">
              <div className="title">판다마켓</div>
            </Link>
            <div className="header-tab">
              <h2>
                <NavLink
                  to="/board"
                  className="link additem"
                >
                  자유게시판
                </NavLink>
              </h2>
              <h2>
                <NavLink
                  to="/items"
                  className="link"
                  style={getLinkstyle(location.pathname)}
                >
                  중고마켓
                </NavLink>
              </h2>
            </div>
          </h1>
          <button className="user">
            <img src={user} alt="사용자" width={"40px"} height={"40px"}/>
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
