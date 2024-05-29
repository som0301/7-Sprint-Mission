import validateEmail from '../input/validateEmail.js';
import validateNickname from '../input/validateNickname.js';
import validatePassword from '../input/validatePassword.js';
import validatePasswordCheck from '../input/validatePasswordCheck.js';

/** 회원가입 페이지 유효성 검사 */
export default function valitateSign(obj) {
	switch (obj.name) {
		/** 이메일 */
		case 'email':
			return validateEmail(obj);
		/** 닉네임 */
		case 'nickname':
			return validateNickname(obj);
		/** 비밀번호 */
		case 'password':
			return validatePassword(obj);
		/** 비밀번호 확인 */
		case 'password_check':
			return validatePasswordCheck(obj);
		default:
			return [null, null];
	}
}
