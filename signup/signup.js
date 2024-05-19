const allInputs = document.querySelectorAll('input');
const emailInput = document.querySelector('#e-mail');
const nullErr = document.querySelector('.null-err');
const notAnEmailErr = document.querySelector('.not-an-email-err');

// focus가 될때 blue, blur가 될때 원래의 테두리를 가지는 코드(css스위치)
allInputs.forEach((input) => {
  input.addEventListener('focus', () => input.classList.add('focused-border'));
  input.addEventListener('blur', () => {
    input.classList.remove('focused-border');
  });
});

// 이메일 유효성 검사 코드 - 반환값은 3개이다. true/false/이메일확인용변수
let notAnEmail = 2; // <- 반환값 확인용 변수 선언. -> let? const?
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

// focus가 될때 실행될 코드
emailInput.addEventListener('focus', function () {
  emailInput.classList.add('focused-border'); //focus 기본동작

  //빈값 에러가 존재한다면 실행될 코드
  if (nullErr.style.display === 'block') {
    emailInput.addEventListener('keyup', function () {
      emailInput.classList.remove('err-border');
      nullErr.style.display = 'none';
    });
  }
  //유효성x 에러가 존재한다면 실행될 코드
  if (notAnEmailErr.style.display === 'block') {
    // 만약 이메일 유효성 에러div가 존재한다면
    emailInput.addEventListener('keyup', function (e) {
      //사용자의 값을 받는 keyup실행
      const emailValue = e.target.value;
      if (isEmailValid(emailValue) === notAnEmail) {
        //이메일값이 유효 x 그냥 에러 그대로
        //nothing
      } else if (isEmailValid(emailValue)) {
        //만약 이메일값이 유효하다면 그즉시 에러와 메시지 삭제.
        emailInput.classList.remove('err-border');
        notAnEmailErr.style.display = 'none';
      } else {
        //nothing
      }
    });
  }
});

//blur(이벤트를 잃었을 때) 가 됬을때 이벤트 실행할 것.
emailInput.addEventListener('blur', function (e) {
  emailInput.classList.remove('focused-border'); //focus 테두리 제거
  const emailValue = e.target.value; // 사용자가 입력했던 값 받기

  // 사용자가 입력했던 값 유효성 검사하기
  if (!isEmailValid(emailValue)) {
    emailInput.classList.add('err-border'); // 오류테두리 추가
    nullErr.style.display = 'block'; // 빈값메시지 block
    notAnEmailErr.style.display = 'none'; // 만약 에러메시지 중복일 경우 삭제 위한 코드
  } else if (isEmailValid(emailValue) === notAnEmail) {
    emailInput.classList.add('err-border'); // 오류테두리 추가
    notAnEmailErr.style.display = 'block'; // 이메일유효성 에러 메시지 block
    nullErr.style.display = 'none'; // 만약 에러메시지 중복일 경우 삭제 위한 코드
  } else {
    nullErr.style.display = 'none';
    notAnEmailErr.style.display = 'none';
    emailInput.classList.remove('err-border');
  }
});

// ---------------------닉네임---------------

const nameInput = document.querySelector('#user-name');
const nameErr = document.querySelector('.null-name-err');

// 닉네임의 인풋창이 이벤트를 잃었을 때 blur일 경우 실행될 함수
nameInput.addEventListener('blur', function () {
  nameInput.classList.remove('focused-border'); // 기존 실행될 focusout 코드
  const userName = nameInput.value;
  if (userName === '') {
    nameErr.style.display = 'block';
    nameInput.classList.add('err-border');
  } else {
    nameErr.style.display = 'none';
    nameInput.classList.remove('err-border');
  }
});

// 만약 사용자가 에러를 발견하고 focus했을 때 실행할 함수.
nameInput.addEventListener('focus', function () {
  if (nameErr.style.display === 'block') {
    //에러메시지가 존재한다면
    nameInput.addEventListener('keyup', function () {
      //키가 한개라도 눌렀을 경우
      nameErr.style.display = 'none'; // 초기화
      nameInput.classList.remove('err-border'); // 초기화
    });
  }
});

// ------------비밀번호 ------------------

const pwdInput = document.querySelector('#pwd');
const pwdNullErr = document.querySelector('.pwd-null-err');
const pwdShortErr = document.querySelector('.pwd-is-short-err');

// pwd인풋이 이벤트를 잃었을 경우 실행할 함수.
pwdInput.addEventListener('blur', function () {
  // 사용자 값 다루기위한 내부스코프 변수 선언.
  const userPwdValue = pwdInput.value;
  if (userPwdValue === '') {
    pwdNullErr.style.display = 'block';
    pwdInput.classList.add('err-border');
    pwdShortErr.style.display = 'none'; // 에러 메세지 중복 방지
  } else if (userPwdValue.length < 8) {
    pwdShortErr.style.display = 'block';
    pwdInput.classList.add('err-border');
    pwdNullErr.style.display = 'none'; // 에러 메세지 중복 방지
  }
});

// 만약 사용자가 에러를 발견하고 focus했을 때 실행할 함수.
pwdInput.addEventListener('focus', function () {
  //빈값을 수정하려 할 경우
  if (pwdNullErr.style.display === 'block') {
    pwdInput.addEventListener('keyup', function () {
      pwdNullErr.style.display = 'none';
      pwdInput.classList.remove('err-border');
    });
    // 8글자가 안되서 수정하려 할 경우
  } else if (pwdShortErr.style.display === 'block') {
    pwdInput.addEventListener('keyup', function () {
      if (pwdInput.value.length >= 8) {
        // 8글자이상이 되는 순간 에러와 메시지 삭제
        pwdShortErr.style.display = 'none';
        pwdInput.classList.remove('err-border');
      }
    });
  }
});

// ------------ 비밀번호 확인

const pwdCheckInput = document.querySelector('#pwd-check');
const pwdNotCorrectErr = document.querySelector('.pwd-is-not-correct');

pwdCheckInput.addEventListener('keyup', function () {
  const userPwdValue = pwdInput.value;
  const userPwdCheckValue = pwdCheckInput.value;

  if (userPwdValue === userPwdCheckValue) {
    //만약 비밀번호의 인풋의 값이 존재한다면,
    pwdCheckInput.classList.add('correct-border'); // 비밀번호가 일치하는 순간 초록색창으로 변경.
    pwdCheckInput.classList.remove('err-border'); // 중복 제거
  } else {
    //
    pwdCheckInput.classList.add('err-border');
    pwdCheckInput.classList.remove('correct-border');
  }
});

pwdCheckInput.addEventListener('blur', function () {
  const userPwdValue = pwdInput.value;
  const userPwdCheckValue = pwdCheckInput.value;
  pwdCheckInput.classList.remove('correct-border');
  if (!userPwdValue === userPwdCheckValue) {
    pwdCheckInput.classList.add('err-border');
    pwdCheckInput.classList.remove('correct-border');
    pwdNotCorrectErr.style.display = 'block'; //안먹힘 왜???????
  } else if (userPwdCheckValue === '') {
    pwdCheckInput.classList.add('err-border');
    pwdCheckInput.classList.remove('correct-border');
  }
});

pwdCheckInput.addEventListener('focus', function () {
  const userPwdValue = pwdInput.value;
  const userPwdCheckValue = pwdCheckInput.value;
  if (!userPwdValue === userPwdCheckValue) {
    pwdCheckInput.classList.add('err-border');
    pwdCheckInput.classList.remove('correct-border');
    pwdNotCorrectErr.style.display = 'block';
  } else {
    pwdCheckInput.classList.remove('err-border');
    pwdNotCorrectErr.style.display = 'none';
  }
});

const joinBtn = document.querySelector('.for-submit');

// 4개의 인풋 값들이 focus가 아웃됬을때 실행될 활성화용 버튼 함수.
function checkBtn() {
  if (
    //활성화될 조건들 나열하기.
    isEmailValid(emailInput.value) &&
    !nameInput === '' &&
    pwdInput.value === pwdCheckInput.value
  ) {
    joinBtn.disabled = false;
    joinBtn.classList.add('active-button');
    joinBtn.classList.remove('inactive-button');
  } else {
    joinBtn.disabled = true;
    joinBtn.classList.remove('active-button');
    joinBtn.classList.add('inactive-button');
  }
}

//실패 ㅠㅜ
allInputs.forEach((input) => {
  input.addEventListener('blur', checkBtn());
});
