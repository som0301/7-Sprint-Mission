/** 닉네임 유효성 검사 */
export default function validateNickname({ empty }) {
	if (empty) return ['error', '닉네임을 입력해주세요.'];
	else return [null, null];
}
