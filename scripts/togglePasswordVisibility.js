// 비밀번호 가시성 토글 클릭시 발생 이벤트 핸들
export function handlePasswordVisibilityToggle(e) {
  const onImage = e.target.parentElement.querySelector(".visibility-on");
  const offImage = e.target.parentElement.querySelector(".visibility-off");

  const inputPassword =
    e.currentTarget.parentElement.querySelector(".password-event");

  // 시각적인 가시성을 토글
  toggleVisibility(onImage, offImage);

  // 비밀번호 가시성을 토글
  togglePasswordVisibility(inputPassword, onImage);
}

// 시각적인 가시성을 토글
function toggleVisibility(onImage, offImage) {
  onImage.classList.toggle("visible-maker");
  offImage.classList.toggle("hidden-maker");
}

// 비밀번호 가시성을 토글
function togglePasswordVisibility(inputPassword, onImage) {
  inputPassword.type = onImage.classList.contains("visible-maker")
    ? "text"
    : "password";
}
