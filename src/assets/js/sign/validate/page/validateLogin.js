import validateEmail from '../input/validateEmail.js';
import validatePassword from '../input/validatePassword.js';

/** 로그인 페이지 유효성 검사 */
export default function valitateLogin(obj) {
	switch (obj.name) {
		/** 이메일 */
		case 'email':
			return validateEmail(obj);
		/** 비밀번호 */
		case 'password':
			return validatePassword(obj);
		default:
			return [null, null];
	}
}
