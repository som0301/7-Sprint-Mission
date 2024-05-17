//이메일 입력 확인&이메일 형식 확인//
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

//비밀번호 입력 학인 & 비밀번호 8자이상 확인//
const passwordInput = document.querySelector('#password');
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

//비밀번호 일치하는지 확인//
function passwordMatch(password, confirmpassword){
    return password === confirmpassword;
};
//비밀번호 확인 변수 할당//
const confirmpasswordInput = document.querySelector('#password-check');
const confirmpwErrorMessage = document.querySelector('#password-confirmation-error');

confirmpasswordInput.addEventListener('blur', function(e){ 
    if (!passwordMatch(passwordInput.value, confirmpasswordInput.value)){
        confirmpasswordInput.classList.add('error');
        confirmpwErrorMessage.textContent = '비밀번호가 일치하지 않습니다.';
    } else{
        confirmpasswordInput.classList.remove('error');
        confirmpwErrorMessage.textContent = '';
    };
});


//닉네임 입력 여부 확인//
const nicknameInput = document.querySelector('#nickname')
nicknameInput.addEventListener('blur', function(e) {
    const nicknameErrorMessage = document.querySelector('#nickname-error');
    if(nicknameInput.value === "") {
        nicknameInput.classList.add('error');
        nicknameErrorMessage.textContent = '닉네임을 입력해주세요.';
    } else{
        nicknameInput.classList.remove('error');
        nicknameErrorMessage.textContent = '';
    }
});


//이메일 유효성 검사 함수//
function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

