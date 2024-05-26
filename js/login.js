import {
  emailInput,
  passwordInput,
  emailErrorMessage,
  passwordErrorMessage,
  loginButton,
  togglePasswordButton,
  togglePasswordInput,
  togglePasswordImage,
} from "./domElements.js";

import {
  validateEmailInput,
  validatePasswordInput,
} from "./inputValidators.js";

import {
  handleEmailInput,
  handlePasswordInput,
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

if (loginButton) {
  loginButton.addEventListener("click", (event) => {
    event.preventDefault();

    if (isFormValid()) {
      window.location.href = "/items";
    }
  });
}

togglePasswordButton.forEach((button, index) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    togglePassword([togglePasswordInput[index]], togglePasswordImage[index]);
  });
});
