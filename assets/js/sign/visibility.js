/**
 * 비밀번호 가시성 토글
 */
const toggleInputVisibility = ({ currentTarget }) => {
	const img = currentTarget.querySelector('img');
	const input = currentTarget.parentElement.querySelector('input[name^="password"]');
	const status = input.type;

	/** 가시성 토글 스위치 */
	switch (status) {
		case 'password':
			input.type = 'text';
			img.src = '/assets/images/icon/ic-visibility-on.svg';
			img.alt = '가시성 아이콘';
			break;
		case 'text':
			input.type = 'password';
			img.src = '/assets/images/icon/ic-visibility-off.svg';
			img.alt = '비가시성 아이콘';
			break;
	}
};

export default toggleInputVisibility;
