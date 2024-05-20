function inputIdFocusoutEvent() {
  const inputText = document.getElementById("ID");
  const inputNoneError = document.getElementById("emailNoneError");
  const inputSetError = document.getElementById("emailSetError");
  let emaillText = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  
  inputText.addEventListener('focusout', (event) => {
    if(inputText.value === "") {
      inputNoneError.style.display = 'block';
      inputSetError.style.display = 'none';
      inputText.style.border = "1px solid";
      inputText.style.borderColor = "#f74747";
    }
    else if(inputText.value.match(emaillText) == null) {
      inputSetError.style.display = 'block';
      inputText.style.border = "1px solid";
      inputText.style.borderColor = "#f74747";
      inputNoneError.style.display = 'none';
    }
    else {
      inputSetError.style.display = 'none';
      inputNoneError.style.display = 'none';
      inputText.style.borderColor = "";
    }
    buttonCheck();
  });
}

function inputPwFocusoutEvent() {
  const inputText = document.getElementById("PW");
  const inputNoneError = document.getElementById("pwNoneError");
  const inputLengthError = document.getElementById("pwLengthError");
  inputText.addEventListener('focusout', (event) => {
    if(inputText.value === "") {
      inputNoneError.style.display = 'block';
      inputLengthError.style.display = 'none';
      inputText.style.border = "1px solid #f74747";
    }
    else if(inputText.value.length < 8) {
      inputLengthError.style.display = 'block';
      inputNoneError.style.display = 'none';
      inputText.style.border = "1px solid #f74747";
    }
    else {
      inputNoneError.style.display = 'none';
      inputLengthError.style.display = 'none';
      inputText.style.borderColor = "";
    }
    buttonCheck();
  });
} 

function inputNickFocusoutEvent() {
  const inputText = document.getElementById("NICK");
  const inputNoneError = document.getElementById("nicknoneError");
  inputText.addEventListener('focusout', (event) => {
    if(inputText.value === "") {
      inputNoneError.style.display = 'block';
      inputLengthError.style.display = 'none';
      inputText.style.border = "1px solid #f74747";
    }
    else {
      inputNoneError.style.display = 'none';
      inputLengthError.style.display = 'none';
      inputText.style.borderColor = "";
    }
    buttonCheck();
  });
}

function inputPwCheckFocusoutEvent() {
  const pwText = document.getElementById("PW");
  const inputText = document.getElementById("PWcheck");
  const inputNoneError = document.getElementById("pwCheckError");
  inputText.addEventListener('focusout', (event) => {
    if(inputText.value !== pwText.value) {
      inputNoneError.style.display = 'block';
      inputText.style.border = "1px solid #f74747";
    }
    else {
      inputNoneError.style.display = 'none';
      inputText.style.borderColor = "";
    }
    buttonCheck();
  });
}

function pwIcon() {
  const checkIcon = document.getElementById("pwIcon");
  const pwInput = document.getElementById("PW");
  checkIcon.addEventListener('click', (event) => {
    if(pwInput.type === "password") { 
      checkIcon.src = "images/home/btn-unvisibility_button.svg";
      pwInput.type = "text";
    }
    else {
      checkIcon.src = "images/home/btn_visibility_button.png";
      pwInput.type = "password";
    }
  });
}

function pwCheckIcon() {
  const checkIcon = document.getElementById("pwCheckIcon");
  const pwInput = document.getElementById("PWcheck");
  checkIcon.addEventListener('click', (event) => {
    if(pwInput.type === "password") { 
      checkIcon.src = "images/home/btn-unvisibility_button.svg";
      pwInput.type = "text";
    }
    else {
      checkIcon.src = "images/home/btn_visibility_button.png";
      pwInput.type = "password";
    }
  });
}

function buttonCheck() {
  const idText = document.getElementById("ID");
  const pwText = document.getElementById("PW");
  const signupButton = document.getElementById("signupButton");
  const signupLink = document.getElementById("signupLink");
  const nickText = document.getElementById("NICK");
  const nickNoneError = document.getElementById("nicknoneError");
  const emaillNoneError = document.getElementById("emailNoneError");
  const emaillSetError = document.getElementById("emailSetError");
  const pwNoneError = document.getElementById("pwNoneError");
  const pwLengthError = document.getElementById("pwLengthError");
  const pwCheckInput = document.getElementById("PWcheck");
  const pwCheckError = document.getElementById("pwCheckError");

  const emaillNE = getComputedStyle(emaillNoneError).display === 'none';
  const emaillSE = getComputedStyle(emaillSetError).display === 'none';
  const pwNE = getComputedStyle(pwNoneError).display === 'none';
  const pwLE = getComputedStyle(pwLengthError).display === 'none';
  const pwCNE = getComputedStyle(pwCheckError).display === 'none';
  const nickNE = getComputedStyle(nickNoneError).display === 'none';

  if(emaillNE && emaillSE && pwNE && pwLE && pwCNE && nickNE &&
     idText.value !== "" && pwText.value !== "" && nickText.value !== "" && pwCheckInput.value !== "") {
      signupLink.classList.remove('disabled');
      signupButton.disabled = false;
      signupButton.style.backgroundColor = "#3692ff";
     }
  else {
    signupButton.disabled = true;
    signupLink.classList.add('disabled');
    signupButton.style.backgroundColor = "#9ca3af";
  }
}

inputIdFocusoutEvent();
inputPwFocusoutEvent();
inputNickFocusoutEvent();
inputPwCheckFocusoutEvent();
pwIcon();
pwCheckIcon();