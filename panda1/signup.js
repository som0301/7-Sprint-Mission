const visibleButton = document.querySelectorAll('.btn-v');
const ID = document.querySelector('#id-box');
const NICK = document.querySelector('#nick-box');
const PW = document.querySelector('#pw-box');
const PWDC = document.querySelector('#pwdc-box');
const signupButton = document.querySelector('#signup-btn');
const emailCheck = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;

function visibleSwitchPW() {
   if (PW.type === 'password') {
      visibleButton[0].src = '/img/btn_visible.svg';
      PW.type = 'text';
   } else {
      visibleButton[0].src = '/img/btn_unvisible.svg';
      PW.type = 'password';
   }
}
function visibleSwitchPWDC() {
   if (PWDC.type === 'password') {
      visibleButton[1].src = '/img/btn_visible.svg';
      PWDC.type = 'text';
   } else {
      visibleButton[1].src = '/img/btn_unvisible.svg';
      PWDC.type = 'password';
   }
}
visibleButton[0].addEventListener('click', visibleSwitchPW);
visibleButton[1].addEventListener('click', visibleSwitchPWDC);

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
   checkSignupInfo();
}
ID.addEventListener('blur', checkID);

function checkNICK() {
   const nickErrContent = document.querySelector('.nick-err-content');

   if (NICK.value.length === 0) {
      nickErrContent.textContent = '닉네임을 입력해주세요';
      NICK.classList.add('input-err');
   } else {
      nickErrContent.textContent = '';
      NICK.classList.remove('input-err');
   }
   checkSignupInfo();
}
NICK.addEventListener('blur', checkNICK);

function checkPW() {
   const pwErrContent = document.querySelector('.pw-err-content');
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
   checkSignupInfo();
}
PW.addEventListener('blur', checkPW);

function checkPWDC() {
   const pwdcErrContent = document.querySelector('.pwdc-err-content');
   if (PW.value === PWDC.value) {
      pwdcErrContent.textContent = '';
      PWDC.classList.remove('input-err');
   } else {
      pwdcErrContent.textContent = '비밀번호가 일치하지 않습니다';
      PWDC.classList.add('input-err');
   }
   checkSignupInfo();
}
PWDC.addEventListener('blur', checkPWDC);

function checkSignupInfo() {
   if (ID.value.match(emailCheck) !== null && PW.value.length >= 8 && PW.value === PWDC.value && NICK.value.length !== 0) {
      signupButton.disabled = false;
      signupButton.classList.remove('btn-disable-color');
      signupButton.classList.add('btn-able-color');
   } else {
      signupButton.disabled = true;
      signupButton.classList.remove('btn-able-color');
      signupButton.classList.add('btn-disable-color');
   }
}
