import { Link } from 'react-router-dom';
import {
  StyledMain,
  StyledSignMain,
} from '/src/components/common/CommonComponents';
import LogoImage from '/src/components/header/LogoImage';
import LoginForm from '/src/components/LoginForm';

// 고정 스타일이라 스타일 객체로..
function LoginPage() {
  return (
    <StyledSignMain>
      <LogoImage type='sign' />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
        }}
      >
        <LoginForm />
        <div>간편로그인</div>
        <div>
          앵커 <Link to={'/signup'}>회원가입</Link>
        </div>
      </div>
    </StyledSignMain>
  );
}

export default LoginPage;
