const seePwBtn = document.querySelector('.see-pw-btn');
const seePwBtnCheck = document.querySelector('.see-pw-btn-check');

function togglePw() {
  const pwInput = document.querySelector('#password');
  const seePwImg = document.querySelector('.see-pw-img');

  if (pwInput.type === 'password') {
    pwInput.type = 'text';
    seePwImg.style.backgroundImage = 'url(/images/ic_visible-pw.png)';
  } else {
    pwInput.type = 'password';
    seePwImg.style.backgroundImage = 'url(/images/ic_invisible-pw.png)'
  }
}

function togglePwCheck() {
  const pwInputCheck = document.querySelector('#password-check');
  const seePwImgCheck = document.querySelector('.see-pw-img-check');

  if (pwInputCheck.type === 'password') {
    pwInputCheck.type = 'text';
    seePwImgCheck.style.backgroundImage = 'url(/images/ic_visible-pw.png)';
  } else {
    pwInputCheck.type = 'password';
    seePwImgCheck.style.backgroundImage = 'url(/images/ic_invisible-pw.png)';
  }
}

seePwBtn.addEventListener('click', togglePw);
seePwBtnCheck.addEventListener('click', togglePwCheck);