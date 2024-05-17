const emailController = document.querySelector('#email');
const passwordController = document.querySelector('#password');
const loginButton = document.querySelector('.login-button');
const MIN_PASSWORD_LENGTH = 8;
let [emailAlert, passwordAlert, emailPossibility, passwordPossibility] = [null, null, false, false];


function emailValidationTest(email) {
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return regex.test(email);
}

function activeLoginButton() {
  if(emailPossibility && passwordPossibility) {
    loginButton.classList.remove('login-button');
    loginButton.classList.add('login-button-active');
    loginButton.setAttribute('onclick', "location.href='/items.html'");
  }
  else {
    loginButton.classList.add('login-button');
    loginButton.classList.remove('login-button-active');
    loginButton.removeAttribute('onclick', "location.href='/items.html'");
  }
}

function emailCheck(e) {
  if(!emailAlert) {
    emailAlert = document.createElement('p');
    emailAlert.classList.add('error');
    e.target.parentElement.append(emailAlert);
    e.target.classList.add('login-input-error');
    emailPossibility = false;
  }

  if(!e.target.value) {
    emailAlert.textContent = '이메일을 입력해주세요';
  }
  else if(!emailValidationTest(e.target.value)) {
    emailAlert.textContent = '잘못된 이메일 형식입니다';
  }
  else if(emailValidationTest(e.target.value)) {
    e.target.classList.remove('login-input-error');
    emailAlert.remove();
    emailAlert = null;
    emailPossibility = true;
  }

  activeLoginButton()
}

function passwordCheck(e) {
  if(!passwordAlert) {
    passwordAlert = document.createElement('p');
    passwordAlert.classList.add('error');
    e.target.parentElement.append(passwordAlert);
    e.target.classList.add('login-input-error');
    passwordPossibility = false;
  }
  
  if(!e.target.value) {
    passwordAlert.textContent = '비밀번호를 입력해주세요';
  }
  else if(e.target.value.length < MIN_PASSWORD_LENGTH) {
    passwordAlert.textContent = '비밀번호를 8자 이상 입력해주세요';
  }
  else if(e.target.value.length >= MIN_PASSWORD_LENGTH) {
    e.target.classList.remove('login-input-error');
    passwordAlert.remove();
    passwordAlert = null;
    passwordPossibility = true;
  }

  activeLoginButton()
}

emailController.addEventListener('focusout', emailCheck);
passwordController.addEventListener('focusout', passwordCheck);