import warningObj from './inputWarning';
import * as validationMsg from './validationMsg';

/**
 * @readonly
 * @enum {InputType}
 */

enum InputType {
  EMAIL = 'email',
  PW = 'pw',
  PW_CHECK = 'pw-check',
  NICKNAME = 'nickname',
}

/**
 * @function attatchInputWarnMsg
 * @description input 요소에 상태에 따른 경고 메세지가 출력되는 기능을 부착한다.
 * @param {HTMLInputElement} input 경고 메세지 출력기능이 부착될 input 요소
 * @param {InputType} inputType input 요소의 inputType
 * @param {String} eventName 문자열로 표기된 이벤트 종류
 * @param {HTMLElement} position 경고 메세지 태그 요소가 추가될 위치(이 요소 의 바로 다음 형제요소로 추가된다.)
 * @param {Function} checkFunc 유효성 검사에 추가 로직이 필요한 경우 사용되는 함수
 */

function attatchInputWarnMsg(
  input: HTMLInputElement,
  inputType: InputType,
  eventName: string,
  position: HTMLElement | null = null,
  checkFunc: (() => boolean) | null = null
) {
  let getvalidateMsg = null;
  switch (inputType) {
    case InputType.EMAIL:
      getvalidateMsg = validationMsg.getEmailValidateMsg;
      break;
    case InputType.PW:
      getvalidateMsg = validationMsg.getPwValidateMsg;
      break;
    case InputType.PW_CHECK:
      getvalidateMsg = validationMsg.getPwCheckValidateMsg;
      break;
    case InputType.NICKNAME:
      getvalidateMsg = validationMsg.getNicknameValidateMsg;
      break;
    default:
      throw new Error('InputType이 잘못 되었습니다.');
  }

  const inputWarningObj = warningObj(input, position);

  input.addEventListener(eventName, (event) => {
    const target = event.target as HTMLInputElement | null;

    if (target) {
      const warningText = getvalidateMsg(target.value, checkFunc);
      if (warningText !== '') {
        inputWarningObj.onWarning(warningText);
      } else {
        inputWarningObj.offWarning();
      }
    } else {
      throw new Error('event.target은 null입니다.');
    }
  });
}

export { InputType, attatchInputWarnMsg };
