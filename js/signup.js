import {
  emailInput,
  passwordInput,
  verifyPasswordInput,
  nicknameInput,
  signupButton,
  emailErrorMessage,
  passwordErrorMessage,
  verifyPasswordErrorMessage,
  nicknameErrorMessage,
  togglePasswordButton,
  togglePasswordInput,
  togglePasswordImage,
} from "./domElements.js";

import {
  validateEmailInput,
  validatePasswordInput,
  validateVerifyPasswordInput,
  validateNicknameInput,
} from "./inputValidators.js";

import {
  handleEmailInput,
  handlePasswordInput,
  handleVerifyPasswordInput,
  handleNicknameInput,
  isFormValid,
  togglePassword,
} from "./inputHandlers.js";

if (emailInput) {
  emailInput.addEventListener("focusout", () => {
    validateEmailInput(emailInput, emailErrorMessage);
  });

  emailInput.addEventListener("input", handleEmailInput);
}

if (passwordInput) {
  passwordInput.addEventListener("focusout", () => {
    validatePasswordInput(passwordInput, passwordErrorMessage);
  });

  passwordInput.addEventListener("input", handlePasswordInput);
}

if (verifyPasswordInput) {
  verifyPasswordInput.addEventListener("focusout", () => {
    validateVerifyPasswordInput(
      passwordInput,
      verifyPasswordInput,
      verifyPasswordErrorMessage
    );
  });

  verifyPasswordInput.addEventListener("input", handleVerifyPasswordInput);
}

if (nicknameInput) {
  nicknameInput.addEventListener("focusout", () => {
    validateNicknameInput(nicknameInput, nicknameErrorMessage);
  });

  nicknameInput.addEventListener("input", handleNicknameInput);
}

if (signupButton) {
  signupButton.addEventListener("click", (event) => {
    event.preventDefault();

    if (isFormValid()) {
      window.location.href = "/signin.html";
    }
  });
}

togglePasswordButton.forEach((button, index) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    togglePassword([togglePasswordInput[index]], togglePasswordImage[index]);
  });
});
