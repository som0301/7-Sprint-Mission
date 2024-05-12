const userEmail = document.querySelector('#email');
const userPwd = document.querySelector('#password');
const loginBtn = document.querySelector('.btn-login');

function loginCheckInput(){
    const emailCheck = userEmail.value;
    const passwordCheck = userPwd.value;

    if((emailCheck === '') || (passwordCheck === '')){
        loginBtn.disabled = true;
    } else {
        loginBtn.disabled = false;
    }
}

const userInputs = [ userEmail, userPwd ];
userInputs.forEach((input) => input.addEventListener('input', loginCheckInput));