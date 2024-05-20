const validator = {
    email: validateEmail,
    nickname: validateEmpty,
    password: validatePassword,
    passwordrepeat: validatePasswordRepeat,
};

export function validateInput(value, fieldName) {
    let validateFunction = validator[fieldName];
    return validateFunction(value, fieldName);
}

function isEmpty(value) {
    return value.trim() === '';
}

function isValidEmail(value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailRegex.test(value);
}

function getFieldNameText(fieldName) {
    switch (fieldName) {
        case 'password':
        case 'passwordrepeat':
            return '비밀번호';
        case 'nickname':
            return '닉네임';
        case 'email':
            return '이메일';
        default:
            return '필드';
    }
}

function validateEmpty(value, fieldName) {
    const fieldNameText = getFieldNameText(fieldName);
    return isEmpty(value) ? `${fieldNameText}을(를) 입력해주세요.` : ``;
}

function validateEmail(value, fieldName) {
    const checkEmpty = validateEmpty(value, fieldName);
    if (checkEmpty) {
        return checkEmpty;
    }

    if (!isValidEmail(value)) {
        return '잘못된 이메일 형식입니다.';
    }
}

function validatePassword(value, fieldName) {
    const checkEmpty = validateEmpty(value, fieldName);
    if (checkEmpty) {
        return checkEmpty;
    }

    if (value.length < 8) {
        return '비밀번호를 8자 이상 입력해주세요.';
    }
}

function validatePasswordRepeat(value, fieldName) {
    const password = document.getElementById('password').value.trim();
    const checkEmpty = validateEmpty(value, fieldName);
    if (checkEmpty) {
        return checkEmpty;
    }

    if (value !== password) {
        return '비밀번호가 일치하지 않습니다.';
    }
}
