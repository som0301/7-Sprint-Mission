const nicknameInput = document.querySelector(".nickname_input");
const emptyNickname = document.querySelector(".empty_nickname");

function emptyNValue(e) {
  if (e.target.value.length == 0) {
    nicknameInput.classList.add("error_value");
    emptyNickname.classList.remove("hide");
    e.stopImmediatePropagation();
  } else {
    nicknameInput.classList.remove("error_value");
    emptyNickname.classList.add("hide");
  }
}

export { nicknameInput, emptyNickname, emptyNValue };

// 모듈 import 과정이 잘 안돼서 일단 보류
