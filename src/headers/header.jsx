import { Link, NavLink } from "react-router-dom";
import logo from "../images/logo.svg";
import "./header.css";

function getLinkstyle({ isActive }) {
  return { color: isActive ? "#3692FF" : "#4b5563" };
}

function header() {
  return (
    <header>
      <div className="header-top">
    <h1>
      <Link to="/" className="link">
        {window.innerWidth >= 768 ? (
          <img src={logo} alt="로고" width={"153px"} height={"51px"} />
        ) : (
          <div className="title">판다마켓</div>
        )}
      </Link>
      <div className="header-tab">
        <h2>
          <NavLink to="/board" className="link" style={getLinkstyle}>
            자유게시판
          </NavLink>
        </h2>
        <h2>
          <NavLink to="/items" className="link" style={getLinkstyle}>
            중고마켓
          </NavLink>
        </h2>
      </div>
    </h1>
    <button className="login">로그인</button>
  </div>
    </header>
  );
}

export default header;
