import { Link, NavLink, useLocation } from "react-router-dom";
import "../styles/common.css";
import styles from "../styles/Nav.module.css";
import logoImg from "../image/pandaMarketLogo.png";

function getLinkStyle({ isActive }, currentPath) {
  let color = isActive ? "#3692FF" : "#4B5563";
  if (currentPath === "/additem") {
    color = "#3692FF";
  }
  return {
    textDecoration: "none",
    color: color,
  };
}

function Header() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className={styles.nav}>
      <div className={styles.container}>
        <Link to="/items">
          <img src={logoImg} alt="pandaMarket Logo" />
        </Link>
        <Link to="/items" className={styles.txtLogo}>
          판다마켓
        </Link>
        <ul className={styles.menu}>
          <li>
            <NavLink to="/boards" style={getLinkStyle}>
              자유게시판
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/items"
              style={(navData) => getLinkStyle(navData, currentPath)}
            >
              중고마켓
            </NavLink>
          </li>
        </ul>
      </div>
      <button className={styles.loginBtn}>로그인</button>
    </div>
  );
}

export default Header;
