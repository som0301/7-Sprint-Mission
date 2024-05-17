import * as validate from './validate.js';

const userEmail = document.querySelector('#email');
const userNickname = document.querySelector('#nickname');
const userPwd = document.querySelector('#password');
const userPwdRepeat = document.querySelector('#password-repeat');

//이벤트 추가
userPwd.nextElementSibling.addEventListener('click', validate.passwordToggle);
userPwdRepeat.nextElementSibling.addEventListener('click', validate.passwordToggle);

const userInputs = [userEmail, userNickname, userPwd, userPwdRepeat];
const valids = [validate.validEmail, validate.validNickname, validate.validPwd, validate.validRepeat];

for (let i = 0; i < valids.length; i++) userInputs[i].addEventListener('focusout', valids[i]);
for (let i = 0; i < valids.length; i++) userInputs[i].addEventListener('keyup', valids[i]);
// 스프린트4 : 스프린트미션 피그마에는 'focusout할 때'라고 설명했지만 keyup 이벤트도 추가해야 깔끔하게 동작하는거 같아서 추가
// 맞는 방법인진 모르겠다.

userInputs.forEach(input => input.addEventListener('input', validate.joinCheckInput));
userInputs.forEach(input => input.addEventListener('keyup', validate.joinCheckInput));
