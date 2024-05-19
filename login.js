function validateEmail(email) {
  // 이메일 정규 표현식 패턴
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // 패턴과 입력 이메일 비교
  return emailPattern.test(email);
}

function validatePassword(password) {
  // 비밀번호 정규 표현식 패턴
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  // 패턴과 입력 비밀번호 비교
  return passwordPattern.test(password);
}

function submit() {
  // TODO: 
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (!validateEmail(email)) {
      // TODO: 이메일 예외처리
      document.getElementById('email').classList.add('error');
      document.getElementById('email-message').classList.add('error');
  } else {
      document.getElementById('email').classList.remove('error');
      document.getElementById('email-message').classList.remove('error');
  }

  if (!validatePassword(password)) {
      // TODO: 비밀번호 예외처리
      document.getElementById('password').classList.add('error');
  } else {
      document.getElementById('password').classList.remove('error');
  }

  console.log(email, password);
}


function keydown(event) {
  // console.log(event.key);
  // if (event.key === 'Enter') {
  //     submit();
  // }

  document.getElementById('email').classList.remove('error');
  document.getElementById('email-message').classList.remove('error');
}

document.querySelector('.form').addEventListener("focusout", ()=> {

});
