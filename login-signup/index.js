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

const pattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
const wrongEmail = document.querySelector(".wrong_email");

function wrongEValue(e) {
  if (pattern.test(emailInput) === false) {
    emailInput.classList.add("error_value");
    wrongEmail.classList.remove("hide");
  } else {
    emailInput.classList.remove("error_value");
    wrongEmail.classList.add("hide");
  }
}

emailInput.addEventListener("focusout", emptyEValue);
emailInput.addEventListener("focusout", wrongEValue);

const nicknameInput = document.querySelector(".nickname_input");
const emptyNickname = document.querySelector(".empty_nickname");

function emptyNValue(e) {
  if (e.target.value.length == 0) {
    nicknameInput.classList.add("error_value");
    emptyNickname.classList.remove("hide");
    e.stopImmediatePropagation();
  } else {
    nicknameInput.classList.remove("error_value");
    emptyNickname.classList.add("hide");
  }
}

nicknameInput.addEventListener("focusout", emptyNValue);

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

const passCheckInput = document.querySelector(".password_check");
const notMatch = document.querySelector(".not_match");

function isMatch(e) {
  if (e.target.value !== passInput.value) {
    passCheckInput.classList.add("error_value");
    notMatch.classList.remove("hide");
  } else {
    passCheckInput.classList.remove("error_value");
    notMatch.classList.add("hide");
  }
}

passCheckInput.addEventListener("focusout", isMatch);
