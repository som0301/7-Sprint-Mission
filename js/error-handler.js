export function createErrorElement(inputElement) {
    let errorElement = inputElement.nextElementSibling;
    if (!errorElement || !errorElement.classList.contains('error__message')) {
        errorElement = document.createElement('span');
        errorElement.classList.add('error__message');
        inputElement.parentNode.insertBefore(errorElement, inputElement.nextSibling);
    }
    return errorElement;
}

export function showError(inputElement, errorElement, errorMessage) {
    inputElement.style.border = '1px solid #f74747';
    errorElement.textContent = errorMessage;
}

export function hideError(inputElement, errorElement) {
    inputElement.style.border = 'none';
    errorElement.parentNode.removeChild(errorElement);
}

export function setSubmitButtonState(submitButton, errorMessages) {
    let submitButtonState = true;
    errorMessages.forEach((errorMessage) => {
        submitButtonState = errorMessage.parentNode ? false : submitButtonState;
    });

    if (submitButtonState) {
        submitButton.classList.toggle('active', submitButtonState);
    }
}
