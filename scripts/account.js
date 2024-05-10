
import { handlePasswordVisibilityToggle } from './togglePasswordVisibility.js';
import { togglePasswordBtns, form, inputEmail, inputNickname, inputpassword, inputpasswordConf } from './constants.js';
import { validateInput, validateForm } from './authValidation.js';


// 비밀번호 가시성 버튼 클릭 이벤트
togglePasswordBtns?.forEach(button => {
    button.addEventListener('click', handlePasswordVisibilityToggle);
});

// 폼 전체 유효성 검사 이벤트
form && form.addEventListener('submit', validateForm);

// 이메일 유효성 검사 이벤트
inputEmail && inputEmail.addEventListener('blur', (element) => validateInput(element, 'email'));

// 닉네임 유효성 검사 이벤트
inputNickname && inputNickname.addEventListener('blur', (element) => validateInput(element, 'nickname'));

// 패스워드 유효성 검사 이벤트
inputpassword && inputpassword.addEventListener('blur', (element) => validateInput(element, 'password'));

// 패스워드 확인 유효성 검사 이벤트
inputpasswordConf && inputpasswordConf.addEventListener('blur', (element) => validateInput(element, 'passwordConf'));


