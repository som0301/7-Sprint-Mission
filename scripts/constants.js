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

export const formInputsData = {
  email: {
    element: inputEmail,
    emptyErrMsg: "이메일을 입력해주세요.",
    invalidErrMsg: "잘못된 이메일 형식입니다.",
    inputStates: false,
    validationFunction: isEmailSpellCheck,
  },
  nickname: {
    element: inputNickname,
    emptyErrMsg: "닉네임을 입력해주세요.",
    invalidErrMsg: "",
    inputStates: false,
  },
  password: {
    element: inputPassword,
    emptyErrMsg: "비밀번호를 입력해주세요.",
    invalidErrMsg: "비밀번호를 8자 이상 입력해주세요.",
    inputStates: false,
    validationFunction: isPasswordLengthCheck,
  },
  passwordConf: {
    element: inputPasswordConf,
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
