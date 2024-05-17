import { validEmail, validPwd, loginCheckInput, passwordToggle } from './validate.js';

const userEmail = document.querySelector('#email');
const userPwd = document.querySelector('#password');

//이벤트 핸들러 추가
userPwd.nextElementSibling.addEventListener('click', passwordToggle);

const userInputs = [userEmail, userPwd];
const valids = [validEmail, validPwd];

for (let i = 0; i < valids.length; i++) userInputs[i].addEventListener('focusout', valids[i]);
for (let i = 0; i < valids.length; i++) userInputs[i].addEventListener('keyup', valids[i]);

userInputs.forEach(input => input.addEventListener('input', loginCheckInput));
userInputs.forEach(input => input.addEventListener('keyup', loginCheckInput));
