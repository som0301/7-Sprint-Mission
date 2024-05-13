import { submitButton } from '../tags.js';
import changeInputState from '../../changeInputState.js';
import valitateLogin from './page/validateLogin.js';
import valitateSign from './page/validateSign.js';

/** form 유효성 검사 */
export default function validateForm({ target, currentTarget: form }) {
	if (target.tagName === 'INPUT') {
		const { name: page } = submitButton; // 페이지 내 버튼의 name 속성으로 로그인, 회원가입 페이지 확인
		const { name, value } = target; // input의 name, value
		const empty = value === undefined || value === ''; // 값이 비었는지 확인

		/** 유효성 검사 */
		let result;
		if (page === 'login') result = valitateLogin({ name, empty, value });
		else if (page === 'sign') result = valitateSign({ name, empty, value, form });
		const [state, msg] = result;

		const errClsNm = 'error';
		changeInputState(target, state, msg, errClsNm);

		/** form 의 input 들의 value 값이 하나라도 undefined 거나 빈값이면 disabled 활성화 */
		const formState = [...form.querySelectorAll('input')].some(({ value, classList }) => value === undefined || value === '' || classList.contains(errClsNm));
		submitButton.disabled = formState;
	}
}
