const userEmail = document.querySelector('#email');
const userNickname = document.querySelector('#nickname');
const userPwd = document.querySelector('#password');
const userPwdRepeat = document.querySelector('#password-repeat');
const loginBtn = document.querySelector('.btn-login');

function joinCheckInput(){
    var emailCheck = userEmail.value;
    var nicknameCheck = userNickname.value;
    var passwordCheck = userPwd.value;
    var pwdRepeatCheck = userPwdRepeat.value;

    if((emailCheck === '') || (nicknameCheck === '') ||
        (passwordCheck === '') || (pwdRepeatCheck === '')){
        loginBtn.classList.remove('btn-login-on');
    } else {
        loginBtn.classList.add('btn-login-on');
    }
}

userEmail.addEventListener('input', joinCheckInput);
userPwd.addEventListener('input', joinCheckInput);
userNickname.addEventListener('input', joinCheckInput);
userPwdRepeat.addEventListener('input', joinCheckInput);

