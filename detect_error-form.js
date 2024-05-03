import { enableBtn, disableBtn } from '/control_submit_btn.js';

const form = document.querySelector('.main-form');

function checkFormFilled({ target }) {
  detectErrorInputs(target);
  const inputs = [...document.querySelectorAll('.label_input')];
  if (inputs.some((item) => item.classList.contains('input_error'))) {
    disableBtn();
  } else {
    enableBtn();
  }
}

function detectErrorInputs(target) {
  switch (target.name) {
    case 'email':
      detectErrorEmail(target);
      break;
    case 'nickname':
      detectErrorNickname(target);
      break;
    case 'password':
      detectErrorPassword(target);
      break;
    case 'password-repeat':
      detectErrorPasswordRepeat(target);
      break;
  }
}

function detectErrorEmail(inputEmail) {
  let isError = true;
  let errorMessage = '';

  if (inputEmail.value === '') {
    errorMessage = '이메일을 입력해주세요';
  } else if (isNotEmail(inputEmail.value)) {
    errorMessage = '잘못된 이메일 형식입니다';
  } else {
    isError = false;
  }

  removeErrorMessage(inputEmail);
  isError && addErrorMessage(inputEmail, errorMessage);
  outlineInputError(inputEmail, isError);
}

function isNotEmail(emailAddress) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
  if (emailRegex.test(emailAddress)) {
    return false;
  } else {
    return true;
  }
}

function detectErrorNickname(inputNickname) {
  let isError = true;
  let errorMessage = '';

  if (inputNickname.value === '') {
    errorMessage = '닉네임을 입력해주세요';
  } else {
    isError = false;
  }

  removeErrorMessage(inputNickname);
  isError && addErrorMessage(inputNickname, errorMessage);
  outlineInputError(inputNickname, isError);
}

function detectErrorPassword(inputPassword) {
  let isError = true;
  let errorMessage = '';

  if (inputPassword.value === '') {
    errorMessage = '비밀번호를 입력해주세요';
  } else if (inputPassword.value.length < 8) {
    errorMessage = '비밀번호를 8자 이상 입력해주세요';
  } else {
    isError = false;
  }

  removeErrorMessage(inputPassword);
  isError && addErrorMessage(inputPassword, errorMessage);
  outlineInputError(inputPassword, isError);
}

function detectErrorPasswordRepeat(inputPasswordRepeat) {
  const inputPassword = document.querySelector('.label_input[name="password"]');
  let isError = true;
  let errorMessage = '';

  if (inputPasswordRepeat.value === '') {
    errorMessage = '비밀번호를 입력해주세요';
  } else if (inputPasswordRepeat.value !== inputPassword.value) {
    errorMessage = '비밀번호가 일치하지 않습니다';
  } else {
    isError = false;
  }

  removeErrorMessage(inputPasswordRepeat);
  isError && addErrorMessage(inputPasswordRepeat, errorMessage);
  outlineInputError(inputPasswordRepeat, isError);
}

function addErrorMessage(targetInput, content) {
  const label = targetInput.parentNode.parentNode;
  // const hasErrorMessage =
  //   label.lastElementChild.classList.contains('error-message');
  // hasErrorMessage && label.lastElementChild.remove();
  const errorMessage = document.createElement('p');
  errorMessage.classList.add('error-message');
  errorMessage.textContent = content;
  label.appendChild(errorMessage);
}

function removeErrorMessage(targetInput) {
  const label = targetInput.parentNode.parentNode;
  const hasErrorMessage =
    label.lastElementChild.classList.contains('error-message');
  hasErrorMessage && label.lastElementChild.remove();
}

function outlineInputError(targetInput, isError) {
  isError
    ? targetInput.classList.add('input_error')
    : targetInput.classList.remove('input_error');
}

form.addEventListener('focusout', checkFormFilled);

// 체인지 시 에러 감지 + 모든 인풋 순회해서 error 클래스가 모두 없으면 true 반환 => 버튼 활성화
// 에러 있으면 각 에러에 해당하는 에러 메시지 + input 에 error 클래스이름 줌. error 는 빨간색 아웃라인
//
