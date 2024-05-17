const emailInput = document.querySelector('#email');
const nicknameInput = document.querySelector('#nickname');
const passwordInput = document.querySelector('#password');
const passwordInputConfirm = document.querySelector('#passwordConfirm');

function setError(input, errorMessageId, isError) {
  const error = document.querySelector(`#${errorMessageId}`);
  if (isError === true) {
    error.style.display = 'block';
    input.style.border = '1px solid #f74747';
    input.setAttribute('aria-invalid', 'true');
  } else if (isError === false) {
    error.style.display = 'none';
    input.style.border = 'none';
    input.removeAttribute('aria-invalid');
  }
}

function validateEmail() {
  const emailValue = emailInput.value.trim();
  setError(emailInput, 'emailEmptyError', false);
  setError(emailInput, 'emailInvalidError', false);
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;

  if (!emailValue) {
    setError(emailInput, "emailEmptyError", true);
  } else if (!emailRegex.test(emailValue)) {
    setError(emailInput, "emailInvalidError", true);
  }
}

function validatePassword() {
  setError(passwordInput, 'passwordEmptyError', false);
  setError(passwordInput, 'passwordInvalidError', false);

  if (!passwordInput.value.trim()) {
    setError(passwordInput, 'passwordEmptyError', true);
  } else if (passwordInput.value.trim().length < 8) {
    setError(passwordInput, 'passwordInvalidError', true);
  }
}

function validatePasswordConfrim() {
  setError(passwordInputConfirm, "passwordConfirmError", false);

  if (passwordInput.value.trim() !== passwordInputConfirm.value.trim()) {
    setError(passwordInputConfirm, "passwordConfirmError", true);
  }
}

function validateNickname() {
  setError(nicknameInput, 'nicknameEmptyError', false);

  if (!nicknameInput.value.trim()) {
    setError(nicknameInput, 'nicknameEmptyError', true);
  }
}

function togglePassword(input) {
  const passwordInput = document.getElementById(input);
  const isPassword = passwordInput.getAttribute("type") === 'password';
  passwordInput.setAttribute("type", isPassword ? "text" : 'password');

  const icon = passwordInput.nextElementSibling.querySelector("img");

  if (icon) {
    icon.src = isPassword
      ? "image/icon/eye.png"
      : "image/icon/eye-none.png";
    icon.alt = isPassword ? "비밀번호 표시" : "비밀번호 숨김";
  }
}

function submitForm(formId, redirectUrl) {
  const form = document.querySelector(`#${formId}`);
  const submitButton = document.querySelector(".submit_btn_login");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    validateEmail();
    validatePassword();

    if (formId === "signUpForm") {
      validateNickname();
      validatePasswordConfrim();
    }

    if (!document.querySelector('.error-message[style="display: block;"]')) {
      submitButton.style.backgroundColor = "#3692ff";
      window.location.href = redirectUrl;
    }
  });
}

emailInput.addEventListener("focusout", validateEmail);
passwordInput.addEventListener("focusout", validatePassword);

if (passwordInputConfirm) {
  passwordInputConfirm.addEventListener("focusout", validatePasswordConfrim);
}
if (nicknameInput) {
  nicknameInput.addEventListener("focusout", validateNickname);
}

submitForm("signInform", "/items");
submitForm("signUpform", "/signin");

