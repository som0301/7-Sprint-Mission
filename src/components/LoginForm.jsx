import { StyledButton } from '/src/components/common/Button';
import {
  StyledForm,
  StyledSignForm,
  StyledSignMain,
} from './common/CommonComponents';
import { Input } from './Input';

function LoginForm() {
  return (
    <StyledSignForm>
      <Input name='email' type='email' placeholder='이메일을 입력해주세요'>
        이메일
      </Input>
      <Input
        name='password'
        type='password'
        placeholder='비밀번호를 입력해주세요'
      >
        비밀번호
      </Input>
      <StyledButton type='submit' size='large'>
        로그인
      </StyledButton>
    </StyledSignForm>
  );
}

export default LoginForm;
