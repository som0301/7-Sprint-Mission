const email = document.getElementById("email");
const emailNullMessage = document.createElement("p");
const emailErrorMessage = document.createElement("p");
const nickname = document.getElementById("nickname");
const nicknameNullMessage = document.createElement("p");
const password = document.getElementById("password");
const passwordNullMessage = document.createElement("p");
const passwordErrorMessage = document.createElement("p");
const passwordCheck = document.getElementById("password-check");
const passwordCheckNullMessage = document.createElement("p");
const passwordCheckErrorMessage = document.createElement("p");

// 이메일 관련 이벤트핸들러
function emailFocusOut(e) {
  let emailValue = e.target.value;

  if (e.target.value === "") {
    email.classList.add("focusout");
    email.after(emailNullMessage);
    emailNullMessage.textContent = "이메일을 입력해주세요";
    emailNullMessage.classList.add("focusout");
    emailErrorMessage.remove();
  } else if (!emailCheck(emailValue) && e.target.value !== "") {
    email.classList.add("focusout");
    email.after(emailErrorMessage);
    emailErrorMessage.textContent = "잘못된 이메일 형식입니다";
    emailErrorMessage.classList.add("focusout");
    emailNullMessage.remove();
  } else {
    email.classList.remove("focusout");
    emailErrorMessage.remove();
    emailNullMessage.remove();
  }
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
  } else {
    nickname.classList.remove("focusout");
    nicknameNullMessage.remove();
  }
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
  } else if (e.target.value.length < 8) {
    password.classList.add("focusout");
    password.after(passwordErrorMessage);
    passwordErrorMessage.textContent = "비밀번호를 8자 이상 입력해주세요";
    passwordErrorMessage.classList.add("focusout");
    passwordNullMessage.remove();
  } else {
    password.classList.remove("focusout");
    passwordErrorMessage.remove();
    passwordNullMessage.remove();
  }
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
  } else if (password.value !== e.target.value) {
    passwordCheck.classList.add("focusout");
    passwordCheck.after(passwordCheckErrorMessage);
    passwordCheckErrorMessage.textContent = "비밀번호가 일치하지 않습니다";
    passwordCheckErrorMessage.classList.add("focusout");
    passwordCheckNullMessage.remove();
  } else {
    passwordCheck.classList.remove("focusout");
    passwordCheckErrorMessage.remove();
    passwordCheckNullMessage.remove();
  }
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
