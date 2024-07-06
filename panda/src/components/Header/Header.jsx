import styles from './Header.module.css';
import logo from '../../asset/img/PandaLogo.png';

const Header = () => {
  return (
    <div className={styles.HeaderContainer}>
      <img className={styles.logo} src={logo} alt="판다마켓 로고" />
      <ul className={styles.content}>
        <li>자유게시판</li>
        <li>중고마켓</li>
      </ul>
      <button className={styles.loginButton}>로그인</button>
    </div>
  );
};

export default Header;
