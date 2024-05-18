import { validEmail, validPwd, checkInput, passwordToggle } from './validate.js';

const inputs = document.querySelectorAll('.input-form input');

//이벤트 핸들러 추가
inputs[1].nextElementSibling.addEventListener('click', passwordToggle);

const userInputs = [...inputs];
const valids = [validEmail, validPwd];

for (let i = 0; i < valids.length; i++) userInputs[i].addEventListener('focusout', valids[i]);
for (let i = 0; i < valids.length; i++) userInputs[i].addEventListener('keyup', valids[i]);

userInputs.forEach(input => input.addEventListener('input', checkInput));
userInputs.forEach(input => input.addEventListener('keyup', checkInput));
