import { Link } from 'react-router-dom';
import { FlexWrapper } from '../components/common/CommonComponents';
import {
  StyledMain,
  StyledSignMain,
} from '/src/components/common/CommonComponents';
import LogoImage from '/src/components/header/LogoImage';
import LoginForm from '/src/components/LoginForm';

function LoginPage() {
  return (
    <StyledSignMain>
      <LogoImage type='sign' />
      <FlexWrapper $col $gap='24'>
        <LoginForm />
        <div>간편로그인</div>
        <div>
          앵커 <Link to={'/signup'}>회원가입</Link>
        </div>
      </FlexWrapper>
    </StyledSignMain>
  );
}

export default LoginPage;
