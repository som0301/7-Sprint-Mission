const userEmail = document.querySelector('#email');
const userPwd = document.querySelector('#password');
const loginBtn = document.querySelector('.btn-login');

function loginCheckInput(){
    var emailCheck = userEmail.value;
    var passwordCheck = userPwd.value;

    if((emailCheck === '') || (passwordCheck === '')){
        loginBtn.classList.remove('btn-login-on');
    } else {
        loginBtn.classList.add('btn-login-on');
    }
}

userEmail.addEventListener('input', loginCheckInput);
userPwd.addEventListener('input', loginCheckInput);