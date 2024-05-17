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

const passwordInputCheck = document.getElementById('password-check');
const togglePasswordButtonCheck = document.querySelector('.toggle-pw-btn-check');

function togglePasswordCheck() {
  if (passwordInputCheck.type === 'password') {
    passwordInputCheck.type = 'text';
    togglePasswordButtonCheck.style.backgroundImage = 'url(/images/icons/ic_visible-pw.png)';
  } else {
    passwordInputCheck.type = 'password';
    togglePasswordButtonCheck.style.backgroundImage = 'url(/images/icons/ic_invisible-pw.png)';
  }
}

togglePasswordButton.addEventListener('click', togglePassword);
togglePasswordButtonCheck.addEventListener('click', togglePasswordCheck);

const signupButton = document.querySelector('.signup-btn');

const emailInput = document.getElementById('email');
const emailInputContainer = document.querySelector('.email-input-container');
const nicknameInput = document.getElementById('nickname');
const nicknameInputContainer = document.querySelector('.nickname-input-container');
const passwordInputContainer = document.querySelector('.password-input-container');
const passwordInputCheckContainer = document.querySelector('.password-check-input-container');

const emailError = document.createElement('p');
const nicknameError = document.createElement('p');
const passwordError = document.createElement('p');
const passwordCheckError = document.createElement('p');

emailError.style.color = 'red';
nicknameError.style.color = 'red';
passwordError.style.color = 'red';
passwordCheckError.style.color = 'red';

function validateEmail(email) {
  return email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i);
}

function updateSignupButtonState () {
  if (emailInput.value && validateEmail(emailInput.value) && nicknameInput.value && passwordInput.value && passwordInput.value.length >= 8 && (passwordInput.value === passwordInputCheck.value)) {
    signupButton.disabled = false;
  } else {
    signupButton.disabled = true;
  }
}

// 초기 상태에서 로그인, 회원가입 버튼 비활성화
signupButton.disabled = true;

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
  updateSignupButtonState();
});

nicknameInput.addEventListener('focusout', function() {
  if (!nicknameInput.value) {
    nicknameInput.style.borderColor = 'red';
    nicknameError.textContent = '닉네임을 입력해주세요.';
    nicknameInputContainer.parentNode.appendChild(nicknameError);
  } else {
    nicknameInput.style.borderColor = '';
    nicknameError.textContent = '';    
  }
  updateSignupButtonState();
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
  updateSignupButtonState();
});

passwordInputCheck.addEventListener('focusout', function() {
  if (!passwordInputCheck.value) {
    passwordInputCheck.style.borderColor = 'red';
    passwordCheckError.textContent = '비밀번호 확인을 입력해주세요.';
    passwordInputCheckContainer.parentNode.appendChild(passwordCheckError);
  } else if (passwordInputCheck !== passwordInput) {
    passwordInputCheck.style.borderColor = 'red';
    passwordCheckErrorContainer.textContent = '비밀번호가 일치하지 않습니다.';
    passwordInputCheck.parentNode.appendChild(passwordCheckError);
  } else {
    passwordInputCheck.style.borderColor = '';
    passwordCheckError.textContent = '';
  }
  updateSignupButtonState();
});

// 활성화된 ‘회원가입’ 버튼을 누르면 “/signin” 로 이동합니다
signupButton.addEventListener('click', function() {
  if (!signupButton.disabled) {
    window.location.href = "/signin";
  }
});