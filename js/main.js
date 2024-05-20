import * as validators from './validators.js';
import * as errorHandler from './error-handler.js';
import * as utils from './utils.js';

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.login__form');
    const submitButton = document.querySelector('.submit-btn');
    const errorMessages = document.querySelectorAll('.error__message');
    const toggleButtons = document.querySelectorAll('.visibility-btn');

    form.addEventListener('focusout', (e) => {
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
        errorHandler.setSubmitButtonState(submitButton, errorMessages);
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const currentUrl = window.location.href;
        const nextUrl = utils.redirectPage(currentUrl);
        window.location.href = nextUrl;
    });

    toggleButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
            utils.toggleVisibility(e.target);
        });
    });
});
