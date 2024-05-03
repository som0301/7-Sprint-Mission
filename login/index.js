const seePwBtn = document.querySelector('.see-pw-btn');

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

seePwBtn.addEventListener('click', togglePw);