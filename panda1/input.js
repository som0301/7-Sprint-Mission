const ID = document.querySelector('#id-box');
const PW = document.querySelector('#pw-box');
function checkPW() {
   const errContent = document.querySelector('.err-content');
   const pwContent = PW.value;
   // console.log(errContent)
   // console.log(pwContent)
   if (pwContent.length >= 8) {
      errContent.textContent = '';
      PW.classList.remove('input-err');
   } else {
      errContent.textContent = '비밀번호를 8자 이상 입력해주세요';
      PW.classList.add('input-err');
   }
}
PW.addEventListener('blur', checkPW);
