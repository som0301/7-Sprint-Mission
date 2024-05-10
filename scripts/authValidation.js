
import { inputEmail, inputNickname, inputpassword, inputpasswordConf } from './constants.js';

let isEmailValid = false;
let isNicknameValid = false;
let isPasswordValid = false;
let isPasswordConfirmationValid = false;

// 에러시 클래스 추가와 에러 보더 추가
function handleValidationError(e, isChecked) {

    const element = e.nextElementSibling.classList;

    e.style.border = isChecked ? "1px solid red" : "none";
    isChecked ? element.add("visible-maker") : element.remove("visible-maker");

}

// 공백 제거
function isEmpty(text) {

    return text.trim() === '';
}

// 공백 검사
function isEmptyCheck(text) {
    return text !== null && isEmpty(text.value) ? (handleValidationError(text, true), true) : false;
}

// 이메일 철자 검사
function emailSpellCheck(email) {

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

// 비밀번호 길이 유효성 검사
function validatePasswordLength(password) {

    // 비밀번호 길이가 8자 넘는지 체크
    return password.length >= 8;
}

// 각 항목 별로 이벤트 할당하기
export function validateInput(e, inputType) {
    
    switch(inputType) {
        case 'email':
            isEmailValid = validateEmail();
            break;
        case 'nickname':
            isNicknameValid = validateNickname();
            break;
        case 'password':;
            isPasswordValid = validatePassword();
            break;
        case 'passwordConf':
            isPasswordConfirmationValid = validatePasswordConf();
            break;
        default:
            console.log('잘못된 입력 유형입니다.');
    }

    // 버튼 유효성 검사
    validateChangeButton();
}

// 이메일 유효성 검사
function validateEmail() {

    const eText = inputEmail.nextElementSibling;

    if (!isEmptyCheck(inputEmail)) {
        const isValidEmail = emailSpellCheck(inputEmail.value);
        handleValidationError(inputEmail, !isValidEmail);
        eText.textContent = isValidEmail ? "" : "잘못된 이메일 형식입니다.";

        return isValidEmail;
    }
}

// 닉네임 유효성 검사
function validateNickname() {

    const isEmpty = isEmptyCheck(inputNickname);
    handleValidationError(inputNickname, isEmpty);

    return isEmpty ? false : true;
}

// 비밀번호 유효성 검사
function validatePassword() {

    const eText = inputpassword.nextElementSibling;
    const eValue = inputpassword.value;

    if ( !isEmptyCheck(inputpassword) ) {
        const isValidPassword = validatePasswordLength(eValue);
        handleValidationError(inputpassword, !isValidPassword);
        eText.textContent = isValidPassword ? "" : "비밀번호를 8자 이상 입력해주세요.";

        return isValidPassword;
    }
}

// 비밀번호 확인의 유효성 검사
function validatePasswordConf() {

    const eText = inputpasswordConf.nextElementSibling;

    // 공백이 없다면
    if ( !isEmptyCheck(inputpasswordConf) ) {
        // 위 비밀번호 길이가 8자 이상이면
        if ( validatePasswordLength (inputpassword.value) ) {
            
            // 두 비밀번호 일치 확인
            return checkPasswordMatch(inputpasswordConf);;
        }
        // 비밀번호 길이라 8자 이하라면 재확인요청
        else {
            handleValidationError(inputpasswordConf, true);
            eText.textContent = "조건을 먼저 일치시켜 주세요.";

            return false;
        }
    }
}

// 비밀번호 일치 검사
function checkPasswordMatch(e) {

    const passwordsMatch = inputpassword.value === inputpasswordConf.value;

    handleValidationError(e, !passwordsMatch);
    inputpasswordConf.nextElementSibling.textContent = passwordsMatch ? "" : "비밀번호가 일치하지 않습니다.";

    return passwordsMatch;
}

// 폼 페이지 이동용 유효성 검사
export function validateForm(e) {

    e.preventDefault();

    const formId = e.currentTarget.id;

    // login 페이지 유효성 성공
    if( formId == 'login' && (isEmailValid && isPasswordValid) ) {
        
        const destinationURL = '../items.html';
        window.location.href = destinationURL;
    }
    // signup 페이지 유효성 성공
    else if( formId == 'signup' && (isEmailValid && isPasswordValid && isNicknameValid && isPasswordConfirmationValid) ) {
        const destinationURL = '../signin.html';
        window.location.href = destinationURL;

    }
    // 실패
    else {
        
    }
}

// 버튼 유효성 검사
function validateChangeButton() {

    const formId = document.querySelector('.form');
    const submitButton = document.querySelector('.acc-button');

    // login 페이지 유효성 성공
    if( formId.id == 'login' && (isEmailValid && isPasswordValid) ) {
        
        submitButton.classList.add('valid-button');
    }
    // signup 페이지 유효성 성공
    else if( formId.id == 'signup' && (isEmailValid && isPasswordValid && isNicknameValid && isPasswordConfirmationValid) ) {

        submitButton.classList.add('valid-button');
    }
    // 실패
    else {

    }
}