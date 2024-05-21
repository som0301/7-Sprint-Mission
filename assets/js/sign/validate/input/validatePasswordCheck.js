const ERROR_MASSAGES = {
	notEqual: '비밀번호가 일치하지 않습니다.',
};

/** 비밀번호 확인 유효성 검사 */
export default function validatePasswordCheck({ value, form }) {
	const password = form.querySelector(`input[name='password']`);
	if (value !== password.value) return ['error', ERROR_MASSAGES.notEqual];
	else return ['', ''];
}
