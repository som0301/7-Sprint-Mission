import {
  form,
  inputStates,
  formInputs,
  formValidationConfig,
} from "./constants.js";

// 에러시 에러 보더와 에러 메시지 추가
function validationError(e, isChecked) {
  const elementErrMsg = e.nextElementSibling.classList;
  const elementErrBorder = e.classList;

  isChecked
    ? (elementErrBorder.add("err-border"), elementErrMsg.add("visible-maker"))
    : (elementErrBorder.remove("err-border"),
      elementErrMsg.remove("visible-maker"));
}

// 공백 제거
function isEmpty(input_text) {
  return input_text.trim() === "";
}

// 공백 검사
function isEmptyCheck(input) {
  return input !== null && isEmpty(input.value)
    ? (validationError(input, true), true)
    : false;
}

// 이메일 철자 검사
function emailSpellCheck(email_text) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email_text);
}

// 비밀번호 길이 검사
function passwordLengthCheck(password_text) {
  // 비밀번호 길이가 8자 넘는지 체크
  return password_text.length >= 8;
}

// 비밀번호 일치 검사
function PasswordMatchCheck(password_conf_text) {
  return password_conf_text === formInputs.password.value;
}

// 각 input 별로 유효성 검사 할당용 이벤트 핸들
export function handleValidateInput(e, inputType) {
  const validators = {
    email: validateEmail,
    nickname: validateNickname,
    password: validatePassword,
    passwordConf: validatePasswordConf,
  };

  const validator = validators[inputType];

  validator
    ? (inputStates[inputType] = validator())
    : console.log("잘못된 입력 유형입니다.");

  // 버튼 유효성 검사
  validateChangeButton();
}

// 폼 페이지 이동용 유효성 검사 이벤트 핸들
export function handleValidateForm(e) {
  e.preventDefault();

  validatFormRedirect();
}

// 각 입력 필드의 유효성 검사를 일반화
function validateInput(
  inputElement,
  emptyErrorMessage = "",
  errorMessage = "",
  validationFunction = () => true
) {
  const eText = inputElement.nextElementSibling;
  const value = inputElement.value;

  if (isEmptyCheck(inputElement)) {
    eText.textContent = emptyErrorMessage;
    inputStates[inputElement.id] = false;

    return false;
  }

  const isValid = validationFunction(value);
  validationError(inputElement, !isValid);
  eText.textContent = isValid ? "" : errorMessage;
  inputStates[inputElement.id] = isValid;

  return isValid;
}

// 이메일 유효성 검사
function validateEmail() {
  const emailInputElement = formInputs.email;
  const isValidEmail = validateInput(
    emailInputElement,
    "이메일을 입력해주세요.",
    "잘못된 이메일 형식입니다.",
    emailSpellCheck
  );

  return isValidEmail;
}

// 닉네임 유효성 검사
function validateNickname() {
  const nicknameInputElement = formInputs.nickname;
  const isValidNickname = validateInput(
    nicknameInputElement,
    "닉네임을 입력해주세요."
  );

  return isValidNickname;
}

// 비밀번호 유효성 검사
function validatePassword() {
  const passwordInputElement = formInputs.password;
  const isValidPassword = validateInput(
    passwordInputElement,
    "비밀번호를 입력해주세요.",
    "비밀번호를 8자 이상 입력해주세요.",
    passwordLengthCheck
  );

  return isValidPassword;
}

// 비밀번호 확인의 유효성 검사
function validatePasswordConf() {
  const passwordConfInputElement = formInputs.passwordConf;
  const isValidPasswordConf = validateInput(
    passwordConfInputElement,
    "비밀번호 확인을 입력해주세요.",
    "비밀번호가 일치하지 않습니다.",
    PasswordMatchCheck
  );

  return isValidPasswordConf;
}

// 폼 id
function getFormId() {
  return form.id;
}

// 전달받은 페이지 폼의 inputs 유효성 검사
function validatePageInputs(fields) {
  return fields.every((field) => inputStates[field]);
}

// 특정 폼에 대해 유효성 검사를 수행
function validatePageForm(formId) {
  const config = formValidationConfig[formId];

  if (!config) return false;

  return config ? validatePageInputs(config.fields) : false;
}

// 유효성 검사 결과에 따라 리디렉션 수행
function validatFormRedirect() {
  const formId = getFormId();
  const config = formValidationConfig[formId];

  if (!config) return false;

  const isInputValid = validatePageForm(formId);
  if (isInputValid) {
    window.location.href = config.redirect;
  }

  return isInputValid;
}

// 유효성 검사 결과에 따라 버튼 상태 변경 수행
function validateChangeButton() {
  const formId = getFormId();
  const submitButton = document.querySelector(".acc-button");
  const isInputValid = validatePageForm(formId);

  isInputValid
    ? submitButton.classList.add("valid-button")
    : submitButton.classList.remove("valid-button");

  return isInputValid;
}
