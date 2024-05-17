const mainContainer = document.querySelector('.main-container');
const buttonSign = document.querySelector('.sign-button');

const objInputs = {
  email: document.querySelector('#email'),
  nickname: document.querySelector('#nickname'),
  password: document.querySelector('#password'),
  passwordCheck: document.querySelector('#password-check')
};

const warningMessages = {
  emailBlank: '이메일을 입력해주세요.',
  emailValidation: '잘못된 이메일 형식입니다.',
  nicknameBlank: '닉네임을 입력해주세요.',
  passwordBlank: '비밀번호를 입력해주세요.',
  passwordShort: '비밀번호를 8자 이상 입력해주세요.',
  passwordNotMatched: '비밀번호가 일치하지 않습니다.'
};

mainContainer.addEventListener('focusout', setWarningMessage);
mainContainer.addEventListener('click', setVisibility);

function setWarningMessage(e) {
  const el = e.target;
  const id = el.id;
  const value = el.value;
  const p = el.nextElementSibling;

  const emailRegExp = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;

  let errorCode = '';
    
  if (id == 'email' && !emailRegExp.test(value)) {
    errorCode = 'emailValidation';
  }
    
  if (id == 'password' && value.length < 8) {
    errorCode = 'passwordShort';
  }

  if (!value) {
    errorCode = id + 'Blank';
  }

  if (id.includes('password')) {
    checkPasswordMatched();
  }

  p.textContent = warningMessages[errorCode];
  p.style.display = p.textContent ? 'block' : 'none';

  setStateButtonSign();

  return;
}

function checkPasswordMatched() {
  if (!objInputs.passwordCheck) {
    return;
  }

  if (objInputs.password.value !== objInputs.passwordCheck.value) {
    const passwordCheck = objInputs.passwordCheck.nextElementSibling;
    
    passwordCheck.textContent = warningMessages.passwordNotMatched;
    passwordCheck.style.display = passwordCheck.textContent ? 'block' : 'none';
  }

  return;
}

function setStateButtonSign() {
  buttonSign.classList.toggle('disable', checkInputConditions());
}

function checkInputConditions() {
  const p = document.getElementsByClassName('input-set-warning');

  for (let i of p) {
    if (i.innerText != '') {
      return true;
    }
  }

  for (let i in objInputs) {
    if (!objInputs[i]) {
      continue;
    }

    if (objInputs[i].value == '') {
      return true;
    }
  }

  return false;
}

function setVisibility(e) {
  const el = e.target;
  const id = el.id;

  if (!id.includes('visibility')) {
    return false;
  }

  const input = el.nextElementSibling;
  const type = input.type;
  const status = type == 'text' ? 'off' : 'on';

  input.type = status == 'on' ? 'text' : 'password';
  el.src = `/assets/images/btn_visibility_${status}.svg`;

  return;
}