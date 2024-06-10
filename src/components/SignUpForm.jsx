import { StyledButton } from '/src/components/common/Button';
import {
  StyledForm,
  StyledSignForm,
  StyledSignMain,
} from './common/CommonComponents';
import { Input } from './Input';

function SignUpForm() {
  return (
    <StyledSignForm>
      <Input name='email' type='email' placeholder='이메일을 입력해주세요'>
        이메일
      </Input>
      <Input name='nickname' type='text' placeholder='닉네임을 입력해주세요'>
        닉네임
      </Input>
      <Input
        name='password'
        type='password'
        placeholder='비밀번호를 입력해주세요'
      >
        비밀번호
      </Input>
      <Input
        name='password-repeat'
        type='password'
        placeholder='비밀번호를 다시 한 번 입력해주세요'
      >
        비밀번호 확인
      </Input>
      <StyledButton type='submit' size='large'>
        로그인
      </StyledButton>
    </StyledSignForm>
  );
}

export default SignUpForm;
