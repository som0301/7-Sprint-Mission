const visibleButton = document.querySelector('.btn-v');
const ID = document.querySelector('#id-box');
const PW = document.querySelector('#pw-box');
const loginButton = document.querySelector('#login-btn');
const emailCheck = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;

function visibleSwitch() {
   if (PW.type === 'password') {
      visibleButton.src = '/img/btn_visible.svg';
      PW.type = 'text';
   } else {
      visibleButton.src = '/img/btn_unvisible.svg';
      PW.type = 'password';
   }
}
visibleButton.addEventListener('click', visibleSwitch);

function checkID() {
   const idErrContent = document.querySelector('.id-err-content');

   if (ID.value.length === 0) {
      idErrContent.textContent = '이메일을 입력해주세요';
      ID.classList.add('input-err');
   } else if (ID.value.match(emailCheck) !== null) {
      idErrContent.textContent = '';
      ID.classList.remove('input-err');
   } else {
      idErrContent.textContent = '잘못된 이메일 형식입니다';
      ID.classList.add('input-err');
   }
   checkLoginInfo();
}
ID.addEventListener('blur', checkID);

function checkPW() {
   const pwErrContent = document.querySelector('.pw-err-content');
   // console.log(pwErrContent)
   // console.log(PW.value)
   if (PW.value.length >= 8) {
      pwErrContent.textContent = '';
      PW.classList.remove('input-err');
   } else if (PW.value.length > 0) {
      pwErrContent.textContent = '비밀번호를 8자 이상 입력해주세요';
      PW.classList.add('input-err');
   } else {
      pwErrContent.textContent = '비밀번호를 입력해주세요';
      PW.classList.add('input-err');
   }
   checkLoginInfo();
}
PW.addEventListener('blur', checkPW);

function checkLoginInfo() {
   if (ID.value.match(emailCheck) !== null && PW.value.length >= 8) {
      loginButton.disabled = false;
      loginButton.classList.remove('btn-disable-color');
      loginButton.classList.add('btn-able-color');
   } else {
      loginButton.disabled = true;
      loginButton.classList.remove('btn-able-color');
      loginButton.classList.add('btn-disable-color');
   }
}
