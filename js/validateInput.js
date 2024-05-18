const emailInput = document.querySelector(".email-input");
const passwordInput = document.querySelector(".password-input");
const nicknameInput=document.querySelector(".nickname-input");
const passwordConfirmInput=document.querySelector(".password-confirm-input");
const emailErrorMessage = document.querySelector(".email-error-message");
const passwordErrorMessage = document.querySelector(".password-error-message");
const nicknameErrorMessage=document.querySelector(".nickname-error-message");
const passwordConfirmMessage=document.querySelector(".password-confirm-error-message");
const submitButton = document.querySelector(".login_submit");
const signupForm = document.getElementById("signupForm");
const passwordButton = document.querySelector(".password-button");

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
function disableSubmitButton() {
  const inputsAreEmpty = !emailInput.value || !passwordInput.value;
  const errorMessagesAreActive =
    emailErrorMessage.textContent !== "" ||
    passwordErrorMessage.textContent !== "";

  if (inputsAreEmpty || errorMessagesAreActive) {
    submitButton.disabled = true;
    submitButton.style.cursor = "default";
  } else {
    submitButton.disabled = false;
    submitButton.style.cursor = "pointer";
    submitButton.style.backgroundColor = "#3692FF";
  }
}

const inputs = [
  { element: emailInput, validate: validateEmail },
  { element: passwordInput, validate: validatePassword },
  { element: nicknameInput, validate: validateNickname },
  { element: passwordConfirmInput, validate: () => validatePasswordConfirm(passwordInput.value, passwordConfirmInput.value) }
];

inputs.forEach(({ element, validate }) => {
  element.addEventListener("focusout", () => {
    validate(element.value);
    disableSubmitButton();
  });
});

signupForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!submitButton.disabled) {
    window.location.href = "index.html";
  }
});

passwordButton.addEventListener("click", () => {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    passwordButton.setAttribute("alt", "비밀번호 표시");
    passwordButton.style.backgroundImage = "url('../image/eye.png')";
  } else {
    passwordButton.style.backgroundImage="url('../image/hidden.png')";
    passwordInput.type = "password";
    passwordButton.setAttribute("alt", "비밀번호 숨김");
  }
});
