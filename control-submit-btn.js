const form = document.querySelector('.main-form');
const inputList = document.querySelectorAll('.lebel_input');
const button = document.querySelector('.main-form button');

function checkFormFilled() {
  const inputs = [...inputList];
  const isFormFilled = inputs.every((item) => item.value);
  if (isFormFilled) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
}

form.addEventListener('change', checkFormFilled);
