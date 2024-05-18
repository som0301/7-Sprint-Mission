const email = document.getElementById("email");
const emailNullMessage = document.createElement("span");
const emailErrorMessage = document.createElement("span");
const password = document.getElementById("password");
const passwordNullMessage = document.createElement("span");
const passwordErrorMessage = document.createElement("span");
const submitButton = document.querySelector(".btn_large");
const eyesButton = document.querySelector(".btn_visibility");
const eyseImg = document.querySelector(".eyes-img");

// 로그인버튼 비활,활성화 객체
const isValid = {
  email: true,
  password: true,
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
    passwordErrorMessage.remove();
    passwordNullMessage.remove();
    isValid.password = false;
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
  }
}

// 로그인버튼 disabled 함수
function submitButtonDisabledCheck() {
  if (!isValid.email && !isValid.password) {
    submitButton.disabled = false;
    submitButton.classList.add("btn_large_enubled");
  } else {
    submitButton.disabled = true;
    submitButton.classList.remove("btn_large_enubled");
  }
}

// 눈버튼 클릭 이벤트핸들러
function eyesButtonClick() {
  if (password.type === "password") {
    password.type = "text";
    eyseImg.src = "/images/btn_visibility_on_24px.svg";
  } else if (password.type === "text") {
    password.type = "password";
    eyseImg.src = "/images/btn_visibility_off_24px.svg";
  }
}

email.addEventListener("focusout", emailFocusOut);
email.addEventListener("input", emailInput);
password.addEventListener("focusout", passwordFocusOut);
password.addEventListener("input", passwordInput);
eyesButton.addEventListener("click", eyesButtonClick);
