

// 5.17 빨간색 라운드를 만들기 위해  DOM 요소를 접근하기 위해서 ID와Class 사용
const loginForm = document.getElementById("loginForm");
const signup = document.getElementById("signupFrom");
const emailInput = document.getElementById("email");
const nickNameInput = document.getElementById("nickName");
const passwordInput = document.getElementById("password");
const passwordConfirmation = document.getElementById("passwordConfirmation");
// 5.17 클래스 .auth-cotainer 에    폼 버튼 중에  타입이 sumit인 요소에 접근  이렇게 접근할 수 있다는게 신기함.
const sumbitButton = document.querySelector('.auth-container form button[type="submit"]');

 
// 5.17  이메일 유효성 검사 인터넷을 이용함. 
function validateEmail(email) {
  const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
  return emailRegex.test(email);
}



