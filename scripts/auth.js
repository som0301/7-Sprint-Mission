const emailInput = document.querySelector("#email");
const pwInput = document.querySelector("#password");
const nickNameInput = document.querySelector("#nickname")
const passwordConfirmInput = document.querySelector("#passwordConfirm")
const loginBtn = document.querySelector("#login-btn")
const signUpBtn = document.querySelector("#signup-btn")
const visivilityIcon = document.querySelector(".ic-visivility")

// const ValidationInputs = {
//   emailInput :{
//     condition1 : !e.target.value,
//     errmessage1 : "이메일을 입력해주세요",
//     condition2 : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value),
//     errmessage2 : "잘못된 이메일 형식입니다.",
//     validationStatusKey : "email"
//   }
// }


// 유효성검사 객체
const ValidationStatus = {
  email : false,
  nickname :false,
  pw : false,
  confirmPw : false
}


// 유효성 검사 함수
function checkValidity(e, condition1,errmessage1,condition2,errmessage2,validationStatusKey){
  const inputContainer = e.target.closest('.input-container')
  let errDiv = inputContainer.querySelector(".err-message");
  if(!errDiv){
    errDiv = document.createElement("div");
    errDiv.classList.add("err-message");
    inputContainer.appendChild(errDiv)
  }
  if(condition1){
    e.target.classList.add("outline-red");
    errDiv.innerText = `${errmessage1}`
    errDiv.style.display = "block"
    ValidationStatus[validationStatusKey] = false;
  }else if(condition2) {
    e.target.classList.add("outline-red");
    errDiv.innerText = `${errmessage2}`
    errDiv.style.display = "block"
    ValidationStatus[validationStatusKey] = false;
  }
  else{
    e.target.classList.remove("outline-red");
    errDiv.style.display = "none"
    ValidationStatus[validationStatusKey] = true;
  };
  updateButtonState(ValidationStatus)
}

// 버튼 상태 업데이트 함수
function updateButtonState({email, nickname, pw, confirmPw}) {
  if(signUpBtn){
    if(email && pw && nickname && confirmPw){
      signUpBtn.removeAttribute('disabled');
      signUpBtn.classList.add("btn-abled");
    }else {
      signUpBtn.setAttribute('disabled', 'true');
      signUpBtn.classList.remove("btn-abled");
    }
  }else {
    if(email && pw){
      loginBtn.removeAttribute('disabled');
      loginBtn.classList.add("btn-abled");
    }else {
      loginBtn.setAttribute('disabled', 'true');
      loginBtn.classList.remove("btn-abled");
    }
  }
}

//네비게이션 함수
function navigate(path) {
  window.location.href = path;
}


// 유효성검사 함수호출
emailInput.addEventListener("focusout", (e) => {
  checkValidity(e, 
    !e.target.value, "이메일을 입력해주세요", 
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value), "잘못된 이메일 형식입니다.", 
    'email')
});

// emailInput.addEventListener("focusout", (e) =>{
//   const {condition1, errmessage1, condition2, errmessage2,validationStatusKey} = ValidationInputs.emailInput
//   checkValidity(e, condition1,errmessage1,condition2,errmessage2,validationStatusKey)
// })

if(nickNameInput){
  nickNameInput.addEventListener("focusout", (e) =>{
    checkValidity(e, 
      !e.target.value, "닉네임을 입력해주세요",
      null, null,
      "nickname"
    )
  })
}
pwInput.addEventListener("focusout", (e) => {
  checkValidity(e,
    !e.target.value, "비밀번호를 입력해주세요.",
    e.target.value.length < 8, "비밀번호를 8자 이상 입력해주세요.",
    'pw')
});
if(passwordConfirmInput){
  passwordConfirmInput.addEventListener("focusout", (e) =>{
    checkValidity(e,
      e.target.value != pwInput.value, "비밀번호가 일치하지 않습니다.",
      null, null,
      "confirmPw"
    )
  })
}

// 버튼 클릭 네비게이션함수 호출
if(loginBtn){
  loginBtn.addEventListener("click", () =>{
    navigate("/item")
  })  
}else{
  signUpBtn.addEventListener("click", () =>{
    navigate("/login")
  })
}

// 비밀번호 숨김 토글
visivilityIcon.addEventListener("click", () =>{
  if(pwInput.type == "password"){
    pwInput.type = "text"
    visivilityIcon.src = "/images/ic_visibility.png"
  }else {
    pwInput.type = "password"
    visivilityIcon.src = "/images/ic_nonvisibility.png"
  }
})