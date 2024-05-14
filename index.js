// JavaScript 파일(index.js)에 아래 코드를 작성합니다.

// 이미지 요소를 가져옵니다.
const logoImage = document.getElementById("logoImage");

// 화면 크기에 따라 이미지를 변경하는 함수
function checkScreenSize() {
  // 화면의 너비를 가져옵니다.
  var screenWidth = window.innerWidth;

  // 화면 너비가 375px 이하이면 작은 로고 이미지로 변경합니다.
  if (screenWidth <= 767) {
    logoImage.src = 'image/logo/logo_mini.png';
  }
  // 그렇지 않으면 기존의 로고 이미지로 변경합니다.
  else {
    logoImage.src = 'image/logo/logo.png';
  }
}

// 페이지가 로드될 때와 창 크기가 변경될 때 checkScreenSize 함수를 실행합니다.
window.addEventListener('load', checkScreenSize);
window.addEventListener('resize', checkScreenSize);
