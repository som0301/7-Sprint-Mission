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
    errorElement.textContent = errorMessage;
}

export function hideError(inputElement, errorElement) {
    errorElement.textContent = '';
}
