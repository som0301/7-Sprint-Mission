
import { togglePasswordBtns } from './constants.js';

// 비밀번호 버튼 눌렀을 때 발생 이벤트 핸들
export function handlePasswordVisibilityToggle(e) {

    const onImage = e.target.parentElement.querySelector(".visibility-on");
    const offImage = e.target.parentElement.querySelector(".visibility-off");

    const inputPassword = e.currentTarget.parentElement.querySelector(".password-event");

    // 비밀번호 버튼 이미지들 보이고 안보이게
    onImage.classList.toggle("visible-maker");
    offImage.classList.toggle("hidden-maker");

    // 비밀번호 글자 보이기/안보이기 설정
    inputPassword.type = onImage.classList.contains("visible-maker") ? "text" : "password";
}

