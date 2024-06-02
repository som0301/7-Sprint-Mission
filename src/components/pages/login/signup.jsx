import styles from './Login.module.css';
import '../../../css/define.css';
import logo from '../../../images/logos/logo-big.png';
import googleIcon from '../../../images/icons/ic_google.png';
import kakaoIcon from '../../../images/icons/ic_kakaotalk.png';

function SignUp() {
  return (
    <div id={styles['Login-body']}>
      <header>
        <a href="/">
          <img id={styles['login-img']} className={styles.media} src={logo} alt="" />
        </a>
      </header>
      <main>
      <section className={`${styles['container-login']} ${styles.media} ${styles.email}`}>
          <label className={`${styles['input-value-title']} ${styles.media}`} htmlFor="email">
            이메일
          </label>
          <input className={`${styles['login-input']} ${styles.media}`} type="email" id="email" placeholder="이메일을 입력해주세요" />
        </section>
        <section className={`${styles['container-login']} ${styles.media} ${styles.email}`}>
          <label className={`${styles['input-value-title']} ${styles.media}`} htmlFor="email">
            이메일
          </label>
          <input className={`${styles['login-input']} ${styles.media}`} type="text" id="nickname" placeholder="이메일을 입력해주세요" />
        </section>
        <section className={`${styles['container-login']} ${styles.media}`}>
          <label className={`${styles['input-value-title']} ${styles.media}`} htmlFor="password">
            비밀번호
          </label>
          <div className={`${styles['password-button-handler']} ${styles.media}`}>
            <input className={`${styles['login-input']} ${styles.media}`} id="password" type="password" placeholder="비밀번호를 입력해주세요" />
            <button className={styles['is-invisable']}></button>
          </div>
        </section>
        <section className={`${styles['container-login']} ${styles.media}`}>
          <label for="password-repeat" className={`${styles['input-value-title']} ${styles.media}`}>
            비밀번호 확인
          </label>
          <div className={`${styles['password-button-handler']} ${styles.media}`}>
            <input className={`${styles['login-input']} ${styles.media}`} id="password" type="password" placeholder="비밀번호를 입력해주세요" />
            <button className={styles['is-invisable']}></button>
          </div>
        </section>
        <button className={styles['login-button']}>회원가입</button>
        <section className={styles['container-easylogin']}>
          <p>간편 로그인하기</p>
          <div>
            <a href="https://www.google.com/">
              <img id={styles['ic_google']} src={googleIcon} alt="Google" />
            </a>
            <a href="https://www.kakaocorp.com/page/">
              <img id={styles['ic_kakaotalk']} src={kakaoIcon} alt="Kakaotalk" />
            </a>
          </div>
        </section>
      </main>
      <footer>
      <p className={styles['footer-info']}>
          이미 회원이신가요?{' '}
          <a id={styles['sighup-link']} href="/login">
            로그인
          </a>
        </p>
      </footer>
    </div>
  );
}

export default SignUp;
