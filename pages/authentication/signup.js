const email = document.getElementById("email");
const emailNullMessage = document.createElement("span");
const emailErrorMessage = document.createElement("span");
const nickname = document.getElementById("nickname");
const nicknameNullMessage = document.createElement("span");
const password = document.getElementById("password");
const passwordNullMessage = document.createElement("span");
const passwordErrorMessage = document.createElement("span");
const passwordCheck = document.getElementById("password-check");
const passwordCheckNullMessage = document.createElement("span");
const passwordCheckErrorMessage = document.createElement("span");
const submitButton = document.querySelector(".btn_large");
const eyesButton = document.querySelectorAll(".btn_visibility");
const eyseImg = document.querySelectorAll(".eyes-img");

// 회원가입버튼 비활,활성화 객체
const isValid = {
  email: true,
  nickname: true,
  password: true,
  passwordCheck: true,
};

// 이메일 관련 이벤트핸들러
function emailFocusOut(e) {
  let emailValue = e.target.value;

  if (e.target.value === "") {
    email.classList.add("focusout");
    email.after(emailNullMessage);
    emailNullMessage.textContent = "이메일을 입력해주세요";
    emailNullMessage.classList.add("focusout");
    emailErrorMessage.remove();
    isValid.email = true;
  } else if (!emailCheck(emailValue) && e.target.value !== "") {
    email.classList.add("focusout");
    email.after(emailErrorMessage);
    emailErrorMessage.textContent = "잘못된 이메일 형식입니다";
    emailErrorMessage.classList.add("focusout");
    emailNullMessage.remove();
    isValid.email = true;
  } else {
    email.classList.remove("focusout");
    emailErrorMessage.remove();
    emailNullMessage.remove();
    isValid.email = false;
  }
  submitButtonDisabledCheck();
}

function emailInput(e) {
  if (e.target.value.length > 0) {
    if (email.nextElementSibling === emailNullMessage) {
      emailNullMessage.remove();
      email.classList.remove("focusout");
    } else if (email.nextElementSibling === emailErrorMessage) {
      email.classList.add("focusout");
      emailErrorMessage.classList.add("focusout");
    }
  }
}

function emailCheck(email_address) {
  const email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;

  if (!email_regex.test(email_address)) {
    return false;
  } else {
    return true;
  }
}

// 닉네임 관련 이벤트핸들러
function nicknameFocusOut(e) {
  if (e.target.value === "") {
    nickname.classList.add("focusout");
    nickname.after(nicknameNullMessage);
    nicknameNullMessage.textContent = "닉네임을 입력해주세요";
    nicknameNullMessage.classList.add("focusout");
    isValid.nickname = true;
  } else {
    nickname.classList.remove("focusout");
    nicknameNullMessage.remove();
    isValid.nickname = false;
  }
  submitButtonDisabledCheck();
}

function nicknameInput(e) {
  if (e.target.value.length > 0) {
    nicknameNullMessage.remove();
    nickname.classList.remove("focusout");
  }
}

// 패스워드 관련 이벤트핸들러
function passwordFocusOut(e) {
  if (e.target.value === "") {
    password.classList.add("focusout");
    password.after(passwordNullMessage);
    passwordNullMessage.textContent = "비밀번호를 입력해주세요";
    passwordNullMessage.classList.add("focusout");
    passwordErrorMessage.remove();
    isValid.password = true;
  } else if (e.target.value.length < 8) {
    password.classList.add("focusout");
    password.after(passwordErrorMessage);
    passwordErrorMessage.textContent = "비밀번호를 8자 이상 입력해주세요";
    passwordErrorMessage.classList.add("focusout");
    passwordNullMessage.remove();
    isValid.password = true;
  } else {
    password.classList.remove("focusout");
    passwordNullMessage.remove();
    passwordErrorMessage.remove();
  }
  submitButtonDisabledCheck();
}

function passwordInput(e) {
  if (e.target.value.length > 0) {
    if (password.nextElementSibling === passwordNullMessage) {
      passwordNullMessage.remove();
      password.classList.remove("focusout");
    } else if (password.nextElementSibling === passwordErrorMessage) {
      password.classList.add("focusout");
      passwordErrorMessage.classList.add("focusout");
    }

    if (e.target.value.length >= 8) {
      passwordErrorMessage.remove();
      password.classList.remove("focusout");
    }

    if (e.target.value === passwordCheck.value && e.target.value.length >= 8) {
      passwordCheckErrorMessage.remove();
      passwordCheck.classList.remove("focusout");
      isValid.password = false;
      isValid.passwordCheck = false;
      submitButtonDisabledCheck();
    } else if (e.target.value !== passwordCheck.value) {
      isValid.password = true;
      submitButtonDisabledCheck();
    }
  }
}

// 패스워드확인 관련 이벤트핸들러
function passwordCheckFocusOut(e) {
  if (e.target.value === "") {
    passwordCheck.classList.add("focusout");
    passwordCheck.after(passwordCheckNullMessage);
    passwordCheckNullMessage.textContent = "비밀번호를 입력해주세요";
    passwordCheckNullMessage.classList.add("focusout");
    passwordCheckErrorMessage.remove();
    isValid.passwordCheck = true;
  } else {
    passwordCheck.classList.remove("focusout");
    passwordCheckNullMessage.remove();
    passwordCheckErrorMessage.remove();
  }
  submitButtonDisabledCheck();
}

function passwordCheckInput(e) {
  if (e.target.value.length > 0) {
    if (passwordCheck.nextElementSibling === passwordCheckNullMessage) {
      passwordCheckNullMessage.remove();
      passwordCheck.classList.remove("focusout");
    } else if (password.nextElementSibling === passwordCheckErrorMessage) {
      passwordCheck.classList.add("focusout");
      passwordCheckErrorMessage.classList.add("focusout");
    }

    if (e.target.value === password.value && e.target.value.length >= 8) {
      passwordCheckErrorMessage.remove();
      passwordCheck.classList.remove("focusout");
      isValid.password = false;
      isValid.passwordCheck = false;
      submitButtonDisabledCheck();
    } else if (e.target.value !== password.value) {
      passwordCheck.classList.add("focusout");
      passwordCheck.after(passwordCheckErrorMessage);
      passwordCheckErrorMessage.textContent = "비밀번호가 일치하지 않습니다";
      passwordCheckErrorMessage.classList.add("focusout");
      passwordCheckNullMessage.remove();
      isValid.passwordCheck = true;
      submitButtonDisabledCheck();
    }
  }
}

// 회원가입버튼 disabled 함수
function submitButtonDisabledCheck() {
  if (
    !isValid.email &&
    !isValid.password &&
    !isValid.nickname &&
    !isValid.passwordCheck
  ) {
    submitButton.disabled = false;
    submitButton.classList.add("btn_large_enubled");
  } else {
    submitButton.disabled = true;
    submitButton.classList.remove("btn_large_enubled");
  }
}

// 눈버튼 클릭 이벤트핸들러
function eyesButtonClick() {
  const eyesOn = "/images/btn_visibility_on_24px.svg";
  const eyesOff = "/images/btn_visibility_off_24px.svg";

  if (this === eyesButton[0] && password.type === "password") {
    password.type = "text";
    eyseImg[0].src = eyesOn;
  } else if (this === eyesButton[0] && password.type === "text") {
    password.type = "password";
    eyseImg[0].src = eyesOff;
  } else if (this === eyesButton[1] && passwordCheck.type === "password") {
    passwordCheck.type = "text";
    eyseImg[1].src = eyesOn;
  } else if (this === eyesButton[1] && passwordCheck.type === "text") {
    passwordCheck.type = "password";
    eyseImg[1].src = eyesOff;
  }
}

email.addEventListener("focusout", emailFocusOut);
email.addEventListener("input", emailInput);
nickname.addEventListener("focusout", nicknameFocusOut);
nickname.addEventListener("input", nicknameInput);
password.addEventListener("focusout", passwordFocusOut);
password.addEventListener("input", passwordInput);
passwordCheck.addEventListener("focusout", passwordCheckFocusOut);
passwordCheck.addEventListener("input", passwordCheckInput);
eyesButton[0].addEventListener("click", eyesButtonClick);
eyesButton[1].addEventListener("click", eyesButtonClick);
