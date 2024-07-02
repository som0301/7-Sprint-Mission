import { useState } from "react";

const useFormValidation = () => {
  const [error, setError] = useState({
    email: "",
    nickname: "",
    password: "",
    passwordConfirm: "",
  });

  const validateEmail = (email: string) => {
    let emailError = "";
    if (!email) {
      emailError = "이메일을 입력해주세요.";
    } else if (
      !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i.test(email)
    ) {
      emailError = "잘못된 형식의 이메일입니다.";
    }
    return emailError;
  };
  const validateNickname = (nickname: string) => {
    let nicknameError = "";
    if (!nickname) {
      nicknameError = "닉네임을 입력해주세요";
    }
    return nicknameError;
  };
  const validatePassword = (password: string) => {
    let passwordError = "";
    if (!password) {
      passwordError = "비밀번호를 입력해주세요";
    } else if (password.length < 8) {
      passwordError = "비밀번호를 8자 이상 입력해주세요";
    }
    return passwordError;
  };
  const validatePasswordConfirm = (
    password: string,
    passwordConfirm: string
  ) => {
    let passwordConfirmError = "";
    if (password !== passwordConfirm) {
      passwordConfirmError = "비밀번호가 일치하지 않습니다.";
    }
    return passwordConfirmError;
  };
  
};

export default useFormValidation;
