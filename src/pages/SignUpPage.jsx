import { Helmet } from 'react-helmet';
import { useState } from 'react';
import AuthContainer from '../components/AuthContainer';
import RoundButton from '../components/RoundButton';
import LabelInput from '../components/LabelInput';
import InputErrorMessage from '../components/InputErrorMessage';

const EMAIL_REGEXP = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
const PASSWORD_MINIMUM_LENGTH = 8;

const EMAIL_LABEL = '이메일';
const NICKNAME_LABEL = '닉네임';
const PASSWORD_LABEL = '비밀번호';
const PASSWORD_REPEAT_LABEL = '비밀번호 확인';
const EMAIL_PLACEHOLDER = '이메일을 입력해주세요';
const NICKNAME_PLACEHOLDER = '닉네임을 입력해주세요';
const PASSWORD_PLACEHOLDER = '비밀번호를 입력해주세요';
const PASSWORD_REPEAT_PLACEHOLDER = '비밀번호를 다시 한 번 입력해주세요';
const ERROR_MESSAGE_EMAIL_NOT_VALID = '잘못된 이메일 형식입니다';
const ERROR_MESSAGE_PASSWORD_NOT_VALID = `비밀번호를 ${PASSWORD_MINIMUM_LENGTH}자 이상 입력해주세요`;
const ERROR_MESSAGE_PASSWORD_NOT_MATCH = '비밀번호가 일치하지 않습니다';

const INITIAL_VALUE = {
  email: '',
  nickname: '',
  password: '',
  passwordRepeat: '',
};

export default function SignUpPage() {
  const [values, setValues] = useState(INITIAL_VALUE);
  const [isInitialized, setIsInitialized] = useState(false);
  console.log(isInitialized);

  const isEmailFilled = !!values.email;
  const isEmailValid = EMAIL_REGEXP.test(values.email);
  const isNicknameFilled = !!values.nickname;
  const isPasswordFilled = !!values.password;
  const isPasswordValid = values.password.length >= PASSWORD_MINIMUM_LENGTH;
  const isPasswordRepeatFilled = !!values.passwordRepeat;
  const isPasswordMatched = values.password === values.passwordRepeat;

  const errorMessageEmail = !isEmailFilled
    ? EMAIL_PLACEHOLDER
    : !isEmailValid
    ? ERROR_MESSAGE_EMAIL_NOT_VALID
    : '';
  const errorMessageNickname = !isNicknameFilled ? NICKNAME_PLACEHOLDER : '';
  const errorMessagePassword = !isPasswordFilled
    ? PASSWORD_PLACEHOLDER
    : !isPasswordValid
    ? ERROR_MESSAGE_PASSWORD_NOT_VALID
    : '';
  const errorMessagePasswordRepeat = !isPasswordRepeatFilled
    ? PASSWORD_PLACEHOLDER
    : !isPasswordMatched
    ? ERROR_MESSAGE_PASSWORD_NOT_MATCH
    : '';

  const isComplete =
    !errorMessageEmail &&
    !errorMessageNickname &&
    !errorMessagePassword &&
    !errorMessagePasswordRepeat;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleFocusout = () => {
    setIsInitialized(true);
  };

  const hanleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Helmet>
        <title>회원가입</title>
      </Helmet>
      <AuthContainer>
        <form onBlur={handleFocusout} className="mx-auto max-w-[640px]">
          <LabelInput
            onChange={handleInputChange}
            value={values.email}
            labelHeader={EMAIL_LABEL}
            placeholder={EMAIL_PLACEHOLDER}
            type="email"
            name="email"
          />
          {isInitialized && errorMessageEmail && (
            <InputErrorMessage>{errorMessageEmail}</InputErrorMessage>
          )}
          <LabelInput
            onChange={handleInputChange}
            value={values.nickname}
            labelHeader={NICKNAME_LABEL}
            placeholder={NICKNAME_PLACEHOLDER}
            type="text"
            name="nickname"
          />
          {isInitialized && errorMessageNickname && (
            <InputErrorMessage>{errorMessageNickname}</InputErrorMessage>
          )}
          <LabelInput
            onChange={handleInputChange}
            value={values.password}
            labelHeader={PASSWORD_LABEL}
            placeholder={PASSWORD_PLACEHOLDER}
            type="password"
            name="password"
          />
          {isInitialized && errorMessagePassword && (
            <InputErrorMessage>{errorMessagePassword}</InputErrorMessage>
          )}
          <LabelInput
            onChange={handleInputChange}
            value={values.passwordRepeat}
            labelHeader={PASSWORD_REPEAT_LABEL}
            placeholder={PASSWORD_REPEAT_PLACEHOLDER}
            type="password"
            name="passwordRepeat"
          />
          {isInitialized && errorMessagePasswordRepeat && (
            <InputErrorMessage>{errorMessagePasswordRepeat}</InputErrorMessage>
          )}
          <RoundButton
            type="submit"
            onSubmit={hanleSubmit}
            disabled={!isComplete}
            className="w-full mb-6"
          >
            로그인
          </RoundButton>
        </form>
      </AuthContainer>
    </>
  );
}
