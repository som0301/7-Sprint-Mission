import validateEmail from '../../components/EmailValidation.js';

const emailInput = document.querySelector('.email');
const errMessageEmail = document.querySelector('.email-valid');
const pwdInput = document.querySelector('.password');
const errMessagePwd = document.querySelector('.password-valid');
const loginBtn = document.querySelector('.loginBtn');

let isEmailValid,
  isPwdValid = false;

// 이메일 유효성 체크 함수
export const emailCheck = event => {
  const { value } = event.target;

  if (!value.trim()) {
    event.target.classList.add('error');
    errMessageEmail.textContent = '이메일을 입력해주세요';
    isEmailValid = false;
    errMessageEmail.style.visibility = 'visible';
    return isEmailValid;
  }

  if (!validateEmail(value)) {
    event.target.classList.add('error');
    errMessageEmail.textContent = '잘못된 이메일 형식입니다';
    errMessageEmail.style.visibility = 'visible';
    isEmailValid = false;
    return isEmailValid;
  }

  event.target.classList.remove('error');
  errMessageEmail.style.visibility = 'hidden';
  isEmailValid = true;
  updateBtnState();

  return isEmailValid;
};
// 비밀번호 유효성 체크 함수
export const pwdCheck = e => {
  const { value } = e.target;

  if (!value.trim()) {
    e.target.classList.add('error');
    errMessagePwd.textContent = '비밀번호 입력해주세요';
    errMessagePwd.style.visibility = 'visible';
    isPwdValid = false;

    return isPwdValid;
  }

  if (value.length < 8) {
    e.target.classList.add('error');
    errMessagePwd.textContent = '비밀번호를 8자리 이상 입력해주세요';
    errMessagePwd.style.visibility = 'visible';
    isPwdValid = false;

    return isPwdValid;
  }

  e.target.classList.remove('error');
  errMessagePwd.style.visibility = 'hidden';
  isPwdValid = true;
  updateBtnState();

  return isPwdValid;
};

const updateBtnState = () => {
  if (!!loginBtn) loginBtn.disabled = !(isEmailValid && isPwdValid);
};

emailInput.addEventListener('input', emailCheck);
pwdInput.addEventListener('input', pwdCheck);
