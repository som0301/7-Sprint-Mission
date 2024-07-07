import '../styles/Login.scss';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/images/img_logo_m.png';
import visibleOffIcon from '../assets/icons/ic_visible_off.svg';
import googleIcon from '../assets/icons/ic_google.svg';
import kakaotalkIcon from '../assets/icons/ic_kakaotalk.svg';

function Login() {
  useEffect(() => {
    const loadScript = async () => {
      const module = await import('../scripts/login.ts');
      module.initialize();
    };

    loadScript();
  }, []);

  return (
    <div className='login-page'>
      <header>
        <div className='home-button'>
          <Link to='/'>
            <img src={logoImg} alt='판다마켓 로고' />
          </Link>
        </div>
      </header>
      <main>
        <form id='login-form' method='post'>
          <label htmlFor='email'>이메일</label>
          <input
            id='email'
            name='email'
            type='email'
            placeholder='이메일을 입력해주세요'
            required
          />
          <label htmlFor='password'>비밀번호</label>
          <div className='password-input'>
            <input
              id='password'
              name='password'
              type='password'
              placeholder='비밀번호를 입력해주세요'
              required
            />
            <img
              className='visibility-icon'
              src={visibleOffIcon}
              alt='비밀번호 가리기 아이콘'
            />
          </div>
          <button id='login-btn' className='button-disabled submit' disabled>
            로그인
          </button>
        </form>
      </main>
      <footer>
        <section className='sns-login'>
          <p>간편 로그인하기</p>
          <div className='icon-group'>
            <Link to='https://www.google.com/'>
              <img src={googleIcon} alt='구글 아이콘' />
            </Link>
            <Link to='https://www.kakaocorp.com/page/'>
              <img src={kakaotalkIcon} alt='카카오톡 아이콘' />
            </Link>
          </div>
        </section>
        <section className='guide-signup'>
          판다마켓이 처음이신가요?
          <Link to='/signup'>회원가입</Link>
        </section>
      </footer>
      {/* <script type='module' src='/scripts/login.js'></script> */}
    </div>
  );
}

export default Login;
