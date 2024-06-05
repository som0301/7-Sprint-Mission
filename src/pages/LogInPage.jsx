import { Helmet } from 'react-helmet';
import AuthContainer from '../components/AuthContainer';
import RoundButton from '../components/RoundButton';
import LabelInput from '../components/LabelInput';
import visibilityOnImg from '../image-resource/btn-visibility-on.svg';
import visibilityOffImg from '../image-resource/btn-visibility-off.svg';

const EMAIL_LABEL = '이메일';
const EMAIL_PLACEHOLDER = '이메일을 입력해주세요';
const PASSWORD_LABEL = '비밀번호';
const PASSWORD_PLACEHOLDER = '비밀번호를 입력해주세요';
const visibility = {
  on: visibilityOnImg,
  off: visibilityOffImg,
};
export default function LogInPage() {
  return (
    <>
      <Helmet>
        <title>로그인</title>
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
            labelHeader={PASSWORD_LABEL}
            placeholder={PASSWORD_PLACEHOLDER}
            type="password"
            name="password"
            visibilityLogo={visibility}
          />
          <RoundButton className="w-full mb-6">로그인</RoundButton>
        </form>
      </AuthContainer>
    </>
  );
}
