const mainContainer = document.querySelector('.main-container');
const buttonSign = document.querySelector('.sign-button');
const objInputs = {
  email: document.querySelector('#email'),
  nickname: document.querySelector('#nickname'),
  password: document.querySelector('#password'),
  passwordCheck: document.querySelector('#password-check')
};

mainContainer.addEventListener('input', setStateButtonSign);

function setStateButtonSign(e) {
  if (!e.target.matches('input')) {
    return;
  }

  buttonSign.classList.toggle('disable', checkInputConditions());
}

function checkInputConditions() {
  for (let i in objInputs) {
    if (!objInputs[i]) {
      continue;
    }

    if (objInputs[i].value.length === 0) {
      return true;
    }
  }

  if (objInputs.passwordCheck) {
    if (objInputs.password.value !== objInputs.passwordCheck.value) {
      return true;
    }
  }

  return false;
}
