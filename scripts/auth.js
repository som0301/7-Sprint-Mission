const emailInput = document.querySelector("#email");
const pwInput = document.querySelector("#password");

const isable = {
  email : false,
  pw : false,
}

function checkEmail(e) {
  const inputContainer = e.target.closest('.input-container')
  let errDiv = inputContainer.querySelector(".err-message");
  if(!errDiv){
    errDiv = document.createElement("div");
    errDiv.classList.add("err-message");
    inputContainer.appendChild(errDiv)
  }
  if(!e.target.value){
    e.target.classList.add("outline-red");
    errDiv.innerText = `이메일을 입력해주세요`
    errDiv.style.display = "block"
  }else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value)){
    e.target.classList.add("outline-red");
    errDiv.innerText = `잘못된 이메일 형식입니다.`
    errDiv.style.display = "block"
  }
  else{
    e.target.classList.remove("outline-red");
    errDiv.style.display = "none"
    isable.email = true;
  };
};

emailInput.addEventListener("focusout", (e) => {
  checkEmail(e)
});


function checkPw(e) {
  const inputContainer = e.target.closest('.input-container')
  let errDiv = inputContainer.querySelector(".err-message");
  if(!errDiv){
    errDiv = document.createElement("div");
    errDiv.classList.add("err-message");
    inputContainer.appendChild(errDiv)
  }
  if(!e.target.value){
    e.target.classList.add("outline-red");
    errDiv.innerText = `비밀번호를 입력해주세요.`
    errDiv.style.display = "block"
  }else if(e.target.value.length < 8){
    e.target.classList.add("outline-red");
    errDiv.innerText = `비밀번호를 8자 이상 입력해주세요.`
    errDiv.style.display = "block"
  }
  else{
    e.target.classList.remove("outline-red");
    errDiv.style.display = "none"
    isable.pw = true;
  };
};

pwInput.addEventListener("focusout", (e) => {
  checkPw(e)
});

