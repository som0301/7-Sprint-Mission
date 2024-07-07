/**
 * @function onWarning
 * @description 유효성 경고 메세지를 화면에 표시한다.
 * @param {string} text 출력될 유효성 경고 메세지 텍스트
 */

interface WarningObj {
  input: HTMLInputElement;
  msg: HTMLParagraphElement;
  onWarning: (text: string) => void;
  offWarning: () => void;
  isWarngState: () => void;
}

function onWarning(this: WarningObj, text: string) {
  this.msg.textContent = text;
  this.msg.style.display = 'block';
  this.input.classList.add('input-warnning');
}

/**
 * @function offWarning
 * @description 유효성 경고 메세지를 화면에서 사라지게 한다.
 */

function offWarning(this: WarningObj) {
  this.input.classList.remove('input-warnning');
  this.msg.style.display = 'none';
}

/**
 * @function isWarngState
 * @description 경고 메세지 출력 상태이면 true 반환, 아니면 flase 반환한다.
 * @returns {boolean}
 */

function isWarngState(this: WarningObj) {
  return this.msg.style.display !== 'none' ? true : false;
}

/**
 * @function createWarningObj
 * @description input 태그에 대한 유효성 경고 메세지를 관리하는 객체를 만들어 반환
 * @param {HTMLInputElement} input 경고 메세지가 적용될 input 태그 요소
 * @param {HTMLElement} position 경고 메세지 태그 요소가 추가될 위치(이 요소 의 바로 다음 형제요소로 추가된다.)
 * @returns {WarningObj} 생성된 inputWarning 객체
 */

function createWarningObj(
  input: HTMLInputElement,
  position: HTMLElement | null = null
) {
  const target = position ?? input;
  const warningMsg = document.createElement('p');

  warningMsg.style.color = 'red';
  warningMsg.style.textIndent = '10px';
  warningMsg.style.display = 'none';
  target.after(warningMsg);

  const warningObj: WarningObj = {
    input: input,
    msg: warningMsg,
    onWarning: onWarning,
    offWarning: offWarning,
    isWarngState: isWarngState,
  };

  return warningObj;
}

export default createWarningObj;
