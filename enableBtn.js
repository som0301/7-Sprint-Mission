const form = document.querySelector('.main-form');
const button = document.querySelector('.main-form button');

function checkFormFilled(){
  const inputs = [...form].filter(item => item.nodeName === 'INPUT');
  if(inputs.every(item => item.value)){
    enableBtn();
  }
}

function enableBtn(){
  button.disabled = false;
}

form.addEventListener('change', checkFormFilled);