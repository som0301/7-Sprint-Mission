function isInputEmtpy(input) {
  const labelInput = input.previousElementSibling;

  if (input.value === '') {
    input.classList.add('error-input');
    if (input.type === 'password')
      input.parentElement.lastElementChild.textContent = labelInput.textContent + '를 입력해주세요.';
    else input.parentElement.lastElementChild.textContent = labelInput.textContent + '을 입력해주세요.';
    return true;
  }
  return false;
}

// 이메일 유효성
function emailCheck(email) {
  const email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
  return email_regex.test(email);
}

export function validEmail({ target }) {
  const errorMsgEmail = target.nextElementSibling;
  const email = target.value;

  if (!isInputEmtpy(target)) {
    if (emailCheck(email)) {
      errorMsgEmail.textContent = '';
      target.classList.remove('error-input');
    } else {
      errorMsgEmail.textContent = '잘못된 이메일 형식입니다.';
      target.classList.add('error-input');
    }
  }
}

// 닉네임 공백 체크
export function validNickname({ target }) {
  const errorMsgNickname = target.nextElementSibling;
  const nickname = target.value;

  if (!isInputEmtpy(target)) {
    errorMsgNickname.textContent = '';
    target.classList.remove('error-input');
  }
}

// 비밀번호 길이 체크
function passwordCheck(pwd) {
  return pwd.length >= 8;
}

export function validPwd({ target }) {
  const errorMsgPwd = target.parentElement.lastElementChild;
  const pwd = target.value;

  if (!isInputEmtpy(target)) {
    if (passwordCheck(pwd)) {
      errorMsgPwd.textContent = '';
      target.classList.remove('error-input');
    } else {
      errorMsgPwd.textContent = '비밀번호를 8자 이상 입력해주세요.';
      target.classList.add('error-input');
    }
  }
}

// 비밀번호 확인
function isMatch(pwd, rep) {
  return pwd === rep;
}

export function validRepeat({ target }) {
  const userPwd = target.parentElement.previousElementSibling.children[1];
  const userPwdRepeat = target;
  const errorMsgRepeat = userPwdRepeat.parentElement.lastElementChild;

  const pwd = userPwd.value;
  const rep = userPwdRepeat.value;

  if (isMatch(pwd, rep)) {
    errorMsgRepeat.textContent = '';
    userPwdRepeat.classList.remove('error-input');
  } else {
    errorMsgRepeat.textContent = '비밀번호가 일치하지 않습니다.';
    userPwdRepeat.classList.add('error-input');
  }
}

// 함수 하나로 버튼 활성화/비활성화 구현 성공!!
export function checkInput() {
  const elementInputs = document.querySelectorAll('.input-form input');
  const btn = document.querySelector('.btn-login');

  const inputs = [...elementInputs];

  let isEmpty = inputs.some(input => input.value === '');
  let isError = inputs.some(input => input.parentElement.lastElementChild.textContent !== '');

  btn.disabled = isError || isEmpty;
}

// 눈버튼 토글
export function passwordToggle({ target }) {
  // 이벤트 타겟은 visibility 아이콘
  const pwd = target.previousElementSibling; // 비밀번호 인풋
  if (pwd.getAttribute('type') === 'password') {
    pwd.setAttribute('type', 'text');
    pwd.nextElementSibling.src = '/images/eye-on.svg';
  } else {
    pwd.setAttribute('type', 'password');
    pwd.nextElementSibling.src = '/images/eye-off.svg';
  }
}
