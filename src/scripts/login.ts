import { InputType, attatchInputWarnMsg } from './modules/warningManager';
import * as validationMsg from './modules/validationMsg';
import applyVisibilityToggle from './modules/pwVisibility';
import registerFormCheck from './modules/formChecking';

export function initialize() {
  const emailInput = document.querySelector('#email') as HTMLInputElement;
  const pwInput = document.querySelector('#password') as HTMLInputElement;
  const visibilityIcon = document.querySelector(
    '.visibility-icon'
  ) as HTMLImageElement;
  const loginForm = document.querySelector('#login-form') as HTMLFormElement;

  // 경고 메세지 출력 기능
  attatchInputWarnMsg(emailInput, InputType.EMAIL, 'focusout');
  if (pwInput.parentElement) {
    attatchInputWarnMsg(
      pwInput,
      InputType.PW,
      'focusout',
      pwInput.parentElement
    );
  } else {
    throw new Error('pwInput.parentElement이 null입니다.');
  }

  // 비밀번호 Input 비밀번호 보이기/끄기 기능
  applyVisibilityToggle(pwInput, visibilityIcon);

  // 폼 체크해서 submit 버튼 활성화 기능
  registerFormCheck(loginForm, () => {
    return (
      emailInput.value !== '' &&
      pwInput.value !== '' &&
      validationMsg.getEmailValidateMsg(emailInput.value) === '' &&
      validationMsg.getPwValidateMsg(pwInput.value) === ''
    );
  });
}
