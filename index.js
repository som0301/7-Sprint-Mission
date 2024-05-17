const inputEmail = document.getElementById('email');
const inputPassword = document.getElementById('password');
const emailError = document.createElement('div');
const passwordError = document.createElement('div');

emailError.classList.add('changeRed');
passwordError.classList.add('changeRed');

inputEmail.parentElement.appendChild(emailError);
inputPassword.parentElement.appendChild(passwordError);

function emailEr() { 
  if(inputEmail.value == "") { 
    inputEmail.classList.add('errorBorder');
    emailError.innerText = '이메일을 입력해주세요.';
  } else { 
    emailError.innerText = '';
  }
}

function passwordEr() { 
  if(inputPassword.value === '') { 
    inputPassword.classList.add('errorBorder');
    passwordError.innerText = '비밀번호를 입력해주세요.';
  } 
}

inputEmail.addEventListener('focusout', emailEr);
inputPassword.addEventListener('focusout', passwordEr);