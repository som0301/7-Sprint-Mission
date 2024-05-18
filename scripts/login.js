import { InputType, attatchInputWarnMsg } from './modules/warningManager.js';
import * as validationMsg from './modules/validationMsg.js';
import applyVisibilityToggle from './modules/pwVisibility.js'
import registerFormCheck from './modules/formChecking.js'


const emailInput = document.querySelector('#email');
const pwInput = document.querySelector('#password');
const visibilityIcon = document.querySelector('.visibility-icon');
const loginForm = document.querySelector('#login-form');


// 경고 메세지 출력 기능
attatchInputWarnMsg(emailInput, InputType.EMAIL, 'focusout');
attatchInputWarnMsg(pwInput, InputType.PW, 'focusout', pwInput.parentElement);

// 비밀번호 Input 비밀번호 보이기/끄기 기능
applyVisibilityToggle(pwInput, visibilityIcon);

// 폼 체크해서 submit 버튼 활성화 기능
registerFormCheck(loginForm, () => {
  return (
    emailInput.value !== '' &&
    pwInput.value !== '' &&
    validationMsg.getEmailValidateMsg(emailInput.value) === '' &&
    validationMsg.getPwValidateMsg(pwInput.value) === ''
  );
});

