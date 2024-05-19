
document.addEventListener("DOMContentLoaded", () => {

// 5.18 is가 들어가는 변수명은 일반적으로 유효성 
// 검사 결과를 나타내기 위해 사용되는 관례라고한다. 그냥 변수명일 뿐이긴한데 
// 각 인풋에서 검사 값을 초기화 하는 용도로 생각하고 다음에 더 자세히 찾아 볼것!!


  let isEmailValid = false; // 이메일 유효성 검사 결과 초기화
  let isNicknameValid = false; // 비밀번호 유효성 검사 결과 초기화
  let isPasswordValid = false; // 닉네임 유효성 검사 결과 초기화
  let isPasswordConfirmationValid = false; // 비밀번호 확인 유효성 검사 결과 초기화





  // 5.17 빨간색 라운드를 만들기 위해  DOM 요소를 접근하기 위해서 ID와Class 사용
  const loginForm = document.getElementById("loginForm");
  const signupForm = document.getElementById("signupForm");
  const emailInput = document.getElementById("email");
  const nicknameInput = document.getElementById("nickname");
  const passwordInput = document.getElementById("password");
  const passwordConfirmationInput = document.getElementById("passwordConfirmation");
  // 5.17 클래스 .auth-cotainer 에    폼 버튼 중에  타입이 sumit인 요소에 접근  이렇게 접근할 수 있다는게 신기함.
  const submitButton = document.querySelector('.auth-container form button[type="submit"]');

  
  // 5.17  정규식유효성 검사 인터넷을 이용함. 
  function validateEmailString(email) {
    const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    return emailRegex.test(email);
  }


  //  5.18 에러가 발생 되었을 때 에러 보여주는 함수 만들기 
  function showError(input, errorId) {
    const errorElement = document.getElementById(errorId);
    errorElement.style.display = "block";
    input.style.border = "1px solid #f74747"
  }

  //  원상복귀 되는 함수 
  function hideError(input, errorId) {
    const errorElement = document.getElementById(errorId);
    errorElement.style.display = "none"
    input.style.border = "none"
  }

  // 이메일 유효성 검사  Validty (타당성)
  function checkEmailValidity() {
    const emailValue = emailInput.value.trim();  // 이메일 입력에서 값을 양쪽 공백을 제거하고 가져옴
    // 5. 18 trim 은    양쪽 공백을 제거 하는데 사용됨!!
    //  이메일유효성이 실패할경우
    isEmailValid = false; // 5.18 유효성 초기화 부분인데 명확하게 이해는 되지 않는다 
    // 추측하기로는 일단 isEailValid 변수에 false 즉 거짓 값을 넣고  제출 버튼에서 이메일이 
    // 비어 있지 않고 유효한 값을 가진 이메일 값이면 값을 true로  바꾸고  updateSubmitButtonState
    // 에서 !를 사용하여 거짓으로 만들어 스위치를  활성화 용도로 사용되는 것으로 생각된다. 
    hideError(emailInput, "emailEmptyError"); // 빈오류 메시지 숨김
    hideError(emailInput, "emailInvalidError");  // 유효하지 않은 이메일 오류 메시지 숨김

    if(!emailValue) {   // 이메일 값이 비어 있는 경우
      showError(emailInput, "emailEmptyError"); // 빈 이메일 오류 메시지 표시
    } else if (!validateEmailString(emailValue)) { // 이메일 값이 유효한 형식이 아닌 경우
      showError(emailInput, "emailInvalidError"); // 유효하지 않은 이메일 오류 메시지 표시
    } else {
      isEmailValid = true; // 이메일 값이 유효한 경우
      hideError(emailInput, "emailEmptyError"); // 빈 이메일 오류 메시지 숨김
      hideError(emailInput, "emailInvalidError"); // 유효하지 않은 이메일 오류 메시지 숨김
    }
    updateSubmitButtonState(); // 제출 버튼 상태 업데이트
  }

  // 비밀번호 유효성 검사 
  function checkPasswordValidity () {
    const passwordValue = passwordInput.value.trim(); // 비밀번호 입력에서 값을 양쪽 공백을 제거하고 가져옴
    isPasswordValid = false; // 비밀번호 유효성 검사 초기화
    hideError(passwordInput, "passwordEmptyError");  // 빈 비밀번호 일 때 오류 메세지 숨김
    hideError(passwordInput, "passwordInvalidError"); // 유효하지 않은 비밀번호 오류 메시지 숨김

    if(!passwordValue) {  // 비밀번호 값이 거짓 일때 
      showError(passwordInput, "passwordEmptyError"); // 비밀번호가 비어있다는 메시지 표시
    } else if (passwordValue.length < 8) { // 비밀번호가 8자리 미만일 경우
      showError(passwordInput, "passwordInvalidError"); // 비밀번호 8자리이상 메시지 표시
    } else { // 비밀번호가 정상적으로 입력 되었을 때 
      isPasswordValid = true; // 비밀번호 유효성 검사 값 참이 된다.
      hideError(passwordInput, "passwordEmptyError"); // 비밀번호 입력 메시지 삭제
      hideError(passwordInput, "passwordInvalidError"); // 비밀번호 8자 이상 메시지 삭제
    }
    updateSubmitButtonState();
  }

    // 비밀번호 확인 유효성 검사
    function checkPasswordConfirmationValidity() {
      const passwordConfirmationValue = passwordConfirmationInput.value.trim();
      isPasswordConfirmationValid = false;

      hideError(passwordConfirmationInput, "passwordConfirmationError");
      hideError(passwordConfirmationInput, "passwordConfirmationInitError");

      if (!isPasswordValid) {
        showError(passwordConfirmationInput, "passwordConfirmationInitError");
      } else if (  // or 연사자를 사용해서  비밀번호 확인란이 비어 있거나 비밀번호값과 일치 하지 않을 경우!
        !passwordConfirmationValue ||
        passwordConfirmationValue !== passwordInput.value.trim()
      ) {
        showError(passwordConfirmationInput, "passwordConfirmationError");
      } else {
        isPasswordConfirmationValid = true;
        hideError(passwordConfirmationInput, "passwordConfirmationError");
        hideError(passwordConfirmationInput, "passwordConfirmationInitError");
      }
      updateSubmitButtonState();
    }

  // 닉네임 유효성 검사
  function checkNicknameValidity() {
    const nicknameValue = nicknameInput.value.trim();
    isNicknameValid = false;
    hideError(nicknameInput, "nicknameEmptyError");

    if (!nicknameValue) {  // 닉네임이 비어 있을 경우
      showError(nicknameInput, "nicknameEmptyError");
    } else {
      isNicknameValid = true;
      hideError(emailInput, "nicknameEmptyError");
    }
    updateSubmitButtonState();
  }


  //  유효성검사를 다끝내고 버튼 활성화 시키는 함수
  function updateSubmitButtonState() {
    let isFormValid = isEmailValid && isPasswordValid; // 이메일과 비밀번호가 유효 할 경우

    if (signupForm) { // 회원 가입페이지에서 사용 될 경우를 if로 만들어줌
      isFormValid = isFormValid && isNicknameValid && isPasswordConfirmationValid; 
    }

    submitButton.disabled = !isFormValid;  // 5.19  HTML의 <input type='button'> 태그를 사용한 버튼을 
    // 활성화/비활성화 할때는 disabled 속성을 이용한다고 한다. 자바스크립트에서 subitButton.disabled = 값이 거짓이면 버튼이 활성화 되고 참이면 비활성화 된다.
  }

  //  이벤트 리스너 추가해서 동작하게 만듬
  if (emailInput) {  // 이메일 인풋에서 포커스 아웃을 하면 이메일 유효성검사를 시작
    emailInput.addEventListener("focusout", checkEmailValidity);
  }
  if (nicknameInput) {  // 닉네임 인풋에서 포커스 아웃을 하면 닉네임 유효성검사를 시작
    nicknameInput.addEventListener("focusout", checkNicknameValidity);
  }
  if (passwordInput) { // 비밀번호 인풋에서 5.19 인풋 이벤트 (input 이벤트는 사용자가 값을 수정할 때마다 발생합니다.)
    // 비밀번호인풋은 input 이벤트를 사용하는이유가 로그인시 비밀번호가 마지막이기 때문에 focusout 보단 input이 더 효율적이라고 한다.
  passwordInput.addEventListener("input", checkPasswordValidity);  // 
  }
  if (passwordConfirmationInput) {  // 비밀번호랑 마찬가지로 회원가입에서 비밀번호 확인 인풋이 마지막이라 input 이벤트를 사용한다. 
    passwordConfirmationInput.addEventListener("input", checkPasswordConfirmationValidity);
  }


  // 페이지 첫 로드 시 submit 버튼 비활성 만들기
  updateSubmitButtonState();

  if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault(); // 5.19  로드시  이벤트sumit을 만들고 preventDefault 속성 부여를 통해 
      if (isEmailValid && isPasswordValid) {    // 5.19 폼의 유효성 검사 결과에 따라 조건문을 추가하여 유효성 검사가 통과된 경우에만 리디렉션을 수행.
      window.location.href = "items.html";
      } else {
        alert("Please fill in the form correctly.");
      }
    });
  }

  if (signupForm) {
    signupForm.addEventListener("submit", function (event) {
      event.preventDefault();
      if (
        isEmailValid &&
        isPasswordValid &&
        isNicknameValid &&
        isPasswordConfirmationValid
      ) {
        window.location.href = "signup.html";
      } else {
        alert("Please fill in the form correctly.");
      }
    });
  }
});
