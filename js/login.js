const userEmail = document.querySelector('#email');
const userPwd = document.querySelector('#password');
const loginBtn = document.querySelector('.btn-login');

const errorMsgEmail = document.querySelector('.error-msg-email');
const errorMsgPwd = document.querySelector('.error-msg-pwd');

const pwdVisibility = document.querySelector('.btn-visibility');

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

// 눈버튼 토글
function passwordToggle() {
  if (userPwd.getAttribute('type') === 'password') {
    userPwd.setAttribute('type', 'text');
    pwdVisibility.src = '/images/eye-on.png';
  } else {
    userPwd.setAttribute('type', 'password');
    pwdVisibility.src = '/images/eye-off.png';
  }
}

// 로그인 버튼 비활성화
function loginCheckInput() {
  const emailValue = userEmail.value;
  const passwordValue = userPwd.value;

  const isEmpty = emailValue === '' || passwordValue === ''; // 비어있거나
  const isError = errorMsgEmail.textContent !== '' || errorMsgPwd.textContent !== ''; // 에러가 있거나(에러메시지로 체크)

  loginBtn.disabled = isError || isEmpty;
}

//이벤트 핸들러 추가
pwdVisibility.addEventListener('click', passwordToggle);

const userInputs = [userEmail, userPwd];
const valids = [validEmail, validPwd];

for (let i = 0; i < valids.length; i++) userInputs[i].addEventListener('focusout', valids[i]);
for (let i = 0; i < valids.length; i++) userInputs[i].addEventListener('keyup', valids[i]);

userInputs.forEach(input => input.addEventListener('input', loginCheckInput));
userInputs.forEach(input => input.addEventListener('keyup', loginCheckInput));
