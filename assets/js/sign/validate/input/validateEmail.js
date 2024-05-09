/** 이메일 유효성 검사 */
export default function validateEmail({ empty, value }) {
	const pattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
	if (empty) return ['error', '이메일을 입력해주세요.'];
	else if (!pattern.test(value)) return ['error', '잘못된 이메일 형식입니다.'];
	else return [null, null];
}
