import { userForm, visibilityButtons } from './sign/tags.js';
import toggleInputVisibility from './sign/visibility.js';
import checkInputs from './sign/validate.js';

visibilityButtons.forEach((button) => {
	button.addEventListener('click', toggleInputVisibility);
});

userForm.addEventListener('focusout', checkInputs);
