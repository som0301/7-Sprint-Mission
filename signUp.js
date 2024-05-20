let emailInput = document.getElementById('email-input');
let emailErrorMessage = document.querySelector('.error-message.email');
let passwordErrorMessage = document.querySelector('.error-message.password');
let passwordInput = document.getElementById('password-input');
let nicknameInput = document.getElementById('nickname-input');
let nicknameErrorMessage = document.querySelector('.error-message.nickname');
let passwordRepeatInput = document.getElementById('password-repeat-input');
let passwordRepeatErrorMessage = document.querySelector(
    '.error-message.password-repeat',
);
let buttonStatus = document.querySelector('.large-button');

function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

//회원가입 버튼 활성화 함수
function buttonCheck() {
    if (
        emailInput.value.length === 0 ||
        nicknameInput.value.length === 0 ||
        passwordInput.value.length === 0 ||
        passwordRepeatInput.value.length === 0
    ) {
        buttonStatus.disabled = true;
    } else if (
        emailErrorMessage.textContent.length !== 0 ||
        nicknameErrorMessage.textContent.length !== 0 ||
        passwordErrorMessage.textContent.length !== 0 ||
        passwordRepeatErrorMessage.textContent.length !== 0
    ) {
        buttonStatus.disabled = true;
    } else {
        buttonStatus.disabled = false;
    }
}

//이메일 인풋 체크 이벤트
emailInput.addEventListener('focusout', () => {
    if (emailInput.value == '') {
        emailErrorMessage.textContent = '이메일을 입력해 주세요.';
        emailErrorMessage.style.display = 'block';
        emailInput.style.outlineColor = 'red';
    } else if (!isValidEmail(emailInput.value)) {
        emailErrorMessage.textContent = '잘못된 이메일 형식입니다.';
        emailErrorMessage.style.display = 'block';
        emailInput.style.outlineColor = 'red';
    } else {
        emailErrorMessage.textContent = '';
        emailInput.style.outlineColor = '#3692FF';
    }
    buttonCheck();
});

//닉네임 인풋 체크 이벤트
nicknameInput.addEventListener('focusout', () => {
    if (nicknameInput.value == 0) {
        nicknameErrorMessage.textContent = '닉네임을 입력해 주세요.';
        nicknameErrorMessage.style.display = 'block';
        nicknameInput.style.outlineColor = 'red';
    } else {
        nicknameErrorMessage.textContent = '';
        nicknameInput.style.outlineColor = '#3692FF';
    }
    buttonCheck();
});

//비밀번호 인풋 체크 이벤트
passwordInput.addEventListener('focusout', () => {
    if (passwordInput.value == '') {
        passwordErrorMessage.textContent = '비밀번호를 입력해 주세요.';
        passwordErrorMessage.style.display = 'block';
        passwordInput.style.outlineColor = 'red';
    } else if (passwordInput.value.length < 8) {
        passwordErrorMessage.textContent = '비밀번호를 8자 이상 입력해 주세요.';
        passwordErrorMessage.style.display = 'block';
        passwordInput.style.outlineColor = 'red';
    } else if (passwordInput.value !== '') {
        passwordErrorMessage.textContent = '';
        passwordInput.style.outlineColor = '#3692FF';
    }
    buttonCheck();
});

//비밀번호 확인 인풋 체크 이벤트
passwordRepeatInput.addEventListener('focusout', () => {
    if (passwordRepeatInput.value == '') {
        passwordRepeatErrorMessage.textContent = '비밀번호를 입력해 주세요.';
        passwordRepeatErrorMessage.style.display = 'block';
        passwordRepeatInput.style.outlineColor = 'red';
    } else if (passwordInput.value !== passwordRepeatInput.value) {
        passwordRepeatErrorMessage.textContent =
            '비밀번호가 일치하지 않습니다.';
        passwordRepeatErrorMessage.style.display = 'block';
        passwordRepeatInput.style.outlineColor = 'red';
    } else {
        passwordRepeatErrorMessage.textContent = '';
        passwordRepeatInput.style.outlineColor = '#3692FF';
    }
    buttonCheck();
});
