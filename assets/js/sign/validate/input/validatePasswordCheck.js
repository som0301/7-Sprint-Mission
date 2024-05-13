/** 비밀번호 확인 유효성 검사 */
export default function validatePasswordCheck({ value, form }) {
	const password = form.querySelector(`input[name='password']`);
	if (value !== password.value) return ['error', '비밀번호가 일치하지 않습니다.'];
	else return ['', ''];
}
