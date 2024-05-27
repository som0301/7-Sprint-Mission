//email 관련 id 변수 할당
const emptyEmail = document.getElementById('empty-email');
const unvailedEmail = document.getElementById('unvailed-email');
const emailInput = document.getElementById('email');

//password 관련 id 변수 할당
const emptyPassword = document.getElementById('empty-password');
const unvailedPassword = document.getElementById('unvailed-password');
const passwordInput = document.getElementById('password');
const passwordRecheck = document.getElementById('passwordConfirmation');
const passwordMismatchError = document.getElementById('Password-mismatch-error');

//nickname 관련 id 변수 할당
const nickName = document.getElementById('nickname');
const nickNameError = document.getElementById('nickNameError');

//input error style
const inputErrorStyle = document.querySelector('.error-input');

//email 유효성 검사
function emailChecker (emailInput) {
    //email 정규 표현식
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailCheckResult = emailPattern.test(emailInput);
    
    return emailError(emailCheckResult);
}

//password 유효성 검사
function passwordChecker (passwordInput) {
    //password 정규 표현식
    const passwordPattern = /(?=.*\d{1,50})(?=.*[~`!@#$%\^&*()-+=]{1,50})(?=.*[a-zA-Z]{2,50}).{8,50}$/;
    const passCheckResult = passwordPattern.test(passwordInput);
    
    return passwordError(passCheckResult);
}

//에러 표시 함수 - email
function emailError (emailCheckResult) {
    const emailValue = emailInput.value;

    //email 형식이 틀린 경우
    if (!emailCheckResult) {
        unvailedEmail.style.display = "block";
        emailInput.classList.add('error-input');
    } 
    //email input이 빈 경우
    else if (emailValue.trim() = '') {
        emptyEmail.style.display = "block";
        emailInput.classList.add('error-input');
    }
}

//에러 표시 함수 - password
function passwordError (passCheckResult) {
    const passwordValue = passwordInput.value;
    //password 형식이 틀린 경우
    if (!passCheckResult) {
        unvailedPassword.style.display = "block"
        passwordInput.classList.add('error-input');
    } 
    //password input이 빈 경우
    else if (passwordValue.trim() = '') {
        emptyPassword.style.display = "block"
        passwordInput.classList.add('error-input');
    }
}

//에러 표시 함수 - password recheck
function passwordRecheckError (passwordRecheck) {
    const passwordRecheckValue = passwordRecheck.value;
    const passwordValue = passwordInput.value;

    //passwordRecheck와 password가 일치하지 않는 경우
    if (passwordRecheckValue !== passwordValue) {
        passwordMismatchError.style.display
        passwordRecheck.classList.add('error-input');
    }  
}

//에러 표시 함수 - nickname
function nickNameError () {
    const nickNameValue = nickName.value;

    //닉네임 input이 빈 경우
    if (nickNameValue.trim() = '') {
        nickNameError.style.display = "block"
        nickName.classList.add('error-input');
    }
}

//email input 이벤트 등록
emailInput.addEventListener('focusout', emailChecker);

//password input 이벤트 등록
passwordInput.addEventListener('focusout', passwordChecker);

//nickname input 이벤트 등록
nickName.addEventListener('focusout', nickNameError);
