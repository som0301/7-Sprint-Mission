export function redirectPage(currentUrl) {
    let nextUrl = '';
    if (currentUrl.includes('login')) {
        nextUrl = '/items';
    } else if (currentUrl.includes('signup')) {
        nextUrl = '/signup';
    }
    return nextUrl;
}

export function toggleVisibility(target) {
    const passwordInput = target.parentElement.querySelector('input');
    if (passwordInput.type === 'password') {
        console.log(passwordInput);
        passwordInput.type = 'text';
        return target.classList.add('show');
    }
    if (passwordInput.type === 'text') {
        console.log(passwordInput);
        passwordInput.type = 'password';
        return target.classList.remove('show');
    }
}
