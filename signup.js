function validateEmail(email) {
  const regExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return regExp.test(email);
}

function validatePassword(password) {
  return password.length >= 8;
}

function btnActive() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const nickname = document.getElementById('nickname').value;
  const passwordConfirm = document.getElementById('password-confirm').value;
  const button = document.getElementById('button-auth');

  const isEmailVaild = validateEmail(email);
  const isPasswordVaild = validatePassword(password);
  const isNicknameVaild = nickname !== '';
  const isPasswordConfirmVaild = password === passwordConfirm;

  if ( isEmailVaild && isPasswordVaild && isNicknameVaild && isPasswordConfirmVaild) {
    button.classList.remove('disabled');
    button.disabled = false;
  } else {
    button.classList.add('disabled');
    button.disabled = true;
  }
}

document.getElementById('email').addEventListener('focusout', function() {
  const errorMessage = document.getElementById('error-message-email');
  const email = document.getElementById('email').value;

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
  btnActive();
});

document.getElementById('nickname').addEventListener('focusout', function() {
  const errorMessage = document.getElementById('error-message-nickname');
  const nickname = document.getElementById('nickname').value;

  if (nickname === '') {
    this.classList.add('error');
    errorMessage.textContent = '닉네임을 입력해주세요';
    errorMessage.style.display = 'block';
  } else {
    this.classList.remove('error');
    errorMessage.style.display = 'none';
  }
  btnActive();
});

document.getElementById('password').addEventListener('focusout', function() {
  const errorMessage = document.getElementById('error-message-password');
  const password = document.getElementById('password').value;

  if (password === '') {
    this.classList.add('error');
    errorMessage.textContent = '비밀번호를 입력해주세요';
    errorMessage.style.display = 'block';
  } else if (!validatePassword(password)) {
    this.classList.add('error');
    errorMessage.textContent = '비밀번호를 8자 이상 입력해주세요';
    errorMessage.style.display = 'block';
  } else {
    this.classList.remove('error');
    errorMessage.style.display = 'none';
  }
  btnActive();
});

document.getElementById('password-confirm').addEventListener('focusout', function() {
  const errorMessage = document.getElementById('error-message-password-confirm');
  const password = document.getElementById('password').value;
  const passwordConfirm = document.getElementById('password-confirm').value;

  if (password !== passwordConfirm) {
    this.classList.add('error');
    errorMessage.textContent = '비밀번호가 일치하지 않습니다';
    errorMessage.style.display = 'block';
  } else {
    this.classList.remove('error');
    errorMessage.style.display = 'none';
  }
  btnActive();
});


document.getElementById('button-auth').addEventListener('click', function() {
  if (!this.disabled) {
    window.location.href = '/items';
  }
});