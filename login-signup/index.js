const emailInput = document.querySelector(".email_input");
const emptyEmail = document.querySelector(".empty_email");

function emptyEValue(e) {
  if (e.target.value.length == 0) {
    emailInput.classList.add("error_value");
    emptyEmail.classList.remove("hide");
    e.stopImmediatePropagation();
  } else {
    emailInput.classList.remove("error_value");
    emptyEmail.classList.add("hide");
  }
}

const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
const wrongEmail = document.querySelector(".wrong_email");

function wrongEValue() {
  if (pattern.test(emailInput.value) === false) {
    emailInput.classList.add("error_value");
    wrongEmail.classList.remove("hide");
  } else {
    emailInput.classList.remove("error_value");
    wrongEmail.classList.add("hide");
  }
}

emailInput.addEventListener("focusout", emptyEValue);
emailInput.addEventListener("focusout", wrongEValue);

const passInput = document.querySelector(".password_input");
const emptyPass = document.querySelector(".empty_pass");
const shortPass = document.querySelector(".short_pass");

function emptyPValue(e) {
  if (e.target.value.length == 0) {
    passInput.classList.add("error_value");
    emptyPass.classList.remove("hide");
    e.stopImmediatePropagation();
  } else {
    passInput.classList.remove("error_value");
    emptyPass.classList.add("hide");
  }
}

function tooShortPass(e) {
  if (e.target.value.length < 8) {
    passInput.classList.add("error_value");
    shortPass.classList.remove("hide");
  } else {
    passInput.classList.remove("error_value");
    shortPass.classList.add("hide");
  }
}

passInput.addEventListener("focusout", emptyPValue);
passInput.addEventListener("focusout", tooShortPass);

const inputValue = document.querySelectorAll(".input_value");
const signButton = document.querySelector(".btn_large");

function isContain() {
  let i;
  for (i = 0; i < inputValue.length; i++) {
    inputValue[i].contains("error_value");
  } // 검사 후 error_value 클래스를 가진 요소가 없으면 true를 반환?
}

function activeLoginButton() {
  if (emailInput.value && passInput.value) {
    signButton.setAttribute("disabled", true);
    signButton.classList.add("btn_active");
  } else {
    signButton.setAttribute("disabled", false);
    signButton.classList.remove("btn_active");
  }
}

emailInput.addEventListener("keyup", activeLoginButton);
passInput.addEventListener("keyup", activeLoginButton);

function toggleVisibility() {
  // 클릭 시 이미지 변경
  // 클릭 시 비밀번호 input의 type 변경
}
