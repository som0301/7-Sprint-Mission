import { emailCheck, pwdCheck } from '../signin/signin.js';

const emailInput = document.querySelector('.email');
const errMessageEmail = document.querySelector('.email-valid');
const nickInput = document.querySelector('.nickname');
const errMessageNick = document.querySelector('.nickname-valid');
const pwdInput = document.querySelector('.password');
const errMessagePwd = document.querySelector('.password-valid');
const repeatInput = document.querySelector('.passcheck');
const errMessageRepeat = document.querySelector('.passCheck-valid');
const signUpBtn = document.querySelector('.signup-Btn');
const passwordEye = document.querySelector('.password-eye');
const passCheckEye = document.querySelector('.passCheck-eye');

let isEmailValid,
  isPwdValid,
  isNickValid,
  isRepeatValid = false;

const updateBtnState = () => {
  signUpBtn.disabled = !(
    isEmailValid &&
    isPwdValid &&
    isNickValid &&
    isRepeatValid
  );
};
// 이메일 유효성 검사 signin.js 에서 import한 함수 재활용
emailInput.addEventListener('input', e => {
  isEmailValid = emailCheck(e);
  updateBtnState();
});
// 비밀번호 유효성 검사
pwdInput.addEventListener('input', e => {
  isPwdValid = pwdCheck(e);
  updateBtnState();
});
// 닉네임 유효성 검사
nickInput.addEventListener('input', e => {
  const { value } = e.target;

  if (!value.trim()) {
    e.target.classList.add('error');
    errMessageNick.textContent = '닉네임을 입력해주세요';
    errMessageNick.style.visibility = 'visible';
    isNickValid = false;
    return;
  }

  e.target.classList.remove('error');
  errMessageNick.style.visibility = 'hidden';
  isNickValid = true;

  updateBtnState();
});

// 비밀번호 중복 검사
repeatInput.addEventListener('input', e => {
  const { value } = e.target;

  if (!value.trim()) {
    e.target.classList.add('error');
    errMessageRepeat.textContent = '확인을 위해 비밀번호를 다시 입력해주세요';
    errMessageRepeat.style.visibility = 'visible';
    isRepeatValid = false;
    return;
  }

  if (!(value.trim() === pwdInput.value.trim())) {
    e.target.classList.add('error');
    errMessageRepeat.textContent = '비밀번호가 일치하지 않습니다..';
    errMessageRepeat.style.visibility = 'visible';
    isRepeatValid = false;
    return;
  }

  e.target.classList.remove('error');
  errMessageRepeat.style.visibility = 'hidden';
  isRepeatValid = true;
  console.log(isRepeatValid);

  updateBtnState();
});
// 비밀번호 눈 관리
passwordEye.addEventListener('click', () => {
  const isPasswordVisible = pwdInput.type === 'text';
  pwdInput.type = isPasswordVisible ? 'password' : 'text';
  passwordEye.src = isPasswordVisible
    ? '../../images/closedEye.png'
    : '../../images/openEye.png';
});

passCheckEye.addEventListener('click', () => {
  const isPasswordVisible = pwdInput.type === 'text';
  pwdInput.type = isPasswordVisible ? 'password' : 'text';
  passCheckEye.src = isPasswordVisible
    ? '../../images/closedEye.png'
    : '../../images/openEye.png';
});
