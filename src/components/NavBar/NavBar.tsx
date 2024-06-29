import { Link, useLocation } from "react-router-dom";
import styles from "./NavBar.module.css";
import Logo from "../../assets/images/logo/logo.svg";
import { Button } from "../Button/Button";

function NavBar() {
  const location = useLocation();
  const handleButtonClick = (url: string) => () => {
    window.location.href = url;
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarBox}>
        <Link to='/' className={styles.navbarLogo}>
          <img src={Logo} alt='logo-img' />
        </Link>
        <ul className={styles.navbarLinks}>
          <li>
            <Link
              to='/board'
              className={location.pathname === "/board" ? styles.active : ""}
            >
              자유게시판
            </Link>
          </li>
          <li>
            <Link
              to='/items'
              className={location.pathname === "/items" ? styles.active : ""}
            >
              중고마켓
            </Link>
          </li>
        </ul>
        <div className={styles.buttonLogin}>
          <Button
            text='로그인'
            color='default'
            size='small'
            onClick={handleButtonClick("/login")}
          />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
