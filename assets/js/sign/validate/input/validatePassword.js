const ERROR_MASSAGES = {
	empty: '비밀번호를 입력해주세요.',
	invalidFormat: '비밀번호를 8자 이상 입력해주세요.',
};

/** 비밀번호 유효성 검사 */
export default function validatePassword({ empty, value }) {
	if (empty) return ['error', ERROR_MASSAGES.empty];
	else if (value.length < 8) return ['error', ERROR_MASSAGES.invalidFormat];
	else return ['', ''];
}
