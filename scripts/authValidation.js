import {
  form,
  inputEmail,
  inputNickname,
  inputpassword,
  inputpasswordConf,
  inputStates,
} from "./constants.js";

// 에러시 클래스 추가와 에러 보더 추가
function validationError(e, isChecked) {
  const element = e.nextElementSibling.classList;

  e.style.border = isChecked ? "1px solid red" : "none";
  isChecked ? element.add("visible-maker") : element.remove("visible-maker");
}

// 공백 제거
function isEmpty(text) {
  return text.trim() === "";
}

// 공백 검사
function isEmptyCheck(text) {
  return text !== null && isEmpty(text.value)
    ? (validationError(text, true), true)
    : false;
}

// 이메일 철자 검사
function emailSpellCheck(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

// 비밀번호 길이 유효성 검사
function validatePasswordLength(password) {
  // 비밀번호 길이가 8자 넘는지 체크
  return password.length >= 8;
}

// 각 항목 별로 이벤트 할당하기
export function handleValidateInput(e, inputType) {
  switch (inputType) {
    case "email":
      inputStates["email"] = validateEmail();
      break;
    case "nickname":
      inputStates["nickname"] = validateNickname();
      break;
    case "password":
      inputStates["password"] = validatePassword();
      break;
    case "passwordConf":
      inputStates["passwordConf"] = validatePasswordConf();
      break;
    default:
      console.log("잘못된 입력 유형입니다.");
  }

  // 버튼 유효성 검사
  validateChangeButton();
}

// 이메일 유효성 검사
function validateEmail() {
  const eText = inputEmail.nextElementSibling;

  if (!isEmptyCheck(inputEmail)) {
    const isValidEmail = emailSpellCheck(inputEmail.value);
    validationError(inputEmail, !isValidEmail);
    eText.textContent = isValidEmail ? "" : "잘못된 이메일 형식입니다.";

    return isValidEmail;
  }
}

// 닉네임 유효성 검사
function validateNickname() {
  const isEmpty = isEmptyCheck(inputNickname);
  validationError(inputNickname, isEmpty);

  return isEmpty ? false : true;
}

// 비밀번호 유효성 검사
function validatePassword() {
  const eText = inputpassword.nextElementSibling;
  const eValue = inputpassword.value;

  if (!isEmptyCheck(inputpassword)) {
    const isValidPassword = validatePasswordLength(eValue);
    validationError(inputpassword, !isValidPassword);
    eText.textContent = isValidPassword
      ? ""
      : "비밀번호를 8자 이상 입력해주세요.";

    return isValidPassword;
  }
}

// 비밀번호 확인의 유효성 검사
function validatePasswordConf() {
  const eText = inputpasswordConf.nextElementSibling;

  // 공백이 없다면
  if (!isEmptyCheck(inputpasswordConf)) {
    // 위 비밀번호 길이가 8자 이상이면
    if (validatePasswordLength(inputpassword.value)) {
      // 두 비밀번호 일치 확인
      return checkPasswordMatch(inputpasswordConf);
    }
    // 비밀번호 길이가 8자 이하라면 재확인요청
    else {
      validationError(inputpasswordConf, true);
      eText.textContent = "조건을 먼저 일치시켜 주세요.";

      return false;
    }
  }
}

// 비밀번호 일치 검사
function checkPasswordMatch(e) {
  const passwordsMatch = inputpassword.value === inputpasswordConf.value;

  validationError(e, !passwordsMatch);
  inputpasswordConf.nextElementSibling.textContent = passwordsMatch
    ? ""
    : "비밀번호가 일치하지 않습니다.";

  return passwordsMatch;
}

// login 페이지의 input 요소들에 대한 유효성 검사
function validateLoginInputs() {
  const isEmailValid = inputStates["email"];
  const isPasswordValid = inputStates["password"];

  return isEmailValid && isPasswordValid;
}

// signup 페이지의 input 요소들에 대한 유효성 검사
function validateSignupInputs() {
  const isEmailValid = inputStates["email"];
  const isNicknameValid = inputStates["nickname"];
  const isPasswordValid = inputStates["password"];
  const isPasswordConfValid = inputStates["passwordConf"];

  return (
    isEmailValid && isNicknameValid && isPasswordValid && isPasswordConfValid
  );
}

// 폼 페이지 이동용 유효성 검사
export function handleValidateForm(e) {
  e.preventDefault();

  // 각 페이지에 맞게 input 요소들에 대한 유효성 검사 수행
  const isInputValid =
    form.id === "login" ? validateLoginInputs() : validateSignupInputs();

  // 유효성 검사 결과에 따라 페이지 이동
  if (isInputValid) {
    const destinationURL =
      form.id === "login" ? "../items.html" : "../signin.html";
    window.location.href = destinationURL;
  }
}

// 버튼 상태 변경 유효성 검사
function validateChangeButton() {
  const submitButton = document.querySelector(".acc-button");

  // 각 페이지에 맞게 input 요소들에 대한 유효성 검사 수행
  const isInputValid =
    form.id === "login" ? validateLoginInputs() : validateSignupInputs();

  // 유효성 검사 결과에 따라 버튼 상태 변경
  isInputValid
    ? submitButton.classList.add("valid-button")
    : submitButton.classList.remove("valid-button");
}
