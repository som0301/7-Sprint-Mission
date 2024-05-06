import { submitButton } from './tags.js';

/**
 * form 유효성 검사
 */
const checkInputs = ({ target, currentTarget }) => {
	if (target.tagName === 'INPUT') {
		/** 버튼의 name 속성으로 로그인, 회원가입 페이지 확인 */
		const { name: type } = submitButton;
		/** input의 name 속성 */
		const { name } = target;

		/** 로그인 페이지 유효성 검사 */
		if (type === 'login') {
			switch (name) {
				case 'email':
					/** 이메일 */
					break;
				case 'password':
					/** 비밀번호 */
					break;
			}
		} else if (type === 'sign') {
			/** 회원가입 페이지 유효성 검사 */
			switch (name) {
				case 'email':
					/** 이메일 */
					break;
				case 'nickname':
					/** 닉네임 */
					break;
				case 'password':
					/** 비밀번호 */
					break;
				case 'password_check':
					/** 비밀번호 확인 */
					break;
			}
		}

		/** form 의 input 들의 value 값이 하나라도 undefined 거나 빈값이면 disabled 활성화 */
		const checkEmpty = [...currentTarget.querySelectorAll('input')].some((input) => input.value === undefined || input.value === '');
		submitButton.disabled = checkEmpty;
	}
};

export default checkInputs;
