
import { handlePasswordVisibilityToggle } from './togglePasswordVisibility.js';
import { togglePasswordBtns, form, inputEmail, inputNickname, inputpassword, inputpasswordConf } from './constants.js';
import { validateInput } from './authValidation.js';


// 비밀번호 가시성 버튼 클릭 이벤트
togglePasswordBtns.forEach(button => {
    button.addEventListener('click', handlePasswordVisibilityToggle);
});

// 이메일 포커스 아웃시 유효성 검사 이벤트
if ( inputEmail )
    inputEmail.addEventListener('blur', (element) => validateInput(element, 'email'));

// 닉네임 포커스 아웃시 유효성 검사 이벤트
if( inputNickname )
    inputNickname.addEventListener('blur', (element) => validateInput(element, 'nickname'));

// 패스워드 아웃시 유효성 검사 이벤트
if( inputpassword )
    inputpassword.addEventListener('blur', (element) => validateInput(element, 'password'));

// 패스워드 확인 아웃시 유효성 검사 이벤트
if( inputpasswordConf )
    inputpasswordConf.addEventListener('blur', (element) => validateInput(element, 'passwordConf'));


