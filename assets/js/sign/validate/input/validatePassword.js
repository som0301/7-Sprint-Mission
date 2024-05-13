/** 비밀번호 유효성 검사 */
export default function validatePassword({ empty, value }) {
	if (empty) return ['error', '비밀번호를 입력해주세요.'];
	else if (value.length < 8) return ['error', '비밀번호를 8자 이상 입력해주세요.'];
	else return ['', ''];
}
