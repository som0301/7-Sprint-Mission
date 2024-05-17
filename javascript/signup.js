const emailController = document.querySelector('#email');
const passwordController = document.querySelector('#password');
const nicknameController = document.querySelector('#nickname');
const repeatPwController = document.querySelector('#password-repeat');
const loginButton = document.querySelector('.login-button');
const MIN_PASSWORD_LENGTH = 8;
let [emailAlert, passwordAlert, nicknameAlert, repeatPwAlert] = [null, null, null, null];
let [emailPossibility, passwordPossibility, nicknamePossibility, repeatPwPossibility] = [false, false, false, false];

function emailValidationTest(email) {
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return regex.test(email);
}

function activeLoginButton() {
  if(emailPossibility && passwordPossibility && repeatPwPossibility && nicknamePossibility) {
    loginButton.classList.remove('login-button');
    loginButton.classList.add('login-button-active');
    loginButton.setAttribute('onclick', "location.href='/login.html'");
  }
  else {
    loginButton.classList.add('login-button');
    loginButton.classList.remove('login-button-active');
    loginButton.removeAttribute('onclick', "location.href='/login.html'");
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

function nicknameCheck(e) {
  if(!nicknameAlert && !e.target.value) {
    nicknameAlert = document.createElement('p');
    nicknameAlert.classList.add('error');
    e.target.parentElement.append(nicknameAlert);
    e.target.classList.add('login-input-error');
    nicknameAlert.textContent = '닉네임을 입력해주세요';
    nicknamePossibility = false;
  }
  else if(nicknameAlert && e.target.value){
    e.target.classList.remove('login-input-error');
    nicknameAlert.remove();
    nicknameAlert = null;
    nicknamePossibility = true;
  }
  else if(e.target.value) {
    nicknamePossibility = true;
  }

  activeLoginButton()
}

function repeatPwCheck(e) {
  if(!repeatPwAlert) {
    repeatPwAlert = document.createElement('p');
    repeatPwAlert.classList.add('error');
    e.target.parentElement.append(repeatPwAlert);
    e.target.classList.add('login-input-error');
    repeatPwPossibility = false;
  }
  
  if(passwordController.value !== e.target.value) {
    repeatPwAlert.textContent = '비밀번호가 일치하지 않습니다';
  }
  else {
    e.target.classList.remove('login-input-error');
    repeatPwAlert.remove();
    repeatPwAlert = null;
    repeatPwPossibility = true;
  }

  activeLoginButton()
}

emailController.addEventListener('focusout', emailCheck);
passwordController.addEventListener('focusout', passwordCheck);
nicknameController.addEventListener('focusout', nicknameCheck);
repeatPwController.addEventListener('focusout', repeatPwCheck);