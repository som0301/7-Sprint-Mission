import { validateEmail } from './validationUtils';

/**
 * @function getEmailValidateMsg
 * @description email 타입의 input의 value 값에 따른 경고 메세지 반환
 * @param {String} inputValue input의 value
 * @returns {String} input의 현재 상태에 대한 경고 메세지 문자열
 */

function getEmailValidateMsg(inputValue: string) {
  if (inputValue === '') {
    return '이메일을 입력해주세요.';
  } else if (!validateEmail(inputValue)) {
    return '잘못된 이메일 형식입니다.';
  } else {
    return '';
  }
}

/**
 * @function getNicknameValidateMsg
 * @description nickname 타입의 input의 value 값에 따른 경고 메세지 반환
 * @param {String} inputValue input의 value
 * @returns {String} input의 현재 상태에 대한 경고 메세지 문자열
 */

function getNicknameValidateMsg(inputValue: string) {
  if (inputValue === '') {
    return '닉네임을 입력해주세요.';
  } else {
    return '';
  }
}

/**
 * @function getPwValidateMsg
 * @description password 타입의 input의 value 값에 따른 경고 메세지 반환
 * @param {String} inputValue input의 value
 * @returns {String} input의 현재 상태에 대한 경고 메세지 문자열
 */

function getPwValidateMsg(inputValue: string) {
  if (inputValue === '') {
    return '비밀번호를 입력해 주세요.';
  } else if (inputValue.length < 8) {
    return '비밀번호를 8자 이상 입력해주세요.';
  } else {
    return '';
  }
}

/**
 * @function getPwCheckValidateMsg
 * @description password check 타입의 input의 value 값에 따른 경고 메세지 반환
 * @param {String} inputValue input의 value
 * @param {Function} checkFunc 추가 로직이 필요한 경우 전달해서 사용할 함수
 * @returns {String} input의 현재 상태에 대한 경고 메세지 문자열
 */

function getPwCheckValidateMsg(
  inputValue: string,
  checkFunc: (() => boolean) | null = null
) {
  if (inputValue === '') {
    return '비밀번호를 입력해 주세요.';
  } else if (inputValue.length < 8) {
    return '비밀번호를 8자 이상 입력해주세요.';
  } else if (checkFunc !== null && !checkFunc()) {
    return '비밀번호가 일치하지 않습니다.';
  } else {
    return '';
  }
}

export {
  getEmailValidateMsg,
  getPwValidateMsg,
  getNicknameValidateMsg,
  getPwCheckValidateMsg,
};
