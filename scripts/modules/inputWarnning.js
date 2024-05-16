/** 
 * @function onWarnning
 * @description 유효성 경고 메세지를 화면에 표시한다.
 * @param {string} text 출력될 유효성 경고 메세지 텍스트
 */

function onWarnning(text) {
  this.msg.textContent  = text;
  this.msg.style.display = 'block';
  this.input.classList.add('input-warnning');
}


/** 
 * @function offWarnning
 * @description 유효성 경고 메세지를 화면에서 사라지게 한다.
 */

function offWarnning() {
  this.input.classList.remove('input-warnning');
  this.msg.style.display = 'none';
}


/** 
 * @function createWarnningObj
 * @constructor 생성자
 * @description input 태그에 대한 유효성 경고 메세지를 관리하는 객체를 만들어 반환
 * @param {HTMLInputElement} input 경고 메세지가 적용될 input 태그 요소
 * @param {HTMLInputElement} createPos 경고 메세지 태그 요소가 추가될 위치(이 요소 바로 옆에 추가된다.)
 * @returns {Object} 생성된 inputWarnning 객체를 반환
 */

function createWarnningObj(input, createPos=null) {
  const target = createPos ?? input;
  const warnningMsg = document.createElement('p');
  warnningMsg.style.color = 'red';
  warnningMsg.style.textIndent = '10px';
  warnningMsg.style.display = 'none';
  target.after(warnningMsg);
  const warnningObj = {
    'input': input,
    'msg': warnningMsg,
    'onWarnning': onWarnning,
    'offWarnning': offWarnning,
  };
  return warnningObj;
}


export default createWarnningObj;
