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

// 각 입력 필드의 유효성 상태
export const inputStates = {
  email: false,
  nickname: false,
  password: false,
  passwordConf: false,
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
