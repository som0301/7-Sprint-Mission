/** 
 * @function validateEmail
 * @description 문자열이 email 타입의 문자열인지 정규식을 이용해 유효성 검사를 한다.
 * @param {String} emailText 검사 대상이 될 문자열
 * @returns {Boolean} 유효성을 통과하면 true, 아니면 false를 반환
 */

function validateEmail(emailText){
  let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  if (reg.test(emailText) == false) {
      return false;
  }
  return true;
}


export { validateEmail };
