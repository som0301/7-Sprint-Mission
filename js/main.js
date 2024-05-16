import * as validators from './validators.js';
import * as errorHandler from './error-handler.js';

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.login__form');

    form.addEventListener('focusout', (e) => {
        console.log(e);
        const target = e.target;
        if (target.tagName === 'INPUT') {
            const errorElement = errorHandler.createErrorElement(target);
            const errorMessage = validators.validateInput(target.value, target.name);
            if (errorMessage) {
                errorHandler.showError(target, errorElement, errorMessage);
            } else {
                errorHandler.hideError(target, errorElement);
            }
        }
    });
});
