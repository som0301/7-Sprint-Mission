import { NavLink } from "react-router-dom";
import "../styles/TopNavigation.css";

function TopNavigation() {
  function getLinkStyle({ isActive }) {
    return {
      color: isActive ? "var(--blue-color)" : undefined,
    };
  }

  return (
    <div className="top-navigation-wrapper">
      <div className="top-navigation">
        <div className="link-section">
          <a href="/">
            <img className="logo-img" alt="판다마켓 로고" />
          </a>
          <div className="link-list">
            <NavLink to="/board" style={getLinkStyle}>
              자유게시판
            </NavLink>
            <NavLink
              to="/items"
              style={getLinkStyle}
              className="used-market-link"
            >
              중고마켓
            </NavLink>
          </div>
        </div>
        <a href="/login" className="btn-login element-click">
          로그인
        </a>
      </div>
    </div>
  );
}

export default TopNavigation;
