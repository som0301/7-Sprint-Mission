const emailInput = document.querySelector(".email-input");
const nicknameInput=document.querySelector(".nickname-input");
const passwordInput = document.querySelector(".password-input");
const passwordConfirmInput=document.querySelector(".password-confirm-input");
const emailErrorMessage = document.querySelector(".email-error-message");
const nicknameErrorMessage=document.querySelector(".nickname-error-message");
const passwordErrorMessage = document.querySelector(".password-error-message");
const passwordConfirmMessage=document.querySelector(".password-confirm-error-message");
const submitButton=document.querySelector(".login-submit");

const isEmailValid = (email) => {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
  const isEmail = emailPattern.test(email);
  return isEmail;
};

const isPasswordValid = (password) => {
  const passwordPattern=/^.{8,}$/;
  const isPassword=passwordPattern.test(password);
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

function validateNickname(nickname){
  if(nickname===""){
    nicknameInput.className+=" nickname-error";
    nicknameErrorMessage.classList += " error-message-on";
    nicknameErrorMessage.textContent = "닉네임을 입력해주세요.";
    return;
  }
  nicknameInput.classList.remove("nickname-error");
  nicknameErrorMessage.classList.remove("error-message-on");
  nicknameErrorMessage.textContent = "";
}

function validatePassword(password) {
  if (password === "") {
    passwordInput.className += " password-error";
    passwordErrorMessage.classList += " error-message-on";
    passwordErrorMessage.textContent = "비밀번호를 입력해주세요.";
    return;
  }
  if(!isPasswordValid(password)){
    passwordInput.className+=" password-error";
    passwordErrorMessage.classList += " error-message-on";
    passwordErrorMessage.textContent = "비밀번호를 8자 이상 입력해주세요.";
    return;
  }
  passwordInput.classList.remove("password-error");
  passwordErrorMessage.classList.remove("error-message-on");
  passwordErrorMessage.textContent = "";
}

function validatePasswordConfirm(password,passwordConfirm){
  if(password!==passwordConfirm){
    passwordConfirmInput.className+=" password-confirm-error";
    passwordConfirmMessage.classList += " error-message-on";
    passwordConfirmMessage.textContent = "비밀번호가 일치하지 않습니다";
    return;
  }
  passwordConfirmInput.classList.remove("password-confirm-error");
  passwordConfirmMessage.classList.remove("error-message-on");
  passwordConfirmMessage.textContent = "";
}

function disableSubmitButton(){
  if(){
    submitButton.disabled=true;
  }
}

emailInput.addEventListener("focusout", () => {
  validateEmail(emailInput.value);
});

passwordInput.addEventListener("focusout", () => {
  validatePassword(passwordInput.value);
});

nicknameInput.addEventListener("focusout",()=>{
  validateNickname(nicknameInput.value);
});

passwordConfirmInput.addEventListener("focusout",()=>{
  validatePasswordConfirm(passwordInput.value,passwordConfirmInput.value);
})
