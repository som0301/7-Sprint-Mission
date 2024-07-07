import * as validationMsg from './modules/validationMsg';
import { InputType, attatchInputWarnMsg } from './modules/warningManager';
import applyVisibilityToggle from './modules/pwVisibility';
import registerFormCheck from './modules/formChecking';

export function initialize() {
  const emailInput = document.querySelector('#email') as HTMLInputElement;
  const nicknameInput = document.querySelector('#nickname') as HTMLInputElement;
  const pwInput = document.querySelector('#password') as HTMLInputElement;
  const pwCheckInput = document.querySelector(
    '#password-check'
  ) as HTMLInputElement;
  const pWvisibilityIcon = document.querySelector(
    '.visibility-icon.pw'
  ) as HTMLImageElement;
  const pwCheckvisibilityIcon = document.querySelector(
    '.visibility-icon.pwcheck'
  ) as HTMLImageElement;
  const signupForm = document.querySelector('#signup-form') as HTMLFormElement;

  // 경고 메세지 출력 기능
  attatchInputWarnMsg(emailInput, InputType.EMAIL, 'focusout');
  attatchInputWarnMsg(nicknameInput, InputType.NICKNAME, 'focusout');
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

  if (pwCheckInput.parentElement) {
    attatchInputWarnMsg(
      pwCheckInput,
      InputType.PW_CHECK,
      'focusout',
      pwCheckInput.parentElement!,
      () => pwInput.value === pwCheckInput.value
    );
  } else {
    throw new Error('pwCheckInput.parentElement이 null입니다.');
  }

  // 비밀번호 Input 비밀번호 보이기/끄기 기능
  applyVisibilityToggle(pwInput, pWvisibilityIcon);
  applyVisibilityToggle(pwCheckInput, pwCheckvisibilityIcon);

  // 폼 체크해서 submit 버튼 활성화 기능
  registerFormCheck(signupForm, () => {
    return (
      emailInput.value !== '' &&
      nicknameInput.value !== '' &&
      pwInput.value !== '' &&
      pwCheckInput.value !== '' &&
      validationMsg.getEmailValidateMsg(emailInput.value) === '' &&
      validationMsg.getNicknameValidateMsg(nicknameInput.value) === '' &&
      validationMsg.getPwValidateMsg(pwInput.value) === '' &&
      validationMsg.getPwCheckValidateMsg(pwCheckInput.value) === '' &&
      pwInput.value === pwCheckInput.value
    );
  });
}
