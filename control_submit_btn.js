const form = document.querySelector('.main-form');
const button = document.querySelector('.main-form button');

function checkFormFilled(){
  const inputs = [...form].filter(item => item.nodeName === 'INPUT');
  if(inputs.every(item => item.value)){
    enableBtn();
  } else {
    disableBtn();
  }
}

function enableBtn(){
  button.disabled = false;
}

function disableBtn(){
  button.disabled = true;
}

form.addEventListener('change', checkFormFilled);