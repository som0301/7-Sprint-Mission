import { Helmet } from 'react-helmet';
import { useState } from 'react';
import AuthContainer from '../components/AuthContainer';
import RoundButton from '../components/RoundButton';
import LabelInput from '../components/LabelInput';

const EMAIL_LABEL = '이메일';
const EMAIL_PLACEHOLDER = '이메일을 입력해주세요';
const PASSWORD_LABEL = '비밀번호';
const PASSWORD_PLACEHOLDER = '비밀번호를 입력해주세요';
const EMAIL_REGEXP = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
const PASSWORD_MINIMUM_LENGTH = 8;

const INITIAL_VALUE = {
  email: '',
  password: '',
};

export default function LogInPage() {
  const [values, setValues] = useState(INITIAL_VALUE);
  const [isInitialized, setIsInitialized] = useState(false);

  const isFormFilled = !!(values.email && values.password);
  const isPasswordValid = values.password.length >= PASSWORD_MINIMUM_LENGTH;
  const isEmailValid = EMAIL_REGEXP.test(values.email);
  const isComplete = isFormFilled && isPasswordValid && isEmailValid;

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
        <title>로그인</title>
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
          <LabelInput
            onChange={handleInputChange}
            value={values.password}
            labelHeader={PASSWORD_LABEL}
            placeholder={PASSWORD_PLACEHOLDER}
            type="password"
            name="password"
          />
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
