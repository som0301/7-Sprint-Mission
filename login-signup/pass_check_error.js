const passCheckInput = document.querySelector(".password_check");
const notMatch = document.querySelector(".not_match");

function isMatch(e) {
  if (e.target.value !== passInput.value) {
    passCheckInput.classList.add("error_value");
    notMatch.classList.remove("hide");
  } else {
    passCheckInput.classList.remove("error_value");
    notMatch.classList.add("hide");
  }
}
