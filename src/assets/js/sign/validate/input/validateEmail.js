const ERROR_MASSAGES = {
	empty: '이메일을 입력해주세요.',
	invalidFormat: '잘못된 이메일 형식입니다.',
};

// eslint-disable-next-line
const EMAIL_PATTERN = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+$/;

/** 이메일 유효성 검사 */
export default function validateEmail({ empty, value }) {
	if (empty) return ['error', ERROR_MASSAGES.empty];
	else if (!EMAIL_PATTERN.test(value)) return ['error', ERROR_MASSAGES.invalidFormat];
	else return [null, null];
}
