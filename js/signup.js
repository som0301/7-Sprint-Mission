const userEmail = document.querySelector('#email');
const userNickname = document.querySelector('#nickname');
const userPwd = document.querySelector('#password');
const userPwdRepeat = document.querySelector('#password-repeat');

const loginBtn = document.querySelector('.btn-login');

function joinCheckInput() {
  const emailCheck = userEmail.value;
  const nicknameCheck = userNickname.value;
  const passwordCheck = userPwd.value;
  const pwdRepeatCheck = userPwdRepeat.value;

  const isDisabled = emailCheck === '' || nicknameCheck === '' || passwordCheck === '' || pwdRepeatCheck === '';

  loginBtn.disabled = isDisabled;
}

const userInputs = [userEmail, userPwd, userNickname, userPwdRepeat];
userInputs.forEach(input => input.addEventListener('input', joinCheckInput));
