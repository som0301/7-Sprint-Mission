//DOM 요소에 접근
const email = document.getElementById("email");
const password = document.getElementById("password");
const nickname = document.getElementById("nickname");
const password_confirm = document.getElementById("password_confirm");
const errorMessage_email = document.querySelector(".error-message__email");
const errorMessage_password = document.querySelector(
  ".error-message__password"
);

//이메일 형식에 맞는지 확인
function isEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(String(email).toLowerCase());
}
//비밀번호가 8자 이상인지 확인
function isPassword(password) {
  const passwordPattern = /^.{8,}$/;
  return passwordPattern.test(password);
}
//이메일 유효성 검사
function checkEmail(email) {
  const emailValue = email.value;

  if (emailValue === "") {
    email.style.border = "2px solid #f74747";
    errorMessage_email.textContent = "이메일을 입력해주세요.";
    errorMessage_email.style.display = "block";
  } else if (!isEmail(emailValue)) {
    email.style.borderColor = "2px solid #f74747";
    errorMessage_email.textContent = "잘못된 이메일 형식입니다";
    errorMessage_email.style.display = "block";
  } else {
    email.style.borderColor = "";
    errorMessage_email.textContent = "";
    errorMessage_email.style.display = "none";
  }
}
//비밀번호 유효성 검사
function checkPassword(password) {
  const passwordValue = password.value;

  if (passwordValue === "") {
    password.style.border = "2px solid #f74747";
    errorMessage_password.textContent = "비밀번호를 입력해주세요.";
    errorMessage_password.style.display = "block";
  } else if (!isPassword(passwordValue)) {
    password.style.borderColor = "2px solid #f74747";
    errorMessage_password.textContent = "비밀번호를 8자 이상 입력해주세요.";
    errorMessage_password.style.display = "block";
  } else {
    password.style.borderColor = "";
    errorMessage_password.textContent = "";
    errorMessage_password.style.display = "none";
  }
}
//이벤트리스너 등록
email.addEventListener("focusout", () => {
  checkEmail(email);
});
password.addEventListener("focusout", () => {
  checkPassword(password);
});
