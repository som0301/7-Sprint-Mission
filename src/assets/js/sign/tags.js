const userForm = () => document.querySelector('.login__body form');
const submitButton = () => document.querySelector('button[name="login"]') || document.querySelector('button[name="sign"]');
const visibilityButtons = () => document.querySelectorAll('.btn-visibility');

export { userForm, submitButton, visibilityButtons };
