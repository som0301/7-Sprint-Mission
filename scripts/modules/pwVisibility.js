const ON_VISIBLE_ICON_PATH = '/assets/icons/ic_visible_on.svg';
const OFF_VISIBLE_ICON_PATH = '/assets/icons/ic_visible_Off.svg';


/** 
 * @function applyVisibilityToggle
 * @description input 요소에 아이콘 클릭으로 비밀번호 보이기/감추기 기능을 적용시킨다.
 * @param {HTMLInputElement} input 비밀번호 가시성이 적용될 input 요소
 * @param {HTMLImageElement} icon 클릭 및 토글 기능이 적용될 img 요소
 */

function applyVisibilityToggle(input, icon) {
  icon.addEventListener('click', (event) => {
    if(input.getAttribute('type') === 'password') {
      // On visibility
      input.setAttribute('type', 'text');
      icon.setAttribute('src', ON_VISIBLE_ICON_PATH);
    } else if (input.getAttribute('type') === 'text') {
      // Off visibility
      input.setAttribute('type', 'password');
      icon.setAttribute('src', OFF_VISIBLE_ICON_PATH);
    }
  });
}


export default applyVisibilityToggle;
