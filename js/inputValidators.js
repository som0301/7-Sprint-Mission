import * as validation from "./validation.js";

import {
  setAuthInputError,
  toggleAuthInputError,
  removeAuthInputError,
  setNicknameInputError,
  removeNicknameInputError,
  setPasswordInputError,
  togglePasswordInputError,
  removePasswordInputError,
  setVerifyPasswordInputError,
  toggleVerifyPasswordInputError,
  removeVerifyPasswordInputError,
} from "./errorHandlers.js";

export const validateEmailInput = (emailInput, emailErrorMessage) => {
  const email = emailInput.value;
  if (email === "") {
    setAuthInputError(emailInput, emailErrorMessage, "이메일을 입력해주세요.");
    return false;
  }

  if (!validation.isEmailValid(email)) {
    toggleAuthInputError(
      emailInput,
      emailErrorMessage,
      "잘못된 이메일 형식입니다."
    );
    return false;
  }

  removeAuthInputError(emailInput, emailErrorMessage);
  return true;
};

export const validateNicknameInput = (nicknameInput, nicknameErrorMessage) => {
  const nickname = nicknameInput.value;
  if (nickname === "") {
    setNicknameInputError(
      nicknameInput,
      nicknameErrorMessage,
      "닉네임을 입력해주세요."
    );
    return false;
  }

  removeNicknameInputError(nicknameInput, nicknameErrorMessage);
  return true;
};

export const validatePasswordInput = (passwordInput, passwordErrorMessage) => {
  const password = passwordInput.value;
  if (password === "") {
    setPasswordInputError(
      passwordInput,
      passwordErrorMessage,
      "비밀번호를 입력해주세요."
    );
    return false;
  }

  if (!validation.isPasswordValid(password)) {
    togglePasswordInputError(
      passwordInput,
      passwordErrorMessage,
      "비밀번호를 8자 이상 입력해주세요."
    );
    return false;
  }

  removePasswordInputError(passwordInput, passwordErrorMessage);
  return true;
};

export const validateVerifyPasswordInput = (
  passwordInput,
  verifyPasswordInput,
  verifyPasswordErrorMessage
) => {
  const password = passwordInput.value;
  const verifyPassword = verifyPasswordInput.value;
  if (verifyPassword === "") {
    setVerifyPasswordInputError(
      verifyPasswordInput,
      verifyPasswordErrorMessage,
      "비밀번호를 입력해주세요."
    );
    return false;
  }

  if (password !== verifyPassword) {
    toggleVerifyPasswordInputError(
      verifyPasswordInput,
      verifyPasswordErrorMessage,
      "비밀번호가 일치하지 않습니다."
    );
    return false;
  }

  removeVerifyPasswordInputError(
    verifyPasswordInput,
    verifyPasswordErrorMessage
  );
  return true;
};
