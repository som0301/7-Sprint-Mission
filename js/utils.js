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
    const passwordInput = target.previousElementSibling;
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        target.classList.add('show');
    } else {
        passwordInput.type = 'password';
        target.classList.remove('show');
    }
}
