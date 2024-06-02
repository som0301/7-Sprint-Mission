import styles from './css/Login.module.css';

const classLoginButton = `.${styles["login-button"]}`;
const classIsInvisable = `.${styles[`is-invisable
`]}`;

const emailController = document.querySelector('#email');
const passwordController = document.querySelector('#password');
const loginButton = document.querySelector(classLoginButton);
const pwVisibleController = document.querySelector(classIsInvisable);
const MIN_PASSWORD_LENGTH = 8;
let [emailAlert, passwordAlert, emailPossibility, passwordPossibility] = [null, null, false, false];
let isvisiable = false;

export default function LoginModule() {
  function emailValidationTest(email) {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
  }
  
  function activeLoginButton() {
    if (emailPossibility && passwordPossibility) {
      loginButton.classList.remove(classLoginButton);
      loginButton.classList.add(classIsInvisable);
      loginButton.setAttribute('onclick', "location.href='/items.html'");
    } else {
      loginButton.classList.add(styles.loginButton);
      loginButton.classList.remove(styles.loginButtonActive);
      loginButton.removeAttribute('onclick', "location.href='/items.html'");
    }
  }
  
  function emailCheck(e) {
    if (!emailAlert) {
      emailAlert = document.createElement('p');
      emailAlert.classList.add(styles.error);
      e.target.parentElement.append(emailAlert);
      e.target.classList.add(styles.loginInputError);
      emailPossibility = false;
    }
  
    if (!e.target.value) {
      emailAlert.textContent = '이메일을 입력해주세요';
    } else if (!emailValidationTest(e.target.value)) {
      emailAlert.textContent = '잘못된 이메일 형식입니다';
    } else if (emailValidationTest(e.target.value)) {
      e.target.classList.remove(styles.loginInputError);
      emailAlert.remove();
      emailAlert = null;
      emailPossibility = true;
    }
  
    activeLoginButton();
  }
  
  function passwordCheck(e) {
    if (!passwordAlert) {
      passwordAlert = document.createElement('p');
      passwordAlert.classList.add(styles.error);
      e.target.parentElement.append(passwordAlert);
      e.target.classList.add(styles.loginInputError);
      passwordPossibility = false;
    }
  
    if (!e.target.value) {
      passwordAlert.textContent = '비밀번호를 입력해주세요';
    } else if (e.target.value.length < MIN_PASSWORD_LENGTH) {
      passwordAlert.textContent = '비밀번호를 8자 이상 입력해주세요';
    } else if (e.target.value.length >= MIN_PASSWORD_LENGTH) {
      e.target.classList.remove(styles.loginInputError);
      passwordAlert.remove();
      passwordAlert = null;
      passwordPossibility = true;
    }
  
    activeLoginButton();
  }
  
  emailController.addEventListener('focusout', emailCheck);
  passwordController.addEventListener('focusout', passwordCheck);
  pwVisibleController.addEventListener('click', (e) => {
    isvisiable = !isvisiable;
    if (isvisiable) {
      e.target.classList.remove(styles.isInvisable);
      e.target.classList.add(styles.isVisiable);
      passwordController.setAttribute('type', 'text');
    } else {
      e.target.classList.remove(styles.isVisiable);
      e.target.classList.add(styles.isInvisable);
      passwordController.setAttribute('type', 'password');
    }
  });
}
