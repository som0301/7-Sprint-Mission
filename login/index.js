const passwordInput = document.getElementById('password');
const togglePasswordButton = document.querySelector('.toggle-pw-btn');

function togglePassword() {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text'; 
    togglePasswordButton.style.backgroundImage = 'url(/images/icons/ic_visible-pw.png)';
  } else {
    passwordInput.type = 'password';
    togglePasswordButton.style.backgroundImage = 'url(/images/icons/ic_invisible-pw.png)'
  }
}

togglePasswordButton.addEventListener('click', togglePassword);

const loginButton = document.querySelector('.login-btn');
const emailInput = document.getElementById('email');
const emailInputContainer = document.querySelector('.email-input-container');
const passwordInputContainer = document.querySelector('.password-input-container');
const emailError = document.createElement('p');
const passwordError = document.createElement('p');

emailError.style.color = 'red';
passwordError.style.color = 'red';

function validateEmail(email) {
  return email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i);
}

function updateLoginButtonState() {
  if (emailInput.value && validateEmail(emailInput.value) && passwordInput.value && passwordInput.value.length >= 8) {
    loginButton.disabled = false;
  } else {
    loginButton.disabled = true;
  }
}

// 초기 상태에서 로그인, 회원가입 버튼 비활성화
loginButton.disabled = true;

emailInput.addEventListener('focusout', function() {
  if (!emailInput.value) {
    emailInput.style.borderColor = 'red';
    emailError.textContent = '이메일을 입력해주세요.';
    emailInputContainer.parentNode.appendChild(emailError);
  } else if (!validateEmail(emailInput.value)) {
    emailInput.style.borderColor = 'red';
    emailError.textContent = '잘못된 이메일 형식입니다.';
    emailInputContainer.parentNode.appendChild(emailError);
  } else {
    emailInput.style.borderColor = '';
    emailError.textContent = '';
  }
  updateLoginButtonState();
});

passwordInput.addEventListener('focusout', function() {
  if (!passwordInput.value) {
    passwordInput.style.borderColor = 'red';
    passwordError.textContent = '비밀번호를 입력해주세요.';
    passwordInputContainer.parentNode.appendChild(passwordError);
  } else if (passwordInput.value.length < 8) {
    passwordInput.style.borderColor = 'red';
    passwordError.textContent = '비밀번호를 8자 이상 입력해주세요.';
    passwordInputContainer.parentNode.appendChild(passwordError);
  } else {
    passwordInput.style.borderColor = '';
    passwordError.textContent = '';
  }
  updateLoginButtonState();
});

// 활성화된 ‘로그인’ 버튼을 누르면 “/items” 로 이동합니다.
loginButton.addEventListener('click', function() {
  if (!loginButton.disabled) {
    window.location.href = "/items";
  }
});