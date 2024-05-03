const button = document.querySelector('.main-form button');

function enableBtn() {
  button.disabled = false;
}

function disableBtn() {
  button.disabled = true;
}

export { enableBtn, disableBtn };
