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

function validateEmpty(value, fieldName) {
    let fieldNameText = '';
    if (fieldName === 'password' || fieldName === 'passwordrepeat') {
        fieldNameText = '비밀번호';

        return isEmpty(value) ? `${fieldNameText}를 입력해주세요.` : ``;
    } else if (fieldName === 'nickname') {
        fieldNameText = '닉네임';
    } else if (fieldName === 'email') {
        fieldNameText = '이메일';
    }

    return isEmpty(value) ? `${fieldNameText}을 입력해주세요.` : ``;
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
