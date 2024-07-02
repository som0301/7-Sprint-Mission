import React, { ChangeEvent, FormEvent, useState, useEffect } from "react";
import "./Auth.css";
import logo from "../images/logo2X.png";
import google from "../images/google-logo.png";
import kakao from "../images/kakao-logo.png";
import { Link } from "react-router-dom";
import useFormValidation from "./useFormValidation";

const Signup = () => {
  const {
    errors,
    validateEmail,
    validateNickname,
    validatePassword,
    validatePasswordConfirm,
  } = useFormValidation();
  const [formValues, setFormValues] = useState({
    email: "",
    nickname: "",
    password: "",
    passwordConfirm: "",
  });
  const [isButtonActive, setIsButtonActive] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordConfirmVisible, setPasswordConfirmVisible] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleBlur = (name: string, value: string) => {
    switch (name) {
      case "email":
        validateEmail(value);
        break;
      case "nickname":
        validateNickname(value);
        break;
      case "password":
        validatePassword(value);
        break;
      case "passwordConfirm":
        validatePasswordConfirm(formValues.password, value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    validateEmail(formValues.email);
    validateNickname(formValues.nickname);
    validatePassword(formValues.password);
    validatePasswordConfirm(formValues.password, formValues.passwordConfirm);

    if (
      !errors.email &&
      !errors.nickname &&
      !errors.password &&
      !errors.passwordConfirm
    ) {
      window.location.href = "/items";
    }
  };

  useEffect(() => {
    const allFieldsValid =
      formValues.email &&
      formValues.nickname &&
      formValues.password &&
      formValues.passwordConfirm &&
      !errors.email &&
      !errors.nickname &&
      !errors.password &&
      !errors.passwordConfirm;

    setIsButtonActive(!!allFieldsValid);
  }, [formValues, errors]);

  const togglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };
  
  const togglePasswordConfirm = () => {
    setPasswordConfirmVisible(!passwordConfirmVisible);
  };

  return (
    <div className="login-container">
      <div className="login-logo">
        <Link to="/">
          <img
            className="login-logo-img"
            src={logo}
            alt="판다마켓"
            width="396"
            height="132"
          />
        </Link>
      </div>

      <form onSubmit={handleSubmit} id="signupForm">
        <div className="email-password">
          <div className="input-system">
            <label htmlFor="email">이메일</label>
            <input
              className={`email-input ${errors.email ? "input-error" : ""}`}
              type="text"
              id="email"
              name="email"
              placeholder="이메일을 입력해주세요"
              value={formValues.email}
              onChange={handleInputChange}
              onBlur={(e) => handleBlur(e.target.name, e.target.value)}
            />
            <span className="error-message-on">{errors.email}</span>
          </div>
          <div className="input-system">
            <label htmlFor="nickname">닉네임</label>
            <input
              type="text"
              className={`nickname-input ${
                errors.nickname ? "input-error" : ""
              }`}
              id="nickname"
              name="nickname"
              placeholder="닉네임을 입력해주세요"
              value={formValues.nickname}
              onChange={handleInputChange}
              onBlur={(e) => handleBlur(e.target.name, e.target.value)}
            />
            <span className="error-message-on">{errors.nickname}</span>
          </div>
          <div>
            <div className="input-system">
              <label htmlFor="passwordInput">비밀번호</label>
              <input
                type={passwordVisible ? "text" : "password"}
                className={`password-input ${
                  errors.password ? "input-error" : ""
                }`}
                id="passwordInput"
                name="password"
                placeholder="비밀번호를 입력해주세요"
                onChange={handleInputChange}
                onBlur={(e) => handleBlur(e.target.name, e.target.value)}
              />
              <button
                type="button"
                className={`password-button ${
                  passwordVisible ? "visible" : ""
                }`}
                onClick={togglePassword}
              />
            </div>
            <span className="error-message-on">{errors.password}</span>
          </div>
          <div>
          <div className="input-system">
            <label htmlFor="passwordconfirm">비밀번호 확인</label>
            <input
              type={passwordConfirmVisible ? "text" : "password"}
              className={`password-confirm-input ${
                errors.passwordConfirm ? "input-error" : ""
              }`}
              id="passwordconfirm"
              name="passwordConfirm"
              placeholder="비밀번호를 다시 한 번 입력해주세요"
              value={formValues.passwordConfirm}
              onChange={handleInputChange}
              onBlur={(e) => handleBlur(e.target.name, e.target.value)}
            />
            <button
              type="button"
              className={`password-confirm-button ${
                passwordConfirmVisible ? "visible" : ""
              }`}
              onClick={togglePasswordConfirm}
            />
            </div>
            <span className={errors.passwordConfirm ? "error-message-on" : ""}>
              {errors.passwordConfirm}
            </span>
          </div>

          <button
            type="submit"
            className={`signup_submit ${
              isButtonActive ? "active" : "inactive"
            }`}
            disabled={!isButtonActive}
          >
            회원가입
          </button>
        </div>
      </form>

      <div className="simple-login">
        <div className="simple-login-text">간편 로그인하기</div>
        <div className="login-icon-wrapper">
          <a
            href="https://www.google.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="google"
              src={google}
              alt="구글"
              width="42"
              height="42"
            />
          </a>
          <a
            href="https://www.kakaocorp.com/page/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="kakao"
              src={kakao}
              alt="카카오톡"
              width="42"
              height="42"
            />
          </a>
        </div>
      </div>
      <div className="auth-description">
        <span className="auth-description-text">이미 회원이신가요?</span>
        <Link to="/login" className="login-signup">
          로그인
        </Link>
      </div>
    </div>
  );
};

export default Signup;
