const blindLogos = document.querySelectorAll('.password__blind-logo');

function showPassword({ target: blindLogo }) {
  blindLogo.classList.toggle('translucent');
  changeInputType(blindLogo.previousElementSibling);
}

function changeInputType(input) {
  input.type = input.type === 'password' ? 'text' : 'password';
}

[...blindLogos].forEach((item) => item.addEventListener('click', showPassword));
