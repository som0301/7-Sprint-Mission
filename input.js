const emailInput = document.querySelector('#email')
emailInput.addEventListener('blur', function(e) {
    const errorMessage = document.querySelector('#email-error');
    if(emailInput.value === "") {
        emailInput.classList.add('error');
        errorMessage.textContent = '이메일을 입력해주세요.';
    } else if (!isValidEmail(emailInput.value) && emailInput.value !== "") {
        emailInput.classList.add('error');
        errorMessage.textContent = '';
        errorMessage.textContent = '잘못된 이메일 형식입니다.';
    } else {
        emailInput.classList.remove('error');
        errorMessage.textContent = '';
    }
});


const passwordInput = document.querySelector('#password')
passwordInput.addEventListener('blur', function(e) {
    const pwErrorMessage = document.querySelector('#password-error');
    if(passwordInput.value === "") {
        passwordInput.classList.add('error');
        pwErrorMessage.textContent = '비밀번호를 입력해주세요.';
    } else if (passwordInput.value !== "" && passwordInput.value.length < 8) {
        passwordInput.classList.add('error');
        pwErrorMessage.textContent = '';
        pwErrorMessage.textContent = '비밀번호를 8자 이상 입력해주세요.';
    } else {
        passwordInput.classList.remove('error');
        pwErrorMessage.textContent = '';
    }
});

const nicknameInput = document.querySelector('#nickname')
nicknameInput.addEventListener('blur', function(e) {
    const errorMessage = document.querySelector('#nickname-error');
    if(nicknameInput.value === "") {
        nicknameInput.classList.add('error');
        errorMessage.textContent = '닉네임을 입력해주세요.';
    }
});

// function validateEmail(input) {
//     const errorMessage = document.querySelector('#email-error');
//     if(!input.value) {
//         input.classsList.add('error');
//         errorMessage.textContent = '이메일을 입력해주세요.';
//     } else if (!isValidEmail(input.value)) {
//         input.classList.add('error');
//         errorMessage.textContennt = '잘못된 이메일 형식입니다.';
//     } else {
//         input.classList.remove('error');
//         errorMessage.textContent = '';
//     }
// }

//이메일 유효성 검사//
function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }