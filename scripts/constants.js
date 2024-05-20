import {
  isEmailSpellCheck,
  isPasswordLengthCheck,
  isPasswordMatchCheck,
} from "./authValidation.js";

export const togglePasswordBtns =
  document.querySelectorAll(".visibility-button");
export const form = document.querySelector("form");

const inputEmail = document.querySelector("#email");
const inputNickname = document.querySelector("#nickname");
const inputPassword = document.querySelector("#password");
const inputPasswordConf = document.querySelector("#passwordConf");

// inputs element
export const formInputs = {
  email: inputEmail,
  nickname: inputNickname,
  password: inputPassword,
  passwordConf: inputPasswordConf,
};

export const formInputsData = {
  email: {
    element: formInputs.email,
    emptyErrMsg: "이메일을 입력해주세요.",
    invalidErrMsg: "잘못된 이메일 형식입니다.",
    inputStates: false,
    validationFunction: isEmailSpellCheck,
  },
  nickname: {
    element: formInputs.nickname,
    emptyErrMsg: "닉네임을 입력해주세요.",
    invalidErrMsg: "",
    inputStates: false,
  },
  password: {
    element: formInputs.password,
    emptyErrMsg: "비밀번호를 입력해주세요.",
    invalidErrMsg: "비밀번호를 8자 이상 입력해주세요.",
    inputStates: false,
    validationFunction: isPasswordLengthCheck,
  },
  passwordConf: {
    element: formInputs.passwordConf,
    emptyErrMsg: "비밀번호 확인을 입력해주세요.",
    invalidErrMsg: "비밀번호가 일치하지 않습니다.",
    inputStates: false,
    validationFunction: isPasswordMatchCheck,
  },
};

// 각 페이지의 유효성 검사 필드와 리디렉션 URL
export const formValidationConfig = {
  login: {
    fields: ["email", "password"],
    redirect: "../items.html",
  },
  signup: {
    fields: ["email", "nickname", "password", "passwordConf"],
    redirect: "../signin.html",
  },
};
