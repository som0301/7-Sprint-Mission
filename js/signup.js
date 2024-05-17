const userEmail = document.querySelector('#email');
const userNickname = document.querySelector('#nickname');
const userPwd = document.querySelector('#password');
const userPwdRepeat = document.querySelector('#password-repeat');

const loginBtn = document.querySelector('.btn-login');

const errorMsgEmail = document.querySelector('.error-msg-email');
const errorMsgNickname = document.querySelector('.error-msg-nickname');
const errorMsgPwd = document.querySelector('.error-msg-pwd');
const errorMsgRepeat = document.querySelector('.error-msg-repeat');

const pwdVisibility = document.querySelector('.btn-visibility-pwd');
const repeatVisibility = document.querySelector('.btn-visibility-repeat');

// 이메일 유효성
function emailCheck(email) {
  const email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
  return email_regex.test(email);
}

function validEmail() {
  const email = userEmail.value;

  if (email === '') {
    errorMsgEmail.textContent = '이메일을 입력해주세요.';
    userEmail.classList.add('error-input');
  } else {
    if (emailCheck(email)) {
      errorMsgEmail.textContent = '';
      userEmail.classList.remove('error-input');
    } else {
      errorMsgEmail.textContent = '잘못된 이메일 형식입니다.';
      userEmail.classList.add('error-input');
    }
  }
}

// 닉네임 공백 체크
function validNickname() {
  const nickname = userNickname.value;

  if (nickname === '') {
    errorMsgNickname.textContent = '닉네임을 입력해주세요';
    userNickname.classList.add('error-input');
  } else {
    errorMsgNickname.textContent = '';
    userNickname.classList.remove('error-input');
  }
}

// 비밀번호 길이 체크
function passwordCheck(pwd) {
  return pwd.length >= 8;
}

function validPwd() {
  const pwd = userPwd.value;

  if (pwd === '') {
    errorMsgPwd.textContent = '비밀번호를 입력해주세요.';
    userPwd.classList.add('error-input');
  } else {
    if (passwordCheck(pwd)) {
      errorMsgPwd.textContent = '';
      userPwd.classList.remove('error-input');
    } else {
      errorMsgPwd.textContent = '비밀번호를 8자 이상 입력해주세요.';
      userPwd.classList.add('error-input');
    }
  }
}

// 비밀번호 확인
function isMatch(pwd, rep) {
  return pwd === rep;
}

function validRepeat() {
  const pwd = userPwd.value;
  const rep = userPwdRepeat.value;

  if (isMatch(pwd, rep)) {
    errorMsgRepeat.textContent = '';
    userPwdRepeat.classList.remove('error-input');
  } else {
    errorMsgRepeat.textContent = '비밀번호가 일치하지 않습니다.';
    userPwdRepeat.classList.add('error-input');
  }
}

// input이 맞게 들어갔는지 확인
function joinCheckInput() {
  const emailValue = userEmail.value;
  const nicknameValue = userNickname.value;
  const passwordValue = userPwd.value;
  const pwdRepeatValue = userPwdRepeat.value;

  const isEmpty = emailValue === '' || nicknameValue === '' || passwordValue === '' || pwdRepeatValue === '';
  const isError =
    errorMsgEmail.textContent !== '' ||
    errorMsgPwd.textContent !== '' ||
    errorMsgNickname.textContent !== '' ||
    errorMsgRepeat.textContent !== '';

  loginBtn.disabled = isError || isEmpty;
}

// 눈버튼 토글
function passwordToggle(pwd, eye) {
  if (pwd.getAttribute('type') === 'password') {
    pwd.setAttribute('type', 'text');
    eye.src = '/images/eye-on.png';
  } else {
    pwd.setAttribute('type', 'password');
    eye.src = '/images/eye-off.png';
  }
}

//이벤트 추가
pwdVisibility.addEventListener('click', () => {
  passwordToggle(userPwd, pwdVisibility);
});
repeatVisibility.addEventListener('click', () => {
  passwordToggle(userPwdRepeat, repeatVisibility);
});

const userInputs = [userEmail, userNickname, userPwd, userPwdRepeat];
const valids = [validEmail, validNickname, validPwd, validRepeat];

for (let i = 0; i < valids.length; i++) userInputs[i].addEventListener('focusout', valids[i]);
for (let i = 0; i < valids.length; i++) userInputs[i].addEventListener('keyup', valids[i]);
// 스프린트4 : 스프린트미션 피그마에는 'focusout할 때'라고 설명했지만 keyup 이벤트도 추가해야 깔끔하게 동작하는거 같아서 추가
// 맞는 방법인진 모르겠다.

userInputs.forEach(input => input.addEventListener('input', joinCheckInput));
userInputs.forEach(input => input.addEventListener('keyup', joinCheckInput));
