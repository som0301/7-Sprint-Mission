// 이메일 유효성
function emailCheck(email) {
  const email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
  return email_regex.test(email);
}

export function validEmail({ target }) {
  const errorMsgEmail = target.nextElementSibling;
  const email = target.value;

  if (email === '') {
    errorMsgEmail.textContent = '이메일을 입력해주세요.';
    target.classList.add('error-input');
  } else {
    if (emailCheck(email)) {
      errorMsgEmail.textContent = '';
      target.classList.remove('error-input');
    } else {
      errorMsgEmail.textContent = '잘못된 이메일 형식입니다.';
      target.classList.add('error-input');
    }
  }
}

// 닉네임 공백 체크
export function validNickname({ target }) {
  const errorMsgNickname = target.nextElementSibling;
  const nickname = target.value;

  if (nickname === '') {
    errorMsgNickname.textContent = '닉네임을 입력해주세요';
    target.classList.add('error-input');
  } else {
    errorMsgNickname.textContent = '';
    target.classList.remove('error-input');
  }
}

// 비밀번호 길이 체크
function passwordCheck(pwd) {
  return pwd.length >= 8;
}

export function validPwd({ target }) {
  const errorMsgPwd = target.nextElementSibling.nextElementSibling;
  const pwd = target.value;

  if (pwd === '') {
    errorMsgPwd.textContent = '비밀번호를 입력해주세요.';
    target.classList.add('error-input');
  } else {
    if (passwordCheck(pwd)) {
      errorMsgPwd.textContent = '';
      target.classList.remove('error-input');
    } else {
      errorMsgPwd.textContent = '비밀번호를 8자 이상 입력해주세요.';
      target.classList.add('error-input');
    }
  }
}

// 비밀번호 확인
function isMatch(pwd, rep) {
  return pwd === rep;
}

export function validRepeat({ target }) {
  const userPwd = target.parentElement.previousElementSibling;
  const userPwdRepeat = target;
  const errorMsgRepeat = userPwdRepeat.nextElementSibling.nextElementSibling;

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

// 로그인 버튼 비활성화
// 로그인과 회원가입 버튼 활성화/비활성화를 나눠놨지만 하나의 함수로 할 수 있게 수정할 계획..!!!
export function loginCheckInput() {
  const userEmail = document.querySelector('#email');
  const userPwd = document.querySelector('#password');

  const loginBtn = document.querySelector('.btn-login');

  const emailValue = userEmail.value;
  const passwordValue = userPwd.value;

  const isEmpty = emailValue === '' || passwordValue === ''; // 비어있거나
  const isError = userEmail.nextElementSibling !== '' || userPwd.nextElementSibling.nextElementSibling !== ''; // 에러가 있거나(에러메시지로 체크)

  loginBtn.disabled = isError || isEmpty;
}

// input이 맞게 들어갔는지 확인
export function joinCheckInput() {
  const userEmail = document.querySelector('#email');
  const userNickname = document.querySelector('#nickname');
  const userPwd = document.querySelector('#password');
  const userPwdRepeat = document.querySelector('#password-repeat');

  const loginBtn = document.querySelector('.btn-login');

  const emailValue = userEmail.value;
  const nicknameValue = userNickname.value;
  const passwordValue = userPwd.value;
  const pwdRepeatValue = userPwdRepeat.value;

  const isEmpty = emailValue === '' || nicknameValue === '' || passwordValue === '' || pwdRepeatValue === '';
  const isError =
    userEmail.nextElementSibling.textContent !== '' ||
    userNickname.nextElementSibling.textContent !== '' ||
    userPwd.nextElementSibling.nextElementSibling.textContent !== '' ||
    userPwdRepeat.nextElementSibling.nextElementSibling.textContent !== '';

  loginBtn.disabled = isError || isEmpty;
}

// 눈버튼 토글
export function passwordToggle({ target }) {
  // 이벤트 타겟은 visibility 아이콘
  const pwd = target.previousElementSibling; // 비밀번호 인풋
  if (pwd.getAttribute('type') === 'password') {
    pwd.setAttribute('type', 'text');
    pwd.nextElementSibling.src = '/images/eye-on.svg';
  } else {
    pwd.setAttribute('type', 'password');
    pwd.nextElementSibling.src = '/images/eye-off.svg';
  }
}
