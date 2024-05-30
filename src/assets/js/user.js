import { userForm, visibilityButtons } from './sign/tags.js';
import toggleInputVisibility from './sign/visibility.js';
import validateForm from './sign/validate/validate.js';

export default function setUserFormFunc() {
	visibilityButtons()?.forEach((button) => {
		button.addEventListener('click', toggleInputVisibility);
	});

	userForm()?.addEventListener('focusout', validateForm);
}
