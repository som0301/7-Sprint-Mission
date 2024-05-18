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

//사용자가 에러를 발견하고 다시 input창에 키프레스를 누르는 순간 모든에러제거.

// 만약 올바르지 않는다는 에러메세지의 스타일이 블록이라면 다음 코드를 실행해라.
