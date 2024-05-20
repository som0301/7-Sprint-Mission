const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const nickNameInput = document.querySelector("#nickname");
const passwordConfirmInput = document.querySelector("#passwordConfirm");
const loginBtn = document.querySelector("#login-btn");
const signUpBtn = document.querySelector("#signup-btn");
const visivilityIcon = document.querySelector(".ic-visivility");

// Input 객체
const ValidationInputs = {
  emailInput:{
    condition1: (value) => !value,
    errMessage1: "이메일을 입력해주세요",
    condition2: (value) => !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
    errMessage2: "잘못된 이메일 형식입니다.",
    validationStatusKey : "email"
  },
  passwordInput:{
    condition1: (value) => !value,
    errMessage1: "비밀번호를 입력해주세요",
    condition2: (value) => value.length < 8,
    errMessage2: "비밀번호를 8자 이상 입력해주세요",
    validationStatusKey : "password"
  },
  nickNameInput:{
    condition1: (value) => !value,
    errMessage1: "닉네임을 입력해주세요",
    condition2: (value) => null,
    errMessage2: null,
    validationStatusKey: "nickname"
  },
  passwordConfirmInput:{
    condition1: (value) => !value,
    errMessage1: "비밀번호확인을 입력해주세요",
    condition2: (value) => value != passwordInput.value,
    errMessage2: "비밀번호가 일치하지 않습니다.",
    validationStatusKey: "confirmPassword"
  }
};


// 유효성검사 객체
const ValidationStatus = {
  email : false,
  nickname :false,
  password : false,
  confirmPassword : false
};


// 유효성 검사 함수
function checkValidity(e, condition1,errMessage1,condition2,errMessage2,validationStatusKey){
  const inputContainer = e.target.closest('.input-container')
  let errDiv = inputContainer.querySelector(".err-message");
  if(!errDiv){
    errDiv = document.createElement("div");
    errDiv.classList.add("err-message");
    inputContainer.appendChild(errDiv);
  }
  if(condition1){
    e.target.classList.add("outline-red");
    errDiv.innerText = `${errMessage1}`
    errDiv.style.display = "block";
    ValidationStatus[validationStatusKey] = false;
  }else if(condition2) {
    e.target.classList.add("outline-red");
    errDiv.innerText = `${errMessage2}`
    errDiv.style.display = "block";
    ValidationStatus[validationStatusKey] = false;
  }
  else{
    e.target.classList.remove("outline-red");
    errDiv.style.display = "none";
    ValidationStatus[validationStatusKey] = true;
  };
  updateButtonState(ValidationStatus);
}

// 유효성 검사함수 핸들러
function handleCheckValidity(e, input) {
  const {condition1, errMessage1, condition2, errMessage2,validationStatusKey} = ValidationInputs[input];
  const value = e.target.value;
  checkValidity(e, condition1(value),errMessage1,condition2(value),errMessage2,validationStatusKey);
};

// 버튼 상태 업데이트 함수
function updateButtonState({email, nickname, password, confirmPassword}) {
  if(signUpBtn){
    if(email && password && nickname && confirmPassword){
      signUpBtn.removeAttribute('disabled');
      signUpBtn.classList.add("btn-abled");
    }else {
      signUpBtn.setAttribute('disabled', 'true');
      signUpBtn.classList.remove("btn-abled");
    }
  }else {
    if(email && password){
      loginBtn.removeAttribute('disabled');
      loginBtn.classList.add("btn-abled");
    }else {
      loginBtn.setAttribute('disabled', 'true');
      loginBtn.classList.remove("btn-abled");
    };
  };
};

//네비게이션 함수
function navigate(path) {
  window.location.href = path;
};

// 유효성검사 이벤트리스너
emailInput.addEventListener("focusout", (e) => {
  handleCheckValidity(e, "emailInput");
});

passwordInput.addEventListener("focusout", (e) =>{
  handleCheckValidity(e, "passwordInput");
});

if(nickNameInput){
  nickNameInput.addEventListener("focusout", (e) =>{
    handleCheckValidity(e, "nickNameInput");
  });
}

if(passwordConfirmInput) {
  passwordConfirmInput.addEventListener("focusout", (e) =>{
    handleCheckValidity(e, "passwordConfirmInput");
  });
}


// 버튼 클릭 이벤트리스너
if(loginBtn){
  loginBtn.addEventListener("click", () =>{
    navigate("/item");
  });
}else{
  signUpBtn.addEventListener("click", () =>{
    navigate("/login");
  });
};

// 비밀번호 숨김 토글 이벤트리스너
visivilityIcon.addEventListener("click", () =>{
  if(passwordInput.type == "password"){
    passwordInput.type = "text";
    visivilityIcon.src = "/images/ic_visibility.png";
  }else {
    passwordInput.type = "password";
    visivilityIcon.src = "/images/ic_nonvisibility.png";
  };
});