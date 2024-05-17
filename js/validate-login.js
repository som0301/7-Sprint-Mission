const emailInput = document.querySelector(".email-input");
const passwordInput = document.querySelector(".password-input");
const emailErrorMessage = document.querySelector(".email-error-message");
const passwordErrorMessage = document.querySelector(".password-error-message");
const submitButton = document.querySelector(".login_submit");
const signupForm = document.getElementById("signupForm");
const passwordButton=document.querySelector(".password-button");

const isEmailValid = (email) => {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
  const isEmail = emailPattern.test(email);
  return isEmail;
};

const isPasswordValid = (password) => {
  const passwordPattern = /^.{8,}$/;
  const isPassword = passwordPattern.test(password);
  return isPassword;
};

function validateEmail(email) {
  if (email === "") {
    emailInput.className += " email-error";
    emailErrorMessage.classList += " error-message-on";
    emailErrorMessage.textContent = "이메일을 입력해주세요.";
    return;
  }
  if (!isEmailValid(email)) {
    emailInput.className += " email-error";
    emailErrorMessage.classList += " error-message-on";
    emailErrorMessage.textContent = "잘못된 이메일 형식입니다.";
    return;
  }
  emailInput.classList.remove("email-error");
  emailErrorMessage.classList.remove("error-message-on");
  emailErrorMessage.textContent = "";
}

function validatePassword(password) {
  if (password === "") {
    passwordInput.className += " password-error";
    passwordErrorMessage.classList += " error-message-on";
    passwordErrorMessage.textContent = "비밀번호를 입력해주세요.";
    return;
  }
  if (!isPasswordValid(password)) {
    passwordInput.className += " password-error";
    passwordErrorMessage.classList += " error-message-on";
    passwordErrorMessage.textContent = "비밀번호를 8자 이상 입력해주세요.";
    return;
  }
  passwordInput.classList.remove("password-error");
  passwordErrorMessage.classList.remove("error-message-on");
  passwordErrorMessage.textContent = "";
}

function disableSubmitButton() {
  const inputsAreEmpty = !emailInput.value || !passwordInput.value;
  const errorMessagesAreActive =
    emailErrorMessage.textContent || passwordErrorMessage.textContent;

  if (inputsAreEmpty || errorMessagesAreActive) {
    submitButton.disabled = true;
    submitButton.style.cursor = "default";
  } else {
    submitButton.disabled = false;
    submitButton.style.cursor = "pointer";
    submitButton.style.backgroundColor = "#3692FF";
  }
}

emailInput.addEventListener("focusout", () => {
  validateEmail(emailInput.value);
  disableSubmitButton();
});

passwordInput.addEventListener("focusout", () => {
  validatePassword(passwordInput.value);
  disableSubmitButton();
});

signupForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!submitButton.disabled) {
    window.location.href = "index.html";
  }
});

passwordButton.addEventListener("click",()=>{
  if(passwordInput.type==='password'){
    passwordInput.type='text';
    passwordButton.setAttribute('alt','비밀번호 표시');
    passwordButton.style.backgroundImage="url('../image/eye.png')";
  }
  else{
    passwordInput.type='password';
    passwordButton.setAttribute('alt','비밀번호 숨김');
  }
})
