export function createErrorTag(alert, target, tagName) {
  alert = document.createElement(tagName);
  alert.classList.add('error');
  target.parentElement.append(alert);
  target.classList.add('login-input-error');
  return alert;
}

export default createErrorTag