document.getElementById('email').addEventListener('focusout', function() {
  const errorMessage = document.getElementById('error-message-email');
  const email = document.getElementById('email').value;

  function validateEmail(email) {
    const regExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regExp.test(email);
  }

  if (email === '') {
    this.classList.add('error');
    errorMessage.textContent = '이메일을 입력해주세요';
    errorMessage.style.display = 'block';
  } else if (!validateEmail(email)) {
    this.classList.add('error');
    errorMessage.textContent = '잘못된 이메일 형식입니다';
    errorMessage.style.display = 'block';
  } else {
    this.classList.remove('error');
    errorMessage.style.display = 'none';
  }
});

document.getElementById('password').addEventListener('focusout', function() {
  const errorMessage = document.getElementById('error-message-password');
  const password = document.getElementById('password').value;

  if (password === '') {
    this.classList.add('error');
    errorMessage.textContent = '비밀번호를 입력해주세요';
    errorMessage.style.display = 'block';
  } else if (password.length < 8) {
    this.classList.add('error');
    errorMessage.textContent = '비밀번호를 8자 이상 입력해주세요';
    errorMessage.style.display = 'block';
  } else {
    this.classList.remove('error');
    errorMessage.style.display = 'none';
  }
});