const emailInput = document.querySelector(".email-input");
const passwordInput = document.querySelector(".password-input");
const nicknameInput = document.querySelector(".nickname-input");
const passwordConfirmInput = document.querySelector(".password-confirm-input");
const emailErrorMessage = document.querySelector(".email-error-message");
const passwordErrorMessage = document.querySelector(".password-error-message");
const nicknameErrorMessage = document.querySelector(".nickname-error-message");
const passwordConfirmMessage = document.querySelector(
  ".password-confirm-error-message"
);
const loginSubmitButton = document.querySelector(".login_submit");
const signupSubmitButton = document.querySelector(".signup_submit");
const signupForm = document.getElementById("signupForm");
const passwordButton = document.querySelector(".password-button");
const passwordConfirmButton = document.querySelector(
  ".password-confirm-button"
);
const isEmailValid = (email) => {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
  const isEmail = emailPattern.test(email);
  return isEmail;
};
const isPasswordValid = (password) => {
  const passwordPattern = /^.{8,}$/;
  const isPassword = passwordPattern.test(password);
  return isPassword;
};

function setInputError(input, errEl, text) {
  input.className += " sign-input-error";
  errEl.className += " error-message-on";
  errEl.textContent = text;
}
function removeInputError(input, errEl) {
  input.classList.remove("sign-input-error");
  errEl.classList.remove("error-message-on");
  errEl.textContent = "";
}
function validateEmail(email) {
  if (email === "") {
    setInputError(emailInput, emailErrorMessage, "이메일을 입력해주세요.");
    return;
  }
  if (!isEmailValid(email)) {
    setInputError(emailInput, emailErrorMessage, "잘못된 형식의 이메일입니다.");
    return;
  }
  removeInputError(emailInput, emailErrorMessage);
}

function validateNickname(nickname) {
  if (nickname === "") {
    setInputError(nicknameInput, nicknameErrorMessage, "닉네임을 입력해주세요");
    return;
  }
  removeInputError(nicknameInput, nicknameErrorMessage);
}

function validatePassword(password) {
  if (password === "") {
    setInputError(
      passwordInput,
      passwordErrorMessage,
      "비밀번호를 입력해주세요."
    );
    return;
  }
  if (!isPasswordValid(password)) {
    setInputError(
      passwordInput,
      passwordErrorMessage,
      "비밀번호를 8자 이상 입력해주세요."
    );
    return;
  }
  removeInputError(passwordInput, passwordErrorMessage);
}

function validatePasswordConfirm(password, passwordConfirm) {
  if (password !== passwordConfirm) {
    setInputError(
      passwordConfirmInput,
      passwordConfirmMessage,
      "비밀번호가 일치하지 않습니다."
    );
    return;
  }
  removeInputError(passwordConfirmInput, passwordConfirmMessage);
}

function disableloginSubmitButton() {
  if(!nicknameInput && !passwordConfirmInput){
    const inputsAreEmpty =
    !emailInput.value ||
    !passwordInput.value ;

  const errorMessagesAreActive =
    emailErrorMessage.textContent !== "" ||
    passwordErrorMessage.textContent !== "";

  if (inputsAreEmpty || errorMessagesAreActive) {
    loginSubmitButton.disabled = true;
    loginSubmitButton.style.cursor = "default";
  } else {
    loginSubmitButton.disabled = false;
    loginSubmitButton.style.cursor = "pointer";
    loginSubmitButton.style.backgroundColor = "#3692FF";
  }
  }
}
function disablesignupSubmitButton() {
  if(emailInput&&nicknameInput&&passwordInput&&passwordConfirmInput){
    const inputsAreEmpty =
    !emailInput.value ||
    !nicknameInput.value ||
    !passwordInput.value ||
    !passwordConfirmInput.value;

  const errorMessagesAreActive =
    emailErrorMessage.textContent !== "" ||
    nicknameErrorMessage.textContent !== "" ||
    passwordErrorMessage.textContent !== "" ||
    passwordConfirmMessage.textContent !== "";

  if (inputsAreEmpty || errorMessagesAreActive) {
    signupSubmitButton.disabled = true;
    signupSubmitButton.style.cursor = "default";
  } else {
    signupSubmitButton.disabled = false;
    signupSubmitButton.style.cursor = "pointer";
    signupSubmitButton.style.backgroundColor = "#3692FF";
  }
  }
}

const inputs = [
  { element: emailInput, validate: validateEmail },
  { element: passwordInput, validate: validatePassword },
];
inputs.forEach(({ element, validate }) => {
  element.addEventListener("focusout", () => {
    validate(element.value);
    disableloginSubmitButton();
    disablesignupSubmitButton();
  });
});

if (nicknameInput) {
  nicknameInput.addEventListener("focusout", () => {
    validateNickname(nicknameInput.value);
    disablesignupSubmitButton();
  });
}
if (passwordConfirmInput) {
  passwordConfirmInput.addEventListener("focusout", () => {
    validatePasswordConfirm(passwordInput.value, passwordConfirmInput.value);
    disablesignupSubmitButton();
  });
}

signupForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!loginSubmitButton.disabled) {
    window.location.href = "/items";
  }
});

signupForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!signupSubmitButton.disabled) {
    window.location.href = "login.html";
  }
});

function togglePassword(input, button) {
  if (input.type === "password") {
    input.type = "text";
    button.setAttribute("alt", "비밀번호 표시");
    button.style.backgroundImage = "url('../image/eye.png')";
    return;
  }
  if (input.type === "text") {
    input.type = "password";
    button.setAttribute("alt", "비밀번호 숨김");
    button.style.backgroundImage = "url('../image/hidden.png')";
    return;
  }
}

passwordButton.addEventListener("click", () => {
  togglePassword(passwordInput, passwordButton);
});

if (passwordConfirmInput && passwordConfirmButton) {
  passwordConfirmButton.addEventListener("click", () => {
    togglePassword(passwordConfirmInput, passwordConfirmButton);
  });
}