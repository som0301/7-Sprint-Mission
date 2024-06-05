import { Helmet } from 'react-helmet';
import AuthContainer from '../components/AuthContainer';
import RoundButton from '../components/RoundButton';
import LabelInput from '../components/LabelInput';

const EMAIL_LABEL = '이메일';
const EMAIL_PLACEHOLDER = '이메일을 입력해주세요';
const NICKNAME_LABEL = '닉네임';
const NICKNAME_PLACEHOLDER = '닉네임을 입력해주세요';
const PASSWORD_LABEL = '비밀번호';
const PASSWORD_PLACEHOLDER = '비밀번호를 입력해주세요';
const PASSWORD_REPEAT_LABEL = '비밀번호 확인';
const PASSWORD_REPEAT_PLACEHOLDER = '비밀번호를 다시 한 번 입력해주세요';

export default function SignUpPage() {
  return (
    <>
      <Helmet>
        <title>회원가입</title>
      </Helmet>
      <AuthContainer>
        <form className="mx-auto max-w-[640px]">
          <LabelInput
            labelHeader={EMAIL_LABEL}
            placeholder={EMAIL_PLACEHOLDER}
            type="email"
            name="email"
          />
          <LabelInput
            labelHeader={NICKNAME_LABEL}
            placeholder={NICKNAME_PLACEHOLDER}
            type="text"
            name="nickname"
          />
          <LabelInput
            labelHeader={PASSWORD_LABEL}
            placeholder={PASSWORD_PLACEHOLDER}
            type="password"
            name="password"
          />
          <LabelInput
            labelHeader={PASSWORD_REPEAT_LABEL}
            placeholder={PASSWORD_REPEAT_PLACEHOLDER}
            type="password"
            name="password-repeat"
          />
          <RoundButton className="w-full mb-6">로그인</RoundButton>
        </form>
      </AuthContainer>
    </>
  );
}
