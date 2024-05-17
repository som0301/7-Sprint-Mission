import * as validationMsg from './modules/validationMsg.js';
import { InputType, attatchInputWarnMsg } from './modules/warningManager.js';
import applyVisibilityToggle from './modules/pwVisibility.js'
import registerFormCheck from './modules/formChecking.js'


const emailInput = document.querySelector('#email');
const nicknameInput = document.querySelector('#nickname');
const pwInput = document.querySelector('#password');
const pwCheckInput = document.querySelector('#password-check');
const pWvisibilityIcon = document.querySelector('.visibility-icon.pw');
const pwCheckvisibilityIcon = document.querySelector('.visibility-icon.pwcheck');
const signupForm = document.querySelector('#signup-form');


// 경고 메세지 출력 기능
attatchInputWarnMsg(emailInput, InputType.EMAIL, 'focusout');
attatchInputWarnMsg(nicknameInput, InputType.NICKNAME, 'focusout');
attatchInputWarnMsg(pwInput, InputType.PW, 'focusout', pwInput.parentElement);
attatchInputWarnMsg(pwCheckInput, InputType.PW_CHECK, 'focusout', 
  pwCheckInput.parentElement, () => pwInput.value === pwCheckInput.value);

// 비밀번호 Input 비밀번호 보이기/끄기 기능
applyVisibilityToggle(pwInput, pWvisibilityIcon);
applyVisibilityToggle(pwCheckInput, pwCheckvisibilityIcon);

// 폼 체크해서 submit 버튼 활성화 기능
registerFormCheck(signupForm, () => {
    return (
    emailInput.value !== '' &&
    nicknameInput.value !== '' &&
    pwInput.value !== '' &&
    pwCheckInput.value !== '' &&
    validationMsg.getEmailValidateMsg(emailInput.value) === '' &&
    validationMsg.getNicknameValidateMsg(nicknameInput.value) === '' &&
    validationMsg.getPwValidateMsg(pwInput.value) === '' &&
    validationMsg.getPwCheckValidateMsg(pwCheckInput.value) === '' &&
    pwInput.value === pwCheckInput.value
    ) ? true : false;
});
