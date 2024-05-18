const allInputs = document.querySelectorAll('input');
const emailInput = document.querySelector('#LOGIN-id');
const nullErr = document.querySelector('.null-err');
const notAnEmailErr = document.querySelector('.not-an-email-err');

// focus가 될때 blue, blur가 될때 원래의 테두리를 가지는 코드(css스위치)
allInputs.forEach((input) => {
  input.addEventListener('focus', () => input.classList.add('focused-border'));
  input.addEventListener('blur', () =>
    input.classList.remove('focused-border')
  );
});

//유효성 검사 코드
const notAnEmail = 2; // <- 반환값 확인용 변수 선언.
function isEmailValid(email) {
  // 이메일 정규표현식
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // 입력값이 빈 값인지 확인하고, 이메일 유효성 검사
  if (email.trim() === '') {
    return false;
  } else if (!emailRegex.test(email)) {
    return notAnEmail;
  }
  return true;
}

//이메일이 빈값 일경우
function IsNullValue() {
  nullErr.style.display = 'block';
  notAnEmailErr.style.display = 'none';
  emailInput.classList.add('err-border');
}
//이메일이 올바르지 않을경우
function IsNotEmail() {
  notAnEmailErr.style.display = 'block';
  nullErr.style.display = 'none';
  emailInput.classList.add('err-border');
}
//이메일이 완벽하게 올바를 경우
function IsCorrect() {
  nullErr.style.display = 'none';
  notAnEmailErr.style.display = 'none';
  emailInput.classList.remove('err-border');
}

//focusout이 됬을 때 실행할 함수.
emailInput.addEventListener('focusout', function () {
  const inputValue = emailInput.value;
  if (!isEmailValid(inputValue)) {
    //빈값 일경우
    IsNullValue();
  } else if (isEmailValid(inputValue) === notAnEmail) {
    //이메일이 올바르지 않을경우
    IsNotEmail();
  } else if (isEmailValid(inputValue)) {
    //올바를 경우
    IsCorrect();
  }
});

// input 이벤트리스너

// --------------------------------------------
// 비밀번호

const pwdInput = document.querySelector('#LOGIN-pwd');
const pwdNullErr = document.querySelector('.pwd-null-err');
const pwdShortErr = document.querySelector('.pwd-is-short-err');

pwdInput.addEventListener('focusout', function () {
  const passwordValue = pwdInput.value.trim();

  //리셋기능
  pwdNullErr.style.display = 'none';
  pwdShortErr.style.display = 'none';
  pwdInput.classList.remove('err-border');

  if (passwordValue === '') {
    // 빈문자열일떄
    pwdNullErr.style.display = 'block';
    pwdInput.classList.add('err-border');
  } else if (passwordValue.length < 8) {
    // 8글자미만일때
    pwdShortErr.style.display = 'block';
    pwdInput.classList.add('err-border');
  }
});

// -------------------------
// 로그인 버튼 활성화
const loginForm = document.querySelector('#login-form');
const loginBtn = document.querySelector('#login-btn');

// 버튼 유효성 검사용 콜백함수.
function btnValidate() {
  if (
    // 버튼이 off 될 수 있는 조건들
    emailInput.value === '' || // 이메일 빈값
    pwdInput.value === '' || // 패스워드 빈값
    notAnEmailErr.style.display === 'block' || //에러메시지가 떠있을 경우
    nullErr.style.display === 'block' ||
    pwdNullErr.style.display === 'block' ||
    pwdShortErr.style.display === 'block' ||
    pwdInput.value.length < 8 || //비밀번호가 8자리 이하일 경우
    isEmailValid(emailInput.value) === false || // 이메일 유효성 검사 실패일 경우
    isEmailValid(emailInput.value) === notAnEmail
  ) {
    loginBtn.disabled = true;
    loginBtn.classList.remove('correct-btn');
  } else {
    loginBtn.disabled = false;
    loginBtn.classList.add('correct-btn');
  }
}

// 버튼에 생동감을 주기 위한 keyup 이벤트
emailInput.addEventListener('keyup', btnValidate);
pwdInput.addEventListener('keyup', btnValidate);

// 이메일과 pwd 포커스 아웃일때 실행할 btn 이벤트
emailInput.addEventListener('focusout', btnValidate);
pwdInput.addEventListener('focusout', btnValidate);
