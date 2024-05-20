import { validEmail, validNickname, validPwd, validRepeat, checkInput, passwordToggle } from './validate.js';

const inputs = document.querySelectorAll('.input-form input');

//이벤트 추가
inputs[2].nextElementSibling.addEventListener('click', passwordToggle);
inputs[3].nextElementSibling.addEventListener('click', passwordToggle);

const userInputs = [...inputs];
const valids = [validEmail, validNickname, validPwd, validRepeat];

for (let i = 0; i < valids.length; i++) userInputs[i].addEventListener('focusout', valids[i]);
for (let i = 0; i < valids.length; i++) userInputs[i].addEventListener('keyup', valids[i]);
// 스프린트4 : 스프린트미션 피그마에는 'focusout할 때'라고 설명했지만 keyup 이벤트도 추가해야 깔끔하게 동작하는거 같아서 추가
// 맞는 방법인진 모르겠다.

userInputs.forEach(input => input.addEventListener('input', checkInput));
userInputs.forEach(input => input.addEventListener('keyup', checkInput));
