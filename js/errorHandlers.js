export const setAuthInputError = (input, err, text) => {
  if (input && err) {
    input.classList.add("auth-input-error");
    err.classList.add("error-message-on");
    err.textContent = text;
  }
};

export const toggleAuthInputError = (input, err, text) => {
  if (input && err) {
    input.classList.toggle("auth-input-error", true);
    err.classList.toggle("error-message-on", true);
    err.textContent = text;
  }
};

export const removeAuthInputError = (input, err) => {
  if (input && err) {
    input.classList.remove("auth-input-error");
    err.classList.remove("error-message-on");
    err.textContent = "";
  }
};

export const setNicknameInputError = (input, err, text) => {
  if (input && err) {
    input.classList.add("nickname-input-error", true);
    err.classList.add("error-message-on", true);
    err.textContent = text;
  }
};

export const removeNicknameInputError = (input, err) => {
  if (input && err) {
    input.classList.remove("nickname-input-error");
    err.classList.remove("error-message-on");
    err.textContent = "";
  }
};

export const setPasswordInputError = (input, err, text) => {
  if (input && err) {
    input.classList.add("password-field-error");
    err.classList.add("error-message-on");
    err.textContent = text;
  }
};

export const togglePasswordInputError = (input, err, text) => {
  if (input && err) {
    input.classList.toggle("password-field-error", true);
    err.classList.toggle("error-message-on", true);
    err.textContent = text;
  }
};

export const removePasswordInputError = (input, err) => {
  if (input && err) {
    input.classList.remove("password-field-error");
    err.classList.remove("error-message-on");
    err.textContent = "";
  }
};

export const setVerifyPasswordInputError = (input, err, text) => {
  if (input && err) {
    input.classList.add("password-field-error");
    err.classList.add("error-message-on");
    err.textContent = text;
  }
};

export const toggleVerifyPasswordInputError = (input, err, text) => {
  if (input && err) {
    input.classList.toggle("password-field-error", true);
    err.classList.toggle("error-message-on", true);
    err.textContent = text;
  }
};

export const removeVerifyPasswordInputError = (input, err) => {
  if (input && err) {
    input.classList.remove("password-field-error");
    err.classList.remove("error-message-on");
    err.textContent = "";
  }
};
