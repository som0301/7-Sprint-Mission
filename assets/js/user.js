/**
 * 비밀번호 가시성 토글
 */
const visibilityButtons = document.querySelectorAll('.btn_visibility');
const toggleInputVisibility = (button) => {
	event.stopPropagation();

	const img = button.children[0];
	const input = [...button.parentNode.children].filter((c) => c.tagName === 'INPUT').pop();
	const status = input.type;

	switch (status) {
		case 'password':
			input.type = 'text';
			img.src = '/assets/images/icon/ic_visibility_on.svg';
			img.alt = '가시성 아이콘';
			break;
		case 'text':
			input.type = 'password';
			img.src = '/assets/images/icon/ic_visibility_off.svg';
			img.alt = '비가시성 아이콘';
			break;
	}
};
visibilityButtons.forEach((button) => {
	button.addEventListener('click', () => {
		toggleInputVisibility(button);
	});
});

/**
 * form이 다 채워졌는지 확인
 */
const formInputArray = document.querySelectorAll('.login__body form .input-box input');
const checkInputs = () => {
	document.querySelector('button.btn.btn_large').disabled = [...formInputArray].some((input) => input.value === undefined || input.value === '');
};
formInputArray.forEach((input) => {
	input.addEventListener('blur', checkInputs);
});
