const userEmail = document.querySelector('#email');
const userPwd = document.querySelector('#password');
const loginBtn = document.querySelector('.btn-login');

function loginCheckInput() {
  const emailCheck = userEmail.value;
  const passwordCheck = userPwd.value;

  const isDisabled = emailCheck === '' || passwordCheck === '';
  loginBtn.disabled = isDisabled;
}

const userInputs = [userEmail, userPwd];
userInputs.forEach(input => input.addEventListener('input', loginCheckInput));
