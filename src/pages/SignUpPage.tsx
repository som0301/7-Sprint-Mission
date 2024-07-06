import { StyledSignMain } from '@components/common/CommonComponents';
import LogoImage from '@components/header/LogoImage';
import { Link } from 'react-router-dom';
import SignUpForm from '@components/SignUpForm';

function SignUpPage() {
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
        <SignUpForm />
        <div>간편로그인</div>
        <div>
          앵커 <Link to={'/login'}>로그인</Link>
        </div>
      </div>
    </StyledSignMain>
  );
}

export default SignUpPage;
