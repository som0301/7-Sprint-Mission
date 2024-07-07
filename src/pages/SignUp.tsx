import '../styles/SignUp.scss';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/images/img_logo_m.png';
import visibleOffIcon from '../assets/icons/ic_visible_off.svg';
import googleIcon from '../assets/icons/ic_google.svg';
import kakaotalkIcon from '../assets/icons/ic_kakaotalk.svg';

function SignUp() {
  useEffect(() => {
    const loadScript = async () => {
      const module = await import('../scripts/signup.ts');
      module.initialize();
    };

    loadScript();
  }, []);

  return (
    <div className='signup-page'>
      <header>
        <div className='home-button'>
          <Link to='/'>
            <img src={logoImg} alt='판다마켓 로고' />
          </Link>
        </div>
      </header>
      <main>
        <form id='signup-form' method='post'>
          <label htmlFor='email'>이메일</label>
          <input
            id='email'
            name='email'
            type='email'
            placeholder='이메일을 입력해주세요'
            required
          />
          <label htmlFor='nickname'>닉네임</label>
          <input
            id='nickname'
            name='nickname'
            placeholder='닉네임을 입력해주세요'
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
              className='visibility-icon pw'
              src={visibleOffIcon}
              alt='비밀번호 가리기 아이콘'
            />
          </div>
          <label htmlFor='password-check'>비밀번호 확인</label>
          <div className='password-input'>
            <input
              id='password-check'
              name='password-check'
              type='password'
              placeholder='비밀번호를 다시 한 번 입력해주세요'
              required
            />
            <img
              className='visibility-icon pwcheck'
              src={visibleOffIcon}
              alt='비밀번호 가리기 아이콘'
            />
          </div>
          <button id='signup-btn' className='button-disabled submit' disabled>
            회원가입
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
          이미 회원이신가요?
          <Link to='/login'>로그인</Link>
        </section>
      </footer>
      {/* <script type="module" src="/scripts/signup.js"></script> */}
    </div>
  );
}

export default SignUp;
