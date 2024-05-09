


const togglePasswordBtns = document.querySelectorAll('.visibility-button');
const togglePasswordBtnOn = document.querySelectorAll('.visibility-on');


// 이메일 유효성 검사
// const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// 비밀번호 버튼 눌렀을 때 발생 이벤트 처리 콜백함수
function togglePasswordVisibility(e) {

    const onImage = e.target.parentElement.querySelector(".visibility.on");
    const offImage = e.target.parentElement.querySelector(".visibility.off");

    const inputPassword = e.currentTarget.parentElement.querySelector("#password");

    // 비밀번호 버튼 이미지들 보이고 안보이게
    onImage.classList.toggle("visible-maker");
    offImage.classList.toggle("hidden-maker");

    // 비밀번호 글자 보임
    if( onImage.classList.contains("visible-maker") ) {
        inputPassword.type = "text";

    }
    // 다시 비밀번호 글자 안보임
    else {
        inputPassword.type = "password";
    }
}

// 비밀번호 버튼 클릭 이벤트
togglePasswordBtns.forEach(button => {
    button.addEventListener('click', togglePasswordVisibility);
});

