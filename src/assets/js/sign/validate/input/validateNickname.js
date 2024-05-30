const ERROR_MASSAGES = {
	empty: '닉네임을 입력해주세요.',
};

/** 닉네임 유효성 검사 */
export default function validateNickname({ empty }) {
	if (empty) return ['error', ERROR_MASSAGES.empty];
	else return [null, null];
}
