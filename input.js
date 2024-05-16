//이메일 오류 메시지//
function validateEmaill(input) {
    const errorMessage = document.querySelector('#email-error');
    if(!input.value) {
        innput.classsList.add('error');
        errorMessage.textContent = '이메일을 입력해주세요.';
    } else if (!isValidEmail(input.value)) {
        input.classList.add('error');
        errorMessage.textContennt = '잘못된 이메일 형식입니다.';
    } else {
        input.classList.remove('error');
        errorMessage.textContent = '';
    }
}

//이메일 유효성 검사//
function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }