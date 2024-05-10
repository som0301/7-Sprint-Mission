// 로그인 버튼 가져오기
const signupBtn = document.getElementById('signup-btn');

// 이메일, 비밀번호 유효성 검사 상태 초기화
let emailIsValid = false;
let passwordIsValid = false;
let passwordIsValid2 = false;

// 유효성 검사 상태 업데이트 함수
function updateSignupBtn() {
  signupBtn.disabled = !(emailIsValid && passwordIsValid && passwordIsValid2);
  btnActive ();
}

// 에러메시지 스타일 지정
function setErrorStyle(input, isValid) {
  if(!isValid) {
    input.style.border = '1px solid #F74747';
    input.style.backgroundColor = '#F3F4F6';
    input.addEventListener('focus', function(event) {
      event.target.style.outline = 'none'; // 포커스 상태에서 아웃라인 제거
    });
  } else {
    input.style.border = 'none';
    input.style.backgroundColor = ''; //초기 배경색으로 재설정 
  }
}

function emailError(isValid) {
  setErrorStyle(emailInput, isValid);
}

function pwError(isValid) {
  setErrorStyle(passwordInput, isValid);
}

function pwError2(isValid) {
  setErrorStyle(passwordRepeatInput, isValid);
}

// 유효성 검사
//// 이메일
const emailInput = document.querySelector('.email-input'); // 이메일 input 가져오기
const emptyEmailInputMessage = document.querySelector('.emptyEmailInput-message'); // 입력해주세요.
const emailFailureMessage = document.querySelector('.emailFailure-message'); // 잘못된 이메일 형식입니다

// 유효성 검증 함수: 형식에 맞으면 true / 틀리면 false 반환
function checkEmailFormat(str) {
  return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i.test(str);
}

// 포커스 아웃 됐을 때 이벤트 핸들러 안의 내용이 실행됨
emailInput.addEventListener('focusout', function() {
  // 유효성 검사 메시지 다 숨기고 시작
  emptyEmailInputMessage.classList.add('hide');
  emailFailureMessage.classList.add('hide');

  // 이메일 입력한 경우
  if(emailInput.value.length !== 0) {
    // 형식이 틀렸을 경우
    if(!checkEmailFormat(emailInput.value)) {
      emptyEmailInputMessage.classList.add('hide'); // '입력해주세요' 가림
      emailFailureMessage.classList.remove('hide'); // '잘못된 이메일 형식입니다' 노출
      emailIsValid = false;
    } else {
      //형식에 맞게 잘 적은 경우
      emptyEmailInputMessage.classList.add('hide'); // '입력해주세요' 가림
      emailFailureMessage.classList.add('hide'); // '잘못된 이메일 형식입니다' 노출      
      emailIsValid = true;
    }
  } else {
    // 이메일 입력하지 않은 경우
    emptyEmailInputMessage.classList.remove('hide'); //'입력해주세요.' 노출
    emailFailureMessage.classList.add('hide'); // '잘못된 이메일 형식입니다' 가림
    emailIsValid = false;
  }
  // 유효성 검사 결과에 따른 추가작업
  emailError(emailIsValid);
  updateSignupBtn();
});

//// 비밀번호
const passwordInput = document.querySelector('.password-input'); //비밀번호 input 가져오기
const emptyPwInputMessage = document.querySelector('.emptyPwInput-message'); // 입력해주세요.
const pwFailureMessage = document.querySelector('.pwFailure-message'); // 비밀번호를 8자 이상 입력해주세요.

// 유효성 검증 함수: 형식에 맞으면 true / 틀리면 false 반환
function checkPwFormat(value) {
  return value.length >=8;
}

// 비밀번호: 포커스 아웃 됐을 때 이벤트 핸들러 안의 내용이 실행됨
passwordInput.addEventListener('focusout', function() {
  // 유효성 검사 메시지 다 숨기고 시작
  emptyPwInputMessage.classList.add('hide');
  pwFailureMessage.classList.add('hide');
  // 비밀번호 입력한 경우
  if(passwordInput.value.length !== 0) {
    // 형식이 틀렸을 경우
    if(!checkPwFormat(passwordInput.value)) {
      emptyPwInputMessage.classList.add('hide'); // '입력해주세요' 가림
      pwFailureMessage.classList.remove('hide'); // '비밀번호를 8자 이상 입력해주세요.' 노출
      passwordIsValid = false;
    } else {
      //형식에 맞게 잘 적은 경우
      emptyPwInputMessage.classList.add('hide'); // '입력해주세요' 가림
      pwFailureMessage.classList.add('hide'); // '비밀번호를 8자 이상 입력해주세요.' 노출      
      passwordIsValid = true;
    }
  } else {
    // 이메일 입력하지 않은 경우
    emptyPwInputMessage.classList.remove('hide'); //'입력해주세요.' 노출
    pwFailureMessage.classList.add('hide'); // '비밀번호를 8자 이상 입력해주세요.' 가림
    passwordIsValid = false;
  }
  // 유효성 검사 결과에 따른 추가작업
  pwError(passwordIsValid);
  updateSignupBtn();
});

//// 비밀번호 확인
const passwordRepeatInput = document.querySelector('.password_repeat-input'); //비밀번호 input 가져오기
const pwRepeatFailureMessage = document.querySelector('.pwRepeatFailure-message'); // 비밀번호를 8자 이상 입력해주세요.
const emptyPwRepeatInputMessage = document.querySelector('.emptyPwRepeatInput-message'); // 입력해주세요.
const identityRepeatMessage = document.querySelector('.identityRepeat-message'); // 비밀번호가 일치하지 않습니다.

// 비밀번호 확인: 포커스 아웃 됐을 때 이벤트 핸들러 안의 내용이 실행됨
passwordRepeatInput.addEventListener('focusout', function() {
  // 유효성 검사 메시지 다 숨기고 시작
  emptyPwRepeatInputMessage.classList.add('hide');
  pwRepeatFailureMessage.classList.add('hide');
  identityRepeatMessage.classList.add('hide');
  // 비밀번호 입력한 경우
  if(passwordRepeatInput.value.length !== 0) {
    // 형식이 틀렸을 경우
    if(!checkPwFormat(passwordRepeatInput.value)) {
      emptyPwRepeatInputMessage.classList.add('hide'); // '입력해주세요' 가림
      pwRepeatFailureMessage.classList.remove('hide'); // '비밀번호를 8자 이상 입력해주세요.' 노출
      passwordIsValid2 = false;
    } else if (passwordInput.value !== passwordRepeatInput.value) {
      emptyPwRepeatInputMessage.classList.add('hide'); // '입력해주세요' 가림
      pwRepeatFailureMessage.classList.add('hide'); // '비밀번호를 8자 이상 입력해주세요.' 가림
      identityRepeatMessage.classList.remove('hide'); // '비밀번호가 일치하지 않습니다.' 노출 
      passwordIsValid2 = false;    
    } else {
      //형식에 맞게 잘 적은 경우
      emptyPwRepeatInputMessage.classList.add('hide'); // '입력해주세요' 가림
      pwRepeatFailureMessage.classList.add('hide'); // '비밀번호를 8자 이상 입력해주세요.' 가림
      identityRepeatMessage.classList.add('hide'); // '비밀번호가 일치하지 않습니다.' 가림 
      passwordIsValid2 = true;
    }
  } else {
    // 비밀번호 입력하지 않은 경우
    emptyPwRepeatInputMessage.classList.remove('hide'); //'입력해주세요.' 노출
    pwRepeatFailureMessage.classList.add('hide'); // '비밀번호를 8자 이상 입력해주세요.' 가림
    passwordIsValid2 = false;
  }
  // 유효성 검사 결과에 따른 추가작업
  pwError2(passwordIsValid2);
  updateSignupBtn();
});

// 로그인 버튼 활성화 시 리다이렉션
function redirectToItems() {
  window.location.href = '/signup.html';
}

// 유효성 검사 후 로그인 버튼 색상 변경, 링크 추가
function btnActive () {
  console.log('signupBtn.disabled: ' + signupBtn.disabled);
  console.log("btnActive called", emailIsValid, passwordIsValid, passwordIsValid2);
  if(signupBtn.disabled) { // 로그인버튼 비활성화
    signupBtn.style.backgroundColor = ""; // 초기 색상으로 재설정
    // 비활성화 상태에서는 이벤트 리스너 제거
    signupBtn.removeEventListener('click', redirectToItems);
  } else { // 로그인 버튼 비활성화
    console.log('emailIsValid: ' + emailIsValid, 'passwordIsValid: ' + passwordIsValid, 'passwordIsValid2: ' + passwordIsValid2);
    signupBtn.style.backgroundColor = "#3692FF";
    signupBtn.addEventListener('click', redirectToItems);
  }
}

// 가시성 토글 버튼 passwordInput
const togglePassword = document.querySelector('.password-toggle-icon i');
const togglePassword2 = document.querySelector('.password-toggle-icon2 i');

togglePassword.addEventListener('click', function() {
  if(passwordInput.type === 'password') {
    passwordInput.type = 'text';
    togglePassword.classList.add('fa-eye');
    togglePassword.classList.remove('fa-eye-slash');
  } else {
    passwordInput.type = 'password';
    togglePassword.classList.add('fa-eye-slash');
    togglePassword.classList.remove('fa-eye');
  }
})

togglePassword2.addEventListener('click', function() {
  if(passwordRepeatInput.type === 'password') {
    passwordRepeatInput.type = 'text';
    togglePassword2.classList.add('fa-eye');
    togglePassword2.classList.remove('fa-eye-slash');
  } else {
    passwordRepeatInput.type = 'password';
    togglePassword2.classList.add('fa-eye-slash');
    togglePassword2.classList.remove('fa-eye');
  }
})