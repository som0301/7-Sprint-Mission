import logo from "../../../assets/images/logo/logo.svg";
import google from "../../../assets/images/social/google-logo.png";
import kakao from "../../../assets/images/social/kakao-logo.png";
import PasswordToggle from "../components/PasswordToggle";
import { Button } from "../../../components/Button/Button";
import "../auth.css";

const LoginPage = () => {
  return (
    <div className='auth-container'>
      <div className='auth-logo-box'>
        <a href='/'>
          <img id='auth-logo' className='logo' src={logo} alt='판다마켓 로고' />
        </a>
      </div>

      <form method='post'>
        <div className='input-box'>
          <label htmlFor='email'>이메일</label>
          <input
            type='email'
            id='email'
            name='email'
            placeholder='이메일을 입력해주세요'
          />
          <div id='error-message-email' className='error-message'></div>
        </div>
        <div className='input-box'>
          <label htmlFor='password'>비밀번호</label>
          <PasswordToggle
            id='password'
            name='password'
            placeholder='비밀번호를 입력해주세요'
          />
          <div id='error-message-password' className='error-message'></div>
        </div>

        <div className='auth-button'>
          <Button text='로그인' color='default' width='100%' />
        </div>
      </form>

      <div className='login-social'>
        <h4>간편 로그인하기</h4>
        <div className='login-social-buttons'>
          <a
            href='https://www.google.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src={google} alt='구글-로고' width='42' />
          </a>
          <a
            href='https://www.kakaocorp.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src={kakao} alt='카카오-로고' width='42' />
          </a>
        </div>
      </div>

      <div className='login-footer'>
        판다마켓이 처음이신가요?
        <a href='/signup'>회원가입</a>
      </div>
    </div>
  );
};

export default LoginPage;
