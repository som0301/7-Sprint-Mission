import { default as warnningObj } from './modules/inputWarnning.js';


const emailInput = document.querySelector('#email');
const pwInput = document.querySelector('#password');
const emailWarnningObj = warnningObj(emailInput);
const pwWarnningObj = warnningObj(pwInput, pwInput.parentElement);

console.dir(pwInput);

emailInput.addEventListener('focusout', (event) => {
  if(event.target.value === '') {
    emailWarnningObj.onWarnning('이메일을 입력해주세요.');
  } else if (!event.target.checkValidity()) {
    emailWarnningObj.onWarnning('잘못된 이메일 형식입니다.');
  } else {
    emailWarnningObj.offWarnning();
  }
});

pwInput.addEventListener('focusout', (event) => {
  if(event.target.value === '') {
    pwWarnningObj.onWarnning('비밀번호를 입력해 주세요.');
  } else if (event.target.value.length < 8) {
    pwWarnningObj.onWarnning('비밀번호를 8자 이상 입력해주세요.');
  } else {
    pwWarnningObj.offWarnning();
  }
});

