//이메일 유효성 검사 함수 : 정규표현식 사용//
function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  //이메일 입력 확인&이메일 형식 확인//
  const emailInput = document.querySelector('#email')
  emailInput.addEventListener('blur', function(e) {
      const errorMessage = document.querySelector('#email-error');
      if(emailInput.value === "") {
          emailInput.classList.add('error');
          errorMessage.textContent = '이메일을 입력해주세요.';
          emailValid = false;
      } else if (!isValidEmail(emailInput.value) && emailInput.value !== "") {
          emailInput.classList.add('error');
          errorMessage.textContent = '';
          errorMessage.textContent = '잘못된 이메일 형식입니다.';
          emailValid = false;
      } else {
          emailInput.classList.remove('error');
          errorMessage.textContent = '';
          emailValid = true;
      }
  });

   //비밀번호 입력 학인 & 비밀번호 8자이상 확인//
   const passwordInput = document.querySelector('#password');
   passwordInput.addEventListener('blur', function(e) {
       const pwErrorMessage = document.querySelector('#password-error');
       if(passwordInput.value === "") {
           passwordInput.classList.add('error');
           pwErrorMessage.textContent = '비밀번호를 입력해주세요.';
           passwordValid = false;
       } else if (passwordInput.value !== "" && passwordInput.value.length < 8) {
           passwordInput.classList.add('error');
           pwErrorMessage.textContent = '';
           pwErrorMessage.textContent = '비밀번호를 8자 이상 입력해주세요.';
           passwordValid = false;
       } else {
           passwordInput.classList.remove('error');
           pwErrorMessage.textContent = '';
           passwordValid = true;
       }
   });