export const togglePasswordBtns =
  document.querySelectorAll(".visibility-button");
export const form = document.querySelector("form");
export const inputEmail = document.querySelector("#email");
export const inputNickname = document.querySelector("#nickname");
export const inputpassword = document.querySelector("#password");
export const inputpasswordConf = document.querySelector("#passwordConf");

// inputs
export const formInputs = [
  { name: "email", element: document.querySelector("#email") },
  { name: "nickname", element: document.querySelector("#nickname") },
  { name: "password", element: document.querySelector("#password") },
  { name: "passwordConf", element: document.querySelector("#passwordConf") },
];

// 각 입력 필드의 유효성 상태
export const inputStates = {
  email: false,
  nickname: false,
  password: false,
  passwordConf: false,
};
