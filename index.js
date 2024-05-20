const inputEmail = document.getElementById('email');
const inputPassword = document.getElementById('password');
const inputNickname = document.getElementById('nickname');
const loginButton = document.querySelector('.button');
const emailError = document.createElement('div');
const passwordError = document.createElement('div');
const nicknameError = document.createElement('div');

emailError.classList.add('changeRed');
passwordError.classList.add('changeRed');
nicknameError.classList.add('changeRed');

inputEmail.parentElement.appendChild(emailError);
inputPassword.parentElement.appendChild(passwordError);
inputNickname.parentElement.appendChild(nicknameError);

function emailEr() { 
  if(inputEmail.value === '') { 
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
  } else if (inputPassword.value.length < 8) { 
    passwordError.innerText = '비밀번호를 8자 이상 입력해주세요.';
  } else { 
    passwordError.innerText = '';
  }
}

function nicknameEr() { 
  if(inputNickname.value === '') { 
    inputNickname.classList.add('errorBorder');
    nicknameError.innerText = '닉네임을 입력해주세요.';
  } else { 
    nicknameError.innerText = '';
  }
}

function buttonEvent () { 
  if(inputEmail.value === '' || inputPassword.value === ''|| emailError.innerText !== '' || passwordError.innerText !== '') { 
    loginButton.disabled = true;
  } else { 
    loginButton.disabled = false;
  }
}

inputEmail.addEventListener('focusout', emailEr);
inputPassword.addEventListener('focusout', passwordEr);
inputNickname.addEventListener('focusout', nicknameEr);
loginButton.addEventListener('mouseenter', buttonEvent);