import Image from "next/image";
import headerLogo from "../public/assets/images/topLogo.png";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles["header-box"]}>
        <Image className={styles["header-logo"]} src={headerLogo} alt="panda" />
        <div className={styles.boards}>
          <span className={styles.board}>자유게시판</span>
          <a className={styles.a} href="/items">
            <span className={styles.board}>중고마켓</span>
          </a>
        </div>
        <button className={styles["small-button"]}>로그인</button>
      </div>
    </header>
  );
}

export default Header;
