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

function pwCheckIcon() {
  const checkIcon = document.getElementById("pwCheckIcon");
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

function buttonCheck() {
  const idText = document.getElementById("ID");
  const pwText = document.getElementById("PW");
  const loginButton = document.getElementById("loginButton");
  const loginLink = document.getElementById("loginLink");
  const emaillNoneError = document.getElementById("emailNoneError");
  const emaillSetError = document.getElementById("emailSetError");
  const pwNoneError = document.getElementById("pwNoneError");
  const pwLengthError = document.getElementById("pwLengthError");

  const emaillNE = getComputedStyle(emaillNoneError).display === 'none';
  const emaillSE = getComputedStyle(emaillSetError).display === 'none';
  const pwNE = getComputedStyle(pwNoneError).display === 'none';
  const pwLE = getComputedStyle(pwLengthError).display === 'none';

  if(emaillNE && emaillSE && pwNE && pwLE && idText.value !== "" && pwText.value !== "") {
      loginLink.classList.remove('disabled');
      loginButton.disabled = false;
      loginButton.style.backgroundColor = "#3692ff";
     }
  else {
    loginButton.disabled = true;
    loginLink.classList.add('disabled');
    loginButton.style.backgroundColor = "#9ca3af";
  }
}

inputIdFocusoutEvent();
inputPwFocusoutEvent();
pwCheckIcon();