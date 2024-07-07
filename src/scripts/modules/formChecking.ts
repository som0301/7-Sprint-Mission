/**
 * @function registerFormCheck
 * @description form의 모든 input 태그의 유효성을 검사해서 submit 버튼을 활성화시키는 기능을 form에 등록한다.
 * @param {HTMLFormElement} form 등록의 대상이 될 form 요소
 * @param {Function} isCompleteFormFunc 유효성 검사를 위한 함수. 유효성을 통과하면 true를, 아니면 false를 반환하는 형태여야 한다.
 */

function registerFormCheck(
  form: HTMLFormElement,
  isCompleteFormFunc: () => boolean
) {
  const inputs = form.querySelectorAll('input');
  const btn = form.querySelector('.submit');
  inputs.forEach((element) => {
    element.addEventListener('input', () => {
      if (isCompleteFormFunc()) {
        if (btn !== null) {
          btn.classList.remove('button-disabled');
          btn.removeAttribute('disabled');
        } else {
          throw new Error('btn은 null입니다.');
        }
      } else {
        if (btn !== null) {
          btn.classList.add('button-disabled');
          btn.setAttribute('disabled', '');
        } else {
          throw new Error('btn은 null입니다.');
        }
      }
    });
  });
}

export default registerFormCheck;
